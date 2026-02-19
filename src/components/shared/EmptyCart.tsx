'use client';

import Image from "next/image";
import {Typography} from "antd";

const {Title, Paragraph} = Typography

export function EmptyCart() {

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <Image
                src="/images/empty-cart.webp"
                alt="empty cart"
                width={300}
                height={300}
            />
            <Title level={3}>Ваш кошик порожній</Title>
            <Paragraph>Додайте товари до кошика</Paragraph>
        </div>
    );
}

