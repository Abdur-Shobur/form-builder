'use client';
import React, { useState } from 'react';
import { TailwindFieldType, IAndInputList } from '../types';
import AntDFormSidebar from './ant-form-sidebar';
import CodeView, { CodeViewTailwind } from './code-view';
import { Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { env } from '../lib';
import MyForm from './test-form';
import TailwindFormBox from './tailwind-form-box';
import TailwindDFormView from './tailwind-form-view';
import { z } from 'zod';
import { CopyClipboardHandler } from '../helper/copy';
import { generateTailwindCodeGenerate } from '../lib/generate-tailwind-design-code';
import { FileOutlined, CopyOutlined } from '@ant-design/icons';

const fieldOptions: IAndInputList[] = [
  { label: 'Input', value: 'input' },
  { label: 'Textarea', value: 'textarea' },
  { label: 'Number', value: 'number' },
  { label: 'Password', value: 'password' },
  { label: 'Email', value: 'email' },
  { label: 'Select', value: 'select' },
  { label: 'Radio', value: 'radio' },
  { label: 'Checkbox', value: 'checkbox' },
  { label: 'Date', value: 'date' },
  { label: 'Time', value: 'time' },
  { label: 'File Upload', value: 'file' },
  { label: 'Color Picker', value: 'color' },
  { label: 'Range Slider', value: 'range' },
];

const FormBuilderTailwind = () => {
  const { copied, click_button_handler } = CopyClipboardHandler();

  const [fields, setFields] = useState<TailwindFieldType[]>([]);
  const [codeView, setCodeView] = useState(false);

  const addField = (type: string) => {
    let validationType: any;

    switch (type) {
      case 'input':
      case 'textarea':
      case 'password':
      case 'email':
      case 'select':
      case 'radio':
      case 'color':
        validationType = z.string().optional();
        break;

      case 'number':
      case 'range':
        validationType = z.number().optional();
        break;

      case 'checkbox':
        validationType = z.boolean().optional(); // checkboxes return true/false
        break;

      case 'date':
      case 'time':
        validationType = z.string().optional();
        break;

      case 'file':
        validationType = z
          .instanceof(File)
          .or(z.string()) // Allow file URL or File object
          .optional();
        break;

      default:
        validationType = z.string().optional();
    }

    setFields([
      ...fields,
      {
        key: Date.now(),
        type,
        name: `field_${fields.length + 1}`,
        label: `Field ${fields.length + 1}`,
        placeholder: `Enter ${type}`,
        validationSchema: validationType,
      },
    ]);
  };

  return (
    <div className="p-4 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-center mt-4 ">
        Tailwind Form Builder with ZOD
      </h2>
      <div className="grid grid-cols-12 gap-4  h-[calc(100vh-180px)]">
        <div className="col-span-12 xl:col-span-2 rounded border overflow-auto px-4">
          <div className="flex xl:flex-col gap-2 xl:gap-4 xl:p-4 py-2 lg:flex-wrap lg:justify-center xl:justify-start">
            <AntDFormSidebar fieldOptions={fieldOptions} addField={addField} />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-5 p-4 rounded border overflow-auto">
          <TailwindFormBox fields={fields} setFields={setFields} />
          {env.development && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center mt-4">
                Test Form
              </h2>
              <p className="text-center text-sm">
                Copy Code paste in this component to real view{' '}
              </p>
              <MyForm />
            </>
          )}
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-5 p-4 rounded border">
          <div className="justify-between flex gap-4 mb-4  border rounded-lg px-3 py-2">
            <div className="flex gap-2">
              <Button
                type={!codeView ? 'default' : 'primary'}
                onClick={() => setCodeView(true)}
              >
                View
              </Button>
              <Button
                type={!codeView ? 'primary' : 'default'}
                onClick={() => setCodeView(false)}
              >
                Code
              </Button>
            </div>
            <Button
              icon={!copied ? <FileOutlined /> : <CopyOutlined />}
              type="dashed"
              onClick={() =>
                click_button_handler(generateTailwindCodeGenerate(fields))
              }
            >
              {/* {!copied ? <FileOutlined /> : <CopyOutlined />} */}
            </Button>
          </div>

          <div className="overflow-auto max-h-[calc(100vh-280px)]">
            <AnimatePresence>
              {!codeView && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} // Start from bottom-left
                  animate={{
                    opacity: 1,
                    y: 0, // Move to normal position vertically
                    transition: { type: 'ease', stiffness: 10, damping: 10 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 10, // Move to bottom again on exit
                    transition: { duration: 0.1 },
                  }}
                >
                  <CodeViewTailwind fields={fields} />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {codeView && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} // Start from bottom-left
                  animate={{
                    opacity: 1,
                    y: 0, // Move to normal position vertically
                    transition: { type: 'ease', stiffness: 10, damping: 10 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 10, // Move to bottom again on exit
                    transition: { duration: 0.1 },
                  }}
                >
                  <TailwindDFormView fields={fields} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilderTailwind;
