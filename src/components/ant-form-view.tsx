import {
  Button,
  Form,
  Input,
  Select,
  Checkbox,
  DatePicker,
  InputNumber,
  Radio,
  Switch,
  TimePicker,
  Upload,
  Empty,
  notification,
  FormProps,
} from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import { FieldType } from '../types';
const { Option } = Select;

export default function AntDFormView({ fields }: { fields: FieldType[] }) {
  if (fields.length === 0) {
    return <Empty description="No fields added yet" />;
  }
  type FieldType = keyof typeof fields;

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    notification.success({
      message: 'Success',
      description: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };
  return (
    <>
      <Form
        onFinish={onFinish}
        layout="vertical"
        className="!p-4  rounded-lg  shadow border"
      >
        <AnimatePresence>
          {fields.map((field) => (
            <motion.div
              key={field.key} // Required for Framer Motion
              initial={{ opacity: 0, y: 50 }} // Start from bottom-left
              animate={{
                opacity: 1,
                y: 0, // Move to normal position vertically
                transition: { type: 'ease', stiffness: 50, damping: 10 },
              }}
              exit={{
                opacity: 0,
                y: 50, // Move to bottom again on exit
                transition: { duration: 0.1 },
              }}
            >
              <Form.Item<FieldType>
                label={field.label}
                name={field.name}
                rules={
                  field.required
                    ? [{ required: true, message: 'This field is required' }]
                    : []
                }
              >
                {field.type === 'input' && (
                  <Input placeholder={field.placeholder} />
                )}
                {field.type === 'textarea' && (
                  <Input.TextArea placeholder={field.placeholder} />
                )}
                {field.type === 'select' && (
                  <Select placeholder={field.placeholder} allowClear showSearch>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                )}
                {field.type === 'multi_select' && (
                  <Select
                    placeholder={field.placeholder}
                    allowClear
                    showSearch
                    mode="multiple"
                    options={[
                      { value: '1', label: 'Option 1' },
                      { value: '2', label: 'Option 2' },
                    ]}
                  ></Select>
                )}
                {field.type === 'tag_select' && (
                  <Select
                    placeholder={field.placeholder}
                    allowClear
                    showSearch
                    mode="tags"
                    options={[
                      { value: '1', label: 'Option 1' },
                      { value: '2', label: 'Option 2' },
                    ]}
                  ></Select>
                )}
                {field.type === 'checkbox' && (
                  <Checkbox className="w-full">{field.label}</Checkbox>
                )}
                {field.type === 'radio' && (
                  <Radio.Group className="w-full">
                    <Radio value="1">Option 1</Radio>
                    <Radio value="2">Option 2</Radio>
                  </Radio.Group>
                )}
                {field.type === 'datepicker' && (
                  <DatePicker placeholder={field.placeholder} />
                )}
                {field.type === 'timepicker' && (
                  <TimePicker placeholder={field.placeholder} />
                )}
                {field.type === 'number' && (
                  <InputNumber placeholder={field.placeholder} />
                )}

                {field.type === 'switch' && <Switch />}

                {field.type === 'upload' && (
                  <Upload>
                    <Button icon={<UploadOutlined />}>
                      {field.placeholder}
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </motion.div>
          ))}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </AnimatePresence>
      </Form>
    </>
  );
}
