"use client";

import React from "react";
import {SiderTitle} from "@/components/layout/sider/SiderTitle";
import {PriceRangeSlider} from "@/components/layout/sider/PriceRangeSlider";

export function SiderFilter() {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 1000]);

    return (
        <div style={{ width: "100%" }}>
            <SiderTitle title="Фільтри"/>
            <h4>Ціна</h4>
            <PriceRangeSlider
                value={priceRange}
                onChange={setPriceRange}
            />
        </div>
    );
}
