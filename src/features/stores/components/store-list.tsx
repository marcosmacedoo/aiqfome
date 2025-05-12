import { StoreItem } from "./store-item";

function StoreList() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <StoreItem />
      <StoreItem />
    </div>
  );
}

export { StoreList };
