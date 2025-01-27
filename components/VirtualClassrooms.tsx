import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book } from "lucide-react"
import styles from "@/styles/EnhancedTranscript.module.css"

export function VirtualClassrooms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={`${styles.transcript} ${styles.nobleInstitution}`}>
        <CardHeader>
          <CardTitle className="flex items-center text-4xl font-bold text-primary mb-4">
            <Book className="mr-4 h-8 w-8" />
            Virtual Classrooms
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg">
            Experience immersive learning environments tailored to each subject, guided by world-renowned experts and AI
            assistants.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immersive 3D environments for each subject</li>
            <li>Real-time interaction with instructors and peers</li>
            <li>AI-powered learning assistants for personalized support</li>
            <li>Virtual field trips and simulations</li>
            <li>Adaptive learning paths based on individual progress</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

