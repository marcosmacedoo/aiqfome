import { Header } from "@/components/layout";
import { CardTotalPrice } from "@/features/ticket/components/card-total-price";

export default function Ticket() {
  return (
    <>
      <Header />
      <main>
        <h1>Ticket</h1>
      </main>
      <CardTotalPrice />
    </>
  );
}
