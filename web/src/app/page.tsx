import { User } from 'lucide-react'
import nlwLogo from '../assets/nlw-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover '>
      <div className=" relative flex flex-col justify-between px-28 py-16 items-start overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 rounded-full blur-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute right-2 top-0  bottom-0 w-2 bg-stripes " />
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug max-w-[140px]"> <span className="underline">Crie sua conta </span> e salve suas memórias</p>
        </a>



        <div className="space-y-5">
          <Image src={nlwLogo} alt='NLW Spacetime' />
          <div className="max-w0[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold  leading-tight text-gray-50">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">
              Colecione  momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>
          <a href='' className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'>CADASTRAR LEMBRANÇA</a>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da <a className="underline  hover:text-gray-100"
            target="_blank"
            rel="noreferrer"
            href="https://rocketseat.com.br">Rocketseat</a>
        </div>
      </div>

      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover ">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, começe a{' '}
            <a href="" className="underline hover:text-gray-50">criar agora</a>!
          </p>
        </div>
      </div>
    </main>
  )
}
