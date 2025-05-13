import { Button } from "@/components/ui/button";

function CardTotalPrice() {
  return (
    <aside className="h-20 py-4 px-8 flex justify-between sticky left-0 right-0 bottom-0 bg-white rounded-t-4xl shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
      <div>
        <strong className="text-sm text-neutral-900">subtotal</strong>
        <h2 className="text-xl font-extrabold text-purple-500">R$ 100,00</h2>
      </div>

      <Button size="lg">ir para pagamento</Button>
    </aside>
  );
}

export { CardTotalPrice };
