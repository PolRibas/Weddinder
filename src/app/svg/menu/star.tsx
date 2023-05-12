export function Star({ className }: { className?: string }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_530_10864)">
        <path
          d="M12.2664 18.25L6.09444 21.495L7.27344 14.622L2.27344 9.75495L9.17344 8.75495L12.2594 2.50195L15.3454 8.75495L22.2454 9.75495L17.2454 14.622L18.4244 21.495L12.2664 18.25Z"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_530_10864">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.266602 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
