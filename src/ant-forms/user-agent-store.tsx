'use client';

import { Button, Form, Input, Modal, notification, Select } from 'antd';
import React, { useState } from 'react';

export const UserAgentStore = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Create Agent
      </Button>

      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '800px' }}
        footer={null}
        onCancel={() => setModal2Open(false)}
      >
        <div>
          <div>
            <h1 className="text-xl font-semibold text-skin-color-1 text-center mb-5">
              Add New Agent
            </h1>

            <AgentStore onCancel={() => setModal2Open(false)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const AgentStore = ({ onCancel }: { onCancel?: Function }) => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSubmit = async (values: any) => {
    notification.success({
      message: 'Success',
      description: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmit}
      className="!p-4 border shadow-md rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* fname */}
        <Form.Item
          name="fname"
          label="First Name"
          className="db-label-1 "
          rules={[{ required: true, message: 'Please Add first name' }]}
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* lname */}
        <Form.Item
          name="lname"
          label="Last Name"
          className="db-label-1 "
          rules={[{ required: true, message: 'Please Add last name' }]}
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* job_title */}
        <Form.Item
          name="job_title"
          label="Job Title"
          className="db-label-1 "
          rules={[{ required: true, message: 'Please Add job title' }]}
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* phone */}
        <Form.Item
          name="phone"
          label="Phone"
          className="db-label-1 "
          rules={[{ required: true, message: 'Please Add phone' }]}
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* email */}
        <Form.Item
          name="email"
          label="Email"
          className="db-label-1 "
          rules={[
            { required: true, message: 'Please Add email', type: 'email' },
          ]}
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* password */}
        <Form.Item
          name="password"
          label="password"
          className="db-label-1 "
          rules={[{ required: true, message: 'Please Add password' }]}
        >
          <Input.Password
            size="large"
            placeholder="input password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>

        {/* Role   */}
        <Form.Item name="role_id" label="Role" className="db-label-1 ">
          <Select
            size="large"
            showSearch
            placeholder="select"
            style={{ width: '100%' }}
            options={[
              {
                value: '1',
                label: 'Admin',
              },
              {
                value: '2',
                label: 'Agent',
              },
            ]}
          />
        </Form.Item>

        <Form.Item className="db-label-1 col-span-1 md:col-span-2 flex justify-end">
          <Button
            onClick={handleCancel as any}
            htmlType="button"
            type="default"
            className="me-3"
          >
            Cancel
          </Button>

          <Button htmlType="submit" type="primary">
            Create Agent
            {/* {isLoading ? 'Creating...' : 'Create Agent'} */}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
