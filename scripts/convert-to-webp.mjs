/**
 * VendShop — convert-to-webp.mjs
 *
 * Converts all images in public/images/ to .webp format.
 *
 * Usage:
 *   node scripts/convert-to-webp.mjs
 *
 * Requirements:
 *   pnpm add -D sharp
 */

import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { createWriteStream, existsSync, mkdirSync } from 'fs';

const INPUT_DIR = 'public/images';
const QUALITY = 82;
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

// Lazily import sharp so the script gives a clear message if not installed
async function getSharp() {
  try {
    const { default: sharp } = await import('sharp');
    return sharp;
  } catch {
    console.error('❌  sharp is not installed. Run: pnpm add -D sharp');
    process.exit(1);
  }
}

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(full)));
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const sharp = await getSharp();

  if (!existsSync(INPUT_DIR)) {
    console.error(`❌  Directory ${INPUT_DIR} not found.`);
    process.exit(1);
  }

  const files = await getFiles(INPUT_DIR);

  if (files.length === 0) {
    console.log('ℹ️  No images found to convert.');
    return;
  }

  console.log(`🔄  Converting ${files.length} image(s) to WebP (quality ${QUALITY})...\n`);

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const outPath = file.replace(ext, '.webp');

    if (outPath === file) {
      // Already .webp — re-encode to ensure quality
    }

    try {
      await sharp(file)
        .webp({ quality: QUALITY })
        .toFile(outPath + '.tmp');

      // Rename tmp to final (handles same-extension case safely)
      const { rename } = await import('fs/promises');
      await rename(outPath + '.tmp', outPath);

      const inSize = (await stat(file)).size;
      const outSize = (await stat(outPath)).size;
      const saving = (((inSize - outSize) / inSize) * 100).toFixed(1);

      console.log(
        `  ✅  ${basename(file).padEnd(30)} → ${basename(outPath)}  (${saving}% smaller)`
      );
    } catch (err) {
      console.error(`  ❌  Failed: ${file}`, err.message);
    }
  }

  console.log('\n✨  Done. Update USE_LOCAL_IMAGES = true in lib/constants.ts\n');
}

main();
