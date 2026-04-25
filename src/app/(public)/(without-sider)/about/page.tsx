"use client";

import { useRouter } from "next/navigation";
import { Button } from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";

export default function AboutPage() {
  const router = useRouter();

  return (
    <>
      <Button icon={<ArrowLeftOutlined />} onClick={() => router.back()} className="absolute -top-2 -left-2">
        Назад
      </Button>
      <div className="mx-auto max-w-4xl px-4 py-6">
        <h1 className="text-3xl font-bold mb-8">Про нас</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          У 2016 році, щоб задовольнити потреби клієнтів, в першу чергу, щоб на
          початкових етапах робіт в саду уникнути виправлення помилок
          непрофесіоналів, що призводить до втрати дорогоцінного часу, ми
          заснували нашу компанію, основним напрямком якої є – автоматизація
          іригаційних систем крапельного поливу.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Метою нашої компанії є:
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>запровадження іноваційних технологій професійного зрошення;</li>
          <li>
            реалізація автоматичних систем поливу від проекту до збору врожаю;
          </li>
          <li>
            зменшення трудомістких, енергозатратних процесів, пов'язаних з
            поливом та збоях у системі;
          </li>
          <li>
            забезпечення високої врожайності при оптимальній нормі зрошення та
            «розумному» дозуванні добрив.
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-8">
          Ми пропонуємо Вам рішення різного роду «під ключ», якi дозволять
          Вашому бізнесу приносити більше доходу і, відповідно, рости і
          розширюватися.
        </p>
      </div>
    </div>
    </>
  );
}
