'use client';
import { Button, Form, Input, Modal, notification, Select } from 'antd';
import React, { useState } from 'react';
import DragAndDropMultiple from './upload-multiple-file';

export const SupportCreateForUser: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Create ticket
      </Button>

      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '822px' }}
        footer={null}
        onCancel={() => setModal2Open(false)}
      >
        <div>
          <div>
            <h1 className="text-xl font-semibold text-skin-color-1 text-center mb-5">
              Create Ticket
            </h1>

            <UserSupportTicketMutation onCancel={() => setModal2Open(false)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const UserSupportTicketMutation = ({
  onCancel,
}: {
  onCancel: Function;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    notification.success({
      message: 'Success',
      description: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  return (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Subject */}
        <Form.Item
          name="subject"
          label="Subject"
          className="db-label-1"
          rules={[{ required: true, message: 'Please Add subject!' }]}
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* Urgency */}
        <Form.Item
          name="urgency"
          label="Urgency"
          className="db-label-1 "
          rules={[{ required: true, message: 'Please Select Urgency!' }]}
        >
          <Select
            size="large"
            placeholder="Urgency"
            style={{ width: '100%' }}
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
        </Form.Item>

        {/* message */}
        <Form.Item
          name="message"
          label="Message"
          className="db-label-1 md:col-span-2"
          rules={[{ required: true, message: 'Please Type Message!' }]}
        >
          <Input.TextArea
            placeholder="Type..."
            autoSize={{ minRows: 5, maxRows: 5 }}
          />
        </Form.Item>

        {/* attachment */}

        <div className="col-span-2 ant-file-upload-context">
          <DragAndDropMultiple
            name="attachment"
            listType="picture"
            multiple
            onChange={(e) => setFiles(e)}
          />
        </div>

        <Form.Item className="db-label-1 md:col-span-2 flex justify-end">
          <Button
            // disabled={isLoading}
            onClick={onCancel as any}
            htmlType="button"
            type="default"
            className="me-3"
          >
            Cancel
          </Button>

          <Button htmlType="submit" type="primary">
            {/* {isLoading ? 'Creating...' : 'Create Ticket'} */}
            Create Ticket
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
