/**
 * This file is based on gerard-figma's project: https://github.com/gerard-figma/figma-variables-to-styledictionary/
 * which is released under the MIT license.
 * Copyright 2013 gerard-figma
 */

import tokenFilesFromLocalVariables from './token-files-from-local-variables.js';
import tokenFileNameRenamer from './token-file-name-renamer.js';
import figmaApi from './api.js';
import * as fs from 'fs';

const outputDir = 'tokens';

function getEnvironmentVariables(): { figmaToken: string; fileKey: string } {
  const figmaToken = process.env.FIGMA_API_TOKEN;
  const fileKey = process.env.FIGMA_FILE_KEY;

  if (!figmaToken || !fileKey) {
    throw new Error(
      `Please set the FIGMA_API_TOKEN and FIGMA_FILE_KEY environment variables.`
    );
  }

  return { figmaToken, fileKey };
}

function writeFilesSync<T>(
  outputDir: string,
  filesDictionary: Record<string, T>
) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  Object.entries(filesDictionary).forEach(([fileName, fileContent]) => {
    fs.writeFileSync(
      `${outputDir}/${fileName}`,
      JSON.stringify(fileContent, null, 2)
    );
  });
}

async function exportDesignTokens() {  
  const { figmaToken, fileKey } = getEnvironmentVariables();
  const localVariables = await figmaApi.getLocalVariables(fileKey, figmaToken);

  const tokensFiles = tokenFilesFromLocalVariables(
    localVariables,
    tokenFileNameRenamer
  );

  writeFilesSync(outputDir, tokensFiles);
}

async function main() {
  await exportDesignTokens();
}

main();
