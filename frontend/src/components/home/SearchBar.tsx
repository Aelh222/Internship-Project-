import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-4xl">
      <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500">

        <div className="flex items-center pl-5 text-slate-400">
          <Search size={22} />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-5 text-lg outline-none"
        />

        <button className="bg-red-600 px-8 font-semibold text-white transition-all duration-200 hover:bg-red-700">
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;