"use client";

import Link from "next/link";
import { useState } from "react";
import { AutoComplete, Avatar, Button, Flex, Input } from "antd";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { HeaderLogo } from "@/components/layout/header/HeaderLogo";

export default function LayoutHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-(--background) border-b border-border shadow-sm">
      <div className="w-full h-full flex items-center justify-between p-2 md:p-4 mx-auto max-w-400">
        <div className="flex mr-2 md:mr-6 items-center">
          <Button
            size="large"
            className="mr-2 md:mr-4"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            aria-label={"Open menu"}
          />
          {/* Logo */}
          <HeaderLogo />
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/catalog" className="hover:text-green-600">
              Каталог
            </Link>
            <Link
              href="/about"
              className="hover:text-green-600 whitespace-nowrap"
            >
              Про нас
            </Link>
            <Link href="/contacts" className="hover:text-green-600">
              Контакти
            </Link>
          </nav>
        </div>
        <AutoComplete
          popupMatchSelectWidth={252}
          style={{ width: "100%" }}
          // options={options}
          // onSelect={onSelect}
          // showSearch={{ onSearch: handleSearch }}
        >
          <Input.Search size="large" placeholder="Шукаю..." enterButton />
        </AutoComplete>
        <div className="flex ml-2 md:ml-6 items-center">
          <Button
            size="large"
            className="mr-0 md:mr-4"
            icon={<ShoppingCartOutlined style={{ fontSize: 26 }} />}
            onClick={() => setOpen(true)}
            aria-label={"Open menu"}
          />
          <div className="hidden md:block">
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
