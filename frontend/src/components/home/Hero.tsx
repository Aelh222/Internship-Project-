import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Buy <span className="text-red-600">Smart.</span>
          <br />
          Sell <span className="text-green-700">Fair.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Lebanon's trusted marketplace for buying, selling, and trading
          smartphones safely and fairly.
        </p>

        <SearchBar />

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
          <span className="rounded-full bg-red-100 px-4 py-2 text-red-700">
            🇱🇧 Lebanon Wide
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
            ✔ Verified Sellers
          </span>

          <span className="rounded-full bg-slate-200 px-4 py-2 text-slate-700">
            📱 Thousands of Listings
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            to="/browse"
            className="rounded-xl bg-red-600 px-7 py-3 text-center font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-red-700"
          >
            Browse Phones
          </Link>

          <Link
            to="/sell"
            className="rounded-xl border border-slate-300 bg-white px-7 py-3 text-center font-semibold transition hover:bg-slate-100"
          >
            Sell Your Phone
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;