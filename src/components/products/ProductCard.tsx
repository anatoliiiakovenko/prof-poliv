"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { Product } from "@/types/product.type";
import { CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { Button } from "antd";
import { CustomTextLink } from "@/components/ui/CustomLink";
import { useCart } from "@/features/cart/CartContext";


interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { id, title, price, inStock, image, href } = product;
  const productImage = !!image ? image : "/images/no-image.webp";
  const availabilityText = inStock ? "В наявності" : "Немає в наявності";

  const { addItem, openCart, isInCart } = useCart();
  const inCart = isInCart(id);

  const handleCartClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      openCart();
    } else {
      addItem(product);
    }
  };
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

        <CustomTextLink title={title} href={`/krapelna-strichka/${id}`} />

        <div className="mt-2 flex justify-between items-center">
          <p className="text-lg font-semibold">{price} ₴</p>
          <Button
            size="middle"
            type={inCart ? "primary" : "text"}
            shape="circle"
            className="group relative"
            onClick={handleCartClick}
            aria-label={inCart ? "Відкрити кошик" : "Додати в кошик"}
            icon={
              <span className="inline-flex justify-between items-center transition-transform duration-200">
                <ShoppingCartOutlined
                  style={{
                    color: inCart ? "#ffffff" : "#2ecc71",
                    fontSize: 20,
                  }}
                />
                {inCart && (
                  <CheckOutlined
                    style={{
                      position: "absolute",
                      right: -4,
                      top: -4,
                      color: "#2ecc71",
                      background: "#ffffff",
                      border: "1px solid #2ecc71",
                      borderRadius: "50%",
                      fontSize: 10,
                      padding: 1,
                    }}
                  />
                )}
              </span>
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
