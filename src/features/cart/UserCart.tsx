"use client";

import { Badge, Button } from "antd";
import { Modal } from "@/components/ui";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { EmptyCart } from "@/components/shared/EmptyCart";
import { UserCartModalTitle } from "@/features/cart/UserCartModalTitle";
import { useCart } from "@/features/cart/CartContext";
import { CartItemRow } from "@/features/cart/CartItemRow";

export function UserCart() {
  const {
    items,
    isOpen,
    openCart,
    closeCart,
    removeItem,
    setQuantity,
    totalCount,
    totalPrice,
  } = useCart();

  const isEmpty = items.length === 0;

  return (
    <>
      <Badge count={totalCount} size="small" offset={[-6, 6]}>
        <Button
          size="large"
          className="mr-0 md:mr-4"
          icon={<ShoppingCartOutlined style={{ fontSize: 26 }} />}
          onClick={openCart}
          aria-label={"Shopping cart button"}
        />
      </Badge>

      <Modal
        open={isOpen}
        onCancel={closeCart}
        footer={
          isEmpty ? null : (
            <div className="flex items-center justify-between w-full">
              <span className="text-base font-semibold">
                Разом: {totalPrice} ₴
              </span>
              <Button type="primary" size="large">
                Оформити замовлення
              </Button>
            </div>
          )
        }
        title={<UserCartModalTitle />}
      >
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={setQuantity}
              />
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
