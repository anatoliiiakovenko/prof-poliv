'use client';

import { ConfigProvider, theme } from 'antd';
import React from "react";

export default function Providers({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    const isDark = false;
    return (
        <ConfigProvider
            theme={{
                algorithm: isDark
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#2ecc71',
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
