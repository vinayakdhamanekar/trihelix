import React from "react";

/**
 * Renders values produced by the design export's helpers:
 *   - plain string
 *   - { __tag, __props, __html }   from br(...)    — element with raw HTML
 *   - { __tag, __props, __kids }   from paras(...) — element with children
 *   - arrays of any of the above
 * Keeping the real tag matters: paras() emits one <div> per line, and those
 * must stay block-level or the lines run together.
 */
type RichNode =
  | string
  | number
  | null
  | undefined
  | { __tag?: string; __props?: Record<string, unknown>; __html: string }
  | { __tag: string; __props?: Record<string, unknown>; __kids?: RichNode[] }
  | RichNode[];

function render(v: RichNode, key?: number): React.ReactNode {
  if (v === null || v === undefined) return null;
  if (typeof v === "string" || typeof v === "number") return v;
  if (Array.isArray(v)) {
    return v.map((c, i) => <React.Fragment key={i}>{render(c, i)}</React.Fragment>);
  }
  const props: Record<string, unknown> = { ...((v as { __props?: Record<string, unknown> }).__props ?? {}) };
  if (key !== undefined) props.key = key;
  if ("__html" in v && typeof v.__html === "string") {
    props.dangerouslySetInnerHTML = { __html: v.__html };
    return React.createElement((v as { __tag?: string }).__tag ?? "span", props);
  }
  if ("__tag" in v && v.__tag) {
    const kids = (v as { __kids?: RichNode[] }).__kids ?? [];
    return React.createElement(
      v.__tag,
      props,
      kids.length ? kids.map((c, i) => render(c, i)) : undefined,
    );
  }
  return null;
}

export default function Rich({ v }: { v: unknown }) {
  return <>{render(v as RichNode)}</>;
}
