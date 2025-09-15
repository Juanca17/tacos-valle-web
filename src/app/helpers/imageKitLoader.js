// utils/imageKitLoader.js
export function imageKitLoader({ src, width, quality }) {
  const q = quality || 75;
  return `https://ik.imagekit.io/qrtbcc020/${src}?tr=w-${width},q-${q},f-auto,dpr-auto`;
}
