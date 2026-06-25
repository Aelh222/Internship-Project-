import PhoneCard from "./PhoneCard";
import { phones } from "./phones";

function FeaturedListings() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Featured
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Featured Listings
          </h2>

          <p className="mt-3 text-slate-600">
            Discover some of the latest phones available across Lebanon.
          </p>
        </div>

        <button className="hidden rounded-xl border border-slate-300 px-5 py-2 font-semibold transition hover:bg-slate-100 md:block">
          View All
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedListings;