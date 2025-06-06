import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <header className="sticky z-50 w-full border-b font-mono font-bold top-0 bg-teal-50">
      <nav>
        <div className="px-4 xl:px-0 flex items-center justify-start h-12 max-w-5xl mx-auto">
          <Link to="/">Trendy Books</Link>
        </div>
      </nav>
    </header>
  );
};
