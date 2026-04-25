import { Grid } from "antd";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";

const { useBreakpoint } = Grid;

export function HeaderLogo() {
  const screens = useBreakpoint();

  return (
    <Link href="/">
      <Logo
        withoutTitle={!screens.lg}
        className="w-6.25 h-8.25 lg:w-35 lg:h-8.25 mr-0 lg:mr-4 text-primary"
      />
    </Link>
  );
}
