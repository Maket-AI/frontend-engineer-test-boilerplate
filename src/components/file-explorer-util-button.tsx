import React from 'react';

export type FileExplorerUtilButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FileExplorerUtilButton = ({
  children,
  className = '',
  ...props
}: FileExplorerUtilButtonProps) => {
  return (
    <button
      className={`items-center rounded-full px-[10px] py-[6px] font-instrument text-[11px] font-medium leading-4
                  bg-base-pure-white text-base-grey-900 border border-base-grey-400 hover:bg-base-grey-50 disabled:opacity-50
                  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
