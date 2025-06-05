import figmaApi from './api.js';
import getEnvironmentVariables from './get-environment-variables.js';
import generateCodeSyntaxUpdatePayload from './local-variables-code-syntax.js';
import * as fs from 'fs';

async function generateCodeSyntaxPayload() {
  const { figmaToken, fileKey } = getEnvironmentVariables();
  const localVariables = await figmaApi.getLocalVariables(fileKey, figmaToken);

  fs.writeFileSync(
    `local-variables.json`,
    JSON.stringify(localVariables, null, 2)
  );

  const filteredVariables = generateCodeSyntaxUpdatePayload(localVariables);

  fs.writeFileSync(
    `local-variables-update-payload.json`,
    JSON.stringify(filteredVariables, null, 2)
  );
}

async function main() {
  await generateCodeSyntaxPayload()
}

main();
