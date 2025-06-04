import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className=" w-full border-b">
      <nav>
        <div className="px-4 md:px-0 flex items-center justify-start h-12 sticky max-w-5xl mx-auto ">
          <Link to="/">Trending Books</Link>
        </div>
      </nav>
    </header>
  );
}
