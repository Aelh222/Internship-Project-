function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-3xl">
      <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg">
        <input
          type="text"
          placeholder="Search for iPhone, Samsung, POCO..."
          className="flex-1 px-6 py-4 text-lg outline-none"
        />

        <button className="bg-emerald-600 px-8 font-semibold text-white transition hover:bg-emerald-700">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;