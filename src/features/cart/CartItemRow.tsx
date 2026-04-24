"use client";

import Image from "next/image";
import { Button, InputNumber } from "antd";
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
  const image = item.image ? item.image : "/images/no-image.webp";
  return (
    <div className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
      <div className="w-16 h-16 flex items-center justify-center shrink-0">
        <Image
          src={image}
          alt={item.title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{item.title}</p>
        <p className="text-sm text-gray-500">{item.price} ₴</p>
      </div>
      <InputNumber
        min={1}
        value={item.quantity}
        onChange={(value) => {
          if (typeof value === "number" && value >= 1) {
            onQuantityChange(item.id, value);
          }
        }}
        style={{ width: 64 }}
      />
      <Button
        type="text"
        danger
        icon={<DeleteOutlined />}
        onClick={() => onRemove(item.id)}
        aria-label="Remove from cart"
      />
    </div>
  );
}
