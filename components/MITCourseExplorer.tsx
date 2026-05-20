"use client"

import { useEffect, useMemo, useState } from "react"
import { Search, Sparkles, GraduationCap, ExternalLink, PlusCircle, CheckCircle2, ClipboardList } from "lucide-react"
import { mitPathwayPrompts, type MITCourse } from "@/data/mit-courses"

type CatalogResponse = {
  courses: MITCourse[]
  totalAvailable: number
  creditPolicy: string
  officialCatalog: string
  sofaiGuidance: string
}

type SavedPlan = MITCourse & {
  savedAt: string
  status: "Aspirational transcript plan — advisor review required"
}

const STORAGE_KEY = "vrschool.mit.aspirationalTranscript"

export function MITCourseExplorer() {
  const [query, setQuery] = useState("")
  const [pathway, setPathway] = useState("")
  const [courses, setCourses] = useState<MITCourse[]>([])
  const [totalAvailable, setTotalAvailable] = useState(0)
  const [saved, setSaved] = useState<SavedPlan[]>([])
  const [loading, setLoading] = useState(false)
  const [creditPolicy, setCreditPolicy] = useState(
    "Students may add MIT OCW courses to an aspirational transcript plan. Official credit requires approval from The VR School counseling and academic advisors before transcript treatment.",
  )

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setSaved(JSON.parse(raw))
    } catch {
      setSaved([])
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    async function loadCourses() {
      setLoading(true)
      const params = new URLSearchParams()
      if (query) params.set("q", query)
      if (pathway) params.set("pathway", pathway)
      params.set("limit", "24")

      try {
        const response = await fetch(`/api/mit-courses?${params.toString()}`, { signal: controller.signal })
        const data = (await response.json()) as CatalogResponse
        setCourses(data.courses || [])
        setTotalAvailable(data.totalAvailable || 0)
        setCreditPolicy(data.creditPolicy || creditPolicy)
      } catch (error) {
        if (!controller.signal.aborted) console.error("MIT course search failed", error)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    const id = window.setTimeout(loadCourses, 180)
    return () => {
      window.clearTimeout(id)
      controller.abort()
    }
  }, [query, pathway])

  const savedUrns = useMemo(() => new Set(saved.map((course) => course.urn)), [saved])

  function saveCourse(course: MITCourse) {
    if (savedUrns.has(course.urn)) return
    const next: SavedPlan[] = [
      ...saved,
      {
        ...course,
        savedAt: new Date().toISOString(),
        status: "Aspirational transcript plan — advisor review required",
      },
    ]
    setSaved(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new CustomEvent("sofai:mit-course-saved", { detail: course }))
  }

  function removeCourse(urn: string) {
    const next = saved.filter((course) => course.urn !== urn)
    setSaved(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  const sofaiPrompt = query || pathway
    ? `Help me build a VR School advisor-approved MIT OCW pathway for ${query || pathway}. Include prerequisites, evidence artifacts, and aspirational transcript language.`
    : "Help me choose MIT OCW courses for my VR School aspirational transcript and portfolio. Ask me about grade level, math placement, weekly time budget, and career goals."

  return (
    <section className="border-y border-vrGold/20 bg-white/[0.03] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-vrGold">MIT Course Catalog</p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl font-black text-white md:text-5xl">
              Search MIT courses without leaving The VR School.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70">
              Find MIT OpenCourseWare options, match them to SofAI pathways, save them to an aspirational transcript plan, and bring the plan to VR School counseling and academic advisors for credit review.
            </p>
          </div>
          <div className="rounded-2xl border border-vrGold/20 bg-black/50 p-4 text-sm text-white/70 lg:max-w-md">
            <div className="mb-2 flex items-center gap-2 font-bold text-vrGold">
              <GraduationCap className="h-4 w-4" /> Advisor approval required
            </div>
            {creditPolicy}
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_280px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-vrGold" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Python, algorithms, calculus, biology, deep learning, literature..."
              className="w-full rounded-2xl border border-vrGold/25 bg-black/70 py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-white/35 focus:border-vrGold focus:ring-4 focus:ring-vrGold/10"
            />
          </label>
          <select
            value={pathway}
            onChange={(event) => setPathway(event.target.value)}
            className="rounded-2xl border border-vrGold/25 bg-black/70 px-4 py-4 text-white outline-none transition focus:border-vrGold focus:ring-4 focus:ring-vrGold/10"
          >
            <option value="">All pathways</option>
            {mitPathwayPrompts.map((prompt) => (
              <option key={prompt} value={prompt}>{prompt}</option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {mitPathwayPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => setPathway(prompt)}
              className="rounded-full border border-vrGold/20 px-3 py-1 text-xs font-bold text-vrGold transition hover:bg-vrGold/10"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-vrGold/20 bg-black/40 p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-1 h-5 w-5 text-vrGold" />
            <div>
              <p className="font-bold text-white">SofAI recommendation mode</p>
              <p className="mt-1 text-sm leading-6 text-white/65">{sofaiPrompt}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("sofai:open", { detail: { prompt: sofaiPrompt } }))}
            className="rounded-full bg-vrGold px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-300"
          >
            Ask SofAI
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-4 flex items-center justify-between text-sm text-white/55">
              <span>{loading ? "Searching..." : `${courses.length} recommendations from ${totalAvailable || courses.length} curated MIT courses`}</span>
              <a href="https://ocw.mit.edu/search/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-vrGold hover:underline">
                Official MIT OCW catalog <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {courses.map((course) => (
                <article key={course.urn} className="rounded-3xl border border-vrGold/20 bg-black/55 p-6 shadow-2xl shadow-black/20">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-vrOrange">{course.courseNumber}</p>
                      <h3 className="mt-2 text-xl font-black text-white">{course.title}</h3>
                    </div>
                    <span className="rounded-full border border-vrGold/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-vrGold">
                      MIT OCW
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/70">{course.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.pathways.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-full bg-vrGold/10 px-2 py-1 text-[11px] font-bold text-vrGold">{item}</span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl bg-white/[0.04] p-4 text-sm leading-6 text-white/70">
                    <span className="font-bold text-white">Evidence artifact:</span> {course.recommendedArtifact}
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => saveCourse(course)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-vrOrange px-4 py-3 text-sm font-black text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      disabled={savedUrns.has(course.urn)}
                    >
                      {savedUrns.has(course.urn) ? <CheckCircle2 className="h-4 w-4" /> : <PlusCircle className="h-4 w-4" />}
                      {savedUrns.has(course.urn) ? "Saved" : "Add to aspirational transcript"}
                    </button>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-vrGold/30 px-4 py-3 text-sm font-bold text-vrGold transition hover:bg-vrGold/10"
                    >
                      OCW <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-vrGold/25 bg-black/70 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3">
              <ClipboardList className="h-5 w-5 text-vrGold" />
              <div>
                <h3 className="text-lg font-black text-white">Aspirational transcript queue</h3>
                <p className="text-xs text-white/55">Saved locally on this device until submitted to advising.</p>
              </div>
            </div>
            {saved.length === 0 ? (
              <p className="mt-6 rounded-2xl border border-dashed border-vrGold/20 p-5 text-sm leading-6 text-white/55">
                Add MIT courses here to begin a counseling conversation. This is not official credit until The VR School approves it.
              </p>
            ) : (
              <div className="mt-6 space-y-3">
                {saved.map((course) => (
                  <div key={course.urn} className="rounded-2xl border border-vrGold/15 bg-white/[0.04] p-4">
                    <p className="text-xs font-black text-vrOrange">{course.courseNumber}</p>
                    <p className="mt-1 font-bold text-white">{course.title}</p>
                    <p className="mt-2 text-xs leading-5 text-white/55">{course.status}</p>
                    <button
                      type="button"
                      onClick={() => removeCourse(course.urn)}
                      className="mt-3 text-xs font-bold text-vrGold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 rounded-2xl bg-vrGold/10 p-4 text-xs leading-5 text-vrGold">
              Strategic transcript language: “MIT OpenCourseWare aspirational plan pending VR School counseling/advisor approval.”
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
