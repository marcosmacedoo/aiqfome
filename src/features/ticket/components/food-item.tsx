import { Button } from "@/components/ui/button";
import { Dot, PencilIcon } from "lucide-react";
import Link from "next/link";
import { FoodNote, ItemCount } from "./index";

function ItemAditional() {}

function FoodItem() {
  return (
    <div className="p-4 flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-base">
        <span className="text-neutral-900 font-bold">Ceviche de salmão</span>
        <strong className="text-purple-500 font-extrabold">R$ 10,00</strong>
      </div>

      <div className="flex items-center gap-6 justify-end">
        <Button asChild variant="link" className="text-teal-400 font-bold">
          <Link href={"/"}>
            <PencilIcon size={16} /> editar
          </Link>
        </Button>

        <ItemCount />
      </div>

      <ul className="flex flex-col gap-1.5 text-sm">
        <li className="flex flex-col gap-0.5 text-text-light">
          <div>
            <Dot className="inline" />{" "}
            <strong className="-ml-1">tamanho</strong>
          </div>
          <span className="font-semibold block ml-6">médio</span>
        </li>

        <li className="flex flex-col gap-0.5 text-text-light">
          <div>
            <Dot className="inline" />{" "}
            <strong className="-ml-1">vai querer bebida?</strong>
          </div>
          <div>
            <span className="font-semibold ml-6">coca-cola</span>
            <span className="font-bold text-teal-500 ml-3">+R$5,00</span>
          </div>
        </li>
      </ul>

      <FoodNote>tirar a cebola e uva passa</FoodNote>
    </div>
  );
}

export { FoodItem };
