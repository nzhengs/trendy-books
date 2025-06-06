import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto px-4 lg:px-4 xl:px-0 my-4 max-w-5xl overflow-scroll font-serif">
        <Outlet />
      </main>
    </div>
  ),
});
