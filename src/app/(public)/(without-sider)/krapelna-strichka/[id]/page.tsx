"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { mockedProducts } from "@/static/mocked-products";
import { Button } from "antd";
import { useCart } from "@/features/cart/CartContext";
import { CheckOutlined } from "@ant-design/icons";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = React.use(params);
  const { addItem, openCart, isInCart } = useCart();

  const product = mockedProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const inCart = isInCart(id);

  const handleAddToCart = () => {
    addItem(product);
    openCart();
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="w-full h-[360px] bg-muted rounded-lg flex items-center justify-center">
          <Image
            src={product.image ?? "/images/no-image.webp"}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>

          <p className="mt-4 text-xl font-bold text-green-600">
            {product.price} ₴
          </p>

          <p
            className={`mt-2 text-sm ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "В наявності" : "Немає в наявності"}
          </p>

          <Button
            type={"primary"}
            size={"large"}
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className="mt-6"
          >
            {inCart ? (
              <>
                <CheckOutlined /> В кошику
              </>
            ) : (
              "Додати в кошик"
            )}
          </Button>

          <div className="mt-6 text-sm text-gray-600">
            <p>
              Тут згодом буде детальний опис товару, характеристики, довжина
              стрічки, діаметр, товщина стінки тощо.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
