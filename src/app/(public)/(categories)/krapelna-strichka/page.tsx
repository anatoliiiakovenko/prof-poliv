import { ProductCard, ProductsGrid } from "@/components/products";
import { mockedProducts } from "@/static/mockedProducts";

export default function KrapelnaStrichkaPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Крапельна стрічка</h1>
      <ProductsGrid>
        {mockedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </>
  );
}
