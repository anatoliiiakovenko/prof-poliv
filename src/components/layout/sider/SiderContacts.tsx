"use client";

import React from "react";
import { Space, Typography, Divider } from "antd";
import { PhoneOutlined, EnvironmentOutlined, GlobalOutlined, MailOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { SiderTitle } from "@/components/layout/sider/SiderTitle";

const { Text, Link } = Typography;

export function SiderContacts() {
    const handleMapClick = () => {
        // Open Google Maps with a specific location
        window.open("https://maps.google.com/?q=Kyiv,Ukraine", "_blank");
    };

    return (
        <>
            <SiderTitle title="Контакти" />
            
            <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                {/* Phones */}
                <div>
                    <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                        <PhoneOutlined /> Телефони
                    </Text>
                    <Space orientation="vertical" size="small">
                        <Link href="tel:+380441234567">+38 (044) 123-45-67</Link>
                        <Link href="tel:+380671234567">+38 (067) 123-45-67</Link>
                        <Link href="tel:+380501234567">+38 (050) 123-45-67</Link>
                    </Space>
                </div>

                <Divider style={{ margin: '12px 0' }} />

                {/* Address */}
                <div>
                    <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                        <EnvironmentOutlined /> Адреса
                    </Text>
                    <Text>
                        вул. Велика Кільцева, 4в<br />
                        Київ, 01001<br />
                        Україна
                    </Text>
                </div>

                <Divider style={{ margin: '12px 0' }} />

                {/* Additional types of connect */}
                <div>
                    <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                        <GlobalOutlined /> Інші способи зв'язку
                    </Text>
                    <Space orientation="vertical" size="small">
                        <div>
                            <MailOutlined style={{ marginRight: '8px' }} />
                            <Link href="mailto:info@example.com">office@profpoliv.in.ua</Link>
                        </div>
                        <div>
                            <ClockCircleOutlined style={{ marginRight: '8px' }} />
                            <Text>Пн-Пт: 9:00 - 18:00</Text>
                        </div>
                        <div>
                            <GlobalOutlined style={{ marginRight: '8px' }} />
                            <Link href="https://profpoliv.in.ua" target="_blank">www.profpoliv.in.ua</Link>
                        </div>
                    </Space>
                </div>
            </Space>
        </>
    );
}