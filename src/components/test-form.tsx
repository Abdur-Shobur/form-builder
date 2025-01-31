import {
  Form,
  Input,
  Select,
  Radio,
  Switch,
  Button,
  notification,
  FormProps,
} from 'antd';

import { UploadOutlined } from '@ant-design/icons';

type FieldType = {
  field_1: string;
  field_2: string;
  field_3: string;
  field_4: string;
  field_5: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  notification.success({
    message: 'Success',
    description: <pre>{JSON.stringify(values, null, 2)}</pre>,
  });
};

const MyForm = () => (
  <Form layout="vertical" onFinish={onFinish}>
    <Form.Item<FieldType> label="Field 1" name="field_1">
      <Input placeholder="Enter input" />
    </Form.Item>

    <Form.Item<FieldType> label="Field 2" name="field_2">
      <Input.TextArea placeholder="Enter textarea" />
    </Form.Item>

    <Form.Item<FieldType> label="Field 3" name="field_3">
      <Select
        allowClear
        showSearch
        placeholder="Enter select"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      ></Select>
    </Form.Item>

    <Form.Item<FieldType> label="Field 4" name="field_4">
      <Radio.Group>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </Radio.Group>
    </Form.Item>

    <Form.Item<FieldType> label="Field 5" name="field_5">
      <Switch />
    </Form.Item>

    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form>
);

export default MyForm;
