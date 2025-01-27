import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import styles from "@/styles/EnhancedTranscript.module.css"

export function GlobalCollaborations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={`${styles.transcript} ${styles.nobleInstitution}`}>
        <CardHeader>
          <CardTitle className="flex items-center text-4xl font-bold text-primary mb-4">
            <Globe className="mr-4 h-8 w-8" />
            Global Collaborations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg">
            Engage in real-time projects with students worldwide, fostering international understanding and innovative
            problem-solving.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Opportunities:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cross-cultural team projects</li>
            <li>Global hackathons and innovation challenges</li>
            <li>International virtual exchange programs</li>
            <li>Multilingual collaboration tools</li>
            <li>Real-world problem-solving with global impact</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

