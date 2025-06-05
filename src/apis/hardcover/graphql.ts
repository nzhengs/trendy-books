// ref: https://gql-tada.0no.co/get-started/installation#initializing-gql-tada-manually

import { initGraphQLTada } from 'gql.tada';
import type { introspection } from './graphql-env';

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    numeric: number;
  };
}>();

export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
export { readFragment } from 'gql.tada';
