import { Button } from "@/components/ui";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function Catalog() {
  return (
    <div className="mt-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-base text-neutral-900">
            Niguiris
          </AccordionTrigger>
          <AccordionContent>
            <ul className="my-3 flex flex-col gap-5">
              <li className="font-sm flex items-center justify-between">
                <span className="font-semibold">Califórnia</span>{" "}
                <span className="text-purple-500 font-bold">R$ 4,00</span>
              </li>
              <li className="font-sm flex items-center justify-between">
                <span className="font-semibold">Filadélfia</span>{" "}
                <span className="text-purple-500 font-bold">R$ 14,00</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Temakis</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { Catalog };
