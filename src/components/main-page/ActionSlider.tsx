"use client";

import { Carousel } from "antd";
import React from "react";
import {
  ToolOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { actionSlides } from "@/static/action-slides";

const iconMap: Record<string, React.ComponentType<any>> = {
  ToolOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  GiftOutlined,
};

export function ActionSlider() {
  return (
    <div className="w-full h-48 mb-6 rounded-lg overflow-hidden shadow-sm">
      <Carousel autoplay arrows>
        {actionSlides.map((slide, i) => {
          const Icon = iconMap[slide.icon];
          return (
            <div key={i} className="h-48">
              <div
                className={`
                  h-full w-full flex items-center justify-between
                  px-6 md:px-10 text-white ${slide.bg}
                `}
              >
                <div className="flex flex-col gap-1 max-w-md">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    {slide.desc}
                  </p>
                </div>
                <div className="hidden sm:block shrink-0 ml-4">
                  {Icon && <Icon className="text-5xl opacity-90" />}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
