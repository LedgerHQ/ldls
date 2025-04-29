/**
 * This file is based on gerard-figma's project: https://github.com/gerard-figma/figma-variables-to-styledictionary/
 * which is released under the MIT license.
 * Copyright 2013 gerard-figma
 */

export interface Token {
  $type: 'color' | 'number' | 'string' | 'boolean';
  $value: string | number | boolean;
}

type TokenOrTokenGroup =
  | Token
  | ({
      [tokenName: string]: Token;
    } & { $type?: never; $value?: never });

export type TokenFileContent = {
  [key: string]: TokenOrTokenGroup;
};

export type LocalVariableCollectionMode = {
  modeId: string;
  name: string;
};
