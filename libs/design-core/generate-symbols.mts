import { transform } from '@svgr/core';
import path from 'path';
import { promises as fs } from 'fs';
import { toPascalCase } from '@ldls/utils-shared';
import { findFilesByExtension } from './src/utils/fs-utils.js';
import { parseCliArgs } from './src/utils/parse-cli-args.js';

const params = parseCliArgs(process.argv.slice(2));

if (!params.outputPath) {
  console.error('❌ Error: --outputPath parameter is required');
  process.exit(1);
}

if (!params.templatePath) {
  console.error('❌ Error: --templatePath parameter is required');
  process.exit(1);
}

const CWD = process.cwd();
const INPUT_DIR = path.join(CWD, 'libs/design-core/symbols');
const OUTPUT_DIR = path.resolve(CWD, params.outputPath);
const BARREL_FILE = path.join(OUTPUT_DIR, 'index.ts');
const isReactNative = params.isReactNative === 'true';

let iconTemplate: any;

if (params.templatePath) {
  const templatePath = path.resolve(CWD, params.templatePath);
  try {
    const templateModule = await import(templatePath);
    iconTemplate = templateModule.default || templateModule;
  } catch (error) {
    console.error(`❌ Error importing template from ${templatePath}:`, error);
    process.exit(1);
  }
}

const svgrConfig = {
  template: iconTemplate,
  typescript: true,
  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor',
    black: 'currentColor',
  },
  svgProps: {
    fill: 'currentColor',
  },
  icon: true,
  jsxRuntime: 'automatic' as const,
  expandProps: false,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  native: isReactNative,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default' as const,
        params: {
          overrides: {
            cleanupIds: false as const,
          },
        },
      },
      ...(isReactNative ? ['removeXMLNS' as const] : []),
    ],
  },
};

function pascalCasePath(relativePath: string): string {
  return relativePath.split(path.sep).map(toPascalCase).join(path.sep);
}

async function generateSymbols() {
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

  const exportPaths: { barrelExportPath: string; componentName: string }[] = [];

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
        .join(pascalCaseDir, componentName)
        .replace(/\\/g, '/');

      exportPaths.push({ barrelExportPath, componentName });
    } catch (error) {
      console.error(`❌ Failed to process ${svgFile}:`, error);
    }
  }
  console.log(`✅ Processed ${svgFiles.length} icons.`);

  const barrelCode = exportPaths
    .map(
      ({ componentName, barrelExportPath }) =>
        `export { ${componentName} } from './${barrelExportPath}';`,
    )
    .join('\n');

  await fs.writeFile(BARREL_FILE, barrelCode + '\n');
  console.log('📦 Created barrel file.');
  console.log('🎉 Symbol generation complete!');
}

try {
  await generateSymbols();
} catch (error) {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
}
