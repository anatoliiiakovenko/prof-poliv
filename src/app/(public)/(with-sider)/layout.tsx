import React from "react";
import MainLayout from "@/components/layout/MainLayout";

export default function LayoutWithSider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout withSider>{children}</MainLayout>;
}
