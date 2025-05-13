import { Footer, Header } from "@/components/layout";
import { Note, Button } from "@/components/ui";
import { Catalog } from "@/features/stores/components";
import { BikeIcon, ChevronRight, Dot, Heart, Share2, Star } from "lucide-react";
import Image from "next/image";

export default function StoreDetailsPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main className="px-4 py-6 flex-1">
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/logos/burger-king.svg"}
            width={40}
            height={40}
            alt="Logo do Burger King"
          />
          <h1 className="font-extrabold text-neutral-900 text-xl">
            Burger King - Dirceu
          </h1>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-3 items-center text-purple-700">
            <Button variant="ghost" size="icon">
              <Share2 className="text-purple-700 min-w-6 min-h-6" />
            </Button>

            <Button variant="ghost" size="icon">
              <Heart className="text-purple-700 min-w-6 min-h-6" />
            </Button>
          </div>
          <Button
            variant="ghost"
            className="text-teal-400 font-bold hover:text-teal-600"
            size={"sm"}
          >
            mais infos
            <ChevronRight size={12} className="-ml-1.5" />
          </Button>
        </div>

        <div className="mt-4 flex items-center font-bold  text-neutral-500">
          <div className="text-purple-500">
            <BikeIcon size={24} className="inline" />
            <span className="ml-1 text-sm">R$4,00</span>
            <ChevronRight size={14} className="inline " />
          </div>
          <Dot className="text-neutral-400 inline" />
          <span className="text-sm">hoje, 30-40 min</span>
          <Dot className="text-neutral-400 inline" />
          <span className="text-sm">5.2km</span>
        </div>

        <Note className="bg-teal-50 text-teal-600 mt-2">
          entrega grátis acima de R$ 35,00
        </Note>

        <div className="mt-2 flex items-center font-bold">
          <div className="flex items-center">
            <Star
              size={16}
              className="text-yellow-500 inline fill-yellow-500"
            />
            <span className="ml-1 text-sm text-neutral-500">4.5 de 5</span>
            <ChevronRight size={14} className="inline " />
          </div>
          <Dot className="text-neutral-400 inline" />
          <span className="text-sm text-green-500">fecha às 20:00</span>
        </div>

        <p className="mt-2 text-neutral-500 font-bold text-sm">
          pedido mínimo: R$ 15,00
        </p>

        <Catalog />
      </main>

      <Footer />
    </div>
  );
}
