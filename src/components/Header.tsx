import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <header className=" w-full border-b font-mono font-bold">
      <nav>
        <div className="px-4 xl:px-0 flex items-center justify-start h-12 sticky max-w-5xl mx-auto ">
          <Link to="/">Trendy Books</Link>
        </div>
      </nav>
    </header>
  );
};
