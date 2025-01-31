'use client';
import React, { useState } from 'react';
import { FieldType, IAndInputList } from '../types';
import AntDFormSidebar from './ant-form-sidebar';
import AntDFormBox from './ant-form-box';
import CodeView from './code-view';
import { Button } from 'antd';
import AntDFormView from './ant-form-view';
import { motion, AnimatePresence } from 'framer-motion';
import { env } from '../lib';
import MyForm from './test-form';
import { FileOutlined, CopyOutlined } from '@ant-design/icons';
import { CopyClipboardHandler } from '../helper/copy';
import { generateFormHandlerCode2 } from '../lib/generate-ant-design-code';

const fieldOptions: IAndInputList[] = [
  { label: 'Input', value: 'input' },
  { label: 'Textarea', value: 'textarea' },
  { label: 'Select', value: 'select' },
  { label: 'Multi Select', value: 'multi_select' },
  { label: 'Tag Select', value: 'tag_select' },
  { label: 'Checkbox', value: 'checkbox' },
  { label: 'Radio', value: 'radio' },
  { label: 'DatePicker', value: 'datepicker' },
  { label: 'TimePicker', value: 'timepicker' },
  { label: 'Number Input', value: 'number' },
  { label: 'Switch', value: 'switch' },
  { label: 'Upload', value: 'upload' },
];

const FormBuilder = () => {
  const { copied, click_button_handler } = CopyClipboardHandler();

  const [fields, setFields] = useState<FieldType[]>([]);
  const [codeView, setCodeView] = useState(false);

  const addField = (type: string) => {
    setFields([
      ...fields,
      {
        key: Date.now(),
        type,
        name: `field_${fields.length + 1}`,
        label: `Field ${fields.length + 1}`,
        placeholder: `Enter ${type}`,
        required: false,
      },
    ]);
  };

  return (
    <div className="p-4 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-center mt-4 ">
        Ant Design Form Builder
      </h2>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-180px)]">
        <div className="col-span-12 xl:col-span-2 rounded border overflow-auto px-4">
          <div className="flex xl:flex-col gap-2 xl:gap-4 xl:p-4 py-2 lg:flex-wrap lg:justify-center xl:justify-start">
            <AntDFormSidebar fieldOptions={fieldOptions} addField={addField} />
          </div>
        </div>

        <div className="overflow-auto col-span-12 md:col-span-6 xl:col-span-5 p-4 rounded border">
          <AntDFormBox fields={fields} setFields={setFields} />
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

        <div className="col-span-12 md:col-span-6 xl:col-span-5 p-4 rounded border overflow-hidden">
          <div className="justify-between flex gap-4 mb-4  border rounded-lg px-3 py-2">
            <div className="flex gap-2">
              <Button
                type={codeView ? 'primary' : 'default'}
                onClick={() => setCodeView(true)}
              >
                Code
              </Button>
              <Button
                type={codeView ? 'default' : 'primary'}
                onClick={() => setCodeView(false)}
              >
                View
              </Button>
            </div>
            <Button
              icon={!copied ? <FileOutlined /> : <CopyOutlined />}
              type="dashed"
              onClick={() =>
                click_button_handler(generateFormHandlerCode2(fields))
              }
            >
              {/* {!copied ? <FileOutlined /> : <CopyOutlined />} */}
            </Button>
          </div>
          <div className="overflow-auto max-h-[calc(100vh-280px)]">
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
                  <CodeView fields={fields} />
                </motion.div>
              )}
            </AnimatePresence>

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
                  <AntDFormView fields={fields} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
