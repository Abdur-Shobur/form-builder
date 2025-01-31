export type IAndInputList = {
  label: string;
  value: string;
};

export interface FieldType {
  key: number;
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}
