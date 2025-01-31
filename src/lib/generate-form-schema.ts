import { z } from 'zod';
import { TailwindFieldType } from '../types';

export const generateFormSchema = (fields: TailwindFieldType[]) => {
  const schemaObject: Record<string, z.ZodTypeAny> = {};

  fields.forEach((field) => {
    switch (field.type) {
      case 'input':
      case 'textarea':

      case 'password':
        schemaObject[field.name] = z
          .string()
          .min(1, `${field.label} is required`);
        break;
      case 'email':
        schemaObject[field.name] = z
          .string()
          .email(`${field.label} is must be a valid email`);
        break;

      case 'file':
        schemaObject[field.name] = z.any().optional();
        break;

      case 'checkbox':
        schemaObject[field.name] = z.boolean();
      case 'number':
        schemaObject[field.name] = z
          .string()
          .regex(/^\d+$/, 'This field must be a number');
        break;
      case 'select':
      case 'radio':
        schemaObject[field.name] = z
          .string()
          .min(1, `${field.label} is required`);
        break;
      default:
        schemaObject[field.name] = z.string().optional();
    }
  });

  return z.object(schemaObject);
};
