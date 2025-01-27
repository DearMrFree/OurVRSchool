"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer } from "lucide-react"
import styles from "../styles/EnhancedTranscript.module.css"
import { PageNumber } from "./PageNumber"

interface LetterOfRecommendationProps {
  studentName: string
  studentId: string
  letterContent: string
  signatureUrl: string
  recommenderName: string
  recommenderTitle: string
  salutation: string
}

export function LetterOfRecommendation({
  studentName,
  studentId,
  letterContent,
  signatureUrl,
  recommenderName,
  recommenderTitle,
  salutation,
}: LetterOfRecommendationProps) {
  const printDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className={`px-4 py-8 print:p-0 ${styles.transcriptPage}`}>
      <Card className={styles.transcript}>
        <div className={styles.securityBorder}>
          <div className={styles.securityBorderInner} />
        </div>

        <div className={styles.guillocheBackground} />
        <div className={styles.microPrintBorder} />
        <div className={styles.colorShiftBackground} />

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
          <CardHeader className={styles.header}>
            <div className={styles.headerContent}>
              <div className={`${styles.logo} ${styles.holographicLogo}`}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20VR%20School%20Logo-8DMm1V0KhnpWbfTskWmhBH6a54BFly.png"
                  alt="VR School Logo"
                  width={120}
                  height={120}
                  priority
                  className={styles.logoImage}
                />
              </div>
              <div className={styles.headerText}>
                <h1 className={styles.schoolName}>THE VR SCHOOL</h1>
                <h2 className={styles.registrarOffice}>OFFICE OF THE SUPERINTENDENT OF ACADEMIC MISSIONS</h2>
                <p className={styles.schoolAddress}>531 Lasuen Mall #19492, Stanford, CA 94305</p>
                <p className={styles.schoolContact}>Tel: (650) 656-0483 | CEEB Code: 170588</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative p-8">
            <h2 className={styles.sectionTitle}>Letter of Recommendation</h2>

            <div className={styles.letterContent}>
              <p className={styles.date}>{printDate}</p>
              <p className={styles.salutation}>{salutation}</p>

              {letterContent.split("\n\n").map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

              <div className={styles.signature}>
                <p>Sincerely,</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Signature.jpg-gA6rjboMuR6LmNeQZcx26pZrEvrPuI.jpeg"
                  alt="Dr. Freedom Cheteni Signature"
                  width={200}
                  height={100}
                  className={`${styles.signatureImage} ${styles.blendedSignature}`}
                />
                <p>{recommenderName}</p>
                <p>{recommenderTitle}</p>
                <p>The VR School</p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      <PageNumber studentName={studentName} studentId={studentId} />
    </div>
  )
}

