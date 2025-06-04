import { GraphQLClient } from 'graphql-request';

// Ref: https://docs.hardcover.app/api/getting-started/

const endpoint = 'https://api.hardcover.app/v1/graphql';
const authorization = import.meta.env.VITE_HARDCOVER_API_KEY;

console.assert(
  Boolean(authorization),
  'VITE_HARDCOVER_API_KEY is not defined. Please set the api key on .env.local file.',
);

export const hardcoverClient = new GraphQLClient(endpoint, {
  headers: { authorization },
});
