import { config } from 'dotenv';
import { mkdirSync } from 'fs';
import { dirname } from 'path';
import { ICONS_CANVAS } from 'src/config/symbols.js';
import { SYMBOLS_FILE_ID } from 'src/config/symbols.js';

config({ path: '../../../../.env' });

const downloadSvgs = async () => {
  // `figma-api-exporter` is a CommonJS module, so we need to import it dynamically
  const figmaModule = await import('figma-api-exporter');
  const figmaApiExporter = (figmaModule.default || figmaModule) as any;
  const exporter = figmaApiExporter(process.env.FIGMA_API_TOKEN);

  const svgsData = await exporter.getSvgs({
    fileId: SYMBOLS_FILE_ID,
    canvas: ICONS_CANVAS,
    component: ({ name }: { name: string }) => {
      return name.startsWith('16-XS-');
    }
  });
  
  console.log(`Found ${svgsData.svgs.length} icons`);

  const saveDirectory = './dist/symbols/icons';
  mkdirSync(dirname(saveDirectory), { recursive: true });

  await exporter.downloadSvgs({
    saveDirectory,
    svgsData: svgsData.svgs,
    lastModified: svgsData.lastModified,
  });

  console.log('Downloaded icons');
}

try {
  await downloadSvgs();
} catch (error) {
  console.error(error);
}
