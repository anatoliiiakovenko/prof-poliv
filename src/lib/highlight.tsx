import React from "react";

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

interface HighlightTextProps {
  text: string;
  query: string;
}

/**
 * Highlights all occurrences of every query token within text.
 * Used in the global search dropdown and search results page.
 */
export function HighlightText({ text, query }: HighlightTextProps) {
  const q = query.trim();
  if (!q) return <>{text}</>;

  const tokens = q.split(/\s+/).filter(Boolean).map(escapeRegExp);
  if (!tokens.length) return <>{text}</>;

  const re = new RegExp(`(${tokens.join("|")})`, "ig");
  const parts: { text: string; match: boolean }[] = [];

  let lastIdx = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIdx) {
      parts.push({ text: text.slice(lastIdx, m.index), match: false });
    }
    parts.push({ text: m[0], match: true });
    lastIdx = m.index + m[0].length;
    if (m[0].length === 0) re.lastIndex++;
  }
  if (lastIdx < text.length) {
    parts.push({ text: text.slice(lastIdx), match: false });
  }

  return (
    <>
      {parts.map((p, i) =>
        p.match ? (
          <mark
            key={i}
            className="bg-green-200 text-inherit p-0 rounded-sm"
          >
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}
