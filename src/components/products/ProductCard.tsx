"use client";

import Image from "next/image";
import Link from "next/link";
import {Product} from "@/types/product.type";
import {ShoppingCartOutlined} from "@ant-design/icons";
import clsx from "clsx";
import {Button, Tooltip} from "antd";

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { id, title, price, inStock, image, href } = product;
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

          <Tooltip title={title} placement="top">
              <h3 className="mt-3 text-sm font-medium line-clamp-2">
                  <Link
                      href={`/krapelna-strichka/${id}`}
                      className="
        hover:text-green-600
        transition-colors
        cursor-pointer
      "
                  >
                      {title}
                  </Link>
              </h3>
          </Tooltip>

        <div className="mt-2 flex justify-between items-center">
          <p className="text-lg font-semibold">{price} ₴</p>
          <Button
              size="middle"
              type="text"
              shape="circle"
              className="group"
              icon={
                <span className="inline-flex transition-transform duration-200 group-hover:scale-110">
      <ShoppingCartOutlined style={{ color: "#2ecc71", fontSize: 20 }} />
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
