import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})
const baiJamjuree =  BaiJamjuree({ subsets: ['latin'], weight: '700',variable: '--font-baiJamjuree'})

export const metadata: Metadata = {
  title: 'NLW Space Time',
  description: 'Uma capsula do tempo contruida com React, Next JS e Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
