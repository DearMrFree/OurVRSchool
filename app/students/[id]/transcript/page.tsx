import { getStudentData } from "@/lib/api"
import { FullTranscript } from "@/components/FullTranscript"
import { notFound } from "next/navigation"

export default async function TranscriptPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    console.error("No student ID provided in params")
    return <div>Invalid request. Please provide a student ID.</div>
  }

  const student = await getStudentData(params.id)

  if (!student) {
    console.error(`Student with id ${params.id} not found`)
    return <div>Student not found. Please check the student ID and try again.</div>
  }

  return <FullTranscript student={student} />
}

