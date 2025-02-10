'use client'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'
import { UploadListType } from 'antd/es/upload/interface'
import React, { useState } from 'react'

const { Dragger } = Upload

interface DragAndDropProps {
  name: string
  onChange: (files: File[]) => void // Update callback to include all files
  initialPreview?: string // Optional prop for initial preview
  multiple?: boolean
  listType?: UploadListType
}

const DragAndDropMultiple: React.FC<DragAndDropProps> = ({
  name,
  onChange: onChangeFiles,
  multiple = false,
  listType = 'text',
}) => {
  // console and check file
  const [files, setFiles] = useState<File[]>([])

  const props: UploadProps = {
    name,
    multiple,
    listType,
    beforeUpload(file) {
      const reader = new FileReader()
      reader.onload = () => {
        // Update files state with the new file
        setFiles((prevFiles) => {
          const updatedFiles = [...prevFiles, file]
          onChangeFiles(updatedFiles) // Pass all files to the parent component
          return updatedFiles
        })
      }
      reader.readAsDataURL(file)
      return false // Prevent the upload to any server
    },
    onChange(info) {
      const { status, originFileObj } = info.file
      if (status === 'removed') {
        setFiles((prevFiles) => {
          const updatedFiles = prevFiles.filter((file) => file !== originFileObj)
          onChangeFiles(updatedFiles) // Pass all files to the parent component
          return updatedFiles
        })
      }
    },
    onDrop() {
      message.info('File dropped')
    },
  }

  return (
    <div className="w-full">
      <Dragger {...props} className="w-full">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibited from uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
  )
}

export default DragAndDropMultiple
