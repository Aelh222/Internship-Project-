export type FilterValues = {
  brand: string;
  price: string;
  condition: string;
  storage: string;
};

interface FiltersProps {
  filters: FilterValues;
  onChange: (filters: FilterValues) => void;
}

function Filters({ filters, onChange }: FiltersProps) {
  function updateFilter(name: keyof FilterValues, value: string) {
    onChange({
      ...filters,
      [name]: value,
    });
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="grid gap-4 md:grid-cols-4">
        <select
          value={filters.brand}
          onChange={(event) => updateFilter("brand", event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
        >
          <option value="">Brand</option>
          <option>Apple</option>
          <option>Samsung</option>
          <option>Google</option>
          <option>Xiaomi</option>
          <option>Infinix</option>
          <option>Tecno</option>
          <option>Honor</option>
          <option>Huawei</option>
          <option>ZTE</option>
        </select>

        <select
          value={filters.price}
          onChange={(event) => updateFilter("price", event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
        >
          <option value="">Price</option>
          <option value="under-200">Under $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500-800">$500 - $800</option>
          <option value="800-plus">$800+</option>
        </select>

        <select
          value={filters.condition}
          onChange={(event) => updateFilter("condition", event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
        >
          <option value="">Condition</option>
          <option>New</option>
          <option>Like New</option>
          <option>Good</option>
          <option>Fair</option>
        </select>

        <select
          value={filters.storage}
          onChange={(event) => updateFilter("storage", event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
        >
          <option value="">Storage</option>
          <option>32GB or lower</option>
          <option>64GB</option>
          <option>128GB</option>
          <option>256GB</option>
          <option>512GB</option>
          <option>1TB</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;