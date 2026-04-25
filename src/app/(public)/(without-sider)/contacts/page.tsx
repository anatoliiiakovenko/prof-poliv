"use client";

import { useRouter } from "next/navigation";
import { Button } from "antd";
import { ArrowLeftOutlined, PhoneOutlined, EnvironmentOutlined, MailOutlined, ClockCircleOutlined, GlobalOutlined } from "@ant-design/icons";

export default function ContactsPage() {
  const router = useRouter();

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Велика+Кільцева+4в,Kyiv,Ukraine", "_blank");
  };

  return (
    <>
      <Button icon={<ArrowLeftOutlined />} onClick={() => router.back()} className="absolute -top-2 -left-2">
        Назад
      </Button>
      <div className="mx-auto max-w-4xl px-4 py-6">
        <h1 className="text-3xl font-bold mb-8">Контакти</h1>

      <div className="space-y-8">
        {/* Phones */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <PhoneOutlined /> Телефони
          </h2>
          <div className="space-y-2">
            <a href="tel:+380441234567" className="block text-blue-600 hover:underline">
              +38 (044) 123-45-67
            </a>
            <a href="tel:+380671234567" className="block text-blue-600 hover:underline">
              +38 (067) 123-45-67
            </a>
            <a href="tel:+380501234567" className="block text-blue-600 hover:underline">
              +38 (050) 123-45-67
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <EnvironmentOutlined /> Адреса
          </h2>
          <p className="text-gray-700">
            вул. Велика Кільцева, 4в<br />
            Київ, 01001<br />
            Україна
          </p>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <EnvironmentOutlined /> Мапа
          </h2>
          <div
            onClick={handleMapClick}
            className="w-full h-[300px] bg-gray-100 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-center relative overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5!2d30.5!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjAiTiAzMMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sua!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded text-sm">
              Натисніть щоб відкрити мапу
            </div>
          </div>
        </div>

        {/* Additional contact info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <GlobalOutlined /> Інші способи зв'язку
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MailOutlined />
              <a href="mailto:office@profpoliv.in.ua" className="text-blue-600 hover:underline">
                office@profpoliv.in.ua
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ClockCircleOutlined />
              <span className="text-gray-700">Пн-Пт: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-2">
              <GlobalOutlined />
              <a href="https://profpoliv.in.ua" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.profpoliv.in.ua
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
