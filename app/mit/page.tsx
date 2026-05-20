import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MIT Coursework Pathway | The VR School",
  description:
    "The VR School MIT coursework pathway connects MIT OpenCourseWare, SofAI coaching, portfolio evidence, and college-readiness planning.",
}

const pathways = [
  {
    title: "AI + Computer Science",
    body:
      "Students build foundations in Python, computational thinking, algorithms, data, responsible AI, and project-based software evidence.",
  },
  {
    title: "Mathematics + Quantitative Reasoning",
    body:
      "Students strengthen calculus readiness, statistics, probability, modeling, logic, and the mathematical language needed for AI, engineering, economics, and science.",
  },
  {
    title: "Engineering + Spatial Design",
    body:
      "Students connect physics, design thinking, robotics, simulation, maker practice, and VR labs into tangible artifacts that can be reviewed and improved.",
  },
  {
    title: "Humanities + Ethics of Technology",
    body:
      "Students study writing, history, society, entrepreneurship, policy, and the human consequences of powerful technology.",
  },
]

const sofaiSteps = [
  "Diagnose the student’s grade level, math placement, weekly time budget, academic goal, and career direction.",
  "Recommend a sequence instead of a random course list: prerequisites first, one core course, one writing or ethics artifact, and one project that proves mastery.",
  "Pair every MIT OpenCourseWare recommendation with evidence: notes, corrected problem sets, code, lab reflection, video explanation, oral defense, research brief, or portfolio entry.",
  "Route official credit, diploma, UC A-G, dual-enrollment, and transcript questions to The VR School advising process.",
]

export default function MITCourseworkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-vrGold/30 px-6 py-20 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,102,0,0.18),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full border border-vrGold/40 bg-vrGold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-vrGold">
            MIT Coursework Pathway
          </p>
          <h1 className="max-w-5xl font-serif text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            MIT-level rigor, translated into a SofAI-guided learning journey.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
            The VR School uses MIT OpenCourseWare as a bridge between curiosity and proof. Students explore advanced ideas, practice disciplined study, build public artifacts, and connect their work to AI, VR, college readiness, and future careers.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://ocw.mit.edu/search/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-vrGold px-6 py-3 text-center text-sm font-bold text-black transition hover:bg-yellow-300"
            >
              Explore MIT OCW
            </a>
            <Link
              href="/"
              className="rounded-full border border-vrGold/40 px-6 py-3 text-center text-sm font-bold text-vrGold transition hover:bg-vrGold/10"
            >
              Return to The VR School
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-vrOrange">Pathways</p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl font-black text-white md:text-5xl">
            Four doors into institute-level work.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pathways.map((pathway) => (
              <article key={pathway.title} className="rounded-3xl border border-vrGold/20 bg-white/[0.04] p-8 shadow-2xl shadow-black/30">
                <h3 className="text-2xl font-black text-vrGold">{pathway.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/75">{pathway.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-vrGold/20 bg-white/[0.03] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-vrGold">SofAI Intelligence</p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl font-black text-white md:text-5xl">
            Coursework becomes powerful when every recommendation produces evidence.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sofaiSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-vrGold/20 bg-black/50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-vrGold/15 text-sm font-black text-vrGold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-base leading-7 text-white/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-vrGold/25 bg-gradient-to-br from-vrGold/15 to-vrOrange/10 p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-vrGold">Academic use policy</p>
          <h2 className="mt-4 font-serif text-3xl font-black text-white md:text-4xl">
            MIT coursework is a launchpad, not an automatic transcript shortcut.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            SofAI should describe MIT OpenCourseWare and MIT-inspired study as enrichment, mastery preparation, and portfolio evidence. Official credit, diploma planning, UC A-G alignment, dual enrollment, or transcript treatment must be confirmed through The VR School advising and the school’s academic record process. The VR School does not claim MIT affiliation, MIT enrollment, MIT endorsement, or automatic MIT credit.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="rounded-full bg-vrOrange px-6 py-3 text-center text-sm font-bold text-white transition hover:opacity-90">
              Start with Advising
            </Link>
            <a
              href="https://ocw.mit.edu/search/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-vrGold/40 px-6 py-3 text-center text-sm font-bold text-vrGold transition hover:bg-vrGold/10"
            >
              View All MIT OCW Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
