import {Typography} from "antd";
import Link from "next/link";
import "./index.css";

const { Paragraph } = Typography;
interface CustomLinkProps {
  title: string;
  href: string;
}

export const CustomTextLink = ({
  title,
  href,
}: CustomLinkProps) => {
  return (
    <div className={"link-wrapper"}>
      <Paragraph ellipsis={{ rows: 2, tooltip: title }}>
        <Link href={href} className={"custom-link-text"}>
          {title}
        </Link>
      </Paragraph>
    </div>
  );
};
