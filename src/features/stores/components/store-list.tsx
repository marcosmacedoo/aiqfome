import Link from "next/link";
import { StoreItem } from "./store-item";

const stores = [
  {
    id: 1,
    name: "Subway - Teresina Shopping",
    logo: "/images/logos/subway.svg",
    rating: 4.1,
    freightPrice: 0,
  },
  {
    id: 2,
    name: "McDonalds - Saci",
    logo: "/images/logos/mcdonalds.svg",
    rating: 4.7,
    freightPrice: 12,
  },
  {
    id: 3,
    name: "Burger King - Dirceu",
    logo: "/images/logos/burger-king.svg",
    rating: 4.9,
    freightPrice: 0,
  },
];

function StoreList() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {stores.map((store) => (
        <Link key={store.id} href={`/stores/${store.id}`}>
          <StoreItem key={store.id} store={store} />
        </Link>
      ))}
    </div>
  );
}

export { StoreList };
