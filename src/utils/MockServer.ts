import { setupServer } from 'msw/node';
import { graphql, HttpResponse, type JsonBodyType } from 'msw';
import type { DocumentNode } from 'graphql/language';

export const server = setupServer();

export const mockQuery = (
  queryDoc: DocumentNode,
  response: JsonBodyType,
  responseInit: ResponseInit = { status: 200 },
) =>
  server.use(
    graphql.query(
      queryDoc,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      () => HttpResponse.json(response as any, responseInit), // as any because GraphQLResponseBody is not exposed from msw
    ),
  );
