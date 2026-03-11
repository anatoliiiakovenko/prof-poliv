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
                        вул. Хрещатик, 1<br />
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
                            <Link href="mailto:info@example.com">info@example.com</Link>
                        </div>
                        <div>
                            <ClockCircleOutlined style={{ marginRight: '8px' }} />
                            <Text>Пн-Пт: 9:00 - 18:00</Text>
                        </div>
                        <div>
                            <GlobalOutlined style={{ marginRight: '8px' }} />
                            <Link href="https://example.com" target="_blank">example.com</Link>
                        </div>
                    </Space>
                </div>

                <Divider style={{ margin: '12px 0' }} />

                {/* Map */}
                <div>
                    <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                        <EnvironmentOutlined /> Мапа
                    </Text>
                    <div 
                        onClick={handleMapClick}
                        style={{
                            width: '100%',
                            height: '200px',
                            backgroundColor: '#f5f5f5',
                            border: '1px solid #d9d9d9',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundImage: 'url("https://maps.googleapis.com/maps/api/staticmap?center=Kyiv,Ukraine&zoom=15&size=400x200&markers=color:red%7CKyiv,Ukraine")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            fontSize: '14px'
                        }}>
                            Натисніть щоб відкрити мапу
                        </div>
                    </div>
                </div>
            </Space>
        </>
    );
}