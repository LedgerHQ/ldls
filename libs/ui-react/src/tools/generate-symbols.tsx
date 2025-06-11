import { transform } from '@svgr/core';
import { glob } from 'glob';
import camelcase from 'camelcase';
import path from 'path';
import fs from 'fs-extra';
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
      },
      { name: 'removeDimensions' },
    ],
  },
  icon: true,
  ref: true,
};

/**
 * Transforms a kebab-case or snake_case path into a PascalCase path.
 * e.g. 'symbols/crypto-icons' -> 'Symbols/CryptoIcons'
 */
function pascalCasePath(relativePath: string): string {
  return relativePath
    .split(path.sep)
    .map((segment) => camelcase(segment, { pascalCase: true }))
    .join(path.sep);
}

async function generateIcons() {
  console.log('🔥 Starting symbol generation...');

  await fs.emptyDir(OUTPUT_DIR);
  console.log('🧹 Cleaned output directory.');

  // 2. Find all SVG files recursively within the input directory
  const svgFiles = await glob(`${INPUT_DIR}/**/*.svg`);
  if (svgFiles.length === 0) {
    console.warn('⚠️ No SVG files found. Exiting.');
    // Ensure barrel file is empty if no icons are found
    await fs.writeFile(BARREL_FILE, '\n');
    return;
  }
  console.log(`🔎 Found ${svgFiles.length} SVG files to process.`);

  const exportPaths: string[] = [];

  // 3. Process each SVG file
  for (const svgFile of svgFiles) {
    // Get the path relative to the input base directory
    // e.g., 'symbols/icons/my-icon.svg'
    const relativeSvgPath = path.relative(INPUT_DIR, svgFile);

    // Get the directory part of the relative path
    // e.g., 'symbols/icons'
    const relativeDir = path.dirname(relativeSvgPath);

    // Transform the directory path to PascalCase
    // e.g., 'Symbols/Icons'
    const pascalCaseDir = pascalCasePath(relativeDir);

    // Determine the final output directory for this component
    const finalOutputDir = path.join(OUTPUT_DIR, pascalCaseDir);

    // Transform the SVG filename to a PascalCase component name
    const baseName = path.basename(svgFile, '.svg');
    const componentName = camelcase(baseName, { pascalCase: true });

    try {
      const svgCode = await fs.readFile(svgFile, 'utf-8');
      const componentCode = await transform(svgCode, svgrConfig, {
        componentName,
      });

      // Ensure the target directory exists before writing the file
      await fs.ensureDir(finalOutputDir);

      const outputFilePath = path.join(finalOutputDir, `${componentName}.tsx`);
      await fs.writeFile(outputFilePath, componentCode);

      // Store the relative path for the barrel file export, without the file extension
      const barrelExportPath = path
        .join('./lib', pascalCaseDir, componentName)
        // Use forward slashes for ES module imports, regardless of OS
        .replace(/\\/g, '/');

      exportPaths.push(barrelExportPath);
    } catch (error) {
      console.error(`❌ Failed to process ${svgFile}:`, error);
    }
  }
  console.log(`✅ Processed ${svgFiles.length} icons.`);

  // 4. Create the barrel file (index.ts) with correct relative paths
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
