import React from "react";
import MainLayout from "@/components/layout/MainLayout";

export default function LayoutWithoutSider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout withSider={false}>{children}</MainLayout>;
}
