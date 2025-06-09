import {
  GetLocalVariablesResponse,
  GetFileStylesResponse,
  GetFileNodesResponse,
  PostVariablesResponse,
  PostVariablesRequestBody,
} from '@figma/rest-api-spec';
import fetch from 'node-fetch';

interface CallFigmaAPIOptions {
  apiPath: string;
  method?: string;
  token: string;
  body?: Record<string, unknown>;
}

async function callFigmaAPI<T>({
  apiPath,
  method = 'GET',
  token,
  body = undefined,
}: CallFigmaAPIOptions): Promise<T> {
  const baseURL = 'https://api.figma.com';
  const response = await fetch(`${baseURL}/${apiPath}`, {
    method,
    headers: {
      ...(method === 'POST'
        ? {
            'Content-Type': 'application/json',
          }
        : {
            Accept: '*/*',
          }),
      'X-Figma-Token': token,
    },
    ...(method === 'POST' && body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    throw new Error(
      `Error while calling ${method}: ${apiPath}: ${response.status} ${response.statusText}`
    );
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

async function postVariables(
  fileKey: string,
  figmaToken: string,
  body: PostVariablesRequestBody
): Promise<PostVariablesResponse> {
  return callFigmaAPI<PostVariablesResponse>({
    method: 'POST',
    apiPath: `v1/files/${fileKey}/variables`,
    token: figmaToken,
    body,
  });
}

export default {
  getLocalVariables,
  getStylesMetadata,
  getFileNodes,
  postVariables,
};
