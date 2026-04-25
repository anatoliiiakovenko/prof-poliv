import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { ProductCard, ProductsGrid } from "@/components/products";
import { searchProducts } from "@/lib/search";

interface SearchPageProps {
  searchParams: Promise<{ q?: string | string[] }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = Array.isArray(q) ? q[0] : q ?? "";
  return {
    title: query ? `Пошук: ${query}` : "Пошук",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q ?? "").trim();
  const results = searchProducts(query, 1000);

  const title = query ? `Результати пошуку: «${query}»` : "Пошук";

  return (
    <PageLayout title={title}>
      {!query ? (
        <div className="py-12 text-center text-gray-500">
          Введіть запит у пошуковий рядок, щоб знайти товари.
        </div>
      ) : results.products.length === 0 && results.categories.length === 0 ? (
        <div className="py-12 text-center text-gray-500">
          На жаль, нічого не знайдено за запитом «{query}».
        </div>
      ) : (
        <>
          {results.categories.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                Категорії
              </h2>
              <ul className="flex flex-wrap gap-2">
                {results.categories.map((c) => (
                  <li key={c.key}>
                    <Link
                      href={c.key}
                      className="inline-block px-3 py-1 rounded-full border border-border hover:border-green-600 hover:text-green-600 text-sm"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {results.products.length > 0 && (
            <section>
              <p className="text-sm text-gray-600 mb-4">
                Знайдено товарів: {results.products.length}
              </p>
              <ProductsGrid>
                {results.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ProductsGrid>
            </section>
          )}
        </>
      )}
    </PageLayout>
  );
}
