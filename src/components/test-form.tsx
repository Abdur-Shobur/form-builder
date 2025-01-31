import { Form, Input, Select, Button, notification } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

const onFinish = (values: any) => {
  notification.success({
    message: 'Success',
    description: <pre>{JSON.stringify(values, null, 2)}</pre>,
  });
};

const MyForm = () => (
  <Form layout="vertical" onFinish={onFinish}>
    <Form.Item label="name" name="field_1">
      <Input placeholder="Enter Name" />
    </Form.Item>
    <Form.Item label="Field 2" name="field_2">
      <Input.TextArea placeholder="Enter Text" />
    </Form.Item>
    <Form.Item label="Field 3" name="field_3">
      <Select
        allowClear
        showSearch
        placeholder="Enter se"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      ></Select>
    </Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form>
);

export default MyForm;
