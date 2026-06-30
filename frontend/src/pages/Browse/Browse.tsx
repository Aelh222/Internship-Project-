import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filters, { type FilterValues } from "../../components/phone/Filters";
import PhoneCard from "../../components/phone/PhoneCard";
import { phones } from "../../components/phone/phones";
import SearchBar from "../../components/home/SearchBar";

const initialFilters: FilterValues = {
  brand: "",
  price: "",
  condition: "",
  storage: "",
};

function Browse() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterValues>(initialFilters);

  const searchTerm = searchParams.get("search")?.toLowerCase() ?? "";

  const filteredPhones = phones.filter((phone) => {
    const matchesSearch =
      phone.name.toLowerCase().includes(searchTerm) ||
      phone.brand.toLowerCase().includes(searchTerm) 

    const matchesBrand = !filters.brand || phone.brand === filters.brand;

    const matchesCondition =
      !filters.condition || phone.condition === filters.condition;

    const matchesStorage =
      !filters.storage || phone.storage === filters.storage;

    const matchesPrice =
      !filters.price ||
      (filters.price === "under-200" && phone.price < 200) ||
      (filters.price === "200-500" && phone.price >= 200 && phone.price <= 500) ||
      (filters.price === "500-800" && phone.price >= 500 && phone.price <= 800) ||
      (filters.price === "800-plus" && phone.price > 800);

    return (
      matchesSearch &&
      matchesBrand &&
      matchesCondition &&
      matchesStorage &&
      matchesPrice
    );
  });

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Browse Phones
        </h1>

        <p className="mt-2 text-slate-600">
          Explore verified phone listings from across Lebanon.
        </p>
      </div>
      
      <SearchBar />

      <Filters filters={filters} onChange={setFilters} />

      {filteredPhones.length === 0 ? (
        <section className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-bold">No phones found</h2>

          <p className="mt-3 text-slate-600">
            Try changing your search or filters.
          </p>
        </section>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhones.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Browse;