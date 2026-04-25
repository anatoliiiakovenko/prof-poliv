import type { Product } from "@/types/product.type";

type SubcategoryItem = {
  key: string;
  title: string;
  productIds?: string[];
};

type CatalogMenuItem = {
  key: string;
  title: string;
  subcategories?: SubcategoryItem[];
  productIds?: string[];
};

export const catalogMenu: CatalogMenuItem[] = [
  {
    key: "/krapelna-trubka",
    title: "Крапельна трубка",
    subcategories: [
      {
        key: "/krapelna-trubka/16mm",
        title: "16 мм",
        productIds: ["p3"],
      },
      {
        key: "/krapelna-trubka/20mm",
        title: "20 мм",
        productIds: ["p4"],
      },
    ],
  },
  {
    key: "/krapelna-strichka",
    title: "Крапельна стрічка",
    subcategories: [
      {
        key: "/krapelna-strichka/6mil",
        title: "6 mil",
        productIds: ["p1"],
      },
      {
        key: "/krapelna-strichka/8mil",
        title: "8 mil",
        productIds: ["p2"],
      },
    ],
  },
  {
    key: "/krapelni-fitingy",
    title: "Фітінги для крапельного поливу",
    subcategories: [
      {
        key: "/krapelni-fitingy/zaglushki",
        title: "Заглушки",
        productIds: ["p9"],
      },
      {
        key: "/krapelni-fitingy/trojniki",
        title: "Трійники",
        productIds: ["p10"],
      },
      {
        key: "/krapelni-fitingy/kolina",
        title: "Коліна",
        productIds: ["p11"],
      },
      {
        key: "/krapelni-fitingy/mufty",
        title: "Муфти",
        productIds: ["p12"],
      },
      {
        key: "/krapelni-fitingy/starteri",
        title: "Стартери",
        productIds: ["p7", "p8"],
      },
    ],
  },
  {
    key: "/filtry",
    title: "Фільтри",
    subcategories: [
      {
        key: "/filtry/diskovi",
        title: "Дискові",
        productIds: ["p5"],
      },
      {
        key: "/filtry/sitcasti",
        title: "Сітчасті",
        productIds: ["p6"],
      },
    ],
  },
  {
    key: "/reductory-tysku",
    title: "Редуктори тиску",
    productIds: ["p17", "p18"],
  },
  {
    key: "/krapelnyci-mikrodoshuvachi",
    title: "Крапельниці та мікродощувачі",
    subcategories: [
      {
        key: "/krapelnyci-mikrodoshuvachi/mikrodzhety",
        title: "Мікроджети",
        productIds: ["p13"],
      },
      {
        key: "/krapelnyci-mikrodoshuvachi/mikrosprinkleri",
        title: "Мікроспринклери",
        productIds: ["p14"],
      },
    ],
  },
  {
    key: "/shlangy-layflat",
    title: "Шланги Layflat",
  },
  {
    key: "/kontrolery-polyvu",
    title: "Контролери поливу",
    subcategories: [
      {
        key: "/kontrolery-polyvu/mechanichni",
        title: "Механічні",
        productIds: ["p15"],
      },
      {
        key: "/kontrolery-polyvu/elektronni",
        title: "Електронні",
        productIds: ["p16"],
      },
    ],
  },
];
