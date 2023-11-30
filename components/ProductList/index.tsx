import { Product } from "@/types";
import { NoResults } from "../NoResults";
import { ProductCard } from "../ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

export function ProductList({ title, items }: ProductListProps) {
  return (
    <div className="space-y-4 mb-28">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
