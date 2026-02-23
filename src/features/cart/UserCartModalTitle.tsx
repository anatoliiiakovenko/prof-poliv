import { ShoppingCartOutlined } from "@ant-design/icons";

export function UserCartModalTitle() {
  return (
    <div className={"w-full flex items-center gap-1"}>
      <ShoppingCartOutlined style={{ color: "#2ecc71", fontSize: 26 }} />
      <h3>Кошик</h3>
    </div>
  );
}
