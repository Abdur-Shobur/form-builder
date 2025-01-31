import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FieldType } from '../types';
import { Button } from 'antd';
import { CopyClipboardHandler } from '../helper/copy';
import { FileOutlined, CopyOutlined } from '@ant-design/icons';
export default function AntFormCodeView({ fields }: { fields: FieldType[] }) {
  const { copied, click_button_handler } = CopyClipboardHandler();

  const generateFormHandlerCode2 = () => {
    const componentsToImport = new Set();

    fields.forEach((field) => {
      switch (field.type) {
        case 'input':
          componentsToImport.add('Input');
          break;
        case 'textarea':
          componentsToImport.add('Input');
          break;
        case 'select':
        case 'tag_select':
        case 'multi_select':
          componentsToImport.add('Select');
          break;
        case 'checkbox':
          componentsToImport.add('Checkbox');
          break;
        case 'radio':
          componentsToImport.add('Radio');
          break;
        case 'datepicker':
          componentsToImport.add('DatePicker');
          break;
        case 'timepicker':
          componentsToImport.add('TimePicker');
          break;
        case 'number':
          componentsToImport.add('InputNumber');
          break;
        case 'switch':
          componentsToImport.add('Switch');
          break;
        case 'upload':
          componentsToImport.add('Upload');
          break;
        default:
          break;
      }
    });

    // Construct the import statement with all components in one line
    const importStatement = `import {Form${Array.from(componentsToImport).length > 0 ? ', ' : ''}${Array.from(componentsToImport).join(', ')}, Button, notification, FormProps } from 'antd';`;

    return `
  ${importStatement}
  
  import { UploadOutlined } from '@ant-design/icons';
  
  type FieldType = {
${fields
  .map(
    (f) =>
      `  ${f.name}: ${(() => {
        switch (f.type) {
          case 'multi_select':
          case 'tag_select':
            return `string[]`;
          case 'datepicker':
            return `Date`;
          case 'timepicker':
            return `Date`;
          case 'switch':
            return `boolean`;
          case 'upload':
            return `string[]`;
          default:
            return `string`;
        }
      })()};`,
  )
  .join('\n')}
  };


  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    notification.success({
      message: 'Success',
      description: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  const MyForm = () => (
    <Form layout="vertical" onFinish={onFinish}>
      ${fields
        .map(
          (field) => `
      <Form.Item<FieldType>
        label="${field.label}"
        name="${field.name}"${!field.required ? '' : '\n' + `        rules={[{ required: true, message: 'This field is required' }]}`}
      >
        ${(() => {
          switch (field.type) {
            case 'input':
              return `<Input placeholder="${field.placeholder}" />`;
            case 'textarea':
              return `<Input.TextArea placeholder="${field.placeholder}" />`;
            case 'select':
              return `<Select
              allowClear showSearch
              placeholder="${field.placeholder}"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ]}
            ></Select>`;
            case 'multi_select':
              return `<Select
              allowClear showSearch mode="multiple"
              placeholder="${field.placeholder}"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ]}
            ></Select>`;
            case 'tag_select':
              return `<Select
              allowClear showSearch mode="tags"
              placeholder="${field.placeholder}"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ]}
            ></Select>`;
            case 'checkbox':
              return `<Checkbox>${field.label}</Checkbox>`;
            case 'radio':
              return `<Radio.Group><Radio value="1">Option 1</Radio><Radio value="2">Option 2</Radio></Radio.Group>`;
            case 'datepicker':
              return '<DatePicker />';

            case 'timepicker':
              return '<TimePicker />';

            case 'number':
              return '<InputNumber />';

            case 'switch':
              return '<Switch />';

            case 'upload':
              return `<Upload><Button icon={<UploadOutlined />}>${field.placeholder}</Button></Upload>`;
            default:
              return '';
          }
        })()}
      </Form.Item>
         
      `,
        )
        .join('')}
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form>
  );
  
  export default MyForm;
  `;
  };

  return (
    <div className="relative">
      <Button
        icon={!copied ? <FileOutlined /> : <CopyOutlined />}
        className="!absolute -top-16 right-4"
        type="dashed"
        onClick={() => click_button_handler(generateFormHandlerCode2())}
      >
        {/* {!copied ? <FileOutlined /> : <CopyOutlined />} */}
      </Button>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers>
        {generateFormHandlerCode2().trim()}
      </SyntaxHighlighter>
    </div>
  );
}
