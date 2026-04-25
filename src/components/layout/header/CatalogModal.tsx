"use client";

import Link from "next/link";
import { Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { catalogMenu } from "@/static/catalog-menu";
import { mockedProducts } from "@/static/mocked-products";

export function CatalogModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState(catalogMenu[0]);

  const selectedCategoryItem = catalogMenu.find((c) => c.key === selectedCategory?.key) || catalogMenu[0];

  const getProduct = (id: string) => mockedProducts.find((p) => p.id === id);

  return (
    <Modal
      title={"Каталог товарів"}
      open={open}
      onCancel={onClose}
      footer={null}
      width={{ xs: "100vw", sm: "100vw", md: 800, lg: 1000 }}
      style={{ top: 0, maxWidth: "100vw", paddingBottom: 0 }}
      styles={{ body: { padding: 0, height: "100vh" } }}
      className="catalog-modal"
      centered={false}
    >
      <div className="flex flex-col md:flex-row h-screen md:h-[650px]">
        {/* Left sidebar - categories */}
        <div className="w-full md:w-72 border-r border-border overflow-y-auto bg-white max-h-[30vh] md:max-h-full">
          <ul className="py-4">
            {catalogMenu.map((category) => (
              <li key={category.key}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                    selectedCategory?.key === category.key
                      ? "bg-green-50 text-green-600 border-l-4 border-green-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  }`}
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - subcategories or products */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-50">
          {selectedCategoryItem.subcategories ? (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">{selectedCategoryItem.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {selectedCategoryItem.subcategories.map((subcategory) => (
                  <div key={subcategory.key}>
                    <Link
                      href={subcategory.key}
                      onClick={onClose}
                      className="block text-base font-semibold text-gray-900 hover:text-green-600 mb-3"
                    >
                      {subcategory.title}
                    </Link>
                    {subcategory.productIds && (
                      <ul className="space-y-2">
                        {subcategory.productIds.map((id) => {
                          const product = getProduct(id);
                          return product ? (
                            <li key={id}>
                              <Link
                                href={`/krapelna-strichka/${id}`}
                                onClick={onClose}
                                className="block text-sm text-gray-600 hover:text-green-600 hover:underline"
                              >
                                {product.title}
                              </Link>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategoryItem.productIds ? (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-900">{selectedCategoryItem.title}</h2>
              <ul className="space-y-3">
                {selectedCategoryItem.productIds.map((id) => {
                  const product = getProduct(id);
                  return product ? (
                    <li key={id}>
                      <Link
                        href={`/krapelna-strichka/${id}`}
                        onClick={onClose}
                        className="block text-base text-gray-900 hover:text-green-600 hover:underline"
                      >
                        {product.title}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          ) : (
            <div className="text-gray-500 text-center py-12">
              Категорія &quot;{selectedCategoryItem.title}&quot; поки що не має товарів
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
