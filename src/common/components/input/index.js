import { forwardRef } from "react";

const Input = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <div className="relative">
      {label ? (
        <label htmlFor={label} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <div className="mt-1">
        <input
          ref={ref}
          id={label}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          {...props}
        />
      </div>
      {error ? (
        <p className="text-red-500 font-medium text-xs absolute right-0 -bottom-4">
          {error?.message}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
