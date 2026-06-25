import type { Phone } from "./types";
import { BadgeCheck, HardDrive, Heart, MapPin } from "lucide-react";

interface PhoneCardProps {
  phone: Phone;
}

function PhoneCard({ phone }: PhoneCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={phone.image}
          alt={phone.name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition hover:bg-red-50">
          <Heart size={18} className="text-slate-600 hover:text-red-600" />
        </button>

        {phone.verified && (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
            <BadgeCheck size={14} />
            Verified
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {phone.name}
          </h3>

          <p className="text-sm text-slate-500">
            {phone.brand}
          </p>
        </div>

        <div className="flex justify-between text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <HardDrive size={16} />
            {phone.storage}
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1">
            {phone.condition}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} />
          {phone.location}
        </div>

        <div className="flex items-center justify-between">

          <div>
            <p className="text-2xl font-extrabold text-slate-900">
              ${phone.price}
            </p>

            <p className="text-xs text-slate-500">
              Fair Price
            </p>
          </div>

          <button className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700">
            View Details
          </button>

        </div>

      </div>

    </article>
  );
}

export default PhoneCard;