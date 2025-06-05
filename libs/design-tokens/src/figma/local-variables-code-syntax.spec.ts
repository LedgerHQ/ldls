import { it, expect } from 'vitest';
import figmaApiMock from './api-mock.js';
import {
  findVariablesEndingByDefault,
  codeSyntaxFromVariableNameEndingByDefault,
} from './local-variables-code-syntax.js';
import { describe } from 'node:test';

describe('transform code syntax', () => {
  it('find variables ending with default', async () => {
    const localVariablesMockResponse =
      await figmaApiMock.getMocksFromFileSystem(
        'get-local-variables-response.json'
      );
    const filteredVariables = findVariablesEndingByDefault(
      Object.values(localVariablesMockResponse.meta.variables)
    );

    expect(filteredVariables.length).toBe(4);
    expect(filteredVariables.map((variable) => variable.name).sort()).toEqual([
      'Background/Drawer/default',
      'Border Width/Default',
      'Content/Interactive/Inverted/Default',
      'Surface/Default/Default/Default',
    ]);
  });

  it('create code syntax by removing default', () => {
    expect(
      codeSyntaxFromVariableNameEndingByDefault(
        'Content/Interactive/Inverted/Default'
      )
    ).toBe('var(--content-interactive-inverted)');

    expect(
      codeSyntaxFromVariableNameEndingByDefault(
        'Surface/Default/Default/Default'
      )
    ).toBe('var(--surface)');

    expect(
      codeSyntaxFromVariableNameEndingByDefault('Border Width/Default')
    ).toBe('var(--border-width)');

    expect(
      codeSyntaxFromVariableNameEndingByDefault(
        'Surface/Do Not Remove Default/Default'
      )
    ).toBe('var(--surface-do-not-remove-default)');
  });
});
