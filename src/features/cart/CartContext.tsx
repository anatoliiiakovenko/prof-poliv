"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import type { Product } from "@/types/product.type";

export interface CartItem extends Product {
  quantity: number;
}

const CART_STORAGE_KEY = "profpoliv:cart";

function readCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        item &&
        typeof item.id === "string" &&
        typeof item.title === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number",
    );
  } catch {
    return [];
  }
}

function persistItems(items: CartItem[]) {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore quota / serialization errors */
  }
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  hydrated: boolean;

  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  hydrate: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  hydrated: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (product) => {
    const { items } = get();
    const existing = items.find((item) => item.id === product.id);
    const next = existing
      ? items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...items, { ...product, quantity: 1 }];
    set({ items: next });
    persistItems(next);
  },

  removeItem: (id) => {
    const next = get().items.filter((item) => item.id !== id);
    set({ items: next });
    persistItems(next);
  },

  setQuantity: (id, quantity) => {
    const next = get()
      .items.map((item) => (item.id === id ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0);
    set({ items: next });
    persistItems(next);
  },

  clear: () => {
    set({ items: [] });
    persistItems([]);
  },

  hydrate: () => {
    if (get().hydrated) return;
    set({ items: readCartFromStorage(), hydrated: true });
  },
}));

// ── Granular selector hooks ──────────────────────────────────────────

/** Stable actions that never cause re-renders. */
export function useCartActions() {
  return useCartStore(
    useShallow((s) => ({
      addItem: s.addItem,
      removeItem: s.removeItem,
      setQuantity: s.setQuantity,
      openCart: s.openCart,
      closeCart: s.closeCart,
      clear: s.clear,
    })),
  );
}

/** Re-renders only when the in-cart status for this specific id changes. */
export function useIsInCart(id: string) {
  return useCartStore((s) => s.items.some((item) => item.id === id));
}

/** Full useCart hook — backwards-compatible drop-in replacement. */
export function useCart() {
  const items = useCartStore((s) => s.items);
  const isOpen = useCartStore((s) => s.isOpen);
  const actions = useCartActions();
  const totalCount = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const totalPrice = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
  const isInCart = (id: string) => items.some((item) => item.id === id);

  return { items, isOpen, ...actions, isInCart, totalCount, totalPrice };
}

// ── Hydration + cross-tab sync component (mount once in providers) ──

export function CartHydrator() {
  const hydrate = useCartStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== CART_STORAGE_KEY) return;
      useCartStore.setState({ items: readCartFromStorage() });
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [hydrate]);

  return null;
}
