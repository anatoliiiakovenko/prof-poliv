"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AutoComplete, Input } from "antd";
import type { AutoCompleteProps } from "antd";
import { searchProducts } from "@/lib/search";
import { HighlightText } from "@/lib/highlight";

const DEBOUNCE_MS = 200;
const MAX_DROPDOWN_PRODUCTS = 8;

type Option = NonNullable<AutoCompleteProps["options"]>[number];

const AutocompleteSearchInput: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleChange = (value: string) => {
    // antd fires onChange after onSelect with the option value; ignore synthetic ones.
    if (
      value?.startsWith?.("category:") ||
      value?.startsWith?.("product:") ||
      value?.startsWith?.("__all__:") ||
      value === "__empty__"
    ) {
      return;
    }
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebounced(value), DEBOUNCE_MS);
  };

  const results = useMemo(
    () => searchProducts(debounced, MAX_DROPDOWN_PRODUCTS),
    [debounced],
  );

  const goToSearchPage = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const options: Option[] = useMemo(() => {
    if (!debounced.trim()) return [];

    const opts: Option[] = [];

    if (results.categories.length) {
      opts.push({
        label: (
          <span className="text-xs uppercase tracking-wide text-gray-400">
            Категорії
          </span>
        ),
        options: results.categories.map((c) => ({
          value: `category:${c.key}`,
          label: (
            <div className="flex items-center gap-2 py-1 text-sm">
              <HighlightText text={c.title} query={debounced} />
            </div>
          ),
        })),
      });
    }

    if (results.products.length) {
      opts.push({
        label: (
          <span className="text-xs uppercase tracking-wide text-gray-400">
            Товари
          </span>
        ),
        options: results.products.map((p) => ({
          value: `product:${p.id}`,
          label: (
            <div className="flex items-center gap-3 py-1">
              <div className="relative w-10 h-10 flex-shrink-0 bg-gray-50 rounded">
                <Image
                  src={p.image || "/images/no-image.webp"}
                  alt={p.title}
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0 text-sm leading-tight">
                <div className="truncate">
                  <HighlightText text={p.title} query={debounced} />
                </div>
                <div className="text-green-600 font-semibold">{p.price} ₴</div>
              </div>
            </div>
          ),
        })),
      });
    }

    if (!results.categories.length && !results.products.length) {
      opts.push({
        value: "__empty__",
        label: (
          <span className="text-gray-500 text-sm">Нічого не знайдено</span>
        ),
        disabled: true,
      });
      return opts;
    }

    if (results.total > results.products.length) {
      opts.push({
        value: `__all__:${debounced}`,
        label: (
          <div className="block py-1 text-green-600 font-medium">
            Показати всі результати ({results.total})
          </div>
        ),
      });
    }

    return opts;
  }, [debounced, results]);

  const handleSelect = (value: string) => {
    // Restore the visible query the user typed instead of the synthetic option value.
    const userQuery = query;
    setQuery(userQuery);
    setDebounced("");

    if (value.startsWith("category:")) {
      router.push(value.slice("category:".length));
      return;
    }
    if (value.startsWith("__all__:")) {
      goToSearchPage(value.slice("__all__:".length));
      return;
    }
    if (value.startsWith("product:")) {
      const id = value.slice("product:".length);
      const product = results.products.find((p) => p.id === id);
      if (product) goToSearchPage(product.title);
    }
  };

  return (
    <AutoComplete
      style={{ width: "100%" }}
      value={query}
      options={options}
      onChange={handleChange}
      onSelect={handleSelect}
      classNames={{ popup: { root: "global-search-dropdown" } }}
    >
      <Input.Search
        size="large"
        placeholder="Шукаю..."
        enterButton
        allowClear
        onSearch={goToSearchPage}
      />
    </AutoComplete>
  );
};

export default AutocompleteSearchInput;