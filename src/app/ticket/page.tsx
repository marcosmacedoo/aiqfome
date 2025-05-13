import { Header } from "@/components/layout";
import { FoodList, CardTotalPrice } from "@/features/ticket/components";
import Image from "next/image";

export default function Ticket() {
  return (
    <>
      <Header />
      <main>
        <div className="mt-6 px-4 flex items-center gap-2">
          <Image
            src={"/images/logos/burger-king.svg"}
            width={48}
            height={48}
            alt="Logo do Subway"
          />
          <div>
            <span className="text-neutral-900 block">seus itens em</span>
            <strong className="mt-1 text-neutral-900">Burger King</strong>
          </div>
        </div>

        <FoodList />
      </main>
      <CardTotalPrice />
    </>
  );
}
