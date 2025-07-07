/**
 * This file is based on gerard-figma's project: https://github.com/gerard-figma/figma-variables-to-styledictionary/
 * which is released under the MIT license.
 * Copyright 2013 gerard-figma
 */

import tokenFilesFromLocalVariables from './token-files-from-local-variables.js';
import tokenFileNameRenamer from './token-file-name-renamer.js';
import figmaApi from './api.js';
import * as fs from 'fs';
import getEnvironmentVariables from './get-environment-variables.js';

const outputDir = 'tokens';

function writeFilesSync<T>(
  outputDir: string,
  filesDictionary: Record<string, T>,
) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  Object.entries(filesDictionary).forEach(([fileName, fileContent]) => {
    fs.writeFileSync(
      `${outputDir}/${fileName}`,
      JSON.stringify(fileContent, null, 2),
    );
  });
}

async function exportDesignTokens() {
  const { figmaToken, fileKey } = getEnvironmentVariables();
  const localVariables = await figmaApi.getLocalVariables(fileKey, figmaToken);

  const tokensFiles = tokenFilesFromLocalVariables(
    localVariables,
    tokenFileNameRenamer,
  );

  writeFilesSync(outputDir, tokensFiles);
}

async function main() {
  await exportDesignTokens();
}

main();
