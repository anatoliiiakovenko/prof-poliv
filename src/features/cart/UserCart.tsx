'use client';

import {useState} from 'react';
import {Button} from 'antd';
import {Modal} from "@/components/ui";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {EmptyCart} from "@/components/shared/EmptyCart";
import {UserCartModalTitle} from "@/features/cart/UserCartModalTitle";

export function UserCart() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                size="large"
                className="mr-0 md:mr-4"
                icon={<ShoppingCartOutlined style={{ fontSize: 26 }} />}
                onClick={() => setOpen(true)}
                aria-label={"Shopping cart button"}
            />

            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                title={<UserCartModalTitle/>}
            >
               <EmptyCart/>
            </Modal>
        </>
    );
}

