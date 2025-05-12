import Image from "next/image";
import { ChevronRight, MapPin, User } from "lucide-react";
import { Input } from "../ui/input";

export default function Header() {
  return (
    <header className="p-4 bg-purple-500">
      <div className="mb-4 flex items-center justify-between">
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />

        <div className="flex gap-2.5 items-center">
          <MapPin size={24} color="white" />
          <div>
            <strong className="text-purple-200 text-sm block">
              entregando em
            </strong>

            <div className="flex items-center gap-1">
              <strong className="text-white text-sm">
                Rua Mandaguari, 198
              </strong>
              <ChevronRight size={16} color="white" />
            </div>
          </div>
        </div>

        <User size={24} color="white" />
      </div>

      <Input
        className="bg-white h-10"
        placeholder="busque pela loja ou culinária"
      />
    </header>
  );
}
