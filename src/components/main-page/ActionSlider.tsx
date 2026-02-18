"use client";

import { Carousel } from "antd";
import React from "react";

export function ActionSlider() {
  return (
    <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
      <Carousel autoplay arrows>
        {[1, 2, 3, 4].map((item) => (
          <div key={item}>
            <div className="h-40 flex items-center justify-center bg-gray-400 text-white text-2xl">
              {item}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
