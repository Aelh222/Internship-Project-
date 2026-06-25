import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 md:text-6xl">
          Buy Smart. Sell Fair.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          The trusted marketplace for buying and selling phones across Lebanon.
        </p>

        <SearchBar />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
            Browse Phones
          </button>

          <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100">
            Sell Your Phone
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;