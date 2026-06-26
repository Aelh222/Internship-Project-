import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedSearch = searchTerm.trim();

    if (trimmedSearch) {
      navigate(`/browse?search=${encodeURIComponent(trimmedSearch)}`);
    } else {
      navigate("/browse");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full max-w-4xl">
      <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500">
        <div className="flex items-center pl-5 text-slate-400">
          <Search size={22} />
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search phones"
          className="flex-1 px-4 py-5 text-lg outline-none"
        />

        <button className="bg-red-600 px-8 font-semibold text-white transition-all duration-200 hover:bg-red-700">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;