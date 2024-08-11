import type { CSSProperties, FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  id,
  style,
  onClick,
}) => {
  return (
    <button
      id={id}
      type={type}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
