import {
  GetLocalVariablesResponse,
  GetFileStylesResponse,
  GetFileNodesResponse,
} from '@figma/rest-api-spec';
import fetch from 'node-fetch';

interface CallFigmaAPIOptions {
  apiPath: string;
  method?: string;
  token: string;
}

async function callFigmaAPI<T>({
  apiPath,
  method = 'GET',
  token,
}: CallFigmaAPIOptions): Promise<T> {
  const baseURL = 'https://api.figma.com';
  const response = await fetch(`${baseURL}/${apiPath}`, {
    method,
    headers: {
      Accept: '*/*',
      'X-Figma-Token': token,
    },
  });

  if (!response.ok) {
    throw new Error(`Error while calling ${apiPath}: ${response.statusText}`);
  }
  return (await response.json()) as T;
}

async function getLocalVariables(
  fileKey: string,
  figmaToken: string
): Promise<GetLocalVariablesResponse> {
  return callFigmaAPI<GetLocalVariablesResponse>({
    apiPath: `v1/files/${fileKey}/variables/local`,
    token: figmaToken,
  });
}

async function getStylesMetadata(
  fileKey: string,
  figmaToken: string
): Promise<GetFileStylesResponse> {
  return callFigmaAPI<GetFileStylesResponse>({
    apiPath: `v1/files/${fileKey}/styles`,
    token: figmaToken,
  });
}

async function getFileNodes(
  fileKey: string,
  figmaToken: string,
  nodes: string[]
): Promise<GetFileNodesResponse> {
  if (!nodes.length) {
    throw new Error('No nodes provided to fetch styles metadata.');
  }
  return callFigmaAPI<GetFileNodesResponse>({
    apiPath: `v1/files/${fileKey}/nodes?ids=${nodes.join(',')}`,
    token: figmaToken,
  });
}

export default {
  getLocalVariables,
  getStylesMetadata,
  getFileNodes,
};
