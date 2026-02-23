"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.type";
import { ShoppingCartOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { Button } from "antd";

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { title, price, inStock, image, href } = product;
  const productImage = !!image ? image : "/images/no-image.webp";
  const availabilityText = inStock ? "В наявності" : "Немає в наявності";
  return (
    <div
      className="
    border border-border rounded-lg p-4
    transition-transform duration-200
    hover:scale-[1.06]
    hover:border-green-600
    cursor-pointer
  "
      onClick={() => onClick?.(product)}
    >
      <Link href={href ?? "#"}>
        <div className="w-full h-55 md:h-30 lg:h-40 flex items-center justify-center rounded-md">
          <Image
            src={productImage}
            alt={title}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <h3 className="mt-3 text-sm font-medium line-clamp-2">{title}</h3>

        <div className="mt-2 flex justify-between items-center">
          <p className="text-lg font-semibold">{price} ₴</p>
          <Button
            size={"middle"}
            type={"text"}
            shape={"circle"}
            icon={
              <ShoppingCartOutlined
                style={{ color: "#2ecc71", fontSize: 20 }}
              />
            }
          />
        </div>

        <p
          className={clsx(
            "mt-2 text-xs",
            inStock ? "text-green-500" : "text-black",
          )}
        >
          {availabilityText}
        </p>
      </Link>
    </div>
  );
}
