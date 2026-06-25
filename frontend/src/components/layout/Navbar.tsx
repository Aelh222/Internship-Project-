import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/pfl-logo.png"
            alt="Phones Fair Lebanon"
            className="h-16 w-auto"
          />

          <div className="hidden sm:block">
            <h1 className="font-heading text-xl font-bold tracking-wide">
              PHONES FAIR
            </h1>

            <p className="font-body text-xs uppercase tracking-[0.25em] text-red-600">
              LEBANON
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 font-body text-sm font-semibold">
          <Link
            to="/"
            className="transition-colors hover:text-red-600"
          >
            Home
          </Link>

          <Link
            to="/browse"
            className="transition-colors hover:text-red-600"
          >
            Browse Phones
          </Link>

          <Link
            to="/sell"
            className="transition-colors hover:text-red-600"
          >
            Sell Phone
          </Link>

          <Link
            to="/login"
            className="transition-colors hover:text-red-600"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-red-600 px-5 py-2.5 text-white transition-all duration-200 hover:scale-105 hover:bg-red-700"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;