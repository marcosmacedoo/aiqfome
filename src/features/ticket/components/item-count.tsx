import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle } from "lucide-react";

function ItemCount() {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon" variant="ghost">
        <MinusCircle size={24} className="text-teal-400 min-h-6 min-w-6" />
      </Button>
      <span className="font-bold text-base">2</span>
      <Button size="icon" variant="ghost">
        <PlusCircle size={24} className="text-teal-400 min-h-6 min-w-6" />
      </Button>
    </div>
  );
}

export { ItemCount };
