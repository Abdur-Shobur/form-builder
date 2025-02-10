'use client';
import { Button, DatePicker, Form, Input, notification, Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
export const StoreContact = () => {
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    notification.success({
      message: 'Success',
      description: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <Form
      initialValues={{ phones: [''], person_status: 1, gender: 1 }}
      layout="vertical"
      form={form}
      onFinish={onSubmit}
      className="!p-4 border shadow-md rounded-lg"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

        {/* email */}
        <Form.Item name="email" label="Email" className="db-label-1 ">
          <Input placeholder="Type..." size="large" type="email" />
        </Form.Item>

        <div className="space-y-2">
          {/* phone */}
          {/* <Form.Item
              name="phone"
              label="Phone"
              className="db-label-1 "
              rules={[{  message: 'Please Add phone' }]}>
              <Input placeholder="Type..." size="large" />
            </Form.Item> */}

          {/* Dynamic phones List */}
          <div className="flex gap-3 flex-col w-full ">
            <Form.List name="phones">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <div key={key} className="flex items-baseline gap-2">
                      <Form.Item
                        {...restField}
                        name={[name]}
                        className="db-label-1 "
                        fieldKey={[fieldKey!]}
                        label={`Phone ${name > 0 ? name + 1 : ''}`}
                        style={{ width: '100%' }}
                        rules={[
                          { required: true, message: 'Please enter Phone' },
                        ]}
                      >
                        <Input placeholder={`Phone ${name + 1}`} size="large" />
                      </Form.Item>

                      {fields.length > 1 && (
                        <CloseCircleOutlined
                          onClick={() => {
                            remove(name);
                          }}
                        />
                      )}
                    </div>
                  ))}
                  <div className="text-right">
                    <Button
                      type="dashed"
                      className="!w-auto "
                      onClick={() => add()}
                      block
                    >
                      Add New
                    </Button>
                  </div>
                </>
              )}
            </Form.List>
          </div>
        </div>

        {/* profession */}
        <Form.Item name="profession" label="Profession" className="db-label-1 ">
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* value */}
        <Form.Item name="value" label="Value" className="db-label-1 ">
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* address */}
        <Form.Item name="address" label="Address" className="db-label-1 ">
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* city */}
        <Form.Item name="city" label="City" className="db-label-1 ">
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* country */}
        <Form.Item name="country" label="County" className="db-label-1 ">
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* zip_code */}
        <Form.Item name="zip_code" label="zip_code" className="db-label-1 ">
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* state */}
        <Form.Item name="state" label="state" className="db-label-1 ">
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* deal_closing_date */}
        <Form.Item
          name="deal_closing_date"
          label="deal closing date"
          className="db-label-1 "
        >
          <DatePicker className="w-full" size="large" />
        </Form.Item>

        {/* date_of_birth */}
        <Form.Item
          name="date_of_birth"
          label="date of birth"
          className="db-label-1 "
        >
          <DatePicker className="w-full" size="large" />
        </Form.Item>

        {/* apn */}
        <Form.Item
          name="apn"
          label="APN"
          className="db-label-1 !text-uppercase"
        >
          <Input placeholder="Type..." size="large" />
        </Form.Item>

        {/* gender */}
        <Form.Item name="gender" label="gender" className="db-label-1 ">
          <Select
            size="large"
            placeholder="select"
            style={{ width: '100%' }}
            options={[
              {
                label: 'Male',
                value: 1,
              },
              {
                label: 'Female',
                value: 2,
              },
            ]}
          />
        </Form.Item>

        {/* person_status */}
        <Form.Item name="person_status" label="Status" className="db-label-1 ">
          <Select
            size="large"
            placeholder="select"
            style={{ width: '100%' }}
            options={[
              {
                label: 'Active',
                value: 1,
              },
              {
                label: 'Inactive',
                value: 2,
              },
            ]}
          />
        </Form.Item>

        {/* agent List */}
        <Form.Item name="agent_id" label="agent id" className="db-label-1 ">
          <Select
            size="large"
            placeholder="select"
            style={{ width: '100%' }}
            options={[
              {
                label: 'Agent 1',
                value: 1,
              },
              {
                label: 'Agent 2',
                value: 2,
              },
            ]}
          />
        </Form.Item>

        {/* group list  */}
        <Form.Item name="group_id" label="group id" className="db-label-1 ">
          <Select
            size="large"
            mode="multiple"
            placeholder="select"
            style={{ width: '100%' }}
            options={[
              {
                label: 'Group 1',
                value: 1,
              },
              {
                label: 'Group 2',
                value: 2,
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
            Create Contact
            {/* {isLoading ? 'Creating...' : 'Create Contact'} */}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
