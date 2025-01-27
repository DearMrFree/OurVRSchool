import {
  VRSchoolLogo,
  ParchmentLogo,
  USPTOVerificationQR,
  ParchmentVerificationQR,
  EducoinLogo,
  AllTranscriptLogos,
} from "./TranscriptLogos"

export default function ExampleUsage() {
  const serialNumber = `EDU-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${new Date().getFullYear()}`

  return (
    <div className="space-y-8">
      {/* Use individual logos */}
      <div className="flex items-center gap-4">
        <VRSchoolLogo width={60} height={60} />
        <ParchmentLogo width={80} height={24} />
      </div>

      {/* Use Educoin logo with different sizes */}
      <div className="flex items-center gap-4">
        <EducoinLogo serialNumber={serialNumber} size="small" />
        <EducoinLogo serialNumber={serialNumber} size="medium" />
      </div>

      {/* Or use all logos together */}
      <AllTranscriptLogos serialNumber={serialNumber} />
    </div>
  )
}

