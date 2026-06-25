function Filters() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">

      <div className="grid gap-4 md:grid-cols-5">

        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600">
          <option>Brand</option>
          <option>Apple</option>
          <option>Samsung</option>
          <option>Google</option>
          <option>Xiaomi</option>
          <option>infinix</option>
          <option>Tecno</option>
          <option>Honor</option>
          <option>Huawei</option>
          <option>ZTE</option>
          
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600">
          <option>Price</option>
          <option>Under $200</option>
          <option>$200 - $500</option>
          <option>$500 - $800</option>
          <option>$800+</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600">
          <option>Condition</option>
          <option>New</option>
          <option>Like New</option>
          <option>Good</option>
          <option>Fair</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600">
          <option>Storage</option>
          <option>32 or lower</option>
          <option>64GB</option>
          <option>128GB</option>
          <option>256GB</option>
          <option>512GB</option>
        </select>

        <button className="rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700">
          Apply Filters
        </button>

      </div>

    </section>
  );
}

export default Filters;