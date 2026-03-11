// import { Grid } from "antd";
import { CatalogMenu } from "@/components/layout/sider/CatalogMenu";
import {SiderFilter} from "@/components/layout/sider/SiderFilter";
import {SiderContacts} from "@/components/layout/sider/SiderContacts";

// const { useBreakpoint } = Grid;

export function LayoutSider() {
  // const screens = useBreakpoint();

  return (
    <>
      <CatalogMenu />
      <SiderFilter />
      <SiderContacts />
    </>
  );
}
