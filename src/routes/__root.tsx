import {
  Outlet,
  createRootRoute,
} from '@tanstack/react-router';
import { Header } from '@/components/Header';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="mx-auto px-4 lg:px-4 xl:px-0 my-4 max-w-5xl mt-12 overflow-hidden font-serif">
        <Outlet />
      </div>
    </>
  ),
});
