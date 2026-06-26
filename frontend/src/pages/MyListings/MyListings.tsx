import { useState } from "react";
import { Link } from "react-router-dom";
import { phones } from "../../components/phone/phones";
import type { Phone } from "../../components/phone/types";

type ListingStatus = "active" | "pending" | "sold";

type MyListing = Phone & {
  status: ListingStatus;
};

type ListingDraft = {
  price: string;
  location: string;
  description: string;
};

const initialListings: MyListing[] = phones.map((phone) => ({
  ...phone,
  status: phone.verified ? "active" : "pending",
}));

const statusStyles: Record<ListingStatus, string> = {
  active: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  sold: "bg-slate-100 text-slate-700",
};

const statusLabels: Record<ListingStatus, string> = {
  active: "Active",
  pending: "Pending",
  sold: "Sold",
};

function MyListings() {
  const [myListings, setMyListings] = useState<MyListing[]>(initialListings);
  const [editingListingId, setEditingListingId] = useState<number | null>(null);

  const [listingDraft, setListingDraft] = useState<ListingDraft>({
    price: "",
    location: "",
    description: "",
  });

  function handleStartEdit(listing: MyListing) {
    setEditingListingId(listing.id);

    setListingDraft({
      price: String(listing.price),
      location: listing.location,
      description: listing.description,
    });
  }

  function handleCancelEdit() {
    setEditingListingId(null);

    setListingDraft({
      price: "",
      location: "",
      description: "",
    });
  }

  function handleSaveEdit(listingId: number) {
    setMyListings((currentListings) =>
      currentListings.map((listing) =>
        listing.id === listingId
          ? {
              ...listing,
              price: Number(listingDraft.price),
              location: listingDraft.location,
              description: listingDraft.description,
            }
          : listing
      )
    );

    handleCancelEdit();
  }

  function handleMarkSold(listingId: number) {
    setMyListings((currentListings) =>
      currentListings.map((listing) =>
        listing.id === listingId
          ? {
              ...listing,
              status: "sold",
            }
          : listing
      )
    );
  }

  function handleDelete(listingId: number) {
    setMyListings((currentListings) =>
      currentListings.filter((listing) => listing.id !== listingId)
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-5xl font-bold">My Listings</h1>

          <p className="mt-3 text-slate-600">
            Manage all of your phone listings.
          </p>
        </div>

        <Link
          to="/sell"
          className="rounded-xl bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-700"
        >
          + Sell Another Phone
        </Link>
      </div>

      {myListings.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-bold">No listings yet</h2>

          <p className="mt-3 text-slate-600">
            Create your first listing and it will appear here.
          </p>

          <Link
            to="/sell"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Sell a Phone
          </Link>
        </section>
      ) : (
        <div className="space-y-6">
          {myListings.map((phone) => {
            const isEditing = editingListingId === phone.id;

            return (
              <div
                key={phone.id}
                className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md md:flex-row md:items-start md:justify-between"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="h-28 w-28 rounded-2xl object-cover"
                  />

                  <div className="min-w-0">
                    <h2 className="text-2xl font-bold">{phone.name}</h2>

                    <p className="mt-2 text-slate-500">
                      {phone.storage} | {phone.condition}
                    </p>

                    {isEditing ? (
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <label className="text-sm font-semibold text-slate-700">
                          Price
                          <input
                            type="number"
                            value={listingDraft.price}
                            onChange={(event) =>
                              setListingDraft((draft) => ({
                                ...draft,
                                price: event.target.value,
                              }))
                            }
                            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-red-500"
                          />
                        </label>

                        <label className="text-sm font-semibold text-slate-700">
                          Location
                          <input
                            value={listingDraft.location}
                            onChange={(event) =>
                              setListingDraft((draft) => ({
                                ...draft,
                                location: event.target.value,
                              }))
                            }
                            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-red-500"
                          />
                        </label>

                        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
                          Description
                          <textarea
                            value={listingDraft.description}
                            onChange={(event) =>
                              setListingDraft((draft) => ({
                                ...draft,
                                description: event.target.value,
                              }))
                            }
                            className="mt-2 min-h-28 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-red-500"
                          />
                        </label>
                      </div>
                    ) : (
                      <>
                        <p className="mt-2 text-3xl font-bold text-red-600">
                          ${phone.price}
                        </p>

                        <p className="mt-2 text-slate-500">
                          Location: {phone.location}
                        </p>

                        <span
                          className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                            statusStyles[phone.status]
                          }`}
                        >
                          {statusLabels[phone.status]}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 md:justify-end">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(phone.id)}
                        className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
                      >
                        Save
                      </button>

                      <button
                        onClick={handleCancelEdit}
                        className="rounded-xl border border-slate-300 px-5 py-2 font-semibold transition hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to={`/phones/${phone.id}`}
                        className="rounded-xl border border-slate-300 px-5 py-2 font-semibold transition hover:bg-slate-100"
                      >
                        View
                      </Link>

                      <button
                        onClick={() => handleStartEdit(phone)}
                        className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleMarkSold(phone.id)}
                        disabled={phone.status === "sold"}
                        className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                      >
                        Mark Sold
                      </button>

                      <button
                        onClick={() => handleDelete(phone.id)}
                        className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default MyListings;