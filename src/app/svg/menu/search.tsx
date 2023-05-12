export function Search({ className, color }: { className?: string, color?: string }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.0039 17.3447C13.8699 17.3447 17.0039 14.2107 17.0039 10.3447C17.0039 6.47873 13.8699 3.34473 10.0039 3.34473C6.13791 3.34473 3.00391 6.47873 3.00391 10.3447C3.00391 14.2107 6.13791 17.3447 10.0039 17.3447Z"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0039 21.3447L15.0039 15.3447"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
