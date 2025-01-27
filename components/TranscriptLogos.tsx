"use client"

import Image from "next/image"
import { Coins } from "lucide-react"
import styles from "../styles/EnhancedTranscript.module.css"

interface EducoinLogoProps {
  serialNumber: string
  size?: "small" | "medium" | "large"
  className?: string
}

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function VRSchoolLogo({ className, width = 120, height = 120 }: LogoProps) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20VR%20School%20Logo-8DMm1V0KhnpWbfTskWmhBH6a54BFly.png"
      alt="VR School Logo"
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}

export function ParchmentLogo({ className, width = 100, height = 30 }: LogoProps) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parchment_-_new_rectangle_-ESB8Bi0WO3WTrwi3mx8PmGDM856GDb.png"
      alt="Parchment Logo"
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}

export function USPTOVerificationQR({ className, width = 80, height = 80 }: LogoProps) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20at%2021-26-35%20USPTO%20TSDR%20Case%20Viewer-tX1g4tuRBRXfC1WSIiNqpanQjJl1nq.png"
      alt="USPTO TSDR QR Code"
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}

export function ParchmentVerificationQR({ className, width = 100, height = 100 }: LogoProps) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parchment_qr-4Iu7d0eLj8TXxHHGqZXzIIBhBBLRNt.png"
      alt="Parchment Verification QR Code"
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}

export function EducoinLogo({ serialNumber, size = "medium", className }: EducoinLogoProps) {
  const dimensions = {
    small: { width: 80, height: 80 },
    medium: { width: 150, height: 150 },
    large: { width: 200, height: 200 },
  }

  const { width, height } = dimensions[size]

  return (
    <div className={`${styles.educoinSymbol} ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <div className={styles.educoinInner}>
        <div className={styles.educoinLogo}>
          <VRSchoolLogo width={width * 0.3} height={height * 0.3} className={styles.educoinLogoImage} />
        </div>
        <Coins className={styles.coinIcon} />
        <div className={styles.educoinText}>
          EDUCOIN<sup className={styles.trademark}>TM</sup>
        </div>
        <div className={styles.serialNumber}>{serialNumber}</div>
      </div>
      <div className={styles.educoinRing}></div>
      <div className={styles.educoinRing2}></div>
      <div className={styles.educoinSerialRing}>SER. NO. 88-199,969, FILED 11-19-2018</div>
    </div>
  )
}

// Example usage of how to use all logos together
export function AllTranscriptLogos({ serialNumber }: { serialNumber: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center p-4">
      <div className="flex flex-col items-center gap-2">
        <VRSchoolLogo />
        <span className="text-sm text-gray-600">VR School Logo</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ParchmentLogo />
        <span className="text-sm text-gray-600">Parchment Logo</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <USPTOVerificationQR />
        <span className="text-sm text-gray-600">USPTO Verification</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ParchmentVerificationQR />
        <span className="text-sm text-gray-600">Parchment Verification</span>
      </div>
      <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
        <EducoinLogo serialNumber={serialNumber} />
        <span className="text-sm text-gray-600">Educoin Logo</span>
      </div>
    </div>
  )
}

