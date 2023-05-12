export function Cross({ className, color }: { className?: string, color?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_100_1736)">
        <path
          d="M21 7L7 21"
          stroke={color || "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 7L21 21"
          stroke={color || "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_100_1736">
          <rect width="28" height="28" fill={color || "white"} />
        </clipPath>
      </defs>
    </svg>
  );
}
