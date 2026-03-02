import LayoutHeader from "@/components/layout/header/LayoutHeader";
import React from "react";
import { LayoutSider } from "@/components/layout/sider/LayoutSider";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface MainLayoutProps {
  withSider?: boolean;
  children: React.ReactNode;
}

export default function MainLayout({
  children,
  withSider = true,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col pt-18">
      {/* Header */}
      <LayoutHeader />
      <Breadcrumbs />
      {/* Body */}
      <div className="flex flex-1">
        {withSider && (
          <aside className="hidden md:block w-78 border-r border-border p-4">
            <LayoutSider />
          </aside>
        )}
        <main className="flex-1 mx-auto min-w-0 overflow-hidden max-w-7xl p-6">
          {children}
        </main>
      </div>
      {/* Footer */}
      <footer className="border-t border-border py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} ПрофПолив. Всі права захищені.
      </footer>
    </div>
  );
}
