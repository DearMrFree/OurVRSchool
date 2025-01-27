import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskRoundIcon as Flask } from "lucide-react"
import styles from "@/styles/EnhancedTranscript.module.css"

export function VirtualLabs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={`${styles.transcript} ${styles.nobleInstitution}`}>
        <CardHeader>
          <CardTitle className="flex items-center text-4xl font-bold text-primary mb-4">
            <Flask className="mr-4 h-8 w-8" />
            Virtual Labs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg">
            Conduct groundbreaking experiments in safe, hyper-realistic virtual laboratory environments equipped with
            cutting-edge tools.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Features:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Realistic simulations of complex scientific phenomena</li>
            <li>Access to virtual versions of advanced scientific equipment</li>
            <li>Safe environment for high-risk experiments</li>
            <li>Collaborative research projects with peers and mentors</li>
            <li>Integration with real-world data and research findings</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

