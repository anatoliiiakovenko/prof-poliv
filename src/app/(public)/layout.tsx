

import LayoutHeader from "@/components/layout/header/LayoutHeader";
import React from "react";


export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <LayoutHeader />
            {/* Body */}
            <div className="flex flex-1">
                <aside className="w-1/6 border-r border-border p-4">
                    Sider
                </aside>

                <main className="flex-1 mx-auto max-w-7xl px-4 py-6">
                    {children}
                </main>
            </div>
            {/* Footer */}
            <footer className="border-t border-border py-4 text-center text-sm">
                © {new Date().getFullYear()} ПрофПолив. Всі права захищені.
            </footer>
        </div>
    );
}
