import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({
  children,
  className = "",
}: Readonly<CardProps>) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;