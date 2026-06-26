import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      {/* Profile Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

        <div className="flex flex-col items-center text-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-red-600 text-5xl font-bold text-white">
            A
          </div>

          <h1 className="mt-6 text-4xl font-bold">
            Ali El Hajj
          </h1>

          <p className="mt-2 text-green-600 font-semibold">
            ✔ Verified Seller
          </p>

          <p className="mt-2 text-slate-500">
            Member since 2026
          </p>

        </div>

      </section>

      {/* Statistics */}
      <section className="mt-10 grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-md text-center">
          <h2 className="text-4xl font-bold text-red-600">3</h2>
          <p className="mt-2 text-slate-600">Active Listings</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md text-center">
          <h2 className="text-4xl font-bold text-red-600">12</h2>
          <p className="mt-2 text-slate-600">Favorites</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md text-center">
          <h2 className="text-4xl font-bold text-red-600">18</h2>
          <p className="mt-2 text-slate-600">Phones Sold</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md text-center">
          <h2 className="text-4xl font-bold text-red-600">4.9★</h2>
          <p className="mt-2 text-slate-600">Seller Rating</p>
        </div>

      </section>

      {/* Quick Actions */}
      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Quick Actions
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <Link
            to="/sell"
            className="rounded-xl bg-red-600 py-4 text-center font-semibold text-white transition hover:bg-red-700"
          >
            ➕ Sell New Phone
          </Link>

          <Link
            to="/browse"
            className="rounded-xl border border-slate-300 py-4 text-center font-semibold transition hover:bg-slate-100"
          >
            📱 Browse Phones
          </Link>

          <Link
            to="/my-listings"
            className="rounded-xl border border-slate-300 py-4 text-center font-semibold transition hover:bg-slate-100"
          >
            📋 My Listings
          </Link>

          <Link
            to="/favorites"
            className="rounded-xl border border-slate-300 py-4 text-center font-semibold transition hover:bg-slate-100"
          >
            ❤️ Favorites
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Profile;