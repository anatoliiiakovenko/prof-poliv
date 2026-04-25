"use client";

import Image from "next/image";
import { Button, InputNumber, Grid } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { CartItem } from "@/features/cart/CartContext";

interface CartItemRowProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}

export function CartItemRow({
  item,
  onRemove,
  onQuantityChange,
}: CartItemRowProps) {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const image = item.image ? item.image : "/images/no-image.webp";
  const isMobile = !screens.sm;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-2 p-3 border border-border rounded-lg last:mb-0">
      <div className="w-16 h-16 flex items-center justify-center shrink-0">
        <Image
          src={image}
          alt={item.title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <div className="flex-1 min-w-0 w-full text-center sm:text-left">
        <p className="text-sm font-medium truncate">{item.title}</p>
        <p className="text-sm text-gray-500">{item.price} ₴</p>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
        <InputNumber
          min={1}
          mode={'spinner' as const}
          value={item.quantity}
          onChange={(value) => {
            if (typeof value === "number" && value >= 1) {
              onQuantityChange(item.id, value);
            }
          }}
          style={{ width: isMobile ? "100%" : "130px" }}
        />
        <Button
          type="text"
          danger
          icon={<DeleteOutlined style={{ fontSize: 16 }} />}
          onClick={() => onRemove(item.id)}
          aria-label="Remove from cart"
        />
      </div>
    </div>
  );
}
