export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function channel(c: number) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

export function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrast(a: string, b: string) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

export function ratioLabel(r: number) {
  return `${r.toFixed(2)}:1`;
}

export type Verdict = { normal: "AAA" | "AA" | "FAIL"; large: "AAA" | "AA" | "FAIL" };

export function verdict(r: number): Verdict {
  return {
    normal: r >= 7 ? "AAA" : r >= 4.5 ? "AA" : "FAIL",
    large: r >= 4.5 ? "AAA" : r >= 3 ? "AA" : "FAIL",
  };
}

export function isLight(hex: string) {
  return luminance(hex) > 0.4;
}
