'use client'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'
import Papa from 'papaparse' // Make sure to install papaparse for CSV parsing
import React, { useEffect, useState } from 'react'

const { Dragger } = Upload

interface DragAndDropProps {
  name: string
  onChange: (file: File | null) => void
  initialPreview?: string // Optional prop for initial preview
}

const DragAndDropCSVPrintData: React.FC<DragAndDropProps> = ({ name, onChange, initialPreview }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(initialPreview || null)
  const [dataCount, setDataCount] = useState<number | null>(null) // State to hold the count of data entries
  const [csvData, setCsvData] = useState<any[]>([]) // State to hold the parsed CSV data

  useEffect(() => {
    if (initialPreview) {
      setPreviewImage(initialPreview)
    }
  }, [initialPreview])

  const props: UploadProps = {
    name,
    multiple: false,
    accept: '.csv', // Accept only CSV files
    beforeUpload(file) {
      if (file.type !== 'text/csv') {
        message.error('You can only upload CSV files!')
        return Upload.LIST_IGNORE // Prevent the file from being uploaded
      }

      // Reset previous data on new upload
      setPreviewImage(null)
      setDataCount(null)
      setCsvData([])

      const reader = new FileReader()
      reader.onload = () => {
        const fileContent = reader.result as string
        parseCSV(fileContent)
      }
      reader.readAsText(file) // Read as text to handle CSV format
      onChange(file)
      return false
    },
    onChange(info) {
      const { status } = info.file
      if (status === 'removed') {
        setPreviewImage(null) // Clear preview on file removal
        setDataCount(null) // Clear data count
        setCsvData([]) // Clear CSV data
        onChange(null) // Notify parent of file removal
      }
    },
    onDrop(e) {
      const { dataTransfer } = e
      const files = dataTransfer.files
      const csvFiles = Array.from(files).filter((file) => file.type === 'text/csv')

      if (csvFiles.length > 0) {
        message.info('CSV file dropped')
        onChange(csvFiles[0])
        const reader = new FileReader()
        reader.onload = () => {
          const fileContent = reader.result as string
          parseCSV(fileContent)
        }
        reader.readAsText(csvFiles[0])
      } else {
        message.error('You can only drop CSV files!')
      }
    },
  }

  const parseCSV = (fileContent: string) => {
    Papa.parse(fileContent, {
      header: true, // Set to true if the first row contains headers
      skipEmptyLines: true, // Skip empty lines
      complete: (results) => {
        const rowCount = results.data.length
        setDataCount(rowCount) // Update the state with the count
        setCsvData(results.data) // Set the parsed CSV data
      },
      error: (error: any) => {
        message.error(`Error reading CSV: ${error.message}`)
      },
    })
  }

  return (
    <div className="w-full">
      <Dragger {...props} className="w-full">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Only CSV files are supported</p>
      </Dragger>

      {/* Display data count */}
      {dataCount !== null && (
        <div className="mt-4">
          <p>Total Data Entries: {dataCount}</p>
        </div>
      )}

      {/* Display CSV Data */}
      {csvData.length > 0 && (
        <div className="mt-4">
          <h3>CSV Data:</h3>
          <div className="relative overflow-x-auto">
            <table className="w-full border border-collapse  ">
              <thead>
                <tr>
                  {Object.keys(csvData[0]).map((header) => (
                    <th key={header} className="border px-2 py-1">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((cell: any, cellIndex) => (
                      <td key={cellIndex} className="border px-2 py-1">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default DragAndDropCSVPrintData
