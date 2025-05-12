import Image from "next/image";
import { BikeIcon, StarIcon } from "lucide-react";

type Store = {
  id: number;
  name: string;
  logo: string;
  rating: number;
  freightPrice: number;
};

type StoreItemProps = {
  store: Store;
};

function StoreItem({ store }: StoreItemProps) {
  return (
    <div className="h-[72px] flex gap-3 items-center bg-neutral-50 rounded-lg hover:bg-neutral-200 transition-all duration-300">
      <Image
        src={store.logo}
        alt={`Logo ${store.name}`}
        width={72}
        height={72}
        className="row-span-2 rounded-l-lg"
      />
      <div>
        <strong className="text-base text-neutral-700">{store.name}</strong>
        <div className="flex items-center mt-1">
          {store.freightPrice > 0 ? (
            <>
              <BikeIcon size={24} className="text-purple-500 inline" />
              <span className="ml-1 text-sm text-purple-500 font-bold">
                R$4,00
              </span>
            </>
          ) : (
            <>
              <BikeIcon size={24} className="text-teal-600 inline" />
              <span className="ml-1 text-sm text-teal-600 font-bold">
                grátis
              </span>
            </>
          )}

          <StarIcon
            size={24}
            className="text-yellow-500 inline ml-2 fill-yellow-500"
          />
          <span className="ml-1 text-sm text-neutral-500 font-bold">
            {store.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export { StoreItem };
