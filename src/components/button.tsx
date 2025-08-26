import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex h-8 items-center justify-center gap-1 rounded-full px-[13px] py-1 font-instrument text-xs font-medium transition-colors 
                  bg-accent-blue-regular text-base-pure-white hover:bg-accent-blue-500 disabled:opacity-50
                  ${className}
                `}
      {...props}
    >
      {children}
    </button>
  );
};
