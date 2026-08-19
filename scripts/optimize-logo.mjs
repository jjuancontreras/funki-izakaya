import sharp from "sharp";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const logoIn = path.join(root, "public/images/brand/logo.png");

const trimmed = sharp(logoIn).trim({ background: "#0a0a0a", threshold: 20 });
const buf = await trimmed.png().toBuffer();
const meta = await sharp(buf).metadata();
console.log("trimmed size", meta.width, meta.height);

await sharp(buf)
  .resize({ width: 1000 })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(path.join(root, "public/images/brand/logo-final.png"));

console.log("done");
