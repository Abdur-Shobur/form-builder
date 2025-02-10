import { Button, Empty, notification } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { TailwindFieldType } from '../types';
import { generateFormSchema } from '../lib/generate-form-schema';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function TailwindDFormView({
  fields,
}: {
  fields: TailwindFieldType[];
}) {
  if (fields.length === 0) {
    return <Empty description="No fields added yet" />;
  }
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
    notification.success({
      message: 'Success',
      description: <pre>{JSON.stringify(data, null, 2)}</pre>,
    });
  };

  return (
    <>
      <form
        className="!p-4  rounded-lg  shadow border space-y-"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              className="p-2"
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
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <Button type="primary" className="mt-4" htmlType="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
