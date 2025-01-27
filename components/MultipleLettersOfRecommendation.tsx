"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer } from "lucide-react"
import { LetterOfRecommendation } from "./LetterOfRecommendation"
import styles from "../styles/EnhancedTranscript.module.css"

interface Letter {
  content: string
  recommenderName: string
  recommenderTitle: string
  signatureUrl: string
  salutation: string
}

interface MultipleLettersOfRecommendationProps {
  studentName: string
  studentId: string
  letters: Letter[]
}

export function MultipleLettersOfRecommendation({
  studentName,
  studentId,
  letters,
}: MultipleLettersOfRecommendationProps) {
  return (
    <div className={`container mx-auto px-4 py-8 print:p-0 ${styles.transcriptPage}`}>
      <div className="flex justify-between items-center mb-4 print:hidden">
        <Link href={`/students/${studentId}`}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Button>
        </Link>
        <Button onClick={() => window.print()}>
          <Printer className="mr-2 h-4 w-4" />
          Print Letters
        </Button>
      </div>

      {letters.map((letter, index) => (
        <div key={index} className={`mb-8 ${index > 0 ? "print:break-before-page" : ""}`}>
          <LetterOfRecommendation
            studentName={studentName}
            studentId={studentId}
            letterContent={letter.content}
            signatureUrl={letter.signatureUrl}
            recommenderName={letter.recommenderName}
            recommenderTitle={letter.recommenderTitle}
            salutation={letter.salutation}
          />
        </div>
      ))}
    </div>
  )
}

