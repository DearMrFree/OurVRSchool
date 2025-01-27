"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Printer, Award, Book, Globe, FlaskRoundIcon as Flask } from "lucide-react"
import styles from "@/styles/EnhancedTranscript.module.css"
import { PageNumber } from "./PageNumber"
import {
  VRSchoolLogo,
  ParchmentLogo,
  USPTOVerificationQR,
  ParchmentVerificationQR,
  EducoinLogo,
} from "./TranscriptLogos"

export function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const drawPattern = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.strokeStyle = "rgba(218, 165, 32, 0.1)"
          ctx.lineWidth = 1

          for (let i = 0; i < canvas.width; i += 20) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, canvas.height)
            ctx.stroke()
          }

          for (let i = 0; i < canvas.height; i += 20) {
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(canvas.width, i)
            ctx.stroke()
          }
        }

        drawPattern()
        window.addEventListener("resize", drawPattern)
        return () => window.removeEventListener("resize", drawPattern)
      }
    }
  }, [])

  const printDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const documentId = `VRS-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 9)}`
  const educoinSerialNumber = `EDU-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${new Date().getFullYear()}`

  return (
    <div className={`container mx-auto px-4 py-8 print:p-0 ${styles.transcriptPage}`}>
      <div className="flex justify-end items-center mb-4 print:hidden">
        <button onClick={() => window.print()} className="flex items-center text-blue-600 hover:text-blue-800">
          <Printer className="mr-2 h-4 w-4" />
          Print Page
        </button>
      </div>

      <Card className={`${styles.transcript} ${styles.nobleInstitution}`}>
        <canvas ref={canvasRef} className={styles.patternOverlay} />
        <div className={styles.consistentBackground} />
        <div className={styles.securityBorder}>
          <div className={styles.securityBorderInner} />
        </div>

        <div className={`${styles.securityBanner} text-center`}>
          <Shield className="w-4 h-4 inline-block mr-2" />
          <span className={styles.aiCodeText}>COLLEGE BOARD AI CODE</span>
          <span className={styles.aiCode}>170588</span>
          <Shield className="w-4 h-4 inline-block ml-2" />
        </div>

        <div className={styles.watermark}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20VR%20School%20Logo-8DMm1V0KhnpWbfTskWmhBH6a54BFly.png"
            alt="Watermark"
            width={600}
            height={600}
            className={styles.watermarkImage}
          />
        </div>

        <div className={styles.repeatingBackground} />

        <div className={styles.content}>
          <header className={`${styles.header} text-center`}>
            <div className={`${styles.headerContent} flex flex-col items-center`}>
              <div className={`${styles.officialSeal} mb-8`}>
                <div className={styles.sealInner}>
                  <VRSchoolLogo width={150} height={150} className={styles.logoImage} />
                </div>
              </div>
              <div className={`${styles.officialDocument} text-center flex flex-col items-center`}>
                <h1 className={`${styles.schoolName} text-5xl font-bold mb-2 text-primary`}>THE VR SCHOOL</h1>
                <div className={`${styles.decorativeLine} mb-4`}></div>
                <h2 className={`${styles.registrarOffice} text-2xl font-semibold mb-4 text-primary`}>
                  OFFICE OF THE SUPERINTENDENT OF NON-PUBLIC SCHOOLS
                </h2>
                <h3 className="text-xl font-medium mb-4 text-gray-700">STATE OF CALIFORNIA NON-PUBLIC SCHOOL</h3>
                <a
                  href="https://www.cde.ca.gov/SchoolDirectory/details?cdscode=43696416159024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.cdeCode} mb-4 inline-block`}
                >
                  CDE Code: 43 69641 6159024
                </a>
                <div className={`${styles.schoolInfo} mb-4`}>
                  <p className={styles.schoolAddress}>531 Lasuen Mall #19492, Stanford, CA 94305</p>
                  <p className={styles.schoolContact}>Tel: (650) 656-0483</p>
                </div>
                <div className={`${styles.verificationSection} flex justify-between items-center mb-6`}>
                  <div className={styles.parchmentContainer}>
                    <Link
                      href="https://www.parchment.com/u/registration/76724515/institution"
                      className="block hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ParchmentLogo width={100} height={30} />
                    </Link>
                  </div>
                  <div className={styles.signatureSection}>
                    <h3 className={styles.boardTitle}>Board of Education</h3>
                    <div className={styles.signatureGrid}>
                      <div className={styles.signatureItem}>
                        <span className={styles.signatureName}>Dr. Makaziwe Mandela</span>
                        <div className={styles.signatureEffect}></div>
                      </div>
                      <div className={styles.signatureItem}>
                        <span className={styles.signatureName}>Dr. Mia Mottley</span>
                        <div className={styles.signatureEffect}></div>
                      </div>
                      <div className={styles.signatureItem}>
                        <span className={styles.signatureName}>Dr. Esther Wojcicki</span>
                        <div className={styles.signatureEffect}></div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.educoinContainer} flex flex-col items-center`}>
                    <USPTOVerificationQR width={80} height={80} className={styles.qrCode} />
                    <p className={styles.qrLabel}>EDUCOIN™</p>
                  </div>
                </div>
                <div className={styles.qrCodeContainer}>
                  <EducoinLogo serialNumber={educoinSerialNumber} size="small" />
                  <p className={styles.qrLabel}>EDUCOIN™</p>
                </div>
              </div>
            </div>
          </header>

          <main className="relative p-8">
            <section className={`${styles.programInfo} mb-12`}>
              <h2 className={`${styles.sectionTitle} text-4xl font-bold text-primary mb-8 relative`}>
                <span className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-1 absolute bottom-0 left-0 right-0"></span>
                Forging the Future of Education
              </h2>
              <div className={styles.programDetails}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Link href="/virtual-classrooms" className="block">
                    <Card className={`${styles.featureCard} h-full transition-transform transform hover:scale-105`}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Book className="mr-2" />
                          Virtual Classrooms
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Experience immersive learning environments tailored to each subject, guided by world-renowned
                          experts and AI assistants.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/ai-tutors" className="block">
                    <Card className={`${styles.featureCard} h-full transition-transform transform hover:scale-105`}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="mr-2" />
                          AI Tutors
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Receive personalized guidance from our advanced AI tutoring system, adapting to your unique
                          learning style and pace.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/global-collaborations" className="block">
                    <Card className={`${styles.featureCard} h-full transition-transform transform hover:scale-105`}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Globe className="mr-2" />
                          Global Collaborations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Engage in real-time projects with students worldwide, fostering international understanding
                          and innovative problem-solving.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/virtual-labs" className="block">
                    <Card className={`${styles.featureCard} h-full transition-transform transform hover:scale-105`}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Flask className="mr-2" />
                          Virtual Labs
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Conduct groundbreaking experiments in safe, hyper-realistic virtual laboratory environments
                          equipped with cutting-edge tools.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </section>

            <section className={`${styles.achievements} mb-12`}>
              <h2 className={`${styles.sectionTitle} text-3xl font-bold text-primary mb-6`}>
                Our Legacy of Excellence
              </h2>
              <div className={`${styles.achievementsList} grid grid-cols-1 md:grid-cols-3 gap-6`}>
                <div className={styles.achievementItem}>
                  <span className={styles.achievementNumber}>37</span>
                  <span className={styles.achievementLabel}>Movement Laureates</span>
                </div>
                <div className={styles.achievementItem}>
                  <span className={styles.achievementNumber}>52</span>
                  <span className={styles.achievementLabel}>Moonshot Award Winners</span>
                </div>
                <div className={styles.achievementItem}>
                  <span className={styles.achievementNumber}>189</span>
                  <span className={styles.achievementLabel}>Patents Granted</span>
                </div>
              </div>
            </section>

            <section className={styles.transcriptFooter}>
              <div className={`${styles.securityStatement} mb-6`}>
                <Shield className="w-5 h-5 inline-block mr-2" />
                <p>
                  The VR School utilizes quantum-encrypted blockchain technology to ensure the utmost security and
                  authenticity of all student records and educational experiences.
                </p>
              </div>

              <div className={`${styles.documentValidation} mb-6`}>
                <div className={styles.validationQR}>
                  <ParchmentVerificationQR width={100} height={100} />
                </div>
                <p className={styles.validationText}>Scan to verify authenticity. Document ID: {documentId}</p>
              </div>

              <div className={`${styles.legalInfo} mb-6`}>
                <div className={styles.legalInfoContent}>
                  <p>The VR School is owned and operated by InventXR, a Wyoming Limited Liability Company.</p>
                  <p>InventXR - Reg. No. 5,935,271, Registered Dec. 17, 2019</p>
                  <p>
                    CLASS 41: Educational services, namely, providing incentives to students using cryptocurrency
                    blockchain technology to demonstrate excellence in the field of education
                  </p>
                </div>
                <div className={styles.legalInfoQR}>
                  <USPTOVerificationQR width={100} height={100} className={styles.qrCode} />
                  <p className={styles.qrLabel}>USPTO TSDR Case Viewer</p>
                </div>
              </div>

              <div className={styles.trademarkInfo}>
                <p>
                  THE MARK CONSISTS OF STANDARD CHARACTERS WITHOUT CLAIM TO ANY PARTICULAR FONT STYLE, SIZE OR COLOR
                </p>
                <p>SER. NO. 88-199,969, FILED 11-19-2018</p>
              </div>

              <div className={styles.transcriptEnd}>
                <div className={styles.endLine}>
                  <span className={styles.sectionDivider}>{"-----"}</span>
                  INNOVATE • LEARN • ACHIEVE
                  <span className={styles.sectionDivider}>{"-----"}</span>
                </div>
                <p className={styles.keyReference}>© {new Date().getFullYear()} The VR School. All rights reserved.</p>
              </div>
            </section>
          </main>
        </div>
      </Card>
      <PageNumber studentName="Prospective Student" studentId="VRS-DEMO" />
    </div>
  )
}

