export function Burger({ className, color }: { className?: string, color?: string }) {
  return (
    <svg
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_624_1000)">
        <path
          d="M4 5.25H20"
          stroke={color || "#282828"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 10.5H20"
          stroke={color || "#282828"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 15.75H20"
          stroke={color || "#282828"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_624_1000">
          <rect width="24" height="21" fill={color || "white"} />
        </clipPath>
      </defs>
    </svg>
  );
}
