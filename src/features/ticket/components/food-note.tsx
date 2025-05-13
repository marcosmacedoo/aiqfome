import { ReactNode } from "react";

type FoodNoteProps = {
  children: ReactNode;
};

function FoodNote({ children }: FoodNoteProps) {
  return (
    <div className="w-full p-1.5 text-sm bg-neutral-50 rounded-sm">
      <strong>observação: </strong>
      <span>{children}</span>
    </div>
  );
}

export { FoodNote };
