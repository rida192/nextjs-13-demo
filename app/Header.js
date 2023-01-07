import Link from "next/link";
const Header = () => {
  return (
    <header className="p-4 bg-blue-500 ">
      <Link
        href="/"
        className="py-1 px-2 bg-white rounded-md text-blue-500 mr-4"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="py-1 px-2 bg-white rounded-md text-blue-500"
      >
        todos
      </Link>
    </header>
  );
};

export default Header;
