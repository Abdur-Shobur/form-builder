import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod validation schema
const FormSchema = z.object({
  field_1: z.string().optional(),
  field_2: z.string().optional(),
  field_3: z.string().optional(),
  field_4: z.string().optional(),
  field_5: z.string().optional(),
  field_6: z.string().optional(),
  field_7: z.string().optional(),
  field_8: z.string().optional(),
  field_9: z.string().optional(),
  field_10: z.string().optional(),
  field_11: z.string().optional(),
  field_12: z.string().optional(),
  field_13: z.string().optional(),
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
      <label
        for="checkboxLabelTwo"
        class="flex items-center cursor-pointer select-none text-dark dark:text-white"
      >
        <div class="relative">
          <input type="checkbox" id="checkboxLabelTwo" class="sr-only" />
          <div class="flex items-center justify-center w-5 h-5 mr-4 border border-stroke dark:border-dark-3 rounded box">
            <span class="opacity-0">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                  fill="#3056D3"
                  stroke="#3056D3"
                  stroke-width="0.4"
                />
              </svg>
            </span>
          </div>
        </div>
        Checkbox Text
      </label>
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

      <div className="mb-4">
        <label
          htmlFor="field_2"
          className="block text-sm font-medium text-gray-700"
        >
          Field 2
        </label>
        <textarea
          rows={3}
          id="field_2"
          {...register('field_2')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_2 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        ></textarea>
        {errors.field_2 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_2?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_3"
          className="block text-sm font-medium text-gray-700"
        >
          Field 3
        </label>
        <input
          type="number"
          id="field_3"
          {...register('field_3')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_3 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_3 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_3?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_4"
          className="block text-sm font-medium text-gray-700"
        >
          Field 4
        </label>
        <input
          type="password"
          id="field_4"
          {...register('field_4')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_4 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_4 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_4?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_5"
          className="block text-sm font-medium text-gray-700"
        >
          Field 5
        </label>
        <input
          type="email"
          id="field_5"
          {...register('field_5')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_5 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_5 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_5?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_6"
          className="block text-sm font-medium text-gray-700"
        >
          Field 6
        </label>
        <select
          id="field_6"
          {...register('field_6')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_6 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        >
          <option value="">Select an option</option>
          <option value="option_1">Option 1</option>
          <option value="option_2">Option 2</option>
        </select>
        {errors.field_6 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_6?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_7"
          className="block text-sm font-medium text-gray-700"
        >
          Field 7
        </label>
        <div className="mt-1">
          <input
            type="radio"
            id="field_7"
            {...register('field_7')}
            value="option_1"
            className="mr-2"
          />
          Option 1
          <input
            type="radio"
            id="field_7"
            {...register('field_7')}
            value="option_2"
            className="mr-2"
          />
          Option 2
        </div>
        {errors.field_7 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_7?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_8"
          className="block text-sm font-medium text-gray-700"
        >
          Field 8
        </label>

        {errors.field_8 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_8?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_9"
          className="block text-sm font-medium text-gray-700"
        >
          Field 9
        </label>
        <input
          type="date"
          id="field_9"
          {...register('field_9')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_9 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_9 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_9?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_10"
          className="block text-sm font-medium text-gray-700"
        >
          Field 10
        </label>
        <input
          type="time"
          id="field_10"
          {...register('field_10')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_10 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_10 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_10?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_11"
          className="block text-sm font-medium text-gray-700"
        >
          Field 11
        </label>
        <input
          type="file"
          id="field_11"
          {...register('field_11')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_11 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_11 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_11?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_12"
          className="block text-sm font-medium text-gray-700"
        >
          Field 12
        </label>
        <input
          type="color"
          id="field_12"
          {...register('field_12')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_12 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_12 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_12?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="field_13"
          className="block text-sm font-medium text-gray-700"
        >
          Field 13
        </label>
        <input
          type="range"
          id="field_13"
          {...register('field_13')}
          className={`mt-1  bg-white block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2   ${errors.field_13 ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} `}
        />
        {errors.field_13 && (
          <p className="text-sm text-red-500 mt-1">
            {errors?.field_13?.message}
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
