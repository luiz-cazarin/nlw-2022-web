import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 self-stretch rounded-lg flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white block">
              Não encontrou o seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anùncio para encontrar novos playesrs!
            </span>
          </div>
          <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-6">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </Dialog.Trigger>
        </div>
      </div>
    </>
  );
}
