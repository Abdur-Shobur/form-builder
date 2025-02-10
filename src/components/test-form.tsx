import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// Zod validation schema
const FormSchema = z.object({
  field_1: z.string().optional(),
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
      <div className="mb-4">
        <label
          htmlFor="field_1"
          className="block text-sm font-medium text-gray-700"
        >
          Field 1
        </label>
        <input
          type="text"
          id="field_1"
          {...register('field_1')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_1 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_1 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_1?.message}
          </p>
        )}
      </div>

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
