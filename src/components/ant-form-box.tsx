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
  Modal,
  Empty,
} from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UploadOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { FieldType } from '../types';

export default function AntDFormBox({
  fields,
  setFields,
}: {
  fields: FieldType[];
  setFields: (fields: FieldType[]) => void;
}) {
  const [editField, setEditField] = useState<FieldType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditModal = (field: FieldType) => {
    setEditField(field);
    setIsModalOpen(true);
  };

  const deleteField = (key: number) => {
    setFields(fields.filter((f) => f.key !== key));
  };

  const updateField = (values: Partial<FieldType>) => {
    setFields(
      fields.map((f) => (f.key === editField?.key ? { ...f, ...values } : f)),
    );
    setIsModalOpen(false);
    setEditField(null);
  };

  if (fields.length === 0) {
    return <Empty description="No fields added yet" className="mt-10" />;
  }

  return (
    <>
      <Form layout="vertical" className="">
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
              <Form.Item
                style={{ width: '100%' }}
                className="!p-4 rounded border"
                label={field.label}
                name={field.name}
                rules={
                  field.required
                    ? [{ required: true, message: 'This field is required' }]
                    : []
                }
              >
                <div className="flex items-center gap-2 justify-between">
                  {field.type === 'input' && (
                    <Input placeholder={field.placeholder} />
                  )}
                  {field.type === 'textarea' && (
                    <Input.TextArea placeholder={field.placeholder} />
                  )}
                  {field.type === 'select' && (
                    <Select
                      placeholder={field.placeholder}
                      allowClear
                      showSearch
                    >
                      <Select.Option value="option1">Option 1</Select.Option>
                      <Select.Option value="option2">Option 2</Select.Option>
                    </Select>
                  )}
                  {field.type === 'multi_select' && (
                    <Select
                      placeholder={field.placeholder}
                      allowClear
                      showSearch
                      mode="multiple"
                    >
                      <Select.Option value="option1">Option 1</Select.Option>
                      <Select.Option value="option2">Option 2</Select.Option>
                    </Select>
                  )}
                  {field.type === 'tag_select' && (
                    <Select
                      placeholder={field.placeholder}
                      allowClear
                      showSearch
                      mode="tags"
                    >
                      <Select.Option value="option1">Option 1</Select.Option>
                      <Select.Option value="option2">Option 2</Select.Option>
                    </Select>
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
                    <DatePicker
                      placeholder={field.placeholder}
                      className="!w-full"
                    />
                  )}
                  {field.type === 'timepicker' && (
                    <TimePicker
                      placeholder={field.placeholder}
                      className="!w-full"
                    />
                  )}
                  {field.type === 'number' && (
                    <InputNumber
                      placeholder={field.placeholder}
                      className="!w-full"
                    />
                  )}
                  {field.type === 'switch' && <Switch />}
                  {field.type === 'upload' && (
                    <Upload>
                      <Button icon={<UploadOutlined />}>
                        {field.placeholder}
                      </Button>
                    </Upload>
                  )}
                  <div className="flex gap-2">
                    <Button
                      icon={<EditOutlined />}
                      onClick={() => openEditModal(field)}
                    />
                    <Button
                      icon={<DeleteOutlined />}
                      onClick={() => deleteField(field.key)}
                      danger
                    />
                  </div>
                </div>
              </Form.Item>
            </motion.div>
          ))}
        </AnimatePresence>
      </Form>
      <Modal
        key={editField?.key}
        title="Edit Field"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={editField ?? {}}
          onFinish={updateField}
        >
          <Form.Item
            label="Label"
            name="label"
            rules={[{ required: true, message: 'Label is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Name is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Placeholder" name="placeholder">
            <Input />
          </Form.Item>
          <Form.Item name="required" valuePropName="checked">
            <Checkbox>Required</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </>
  );
}
