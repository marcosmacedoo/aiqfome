import { Footer, Header } from "@/components/layout";
import {
  Button,
  Separator,
  Note,
  RadioGroup,
  RadioGroupItem,
  Label,
  Checkbox,
  Textarea,
} from "@/components/ui";
import Image from "next/image";

export default function FoodDetailsPage() {
  return (
    <div>
      <Header />
      <main>
        <Image
          src={"/images/food.png"}
          width={390}
          height={195}
          alt="Ceviche de salmão"
          className="w-full object-cover"
        />

        <article className="p-4">
          <header className="space-y-2">
            <h1 className="font-bold text-xl text-neutral-700">
              Ceviche de salmão
            </h1>

            <p className="text-neutral-500 font-extrabold text-sm">
              a partir de{" "}
              <strong className="text-purple-500 text-lg">R$ 10,00</strong>
            </p>

            <p className="text-neutral-500 font-semibold text-sm">
              salmão temperado com limão, cebola e pimenta
            </p>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">quantos?</h2>
                <span className="text-neutral-500 text-sm font-semibold">
                  total
                </span>
                <span className="text-neutral-700 text-sm font-bold ml-1.5">
                  R$ 19,90
                </span>
              </div>
              <Button size="default">adicionar</Button>
            </div>
          </header>

          <Separator className="min-h-1 bg-neutral-100 my-5" />

          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">qual o tamanho?</h2>
                <span className="text-neutral-500 text-sm font-semibold">
                  escolha 1
                </span>
              </div>
              <Note className="bg-neutral-700 text-white">obrigatório</Note>
            </div>

            <RadioGroup className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">médio</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">grande</Label>
              </div>
            </RadioGroup>
          </section>

          <Separator className="min-h-1 bg-neutral-100 my-5" />

          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">acompanhamentos</h2>
                <span className="text-neutral-500 text-sm font-semibold">
                  escolha de 1 a 2
                </span>
              </div>
              <Note className="bg-neutral-700 text-white">obrigatório</Note>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="shoyu" />
                <Label htmlFor="shoyu">shoyu</Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="gengibre" />
                <Label htmlFor="gengibre">gengibre</Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="wasabi" />
                <Label htmlFor="wasabi">wasabi</Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="sem-acompanhamento" />
                <Label htmlFor="sem-acompanhamento">sem acompanhamento</Label>
              </div>
            </div>
          </section>

          <Separator className="min-h-1 bg-neutral-100 my-5" />

          {/* sessão vai querer bebida */}

          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">precisa de talher?</h2>
                <span className="text-neutral-500 text-sm font-semibold">
                  escolha até 1
                </span>
              </div>
            </div>

            <RadioGroup className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">hashi</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">garfo e faca</Label>
              </div>
            </RadioGroup>
          </section>

          <Separator className="min-h-1 bg-neutral-100 my-5" />

          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">mais alguma coisa?</h2>
                <span className="text-neutral-500 text-sm font-semibold">
                  escolha até 2
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="item-1" />
                <Label htmlFor="item-1">biscoito da sorte</Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="item-2" />
                <Label htmlFor="item-2">rolinho primareva</Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="item3" />
                <Label htmlFor="item3">guioza</Label>
              </div>
            </div>
          </section>

          <Separator className="min-h-1 bg-neutral-100 my-5" />

          <Textarea
            className="resize-none text-sm font-semibold text-neutral-500"
            placeholder="alguma observação do item? (opcional)"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
