import Filters from "../../components/phone/Filters";
import PhoneCard from "../../components/phone/PhoneCard";
import { phones } from "../../components/phone/phones";

function Browse() {
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

      <Filters />

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {phones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
          />
        ))}
      </div>
    </main>
  );
}

export default Browse;