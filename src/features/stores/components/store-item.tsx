import Image from "next/image";
import { BikeIcon, StarIcon } from "lucide-react";

function StoreItem() {
  return (
    <div className="h-[72px] flex gap-3 items-center bg-neutral-50 rounded-lg">
      <Image
        src="/images/logos/subway.png"
        alt="Logo da subway"
        width={72}
        height={72}
        className="row-span-2 rounded-l-lg"
      />
      <div>
        <strong className="text-base text-neutral-700">
          Subway - Teresina Shopping
        </strong>
        <div className="flex items-center mt-1">
          <BikeIcon size={24} className="text-teal-600 inline" />
          <span className="ml-1 text-sm text-teal-600 font-bold">grátis</span>

          {/* <BikeIcon size={24} className="text-purple-500 inline" />
          <span className="ml-1 text-sm text-purple-500 font-bold">R$4,00</span> */}

          <StarIcon
            size={24}
            className="text-yellow-500 inline ml-2 fill-yellow-500"
          />
          <span className="ml-1 text-sm text-neutral-500 font-bold">4.7</span>
        </div>
      </div>
    </div>
  );
}

export { StoreItem };
