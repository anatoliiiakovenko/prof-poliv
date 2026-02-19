"use client";

import type {MenuProps} from "antd";
import {Grid, Menu} from "antd";
import React from "react";
import {useRouter} from "next/navigation";
import {catalogMenu} from "@/static/catalog-menu";

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>["items"][number];

export function CatalogMenu() {
  const router = useRouter();

  const items: MenuItem[] = catalogMenu.map((item) => {
    return {
      key: item.key,
      label: item.title,
    };
  });

  return (
    <div style={{ width: "100%" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        items={items}
        style={{ border: "none" }}
        onClick={(e) => {
          router.push(e.key);
        }}
      />
    </div>
  );
}
