import { useParams } from "react-router-dom";
import { phones } from "../../components/phone/phones";

function PhoneDetails() {
  const { id } = useParams();

  const phone = phones.find((p) => p.id === Number(id));

  if (!phone) {
    return <h1 className="p-10 text-3xl">Phone not found.</h1>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Phone Image */}
        <div>
          <img
            src={phone.image}
            alt={phone.name}
            className="w-full rounded-3xl border border-slate-200 shadow-lg"
          />
        </div>

        {/* Phone Info */}
        <div>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ✔ Verified Seller
          </span>

          <h1 className="mt-5 text-5xl font-bold">{phone.name}</h1>

          <p className="mt-3 text-4xl font-extrabold text-red-600">
            ${phone.price}
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span>Storage</span>
              <strong>{phone.storage}</strong>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Condition</span>
              <strong>{phone.condition}</strong>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Battery Health</span>
              <strong>{phone.batteryHealth}%</strong>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Location</span>
              <strong>{phone.location}</strong>
            </div>
          </div>

          <button className="mt-10 w-full rounded-xl bg-red-600 py-4 text-lg font-semibold text-white transition hover:bg-red-700">
            Contact Seller
          </button>
        </div>
      </div>

      {/* Description */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">Description</h2>

        <p className="mt-5 leading-8 text-slate-600">
          {phone.description}
        </p>
      </section>

      {/* Seller + Smart Analysis */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Seller */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
          <h2 className="text-2xl font-bold">Seller Information</h2>

          <div className="mt-6 space-y-3">
            <p>
              <strong>{phone.seller}</strong>
            </p>

            <p>⭐ {phone.sellerRating}/5</p>

            <p>{phone.completedSales} completed sales</p>

            <p>Member since {phone.memberSince}</p>
          </div>
        </div>

        {/* Smart Analysis */}
        <div className="rounded-2xl border border-green-300 bg-green-50 p-6 shadow-md">
          <h2 className="text-2xl font-bold">
            🧠 PFL Smart Analysis
          </h2>

          <div className="mt-6 space-y-3">
            <p className="font-semibold text-green-700">
              ✅ Fair Price
            </p>

            <p>
              Market Value:{" "}
              <strong>
                ${phone.marketMin} - ${phone.marketMax}
              </strong>
            </p>

            <p>
              Seller Price: <strong>${phone.price}</strong>
            </p>

            <p className="font-semibold text-green-700">
              Recommendation: BUY 👍
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PhoneDetails;