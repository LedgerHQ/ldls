import {
  LocalVariable,
  GetLocalVariablesResponse
} from '@figma/rest-api-spec';

export function findVariablesEndingByDefault(
  variables: LocalVariable[]
): LocalVariable[] {
  return variables.filter(
    (variable) => variable.name.toLowerCase().endsWith('/default')
  );
}

export function codeSyntaxFromVariableNameEndingByDefault(
  name: string
): string {
  let cssVariableName = name.toLowerCase();
  while (cssVariableName.endsWith('/default')) {
    cssVariableName = cssVariableName.replace(/\/default$/, '');
  }
  cssVariableName = cssVariableName.replace(/\//g, '-').replace(/\s/g, '-');

  return `var(--${cssVariableName})`;
}

export default function codeSyntaxtUpdatePayload(localVariables: GetLocalVariablesResponse) {
  return findVariablesEndingByDefault(Object.values(localVariables.meta.variables))
  .map((variable) => {
    return {
      variableId: variable.id,
      name: variable.name,
      codeSyntax: codeSyntaxFromVariableNameEndingByDefault(variable.name),
      action: 'UPDATE',
    }
  })

}