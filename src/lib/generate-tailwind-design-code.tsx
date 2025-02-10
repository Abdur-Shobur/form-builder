import { TailwindFieldType } from '../types';

export const generateTailwindCodeGenerate = (fields: TailwindFieldType[]) => {
  console.log(fields);
  const dollarSign = '$';
  const templateLiteral = '`';
  return `
  import React from 'react';
  import { useForm, SubmitHandler } from 'react-hook-form';
  import { z } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';
   // Zod validation schema
  const FormSchema = z.object({
   ${fields.map((f) => `  ${f.name}: z.string().optional(),`).join('\n   ')}
  });
  
  // TypeScript type inferred from the Zod schema
  type FormData = z.infer<typeof FormSchema>;
  
  const MyForm: React.FC = () => {
    // useForm hook with Zod schema validation
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(FormSchema),
    });
  
    // Form submit handler
    const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log(data);
    };
  
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
      ${fields
        .map(
          (field) => `
        <div className="mb-4">
          <label
            htmlFor="${field.name}" 
            className="block text-sm font-medium text-gray-700"
          >
            ${field.label}
          </label>
                ${(() => {
                  switch (field.type) {
                    case 'input':
                      return `<input type="text" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'number':
                      return `<input type="number" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'password':
                      return `<input type="password" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'email':
                      return `<input type="email" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'select':
                      return `<select
                    id="${field.name}"
                    {...register('${field.name}')}
                   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}}
                    >
                      <option value="">Select an option</option>
                      <option value="option_1">Option 1</option>
                      <option value="option_2">Option 2</option>
                    </select>`;

                    case 'textarea':
                      return `<textarea rows={3} id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} ></textarea>`;

                    case 'radio':
                      return ` <div className="mt-1">
                      <input
                        type="radio"
                       id="${field.name}" {...register('${field.name}')}
                        value="option_1"
                        className="mr-2"
                      />
                      Option 1
                      <input
                        type="radio"
                         id="${field.name}"
                      {...register('${field.name}')}
                        value="option_2"
                        className="mr-2"
                      />
                      Option 2
                    </div>`;

                    case 'date':
                      return `<input type="date" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'time':
                      return `<input type="time" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'file':
                      return `<input type="file" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'color':
                      return `<input type="color" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    case 'range':
                      return `<input type="range" id="${field.name}" {...register('${field.name}')}   className={${templateLiteral}mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${dollarSign}{errors.${field.name} ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} ${templateLiteral}} />`;

                    default:
                      return '';
                  }
                })()}
          {errors.${field.name} && (
            <p className="text-sm text-red-500 mt-1">{errors?.${field.name}?.message}</p>
          )}
        </div>  
      `,
        )
        .join('')}
        
  
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default MyForm;
  

  `;
};
