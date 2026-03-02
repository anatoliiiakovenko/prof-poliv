"use client";

import {Grid, MenuProps} from "antd";
import React from "react";
import {SiderTitle} from "@/components/layout/sider/SiderTitle";

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>["items"][number];

export function SiderFilter() {



    return (
        <div style={{ width: "100%" }}>
            <SiderTitle title="Фільтри"/>
            <h4>Ціна</h4>
        </div>
    );
}
