'use client';

import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Select,
  Switch,
  TimePicker,
} from 'antd';
import React, { useState } from 'react';
export const SelectWeekList = [
  {
    id: 1,
    value: 'saturday',
    label: 'Saturday',
  },
  {
    id: 2,
    value: 'sunday',
    label: 'Sunday',
  },
  {
    id: 3,
    value: 'monday',
    label: 'Monday',
  },
  {
    id: 4,
    value: 'tuesday',
    label: 'Tuesday',
  },
  {
    id: 5,
    value: 'wednesday',
    label: 'Wednesday',
  },
  {
    id: 6,
    value: 'thursday',
    label: 'Thursday',
  },
  {
    id: 7,
    value: 'friday',
    label: 'Friday',
  },
];
export const UserCampaignStore = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Create New Campaign
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
              Add New Campaign
            </h1>

            <StoreUserCampaign onCancel={() => setModal2Open(false)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const StoreUserCampaign = ({ onCancel }: { onCancel?: Function }) => {
  const [form] = Form.useForm();

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
      initialValues={{ delay_time: 1 }}
      layout="vertical"
      form={form}
      onFinish={onSubmit}
      className="!p-4 border shadow-md rounded-lg"
    >
      <div className="space-y-4">
        {/* Campaign Name */}
        <Form.Item
          name="name"
          label="Campaign Name"
          className="db-label-1 "
          rules={[{ required: true, message: 'Please Add Campaign Name' }]}
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Start Date */}
          <Form.Item
            name="start_date"
            label="Start Date"
            className="db-label-1 "
            rules={[{ required: true, message: 'Please Select Start date' }]}
          >
            <DatePicker className="w-full" size="large" />
          </Form.Item>

          {/* Start Time */}

          <div className="grid grid-cols-2 gap-4 w-full">
            <Form.Item
              label="Start Time"
              name="start_time"
              className="db-label-1 "
              rules={[{ required: true, message: 'Please Select Start Time' }]}
            >
              <TimePicker
                className="w-full"
                size="large"
                format={{ format: 'HH:mm' }}
              />
            </Form.Item>

            <Form.Item
              name="end_time"
              label="End Time"
              className="db-label-1 "
              rules={[{ required: true, message: 'Please Select End Time' }]}
            >
              <TimePicker
                className="w-full"
                size="large"
                format={{ format: 'HH:mm' }}
              />
            </Form.Item>
          </div>

          <Form.Item
            name="included_days"
            label="included days"
            // rules={[{ required: true, message: 'Please Select Days' }]}
            className="db-label-1 col-span-1 md:col-span-2 "
          >
            <Checkbox.Group>
              {SelectWeekList.map((e: any) => (
                <Checkbox key={e.value} value={e.value}>
                  {e.label}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>

          {/* Pipeline */}
          <Form.Item
            name="deal_id"
            label="Pipeline"
            className="db-label-1 "
            rules={[{ required: true, message: 'Please Select Pipeline!' }]}
          >
            <Select
              size="large"
              placeholder="select"
              showSearch
              allowClear
              filterOption={(input, option) => {
                if (typeof option?.label === 'string') {
                  return !!option.label
                    .toLowerCase()
                    .includes(input.toLowerCase());
                }
                return false;
              }}
              style={{ width: '100%' }}
              options={[
                { label: 'Pipeline 1', value: 1 },
                { label: 'Pipeline 2', value: 2 },
              ]}
            />
          </Form.Item>

          {/* Contacts list*/}
          <Form.Item
            name="group_id"
            label="Contacts list"
            className="db-label-1 "
            rules={[
              { required: true, message: 'Please Select Contacts list!' },
            ]}
          >
            <Select
              size="large"
              placeholder="select"
              showSearch
              allowClear
              filterOption={(input, option) =>
                !!option?.label.toLowerCase().includes(input.toLowerCase())
              }
              style={{ width: '100%' }}
              options={[
                { label: 'Contact 1', value: 1 },
                { label: 'Contact 2', value: 2 },
              ]}
            />
          </Form.Item>

          {/* Assign to */}
          <Form.Item
            name="agent_id"
            label="Assign to"
            className="db-label-1 "
            rules={[{ required: true, message: 'Please Select Assign!' }]}
          >
            <Select
              size="large"
              placeholder="select"
              showSearch
              allowClear
              filterOption={(input, option) => {
                if (typeof option?.label === 'string') {
                  return !!option.label
                    .toLowerCase()
                    .includes(input.toLowerCase());
                }
                return false;
              }}
              style={{ width: '100%' }}
              options={[
                { label: 'Agent 1', value: 1 },
                { label: 'Agent 2', value: 2 },
              ]}
            />
          </Form.Item>

          {/* The delay between messages send*/}
          <Form.Item
            label="Delay between messages send(in seconds)"
            name="delay_time"
            className="db-label-1 "
            rules={[
              {
                required: true,
                message: 'Please Add Minutes',
                pattern: new RegExp(/^[0-9]+$/),
              },
            ]}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={1}
              className="w-full block"
              placeholder="Minutes"
              size="large"
            />
          </Form.Item>
          <div className="space-y-1">
            <Form.Item
              name="next_send_time"
              className="db-label-1 "
              label="Next Send Time (in days)"
              rules={[
                {
                  required: true,
                  message: 'Please Add Next Send Time(in days)',
                  pattern: new RegExp(/^[0-9]+$/),
                },
              ]}
            >
              <InputNumber
                style={{ width: '100%' }}
                min={1}
                className="w-full block"
                placeholder="days"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="workflow_status"
              className="db-label-1 "
              label="Workflow"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </div>
        </div>

        <Form.Item className="db-label-1 col-span-1 md:col-span-2 flex justify-end">
          <Button
            // disabled={isLoading}
            onClick={handleCancel as any}
            htmlType="button"
            type="default"
            className="me-3"
          >
            Cancel
          </Button>

          <Button
            // loading={isLoading}
            // disabled={isLoading}
            htmlType="submit"
            type="primary"
          >
            Create Campaign
            {/* {isLoading ? 'Creating...' : 'Create Campaign'} */}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
