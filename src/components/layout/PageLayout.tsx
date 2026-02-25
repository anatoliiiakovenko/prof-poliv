import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="py-6">{children}</div>
    </>
  );
}
