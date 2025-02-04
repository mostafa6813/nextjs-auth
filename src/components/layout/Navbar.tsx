import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { cookies } from "next/headers";

export const Navbar = () => {
  const token = cookies().get("token");

  return (
    <nav className="bg-slate-700">
      <ul className="flex items-center gap-2 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-800">
        <li>
          <Link
            href="/"
            className="px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className="px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
          >
            About us
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/dashboard"
            className="bg-slate-900 px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <LoginButton token={token?.value} />
        </li>
      </ul>
    </nav>
  );
};
