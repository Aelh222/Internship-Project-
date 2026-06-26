import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({
  className = "",
  ...props
}: Readonly<InputProps>) {
  return (
    <input
      className={`w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-200 focus:border-red-600 focus:ring-4 focus:ring-red-100 ${className}`}
      {...props}
    />
  );
}

export default Input;