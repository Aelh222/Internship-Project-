import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Readonly<ButtonProps>) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 hover:scale-[1.02]",

    secondary:
      "border border-slate-300 bg-white hover:bg-slate-100",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;