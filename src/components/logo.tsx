import { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 40 18"
      fill="none"
      {...props}
    >
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#a)"
        clipRule="evenodd"
      >
        <path d="M0 15.76a1.69 1.69 0 0 0 3.378 0V1.69A1.69 1.69 0 1 0 0 1.69v14.07ZM13.778 15.76a1.689 1.689 0 0 0 3.377 0V1.69a1.689 1.689 0 1 0-3.377 0V15.76ZM31.12 9.25a1.1 1.1 0 0 1 1.42 0l6.149 5.203a1.449 1.449 0 1 1-1.873 2.21l-4.296-3.645a1.078 1.078 0 0 0-1.386-.007l-4.408 3.666a1.416 1.416 0 0 1-1.82-2.17l6.214-5.256Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h40v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
