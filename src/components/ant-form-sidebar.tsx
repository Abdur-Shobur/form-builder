import { Button } from 'antd';
import React from 'react';
import { IAndInputList } from '../types';

export default function AntDFormSidebar({
  fieldOptions,
  addField,
}: {
  fieldOptions: IAndInputList[];
  addField: (type: string) => void;
}) {
  return fieldOptions.map((field) => (
    <Button key={field.value} onClick={() => addField(field.value)}>
      Add {field.label}
    </Button>
  ));
}
