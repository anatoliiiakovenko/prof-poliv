"use client";

import React from "react";
import { Slider, InputNumber, Space } from "antd";

interface PriceRangeSliderProps {
    value?: [number, number];
    onChange?: (value: [number, number]) => void;
    min?: number;
    max?: number;
}

export function PriceRangeSlider({ 
    value = [0, 1000], 
    onChange, 
    min = 0, 
    max = 1000 
}: PriceRangeSliderProps) {
    const [priceRange, setPriceRange] = React.useState<[number, number]>(value);

    const handleSliderChange = (newValue: number[]) => {
        const tupleValue: [number, number] = [newValue[0], newValue[1]];
        setPriceRange(tupleValue);
        onChange?.(tupleValue);
    };

    const handleMinChange = (minValue: number | null) => {
        const newValue: [number, number] = [minValue || 0, priceRange[1]];
        setPriceRange(newValue);
        onChange?.(newValue);
    };

    const handleMaxChange = (maxValue: number | null) => {
        const newValue: [number, number] = [priceRange[0], maxValue || max];
        setPriceRange(newValue);
        onChange?.(newValue);
    };

    return (
        <Space orientation="vertical" style={{ width: '100%', marginTop: 16 }}>
            <Slider
                range
                min={min}
                max={max}
                value={priceRange}
                onChange={handleSliderChange}
                styles={{
                    track: { backgroundColor: '#1890ff' },
                    handle: { borderColor: '#1890ff' }
                }}
            />
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                <InputNumber
                    placeholder="Мін"
                    min={min}
                    max={max}
                    value={priceRange[0]}
                    onChange={handleMinChange}
                    style={{ flex: 1 }}
                />
                <InputNumber
                    placeholder="Макс"
                    min={min}
                    max={max}
                    value={priceRange[1]}
                    onChange={handleMaxChange}
                    style={{ flex: 1 }}
                />
            </div>
        </Space>
    );
}
