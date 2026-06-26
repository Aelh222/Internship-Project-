import { useState } from "react";
import { Link } from "react-router-dom";
import { phones } from "../../components/phone/phones";
import PhoneCard from "../../components/phone/PhoneCard";

function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(
    phones.map((phone) => phone.id)
  );

  const favoritePhones = phones.filter((phone) =>
    favoriteIds.includes(phone.id)
  );

  function handleRemoveFavorite(phoneId: number) {
    setFavoriteIds((currentIds) =>
      currentIds.filter((id) => id !== phoneId)
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-5xl font-bold">Favorites</h1>

        <p className="mt-3 text-slate-600">
          Phones you saved for later.
        </p>
      </div>

      {favoritePhones.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-bold">No favorites yet</h2>

          <p className="mt-3 text-slate-600">
            Browse listings and save phones you are interested in.
          </p>

          <Link
            to="/browse"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Browse Phones
          </Link>
        </section>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {favoritePhones.map((phone) => (
            <div key={phone.id} className="space-y-4">
              <PhoneCard phone={phone} />

              <button
                onClick={() => handleRemoveFavorite(phone.id)}
                className="w-full rounded-xl border border-red-200 bg-red-50 py-3 font-semibold text-red-700 transition hover:bg-red-100"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;