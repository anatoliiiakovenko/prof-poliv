"use client";

import { Button } from "antd";
import { useCart } from "@/features/cart/CartContext";

export function CartFooter() {
  const { totalPrice } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 sm:gap-0">
      <span className="text-base sm:text-lg font-semibold">Разом: {totalPrice} ₴</span>
      <Button type="primary" size="large" className="w-full sm:w-auto">
        Оформити замовлення
      </Button>
    </div>
  );
}
