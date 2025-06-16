import { config } from 'dotenv';
import { mkdirSync } from 'fs';
import { dirname } from 'path';
import { Node } from '@figma/rest-api-spec';
import { getSvgs } from '../figma/get-svgs.js';
import { downloadSvgs } from '../figma/download-svgs.js';

config({ path: '../../../../.env' });

const fileKey = process.env.FIGMA_SYMBOLS_FILE_ID;
const iconsCanvas = process.env.FIGMA_ICONS_CANVAS;
const iconsPrefix = process.env.FIGMA_ICONS_PREFIX;

if (!fileKey || !iconsCanvas || !iconsPrefix) {
  throw new Error(
    `Please set the FIGMA_SYMBOLS_FILE_ID, FIGMA_ICONS_CANVAS and FIGMA_ICONS_PREFIX environment variables.`
  );
}

const generateSvgs = async () => {
  const svgsData = await getSvgs({
    fileId: fileKey,
    canvas: iconsCanvas,
    component: ({ name, type }: Node) => {
      return name.startsWith(iconsPrefix) || type !== 'COMPONENT';
    },
  });

  console.log(`Found ${svgsData.svgs.length} icons`);

  const saveDirectory = './dist/symbols/icons';
  mkdirSync(dirname(saveDirectory), { recursive: true });

  await downloadSvgs({
    saveDirectory,
    svgsData: svgsData.svgs,
    lastModified: svgsData.lastModified,
    prefix: iconsPrefix,
    forceDownload: true,
  });

  console.log('Downloaded icons');
};

try {
  await generateSvgs();
} catch (error) {
  console.error(error);
}
