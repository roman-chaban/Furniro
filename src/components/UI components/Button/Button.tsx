import type { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  className: string;
  id?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, type, id }) => {
  return (
    <button id={id} type={type} className={className}>
      {children}
    </button>
  );
};
