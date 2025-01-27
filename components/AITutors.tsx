import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import styles from "@/styles/EnhancedTranscript.module.css"

export function AITutors() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={`${styles.transcript} ${styles.nobleInstitution}`}>
        <CardHeader>
          <CardTitle className="flex items-center text-4xl font-bold text-primary mb-4">
            <Award className="mr-4 h-8 w-8" />
            AI Tutors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg">
            Receive personalized guidance from our advanced AI tutoring system, adapting to your unique learning style
            and pace.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Benefits:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>24/7 availability for on-demand support</li>
            <li>Personalized learning plans based on individual needs</li>
            <li>Real-time feedback and progress tracking</li>
            <li>Multi-modal learning support (text, voice, and visual)</li>
            <li>Seamless integration with virtual classroom curriculum</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

