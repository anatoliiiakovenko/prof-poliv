import Header from "@/components/layout/header/Header";
import React from "react";


export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-7xl px-4 py-6">
                {children}
            </main>
        </>
    );
}
