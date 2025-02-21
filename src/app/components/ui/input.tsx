import React from 'react';


const Input = React.forwardRef<HTMLInputElement,  React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;