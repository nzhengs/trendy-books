import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook, screen } from '@testing-library/react';
import type { PropsWithChildren, ReactNode } from 'react';
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router';

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
 * @param renderQuery
 */
export const renderHookWithQuery = <TResult, TProps>(
  renderQuery: (initialProps: TProps) => TResult,
) => renderHook(renderQuery, { wrapper: ApiTestProviders });

// Ref: https://github.com/TanStack/router/discussions/655
// Ref: https://dev.to/saltorgil/testing-tanstack-router-4io3
// Ref: https://dev.to/daelmaak/how-to-test-tanstack-router-4f51
/**
 * Renders a React component with TanStack Router and Query Client providers.
 * @param ui
 */
export const renderWithProviders = async (ui: ReactNode) => {
  // Root route with minimal Outlet for rendering child routes
  const rootRoute = createRootRoute({
    component: () => (
      <>
        <div data-testid="root-layout"></div>
        <Outlet />
      </>
    ),
  });

  // Index route so '/' always matches
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <>{ui}</>,
  });

  // Create the router instance with memory history
  const router = createRouter({
    routeTree: rootRoute.addChildren([indexRoute]),
    defaultPendingMinMs: 0,
  });

  const queryClient = createQueryClient();
  const testApp = (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );

  // Render and wait for the route to resolve and the component to mount
  const view = render(testApp);
  await screen.findByTestId('root-layout');

  return view;
};
