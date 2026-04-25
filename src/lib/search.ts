import { mockedProducts } from "@/static/mocked-products";
import { catalogMenu } from "@/static/catalog-menu";
import type { Product } from "@/types/product.type";

export type SearchCategory = { key: string; title: string };

export type SearchResults = {
  query: string;
  products: Product[];
  categories: SearchCategory[];
  total: number;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

/**
 * Naive multi-token "AND" search over product titles and category titles.
 * Mirrors how Rozetka shows quick suggestions while typing.
 */
export function searchProducts(query: string, limit = 8): SearchResults {
  const q = normalize(query);
  if (!q) {
    return { query, products: [], categories: [], total: 0 };
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  const matches = (text: string) => {
    const t = normalize(text);
    return tokens.every((tk) => t.includes(tk));
  };

  const products = mockedProducts.filter((p) => matches(p.title));
  const categories = catalogMenu.filter((c) => matches(c.title));

  return {
    query,
    products: products.slice(0, limit),
    categories,
    total: products.length,
  };
}
