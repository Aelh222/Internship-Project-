function Sell() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold">Sell Your Phone</h1>

        <p className="mt-3 text-slate-600">
          Create your listing in less than a minute.
        </p>

        <div className="mx-auto mt-6 max-w-2xl rounded-xl bg-red-50 p-4 text-sm text-red-700">
          💡 Listings with clear photos and detailed descriptions usually sell
          faster.
        </div>
      </div>

      <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="grid gap-6 md:grid-cols-2">

          {/* Brand */}
          <div>
            <label htmlFor="brand" className="mb-2 block font-semibold">
              Brand <span className="text-red-600">*</span>
            </label>

            <select
              id="brand"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            >
              <option>Apple</option>
              <option>Samsung</option>
              <option>Google</option>
              <option>Xiaomi</option>
              <option>Infinix</option>
              <option>Honor</option>
              <option>Huawei</option>
              <option>OnePlus</option>
              <option>Nothing</option>
            </select>
          </div>

          {/* Model */}
          <div>
            <label htmlFor="model" className="mb-2 block font-semibold">
              Model <span className="text-red-600">*</span>
            </label>

            <input
              id="model"
              type="text"
              placeholder=""
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="mb-2 block font-semibold">
              Price ($) <span className="text-red-600">*</span>
            </label>

            <input
              id="price"
              type="number"
              placeholder=""
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          {/* Storage */}
          <div>
            <label htmlFor="storage" className="mb-2 block font-semibold">
              Storage <span className="text-red-600">*</span>
            </label>

            <select
              id="storage"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            >
              <option>32GB or lower</option>
              <option>64GB</option>
              <option>128GB</option>
              <option>256GB</option>
              <option>512GB</option>
              <option>1TB</option>
            </select>
          </div>

          {/* Condition */}
          <div>
            <label htmlFor="condition" className="mb-2 block font-semibold">
              Condition <span className="text-red-600">*</span>
            </label>

            <select
              id="condition"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            >
              <option>New</option>
              <option>Like New</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>

          {/* Battery */}
          <div>
            <label htmlFor="batteryHealth" className="mb-2 block font-semibold">
              Battery Health (%) <span className="text-red-600">*</span>
            </label>

            <input
              id="batteryHealth"
              type="number"
              placeholder=""
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          {/* Original Box */}
          <div>
            <label htmlFor="originalBox" className="mb-2 block font-semibold">
              Original Box <span className="text-red-600">*</span>
            </label>

            <select
              id="originalBox"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            >
              <option>With Original Box</option>
              <option>Without Original Box</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="mb-2 block font-semibold">
              Location <span className="text-red-600">*</span>
            </label>

            <input
              id="location"
              type="text"
              placeholder=""
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label htmlFor="description" className="mb-2 block font-semibold">
            Description
          </label>

          <textarea
            id="description"
            rows={5}
            maxLength={500}
            placeholder="Describe your phone, mention scratches, accessories included, warranty, etc."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
          />

          <p className="mt-2 text-right text-sm text-slate-500">
            Maximum 500 characters
          </p>
        </div>

        {/* Upload */}
        <div className="mt-6">
          <label htmlFor="photos" className="mb-2 block font-semibold">
            Upload Photos
          </label>

          <label
            htmlFor="photos"
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 p-10 transition hover:border-red-500 hover:bg-red-50"
          >
            <span className="text-5xl">📷</span>

            <p className="mt-3 font-semibold">
              Click to upload photos
            </p>

            <p className="text-sm text-slate-500">
              Up to 10 photos
            </p>

            <input
              id="photos"
              type="file"
              multiple
              className="hidden"
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            type="reset"
            className="flex-1 rounded-xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-100"
          >
            Reset Form
          </button>

          <button
            type="submit"
            className="flex-1 rounded-xl bg-red-600 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Publish Listing
          </button>
        </div>
      </form>
    </main>
  );
}

export default Sell;