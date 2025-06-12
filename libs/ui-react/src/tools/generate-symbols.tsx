import { transform } from '@svgr/core';
import path from 'path';
import { promises as fs } from 'fs';
import { toPascalCase } from '../utils/string-utils';
import { findFilesByExtension } from '../utils/fs-utils';
// import iconTemplate from './icon-template'; // Assuming you have the template from the previous example

const CWD = process.cwd();
const INPUT_DIR = path.join(CWD, 'libs/design-tokens/dist');
const OUTPUT_DIR = path.join(CWD, 'libs/ui-react/src/lib');
const BARREL_FILE = path.join(CWD, 'libs/ui-react/src/Symbols/index.ts');

const svgrConfig = {
  // template: iconTemplate,
  typescript: true,
  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor',
    'black': 'currentColor',
  },
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: { overrides: { removeViewBox: false } },
      } as const,
      { name: 'removeDimensions' } as const,
    ],
  },
  icon: true,
  ref: true,
};

function pascalCasePath(relativePath: string): string {
  return relativePath
    .split(path.sep)
    .map(toPascalCase)
    .join(path.sep);
}

async function generateIcons() {
  console.log('🔥 Starting symbol generation...');

  await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  console.log('🧹 Cleaned output directory.');

  const svgFiles = await findFilesByExtension(INPUT_DIR, '.svg');

  if (svgFiles.length === 0) {
    console.warn('⚠️ No SVG files found. Exiting.');
    await fs.writeFile(BARREL_FILE, '\n');
    return;
  }

  console.log(`🔎 Found ${svgFiles.length} SVG files to process.`);

  const exportPaths: string[] = [];

  for (const svgFile of svgFiles) {
    const relativeSvgPath = path.relative(INPUT_DIR, svgFile);
    const relativeDir = path.dirname(relativeSvgPath);
    const pascalCaseDir = pascalCasePath(relativeDir);
    const finalOutputDir = path.join(OUTPUT_DIR, pascalCaseDir);

    const baseName = path.basename(svgFile, '.svg');
    const componentName = toPascalCase(baseName);

    try {
      const svgCode = await fs.readFile(svgFile, 'utf-8');
      const componentCode = await transform(svgCode, svgrConfig, {
        componentName,
      });

      await fs.mkdir(finalOutputDir, { recursive: true });

      const outputFilePath = path.join(finalOutputDir, `${componentName}.tsx`);
      await fs.writeFile(outputFilePath, componentCode);

      const barrelExportPath = path
        .join('./lib', pascalCaseDir, componentName)
        .replace(/\\/g, '/');

      exportPaths.push(barrelExportPath);
    } catch (error) {
      console.error(`❌ Failed to process ${svgFile}:`, error);
    }
  }
  console.log(`✅ Processed ${svgFiles.length} icons.`);

  const barrelCode = exportPaths
    .map((exportPath) => `export * from '${exportPath}';`)
    .join('\n');

  await fs.writeFile(BARREL_FILE, barrelCode + '\n');
  console.log('📦 Created barrel file with preserved structure.');
  console.log('🎉 Icon generation complete!');
}

try {
  generateIcons();
} catch (error) {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
}
