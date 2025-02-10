import { Button, Form, Input, Checkbox, Modal, Empty } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TailwindFieldType } from '../types';
import { generateFormSchema } from '../lib/generate-form-schema';

export default function TailwindFormBox({
  fields,
  setFields,
}: {
  fields: TailwindFieldType[];
  setFields: (fields: TailwindFieldType[]) => void;
}) {
  const [editField, setEditField] = useState<TailwindFieldType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const FormSchema = generateFormSchema(fields);

  type FormData = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(generateFormSchema(fields)),
  });
  console.log(errors);
  // Form submit handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const openEditModal = (field: TailwindFieldType) => {
    setEditField(field);
    setIsModalOpen(true);
  };

  const deleteField = (key: number) => {
    setFields(fields.filter((f) => f.key !== key));
  };

  console.log(fields);

  const updateField = (values: Partial<TailwindFieldType>) => {
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
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence>
          {fields.map((field) => (
            <motion.div
              key={field.key} // Required for Framer Motion
              initial={{ opacity: 0, y: 50 }} // Start from bottom
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: 'ease', stiffness: 50, damping: 10 },
              }}
              exit={{
                opacity: 0,
                y: 50,
                transition: { duration: 0.1 },
              }}
              className="p-3 border rounded-lg shadow"
            >
              <div className="flex items-center gap-2 justify-between">
                <div className="flex gap-2 flex-col flex-1">
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>

                  {field.type === 'input' && (
                    <input
                      key={field.key}
                      type="text"
                      id={field.name}
                      {...register(field.name)}
                      placeholder={field.placeholder}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}
                  {field.type === 'textarea' && (
                    <textarea
                      key={field.key}
                      id={field.name}
                      {...register(field.name)}
                      placeholder={field.placeholder}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}
                  {field.type === 'number' && (
                    <input
                      key={field.key}
                      type="number"
                      id={field.name}
                      {...register(field.name)}
                      placeholder={field.placeholder}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}
                  {field.type === 'password' && (
                    <input
                      key={field.key}
                      type="password"
                      id={field.name}
                      {...register(field.name)}
                      placeholder={field.placeholder}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}
                  {field.type === 'email' && (
                    <input
                      key={field.key}
                      type="email"
                      id={field.name}
                      {...register(field.name)}
                      placeholder={field.placeholder}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}
                  {field.type === 'select' && (
                    <select
                      key={field.key}
                      id={field.name}
                      {...register(field.name)}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    >
                      <option value="">Select an option</option>
                      <option value="option_1">Option 1</option>
                      <option value="option_2">Option 2</option>
                    </select>
                  )}

                  {field.type === 'checkbox' && (
                    <input
                      key={field.key}
                      type="checkbox"
                      id={field.name}
                      {...register(field.name)}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}

                  {field.type === 'radio' && (
                    <div className="mt-1">
                      <input
                        type="radio"
                        id={field.name}
                        {...register(field.name)}
                        value="option_1"
                        className="mr-2"
                      />
                      Option 1
                      <input
                        type="radio"
                        id={field.name}
                        {...register(field.name)}
                        value="option_2"
                        className="mr-2"
                      />
                      Option 2
                    </div>
                  )}

                  {field.type === 'date' && (
                    <input
                      key={field.key}
                      type="date"
                      id={field.name}
                      {...register(field.name)}
                      placeholder={field.placeholder}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}

                  {field.type === 'time' && (
                    <input
                      key={field.key}
                      type="time"
                      id={field.name}
                      {...register(field.name)}
                      placeholder={field.placeholder}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}

                  {field.type === 'file' && (
                    <input
                      key={field.key}
                      type="file"
                      id={field.name}
                      {...register(field.name)}
                      className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2  ${errors[field.name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  )}
                  {field.type === 'color' && (
                    <input
                      key={field.key}
                      type="color"
                      id={field.name}
                      {...register(field.name)}
                      className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-indigo-500"
                    />
                  )}
                  {field.type === 'range' && (
                    <input
                      key={field.key}
                      type="range"
                      id={field.name}
                      {...register(field.name)}
                      min="1"
                      max="100"
                      className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-indigo-500"
                    />
                  )}
                  {errors[field.name] &&
                    typeof errors[field.name] === 'object' &&
                    'message' in errors[field.name] && (
                      <p className="text-sm text-red-500 mt-1">
                        {String(errors[field.name].message)}
                      </p>
                    )}
                </div>

                {/* Action buttons */}
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
            </motion.div>
          ))}
        </AnimatePresence>
      </form>
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
          {/* <Form.Item name="required" valuePropName="checked">
            <Checkbox>Required</Checkbox>
          </Form.Item> */}
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </>
  );
}
