import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

        <div className="text-center">
          <img
            src="/pfl-logo.png"
            alt="PFL"
            className="mx-auto h-20"
          />

          <h1 className="mt-6 text-4xl font-bold">
            Create Account
          </h1>

          <p className="mt-3 text-slate-600">
            Join Lebanon's trusted phone marketplace.
          </p>
        </div>

        <form className="mt-10 space-y-5">

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block font-semibold"
            >
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              placeholder="Ali"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block font-semibold"
            >
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              placeholder="El Hajj"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-semibold"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-semibold"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block font-semibold"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
            />
          </div>

          {/* Terms */}
          <label
            htmlFor="terms"
            className="flex items-center gap-2 text-sm"
          >
            <input
              id="terms"
              type="checkbox"
            />

            I agree to the Terms & Conditions
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Create Account
          </button>

        </form>

        <div className="mt-8 flex justify-center gap-1 text-sm">
          <span>Already have an account?</span>

          <Link
            to="/login"
            className="font-semibold text-red-600 hover:underline"
          >
            Sign In
          </Link>
        </div>

      </div>
    </main>
  );
}

export default Register;