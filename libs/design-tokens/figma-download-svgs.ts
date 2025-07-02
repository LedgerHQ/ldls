import { config } from 'dotenv';
import { mkdirSync } from 'fs';
import { dirname } from 'path';
import { getSvgs } from './src/figma/get-svgs.js';
import { downloadSvgs } from './src/figma/download-svgs.js';

config({ path: '../../../../.env' });

const fileKey = process.env.FIGMA_SYMBOLS_FILE_ID;
const iconsCanvas = process.env.FIGMA_ICONS_CANVAS;

if (!fileKey || !iconsCanvas) {
  throw new Error(
    `Please set the FIGMA_SYMBOLS_FILE_ID and FIGMA_ICONS_CANVAS environment variables.`,
  );
}

const figmaDownloadSvgs = async () => {
  const svgsData = await getSvgs({
    fileId: fileKey,
    canvas: iconsCanvas,
  });

  console.log(`🔎 Found ${svgsData.svgs.length} icons`);

  const saveDirectory = './symbols/icons';
  mkdirSync(dirname(saveDirectory), { recursive: true });

  await downloadSvgs({
    saveDirectory,
    svgsData: svgsData.svgs,
    lastModified: svgsData.lastModified,
    forceDownload: true,
    clearDirectory: true,
  });

  console.log('✅ Downloaded icons');
};

try {
  await figmaDownloadSvgs();
} catch (error) {
  console.error(error);
}
