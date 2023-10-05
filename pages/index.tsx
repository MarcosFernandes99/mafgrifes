import "../app/globals.css"
import ButtonAction from "@/components/ButtonAction"
import Image from "next/image"
import logo from "../public/logo.png"


export default function Page() {
  return (
    <>
      <main className="flex justify-center w-full h-screen items-center">

        <div className="min-w-1/5 h-96 rounded-xl shadow-xl bg-white flex flex-col items-center">
          <div className="mt-5 h-16 w-4/5 flex justify-between ">
            <span className="font-bold text-2xl">MAF - Grifes</span>
            <Image className="h-16 w-16" src={logo} alt="Logo"></Image>
          </div>
          <h3 className="w-3/5 mt-5 text-xl text-center">Seja bem-vindo à nossa loja! 😍</h3>

          <div className="mt-5 items-center flex flex-col w-full">
            <ButtonAction label="Fale com a gente" iconUrl="/whatsapp.png" linkUrl="https://wa.me/5511988591854"/>
            <ButtonAction label="Catálogo" iconUrl="/clothes-hanger.png" linkUrl="https://drive.google.com/drive/folders/1krdw7jzbhvuTU9SiICgdJFig8Cyh05hD?usp=sharing"/>
            <ButtonAction label="Pedido atacado" iconUrl="/cart.png" linkUrl="https://wa.me/5511988591854"/>
          </div>
        </div>

      </main>
    </>
  )
}