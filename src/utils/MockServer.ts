import { setupServer } from 'msw/node';
import type { DocumentNode } from 'graphql/language';
import { graphql, HttpResponse, type JsonBodyType } from 'msw';

export const server = setupServer();

export const mockQuery = (
  queryDoc: DocumentNode,
  response: JsonBodyType,
) =>
  server.use(graphql.query(queryDoc, () => HttpResponse.json(response as any)));
