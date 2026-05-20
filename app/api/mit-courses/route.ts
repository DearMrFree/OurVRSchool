import { NextResponse } from "next/server"
import { mitSeedCourses } from "@/data/mit-courses"

export const dynamic = "force-dynamic"

function scoreCourse(course: (typeof mitSeedCourses)[number], query: string, pathway: string) {
  let score = 0
  const haystack = [
    course.courseNumber,
    course.title,
    course.description,
    ...course.topics,
    ...course.departments,
    ...course.pathways,
  ]
    .join(" ")
    .toLowerCase()

  const q = query.trim().toLowerCase()
  if (q) {
    for (const token of q.split(/\s+/).filter(Boolean)) {
      if (course.title.toLowerCase().includes(token)) score += 8
      if (course.courseNumber.toLowerCase().includes(token)) score += 10
      if (course.topics.join(" ").toLowerCase().includes(token)) score += 5
      if (haystack.includes(token)) score += 2
    }
  }

  if (pathway && course.pathways.some((p) => p.toLowerCase().includes(pathway.toLowerCase()))) score += 12
  if (!q && !pathway) score += course.level.includes("Undergraduate") ? 3 : 1
  return score
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get("q") || ""
  const pathway = searchParams.get("pathway") || ""
  const limit = Math.min(Number.parseInt(searchParams.get("limit") || "24", 10), 100)

  const ranked = mitSeedCourses
    .map((course) => ({ course, score: scoreCourse(course, q, pathway) }))
    .filter(({ score }) => q || pathway ? score > 0 : true)
    .sort((a, b) => b.score - a.score || a.course.title.localeCompare(b.course.title))
    .slice(0, limit)
    .map(({ course }) => course)

  return NextResponse.json({
    source: "MIT OpenCourseWare seed catalog curated for The VR School",
    officialCatalog: "https://ocw.mit.edu/search/",
    count: ranked.length,
    totalAvailable: mitSeedCourses.length,
    creditPolicy:
      "Students may add MIT OCW courses to an aspirational transcript plan. Official credit requires approval from The VR School counseling and academic advisors before transcript treatment.",
    sofaiGuidance:
      "Recommend MIT OCW courses as sequenced enrichment, mastery preparation, and portfolio evidence. Pair each recommendation with an artifact and route credit/transcript questions to advising.",
    courses: ranked,
  })
}
