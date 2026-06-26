import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
            Welcome Back
          </h1>

          <p className="mt-3 text-slate-600">
            Sign in to manage your listings, favorites and account.
          </p>
        </div>

        <form className="mt-10 space-y-6">
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

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-red-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-red-600"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label
              htmlFor="rememberMe"
              className="flex items-center gap-2"
            >
              <input
                id="rememberMe"
                type="checkbox"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-red-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-1 text-sm">
          <span>Don't have an account?</span>

          <Link
            to="/register"
            className="font-semibold text-red-600 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;