import { Separator } from "@/components/ui/separator";
import { FoodItem } from "./index";

function FoodList() {
  return (
    <ul className="flex flex-col gap-1.5">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index}>
          <FoodItem />
          <Separator className="min-h-1 bg-neutral-100" />
        </li>
      ))}
    </ul>
  );
}

export { FoodList };
