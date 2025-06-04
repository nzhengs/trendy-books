import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';

const createQueryClient = () =>
  new QueryClient({ defaultOptions: { queries: { retry: false } } });

const ApiTestProviders = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={createQueryClient()}>
    {children}
  </QueryClientProvider>
);

/**
 * Renders a hook with a query client wrapper.
 * Similar to renderHook from @testing-library/react-hooks, but with a query client wrapper.
 * @param render
 */
export const renderHookWithQuery = <TResult, TProps>(
  render: (initialProps: TProps) => TResult,
) => renderHook(render, { wrapper: ApiTestProviders });
