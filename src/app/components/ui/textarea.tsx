import React from 'react';


const TextArea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;