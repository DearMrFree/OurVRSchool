import "@/styles/globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import { MainNav } from "@/components/MainNav"
import { EducoinLogo, USPTOVerificationQR } from "@/components/TranscriptLogos"
import CustomHead from "@/components/CustomHead"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata = {
  title: "The VR School",
  description: "Student Management System for The VR School",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CustomHead />
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-black text-white`}>
        <MainNav />
        <main>{children}</main>
        <footer className="bg-black text-white border-t-2 border-vrGold py-8 mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="border border-vrGold/30 p-4 rounded-lg flex flex-col items-center">
                <EducoinLogo serialNumber={`EDU-${new Date().getFullYear()}`} size="small" />
                <p className="mt-2 text-xs text-center">EDUCOIN™</p>
              </div>
              {["VR FLISSC OLD UNION BUILDING", "VR SCHOOL OF AI", "VR HB CAMPUS"].map((title, index) => (
                <div key={index} className="border border-vrGold/30 p-4 rounded-lg">
                  <h3 className="text-vrGold font-semibold mb-2 text-sm">{title}</h3>
                  <address className="text-xs not-italic">
                    {index === 0 && (
                      <>
                        <p>520 Lasuen Mall, Suite 200</p>
                        <p>Stanford, CA 94305</p>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <p>531 LASUEN MALL #19492</p>
                        <p>STANFORD, CA 94305</p>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <p>301 S. SAN ANTONIO</p>
                        <p>CA 94022</p>
                      </>
                    )}
                  </address>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-4 border-t border-vrGold/30 flex flex-wrap justify-between items-center">
              <div className="text-xs">
                <a href="/terms" className="hover:text-vrGold mr-4">
                  Terms of Service
                </a>
                <a href="/privacy" className="hover:text-vrGold mr-4">
                  Privacy Policy
                </a>
                <a href="/accessibility" className="hover:text-vrGold">
                  Accessibility
                </a>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <USPTOVerificationQR width={60} height={60} />
                <div className="ml-4 flex space-x-4">
                  {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                    <a key={social} href={`https://${social}.com/thevrschool`} className="text-white hover:text-vrGold">
                      <span className="sr-only">{social}</span>
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'