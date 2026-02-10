import {Logo} from "@/components/icons/Logo";

export default function HomePage() {
  return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Prof Poliv</h1>
          <Logo className="text-green-600"/>
        <p className="mt-2 text-gray-600">
          Інтернет-магазин обладнання для поливу
        </p>
      </main>
  )
}
