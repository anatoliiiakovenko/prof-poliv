import { ReactNode } from "react";

interface ProductsGridProps {
  children: ReactNode;
}

export function ProductsGrid({ children }: ProductsGridProps) {
  return (
    <div
      className="
        grid gap-3
        grid-cols-1
        min-[425px]:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
      "
    >
      {children}
    </div>
  );
}
