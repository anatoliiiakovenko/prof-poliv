"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, Button, Drawer } from "antd";
import {AppstoreOutlined, MenuOutlined, UserOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import { HeaderLogo } from "@/components/layout/header/HeaderLogo";
import { CatalogModal } from "@/components/layout/header/CatalogModal";
import { UserCart } from "@/features/cart/UserCart";
import AutocompleteSearchInput from "@/features/AutocompleteSearchInput";

export default function LayoutHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
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
            <Button 
              icon={<AppstoreOutlined />} 
              size="large" 
              iconPlacement={"start"}
              onClick={() => setCatalogOpen(true)}
            >
              Каталог
            </Button>
            <Link
              href="/about"
              className={`hover:text-green-600 whitespace-nowrap ${isActive("/about") ? "text-primary border-b-2 border-primary" : ""}`}
              style={isActive("/about") ? { paddingBottom: "2px" } : undefined}
            >
              Про нас
            </Link>
            <Link
              href="/contacts"
              className={`hover:text-green-600 ${isActive("/contacts") ? "text-primary border-b-2 border-primary" : ""}`}
              style={isActive("/contacts") ? { paddingBottom: "2px" } : undefined}
            >
              Контакти
            </Link>
          </nav>
        </div>
     <AutocompleteSearchInput/>
        <div className="flex ml-2 md:ml-6 items-center">
          <UserCart />
          <div className="hidden md:block">
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <CatalogModal open={catalogOpen} onClose={() => setCatalogOpen(false)} />
      
      {/* Mobile Drawer */}
      <Drawer
        title="Меню"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        size={320}
      >
        <div className="flex flex-col gap-4">
          <Button 
            icon={<AppstoreOutlined />} 
            size="large" 
            iconPlacement="start"
            onClick={() => {
              setCatalogOpen(true);
              setOpen(false);
            }}
          >
            Каталог
          </Button>
          
          <Button
            icon={<ShoppingCartOutlined />}
            size="large"
            iconPlacement="start"
            onClick={() => {
              // Trigger cart open - need to expose this from UserCart
              const cartButton = document.querySelector('[aria-label="Shopping cart button"]') as HTMLButtonElement;
              cartButton?.click();
              setOpen(false);
            }}
          >
            Корзина
          </Button>
          
          <Link
            href="/contacts"
            onClick={() => setOpen(false)}
            className="block"
          >
            <Button
              size="large"
              iconPlacement="start"
              block
            >
              Контакти
            </Button>
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
