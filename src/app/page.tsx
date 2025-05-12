import { Footer, Header } from "@/components/layout";
import { StoreList } from "@/features/stores/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Image
        src={"/images/banner-dia-das-criancas.svg"}
        width={390}
        height={130}
        className="w-full object-cover"
        alt={"Banner com promoção de até 50% de desconto no dia das crianças"}
      />
      <section className="px-4 py-6">
        <h2 className="font-extrabold text-xl text-purple-500">abertos</h2>
        <StoreList />
      </section>

      <section className="px-4 py-6">
        <h2 className="font-extrabold text-xl text-purple-500">fechados</h2>
        <StoreList />
      </section>

      <Footer />
    </>
  );
}
