import { ProductCard, ProductsGrid } from "@/components/products";
import { mockedProducts } from "@/static/mocked-products";
import PageLayout from "@/components/layout/PageLayout";

export default function KrapelnaStrichkaPage() {
  return (
    <PageLayout title={"Крапельна стрічка"}>
      <ProductsGrid>
        {mockedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </PageLayout>
  );
}
