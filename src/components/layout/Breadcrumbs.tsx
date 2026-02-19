"use client";

import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {catalogMenu} from "@/static/catalog-menu";

export function Breadcrumbs() {
  const pathname = usePathname();

  const current = catalogMenu.find((item) => item.key === pathname);

  if (!current) return null;

  return (
    <div className="border-b border-border px-6 py-3">
      <Breadcrumb
        items={[
          {
            title: (
              <Link href="/">
                <HomeOutlined />
              </Link>
            ),
          },
          {
            title: current.title,
          },
        ]}
      />
    </div>
  );
}
