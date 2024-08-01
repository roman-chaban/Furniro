import type { CSSProperties, FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  id,
  style,
}) => {
  return (
    <button id={id} type={type} className={className} style={style}>
      {children}
    </button>
  );
};
