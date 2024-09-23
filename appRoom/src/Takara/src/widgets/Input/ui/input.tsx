import React, { FC } from 'react';

export const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ required = false, ...props }) => {
  return <input  required={required} {...props} />;
};
