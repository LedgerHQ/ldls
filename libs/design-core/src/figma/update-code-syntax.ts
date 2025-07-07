import figmaApi from './api.js';
import getEnvironmentVariables from './get-environment-variables.js';
import codeSyntaxUpdateBody from './local-variables-code-syntax.js';

async function updateCodeSyntax() {
  const { figmaToken, fileKey } = getEnvironmentVariables();
  const localVariables = await figmaApi.getLocalVariables(fileKey, figmaToken);
  const variablesChangeBody = codeSyntaxUpdateBody(localVariables);

  if (variablesChangeBody?.variables?.length) {
    console.log(
      `Code Syntax: Updating ${variablesChangeBody?.variables?.length} variables...`,
    );
    figmaApi.postVariables(fileKey, figmaToken, variablesChangeBody);
  } else {
    console.log('Code Syntax: No variables to update');
  }
}

async function main() {
  await updateCodeSyntax();
}

main();
