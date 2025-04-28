/**
 * This file is based on gerard-figma's project: https://github.com/gerard-figma/figma-variables-to-styledictionary/
 * which is released under the MIT license.
 * Copyright 2013 gerard-figma
 */

import tokenFilesFromLocalVariables from './token-files-from-local-variables.js';
import figmaApi from './api-mock.js';
import * as fs from 'fs';

async function main() {
  const localVariables = await figmaApi.getLocalVariables(
    'local-variables-response.json'
  );
  const tokensFiles = tokenFilesFromLocalVariables(localVariables);

  const outputDir = 'tokens';

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  Object.entries(tokensFiles).forEach(([fileName, fileContent]) => {
    fs.writeFileSync(
      `${outputDir}/${fileName}`,
      JSON.stringify(fileContent, null, 2)
    );
  });
}

main();
