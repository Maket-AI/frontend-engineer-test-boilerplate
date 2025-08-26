import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant to use
   */
  variant?: 'primary' | 'secondary' | 'destructive';
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button component for user interaction
 */
export const Button = ({
  variant = 'secondary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'flex h-10 items-center justify-center gap-1 rounded-full px-3.5 py-2 font-instrument font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-accent-blue-regular text-base-pure-white hover:bg-accent-blue-500 disabled:opacity-50',
    secondary: 'bg-base-pure-white text-base-black border border-base-grey-400 hover:bg-base-grey-50 disabled:opacity-50',
    destructive: 'bg-accent-red-regular text-base-pure-white hover:bg-accent-red-500 disabled:opacity-50'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
