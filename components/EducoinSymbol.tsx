import React from 'react'
import Image from 'next/image'
import { Coins } from 'lucide-react'
import styles from '../styles/EnhancedTranscript.module.css'

interface EducoinSymbolProps {
  serialNumber: string
}

export const EducoinSymbol: React.FC<EducoinSymbolProps> = ({ serialNumber }) => {
  return (
    <div className={styles.educoinSymbol}>
      <div className={styles.educoinInner}>
        <div className={styles.educoinLogo}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20VR%20School%20Logo-8DMm1V0KhnpWbfTskWmhBH6a54BFly.png"
            alt="VR School Logo"
            width={40}
            height={40}
            className={styles.educoinLogoImage}
          />
        </div>
        <Coins className={styles.coinIcon} />
        <div className={styles.educoinText}>EDUCOIN<sup className={styles.trademark}>TM</sup></div>
        <div className={styles.serialNumber}>{serialNumber}</div>
      </div>
      <div className={styles.educoinRing}></div>
      <div className={styles.educoinRing2}></div>
      <div className={styles.educoinSerialRing}>SER. NO. 88-199,969, FILED 11-19-2018</div>
    </div>
  )
}

