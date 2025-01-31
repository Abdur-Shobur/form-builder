import {
  Button,
  Form,
  Input,
  Select,
  Checkbox,
  DatePicker,
  InputNumber,
  Radio,
  Switch,
  TimePicker,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FormPage = ({ fields }: { fields: any[] }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      {fields.map((field, index) => (
        <Form.Item key={index} label={field.label} name={`field_${index}`}>
          {field.type === 'input' && <Input />}
          {field.type === 'textarea' && <Input.TextArea />}
          {field.type === 'select' && (
            <Select>
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          )}
          {field.type === 'checkbox' && <Checkbox>{field.label}</Checkbox>}
          {field.type === 'radio' && (
            <Radio.Group>
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
            </Radio.Group>
          )}
          {field.type === 'datepicker' && <DatePicker />}
          {field.type === 'timepicker' && <TimePicker />}
          {field.type === 'number' && <InputNumber />}
          {field.type === 'switch' && <Switch />}
          {field.type === 'upload' && (
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          )}
        </Form.Item>
      ))}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormPage;
