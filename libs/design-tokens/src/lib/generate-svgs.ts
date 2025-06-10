import { config } from 'dotenv';
import { mkdirSync } from 'fs';
import { dirname } from 'path';
import { Node } from '@figma/rest-api-spec';
import { ICONS_CANVAS } from '../config/symbols.js';
import { SYMBOLS_FILE_ID } from '../config/symbols.js';
import { getSvgs } from '../figma/get-svgs.js';
import { downloadSvgs } from '../figma/download-svgs.js';

config({ path: '../../../../.env' });

const generateSvgs = async () => {
  const svgsData = await getSvgs({
    fileId: SYMBOLS_FILE_ID,
    canvas: ICONS_CANVAS,
    component: ({ name, type }: Node) => {
      return name.startsWith('16-XS-') || type !== 'COMPONENT';
    },
  });

  console.log(`Found ${svgsData.svgs.length} icons`);

  const saveDirectory = './dist/symbols/icons';
  mkdirSync(dirname(saveDirectory), { recursive: true });

  await downloadSvgs({
    saveDirectory,
    svgsData: svgsData.svgs,
    lastModified: svgsData.lastModified,
  });

  console.log('Downloaded icons');
};

try {
  await generateSvgs();
} catch (error) {
  console.error(error);
}
