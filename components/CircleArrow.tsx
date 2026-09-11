/**
 * The carousel arrow, drawn rather than loaded.
 *
 * It used to be a 57px WebP shown at 58px. On a 1440-wide canvas that is
 * already a slight upscale, and the canvas zooms with the window — on a 1920
 * display the same 57px bitmap is stretched to 77px and the circle goes ragged.
 * As a vector it re-renders at whatever size the zoom asks for.
 *
 * Geometry traced from assets/icon-arrow-right.webp: a 1px ring at r=27.5 in a
 * 58px box, with the chevron between x=24 and x=34.
 */
export default function CircleArrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className="circle-arrow"
      width="58" height="58" viewBox="0 0 58 58" aria-hidden="true"
      style={{ display: "block", transform: dir === "left" ? "scaleX(-1)" : undefined }}
    >
      <circle className="ca-ring" cx="29" cy="29" r="27.5" fill="none" stroke="#ffffff" strokeWidth="1" />
      <path
        className="ca-chevron"
        d="M24 19 L34 29 L24 39"
        fill="none" stroke="#ffffff" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
