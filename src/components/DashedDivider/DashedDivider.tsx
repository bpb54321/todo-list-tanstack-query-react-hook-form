export function DashedDivider() {
  return (
    <svg role="separator" width="100%" height="1" style={{ display: "block" }}>
      <line
        x1="0"
        y1="0.5"
        x2="100%"
        y2="0.5"
        stroke="rgb(222, 226, 230)"
        strokeDasharray="12 12"
      />
    </svg>
  );
}
