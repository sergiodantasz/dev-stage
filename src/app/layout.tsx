import "@/app/globals.css"
import type { Metadata } from "next"
import { Montserrat, Oxanium } from "next/font/google"

export const metadata: Metadata = {
  title: "Dev Stage",
  description:
    "Aplicação desenvolvida utilizando o framework Next.js durante o evento NLW Connect da Rocketseat.",
}

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
})

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${oxanium.variable} ${montserrat.variable}`}
    >
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top min-h-dvh flex flex-col items-center justify-center">
        <main className="max-w-[1240px] mx-auto px-5 py-8 w-full">
          {children}
        </main>
      </body>
    </html>
  )
}
