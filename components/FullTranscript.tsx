"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer, Shield, ShieldCheck, Coins } from "lucide-react"
import type { Student } from "@/types/student"
import styles from "../styles/EnhancedTranscript.module.css"
import { PageNumber } from "./PageNumber"
import { EducoinSymbol } from "./EducoinSymbol"
import { CourseList } from "./CourseList"
import {
  VRSchoolLogo,
  ParchmentLogo,
  USPTOVerificationQR,
  ParchmentVerificationQR,
  EducoinLogo,
} from "./TranscriptLogos"

interface FullTranscriptProps {
  student: Student
}

export function FullTranscript({ student }: FullTranscriptProps) {
  if (!student) {
    return <div>Error: Student data not available</div>
  }

  const printDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const documentId = `${student.studentId}-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 9)}`
  const educoinSerialNumber = `EDU-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${new Date().getFullYear()}`

  const getGPAForGrade = (grade: number) => {
    switch (grade) {
      case 9:
        return student.freshmanGPA
      case 10:
        return student.sophomoreGPA
      case 11:
        return student.juniorGPA
      case 12:
        return student.seniorGPA
      default:
        return "N/A"
    }
  }

  return (
    <div className={`container mx-auto px-4 py-8 print:p-0 ${styles.transcriptPage}`}>
      <div className="flex justify-between items-center mb-4 print:hidden">
        <Link href={`/students/${student.id}`}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Button>
        </Link>
        <Button onClick={() => window.print()}>
          <Printer className="mr-2 h-4 w-4" />
          Print Transcript
        </Button>
      </div>

      <Card className={styles.transcript}>
        <div className={styles.securityBorder}>
          <div className={styles.securityBorderInner} />
        </div>

        <div className={styles.guillocheBackground} />
        <div className={styles.microPrintBorder} />
        <div className={styles.colorShiftBackground} />

        <div className={styles.securityBanner}>
          <Shield className="w-4 h-4 inline-block mr-2" />
          TO VERIFY: HOLOGRAPHIC SEAL AND SECURITY FEATURES MUST BE VISIBLE WHEN HELD TOWARD A LIGHT SOURCE
          <Shield className="w-4 h-4 inline-block ml-2" />
        </div>

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
                <VRSchoolLogo width={120} height={120} className={styles.logoImage} />
              </div>
              <div className={styles.headerText}>
                <h1 className={styles.schoolName}>THE VR SCHOOL</h1>
                <h2 className={styles.registrarOffice}>OFFICE OF THE REGISTRAR</h2>
                <p className={styles.schoolAddress}>531 Lasuen Mall #19492, Stanford, CA 94305</p>
                <p className={styles.schoolContact}>Tel: (650) 656-0483 | CEEB Code: 170588</p>
                <div className={styles.headerQR}>
                  <USPTOVerificationQR width={80} height={80} className={styles.qrCode} />
                  <p className={styles.qrLabel}>USPTO TSDR Verification</p>
                </div>
              </div>
              <div className={styles.headerEducoin}>
                <EducoinLogo serialNumber={educoinSerialNumber} size="small" />
              </div>
            </div>

            <div className={styles.studentHeader}>
              <div className={styles.studentInfo}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Name:</span>
                    <span className={styles.infoValue}>{student.name}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Student ID:</span>
                    <span className={styles.infoValue}>{student.studentId}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Date of Birth:</span>
                    <span className={styles.infoValue}>{student.dateOfBirth}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Program:</span>
                    <span className={styles.infoValue}>Advanced College Preparatory</span>
                  </div>
                </div>
              </div>
              <div className={styles.registrarSeal}>
                <div className={styles.sealContent}>
                  <p className={styles.sealName}>/s/ Samuel Vasquez</p>
                  <p className={styles.sealTitle}>University Registrar</p>
                  <p className={styles.sealDate}>{printDate}</p>
                  <div className={styles.parchmentLogoContainer}>
                    <ParchmentLogo width={100} height={30} className={styles.parchmentLogo} />
                  </div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/samuel-vasquez-signature-BvR3l9Y7QTzxc8I6NTYPRwf2L4YjNa.png"
                    alt="Registrar Signature"
                    width={200}
                    height={80}
                    priority
                    className={styles.sealSignature}
                  />
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative p-8">
            <section className={styles.programInfo}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionDivider}>{"-----"}</span>
                Official Transcript
                <span className={styles.sectionDivider}>{"-----"}</span>
              </h2>
              <div className={styles.programDetails}>
                <div className={styles.programGrid}>
                  <div>
                    <p>
                      <strong>Current Grade Level:</strong> {student.grade}
                    </p>
                    <p>
                      <strong>Expected Graduation:</strong> {student.graduationDate}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Enrollment Status:</strong> {student.enrollmentStatus}
                    </p>
                    <p>
                      <strong>Cumulative GPA:</strong> {student.gpa.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="space-y-8">
              {[9, 10, 11, 12].map((grade) => {
                const coursesForGrade = student.courses.filter((course) => course.year === grade)
                if (coursesForGrade.length === 0) return null

                return (
                  <section key={grade} className="print:break-before-page">
                    <h2 className={styles.termHeader}>
                      <span className={styles.sectionDivider}>{"-----"}</span>
                      {student.grade === grade ? "Current Academic Year" : "Academic Year"} (Grade {grade})
                      <span className={styles.sectionDivider}>{"-----"}</span>
                    </h2>

                    <CourseList courses={coursesForGrade} year={grade} />

                    <div className={styles.termSummary}>
                      <div className={styles.summaryGrid}>
                        <p>
                          <strong>Year GPA:</strong>{" "}
                          {typeof getGPAForGrade(grade) === "number"
                            ? getGPAForGrade(grade).toFixed(2)
                            : getGPAForGrade(grade)}
                        </p>
                        <p>
                          <strong>Cumulative GPA:</strong> {student.gpa.toFixed(2)}
                        </p>
                        <p>
                          <strong>Units Completed:</strong>{" "}
                          {coursesForGrade.reduce((acc, course) => acc + course.credits, 0)}
                        </p>
                      </div>
                    </div>
                  </section>
                )
              })}
            </div>

            <section className={styles.transcriptFooter}>
              <div className={styles.securityStatement}>
                <ShieldCheck className="w-5 h-5 inline-block mr-2" />
                <p>
                  This officially sealed and signed transcript is printed on SCRIPSAFE® security paper with the name of
                  the institution printed in white type across the face of the document. A raised seal is not required.
                  When photocopied a security statement containing the institution name will appear. A BLACK ON WHITE OR
                  A COLOR COPY SHOULD NOT BE ACCEPTED!
                </p>
              </div>

              <div className={styles.mailingBox}>
                <div className={styles.mailingHeader}>
                  <h3>Transcript Issued To:</h3>
                  <div className={styles.postalVerification}>EDUCOIN POSTALBOX™</div>
                </div>
                <div className={styles.mailingContent}>
                  <div className={styles.securityPattern}>
                    <div className={styles.microtext}>THEVRSCHOOLEDUCOINSECURE</div>
                  </div>
                  <EducoinLogo serialNumber={educoinSerialNumber} size="small" className="absolute top-2 right-2" />
                  <p>Donna Coyne, Ph.D.</p>
                  <p>Associate Director of Admissions</p>
                  <p>University of California Santa Barbara</p>
                  <p>Email: donna_coyne@ucsb.edu</p>
                </div>
                <div className={styles.mailingFooter}>
                  <div className={styles.securityThreads}></div>
                  <p>To be valid, this EDUCOIN™ CERTIFIED field must display this colored security background.</p>
                </div>
              </div>

              <div className={styles.ferpaNotice}>
                <p>
                  In accordance with FERPA (The Family Educational Rights and Privacy Act of 1974) you are hereby
                  notified that this information is provided upon the condition that you, your agents or employees, will
                  not permit any other party access to this record without consent of the student. Alteration of this
                  transcript may be a criminal offense.
                </p>
              </div>

              <div className={styles.documentValidation}>
                <div className={styles.validationQR}>
                  <ParchmentVerificationQR width={100} height={100} />
                </div>
                <p className={styles.validationText}>Scan to verify authenticity. Document ID: {documentId}</p>
              </div>

              <div className={styles.legalInfo}>
                <div className={styles.legalInfoContent}>
                  <p>The VR School is owned and operated by InventXR, a Wyoming Limited Liability Company.</p>
                  <p>InventXR - Reg. No. 5,935,271, Registered Dec. 17, 2019</p>
                  <p>Int. Cl.: 41 Service Mark, Principal Register</p>
                  <p>
                    CLASS 41: Educational services, namely, providing incentives to students using cryptocurrency
                    blockchain technology to demonstrate excellence in the field of education
                  </p>
                  <p>FIRST USE 1-8-2018; IN COMMERCE 8-1-2018</p>
                </div>
                <div className={styles.legalInfoQR}>
                  <USPTOVerificationQR width={100} height={100} className={styles.qrCode} />
                  <p className={styles.qrLabel}>USPTO TSDR Case Viewer</p>
                </div>
              </div>

              <div className={styles.trademarkInfo}>
                <p>
                  THE MARK CONSISTS OF STANDARD CHARACTERS WITHOUT CLAIM TO ANY PARTICULAR FONT STYLE, SIZE OR COLOR
                </p>
                <p>SER. NO. 88-199,969, FILED 11-19-2018</p>
                <p>
                  This transcript is issued under the authority of InventXR and The VR School. The use of EDUCOIN™ and
                  related technologies is subject to the terms and conditions set forth by InventXR.
                </p>
              </div>

              <div className={styles.transcriptEnd}>
                <div className={styles.endLine}>
                  <span className={styles.sectionDivider}>{"-----"}</span>
                  END OF TRANSCRIPT
                  <span className={styles.sectionDivider}>{"-----"}</span>
                </div>
                <p className={styles.keyReference}>KEY TO TRANSCRIPT PRINTED ON BACK</p>
              </div>
            </section>
          </CardContent>
        </div>
      </Card>

      <Card className={`${styles.transcript} ${styles.transcriptKey} mt-8 print:mt-0 ${styles.transcriptPage}`}>
        <div className={styles.securityBorder}>
          <div className={styles.securityBorderInner} />
        </div>

        <div className={styles.guillocheBackground} />
        <div className={styles.microPrintBorder} />
        <div className={styles.colorShiftBackground} />

        <div className={styles.securityBanner}>
          <Shield className="w-4 h-4 inline-block mr-2" />
          TO VERIFY: HOLOGRAPHIC SEAL AND SECURITY FEATURES MUST BE VISIBLE WHEN HELD TOWARD A LIGHT SOURCE
          <Shield className="w-4 h-4 inline-block ml-2" />
        </div>

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
          <CardHeader className={styles.keyHeader}>
            <CardTitle className={styles.keyTitle}>
              <span className={styles.sectionDivider}>{"-----"}</span>
              KEY TO TRANSCRIPT
              <span className={styles.sectionDivider}>{"-----"}</span>
            </CardTitle>
            <div className={styles.keySubtitle}>
              <p>Document ID: {documentId}</p>
              <p>Page: 2 of 2</p>
            </div>
          </CardHeader>

          <CardContent className={styles.keyContent}>
            <div className={styles.watermark}>
              <div className={styles.watermarkOverlay} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className={styles.keySection}>
                <h3 className={styles.keySectionTitle}>
                  <span className={styles.sectionDivider}>{"--"}</span>
                  Credit System
                  <span className={styles.sectionDivider}>{"--"}</span>
                </h3>
                <div className={styles.keyContentBox}>
                  <p>• One semester unit equals 1 credit hour</p>
                  <p>• Full-year courses = 10 credits</p>
                  <p>• Semester courses = 5 credits</p>
                  <p>• Quarter courses = 2.5 credits</p>
                </div>

                <h3 className={styles.keySectionTitle}>
                  <span className={styles.sectionDivider}>{"--"}</span>
                  Grading System
                  <span className={styles.sectionDivider}>{"--"}</span>
                </h3>
                <div className={styles.keyContentBox}>
                  <div className={styles.gradeGrid}>
                    <div>
                      <p>A+ = 4.33 (97-100)</p>
                      <p>A = 4.00 (93-96)</p>
                      <p>A- = 3.67 (90-92)</p>
                      <p>B+ = 3.33 (87-89)</p>
                      <p>B = 3.00 (83-86)</p>
                      <p>B- = 2.67 (80-82)</p>
                    </div>
                    <div>
                      <p>C+ = 2.33 (77-79)</p>
                      <p>C = 2.00 (73-76)</p>
                      <p>C- = 1.67 (70-72)</p>
                      <p>D+ = 1.33 (67-69)</p>
                      <p>D = 1.00 (63-66)</p>
                      <p>F = 0.00 (0-62)</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.keySection}>
                <h3 className={styles.keySectionTitle}>
                  <span className={styles.sectionDivider}>{"--"}</span>
                  Course Levels
                  <span className={styles.sectionDivider}>{"--"}</span>
                </h3>
                <div className={styles.keyContentBox}>
                  <div className={styles.levelGrid}>
                    <div>
                      <p>
                        <strong>AP</strong> - Advanced Placement
                      </p>
                      <p>
                        <strong>HON</strong> - Honors
                      </p>
                      <p>
                        <strong>ACC</strong> - Accelerated
                      </p>
                      <p>
                        <strong>GFTED</strong> - Gifted
                      </p>
                      <p>
                        <strong>ADV</strong> - Advanced
                      </p>
                      <p>
                        <strong>HGHHNR</strong> - High Honors
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>DUAL</strong> - Dual Enrollment
                      </p>
                      <p>
                        <strong>ENRICHD</strong> - Enriched
                      </p>
                      <p>
                        <strong>INTSV</strong> - Intensive
                      </p>
                      <p>
                        <strong>CPREP</strong> - College Prep
                      </p>
                      <p>
                        <strong>REG</strong> - Regular
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className={styles.keySectionTitle}>
                  <span className={styles.sectionDivider}>{"--"}</span>
                  Additional Notations
                  <span className={styles.sectionDivider}>{"--"}</span>
                </h3>
                <div className={styles.keyContentBox}>
                  <div className={styles.notationGrid}>
                    <p>
                      <strong>Units Att</strong> - Units Attempted
                    </p>
                    <p>
                      <strong>Units Earned</strong> - Units Successfully Completed
                    </p>
                    <p>
                      <strong>N/A</strong> - Not Applicable
                    </p>
                    <p>
                      <strong>W</strong> - Withdrawn
                    </p>
                    <p>
                      <strong>I</strong> - Incomplete
                    </p>
                    <p>
                      <strong>P/F</strong> - Pass/Fail
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <section className={styles.keyFooterSection}>
              <h3 className={styles.keySectionTitle}>
                <span className={styles.sectionDivider}>{"--"}</span>
                UC-AG Course ID Information
                <span className={styles.sectionDivider}>{"--"}</span>
              </h3>
              <div className={styles.keyContentBox}>
                <p>
                  UC-AG Course IDs are unique identifiers assigned by the University of California for approved college
                  preparatory courses. Courses without UC-AG Course IDs may still meet college preparatory requirements
                  but are pending UC approval or are institutional specific courses.
                </p>
              </div>

              <div className={styles.certificationBox}>
                <div className={styles.certificationContent}>
                  <ShieldCheck className="w-5 h-5 inline-block mr-2" />
                  <p>
                    This key is an integral part of the official transcript and should remain attached to any copies.
                    The grading system, course levels, and credit calculations described above have been in effect since
                    August 2023.
                  </p>
                </div>
                <div className={styles.validationQR}>
                  <ParchmentVerificationQR width={80} height={80} />
                </div>
              </div>
            </section>
          </CardContent>
        </div>
      </Card>
      <PageNumber studentName={student.name} studentId={student.studentId} />
    </div>
  )
}

