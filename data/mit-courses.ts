export type MITCourse = {
  urn: string
  courseNumber: string
  title: string
  url: string
  level: string[]
  departments: string[]
  topics: string[]
  pathways: string[]
  description: string
  recommendedArtifact: string
  creditPolicy: string
  source: "MIT_OCW"
  license: "CC-BY-NC-SA-4.0"
}

export const mitSeedCourses: MITCourse[] = [
  {
    urn: "urn:vrmit:course:mit-ocw:6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016",
    courseNumber: "6.0001",
    title: "Introduction to Computer Science and Programming in Python",
    url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
    level: ["Undergraduate"],
    departments: ["Electrical Engineering and Computer Science"],
    topics: ["Computer Science", "Python", "Programming", "Algorithms", "Computational Thinking"],
    pathways: ["AI + Computer Science", "Software Founder"],
    description:
      "A rigorous first programming course introducing computational thinking, abstraction, debugging, data structures, recursion, and algorithmic problem solving with Python.",
    recommendedArtifact: "Python project repository, debugging journal, problem-set corrections, and a short oral defense.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:6-006-introduction-to-algorithms-spring-2020",
    courseNumber: "6.006",
    title: "Introduction to Algorithms",
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
    level: ["Undergraduate"],
    departments: ["Electrical Engineering and Computer Science"],
    topics: ["Algorithms", "Data Structures", "Graphs", "Sorting", "Asymptotic Analysis"],
    pathways: ["AI + Computer Science", "Software Founder", "Engineering + Spatial Design"],
    description:
      "A foundational algorithms course emphasizing correctness, computational models, data structures, sorting, graph algorithms, and asymptotic reasoning.",
    recommendedArtifact: "Algorithm notebook, solved problem sets, implementation portfolio, and complexity-analysis explainer.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:18-06-linear-algebra-spring-2010",
    courseNumber: "18.06",
    title: "Linear Algebra",
    url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    level: ["Undergraduate"],
    departments: ["Mathematics"],
    topics: ["Linear Algebra", "Matrices", "Vector Spaces", "Eigenvalues", "Machine Learning Math"],
    pathways: ["AI + Computer Science", "Mathematics + Quantitative Reasoning", "Engineering + Spatial Design"],
    description:
      "A classic course on matrix theory, systems of equations, vector spaces, determinants, eigenvalues, similarity, and positive definite matrices.",
    recommendedArtifact: "Worked proof portfolio, matrix-modeling notebook, and visual explanation of eigenvectors or transformations.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:18-01sc-single-variable-calculus-fall-2010",
    courseNumber: "18.01SC",
    title: "Single Variable Calculus",
    url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
    level: ["Undergraduate"],
    departments: ["Mathematics"],
    topics: ["Calculus", "Limits", "Differentiation", "Integration", "Mathematical Modeling"],
    pathways: ["Mathematics + Quantitative Reasoning", "Engineering + Spatial Design", "Biomedical / Premed Research"],
    description:
      "A self-contained calculus course covering limits, continuity, differentiation, integration, applications, approximation, and modeling.",
    recommendedArtifact: "Calculus problem-set portfolio, correction log, graphing/modeling notebook, and mastery reflection.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:8-01sc-classical-mechanics-fall-2016",
    courseNumber: "8.01SC",
    title: "Classical Mechanics",
    url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/",
    level: ["Undergraduate"],
    departments: ["Physics"],
    topics: ["Physics", "Mechanics", "Newtonian Motion", "Energy", "Momentum", "Rotational Motion"],
    pathways: ["Engineering + Spatial Design", "Mathematics + Quantitative Reasoning"],
    description:
      "A first mechanics course covering kinematics, Newton's laws, work-energy, momentum, rotation, oscillations, and physical modeling.",
    recommendedArtifact: "Simulation, lab reflection, problem-set corrections, and video explanation of a mechanics model.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:5-111sc-principles-of-chemical-science-fall-2014",
    courseNumber: "5.111SC",
    title: "Principles of Chemical Science",
    url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/",
    level: ["Undergraduate"],
    departments: ["Chemistry"],
    topics: ["Chemistry", "Atomic Structure", "Thermodynamics", "Equilibrium", "Kinetics"],
    pathways: ["Biomedical / Premed Research", "Engineering + Spatial Design"],
    description:
      "An introduction to core chemical principles including atomic and molecular structure, thermodynamics, equilibria, kinetics, and catalysis.",
    recommendedArtifact: "Chemistry concept map, solved problem sets, lab-design reflection, and safety-aware experiment proposal.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:7-016-introductory-biology-fall-2018",
    courseNumber: "7.016",
    title: "Introductory Biology",
    url: "https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/",
    level: ["Undergraduate"],
    departments: ["Biology"],
    topics: ["Biology", "Molecular Biology", "Genetics", "Biochemistry", "Cell Biology"],
    pathways: ["Biomedical / Premed Research", "Humanities + Ethics of Technology"],
    description:
      "A foundational biology course covering molecular biology, biochemistry, genetics, cellular processes, and gene expression.",
    recommendedArtifact: "Biology notebook, concept explainer, research brief, and lab-literature reflection.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:6-7960-deep-learning-fall-2024",
    courseNumber: "6.7960",
    title: "Deep Learning",
    url: "https://ocw.mit.edu/courses/6-7960-deep-learning-fall-2024/",
    level: ["Graduate"],
    departments: ["Electrical Engineering and Computer Science"],
    topics: ["Deep Learning", "Machine Learning", "Neural Networks", "Transformers", "Generative AI"],
    pathways: ["AI + Computer Science", "Software Founder"],
    description:
      "An advanced course on neural-network architectures, training, optimization, transformers, attention, generative models, and applied deep learning.",
    recommendedArtifact: "Model card, annotated notebook, ethics/risk memo, and prototype demo with evaluation notes.",
    creditPolicy:
      "Advanced aspirational transcript eligible; official credit requires readiness review and VR School academic advisor approval.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:21l-001-foundations-of-western-literature-fall-2003",
    courseNumber: "21L.001",
    title: "Foundations of Western Literature",
    url: "https://ocw.mit.edu/courses/21l-001-foundations-of-western-literature-fall-2003/",
    level: ["Undergraduate"],
    departments: ["Literature"],
    topics: ["Literature", "Writing", "Humanities", "Western Canon", "Critical Reading"],
    pathways: ["Humanities + Ethics of Technology", "Law / Civic Technology"],
    description:
      "A humanities course built around foundational works of Western literature and rigorous reading, interpretation, and writing.",
    recommendedArtifact: "Annotated reading journal, literary-analysis essay, seminar presentation, and revision portfolio.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:21h-101-american-history-to-1865-fall-2010",
    courseNumber: "21H.101",
    title: "American History to 1865",
    url: "https://ocw.mit.edu/courses/21h-101-american-history-to-1865-fall-2010/",
    level: ["Undergraduate"],
    departments: ["History"],
    topics: ["American History", "Colonial History", "Civil War", "Civic Literacy", "Writing"],
    pathways: ["Humanities + Ethics of Technology", "Law / Civic Technology"],
    description:
      "A survey of American history from contact through the Civil War, emphasizing political, social, and economic change.",
    recommendedArtifact: "Primary-source analysis, timeline, argument essay, and oral defense of historical interpretation.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:21g-101-chinese-i-streamlined-spring-2014",
    courseNumber: "21G.101",
    title: "Chinese I (Streamlined)",
    url: "https://ocw.mit.edu/courses/21g-101-chinese-i-streamlined-spring-2014/",
    level: ["Undergraduate"],
    departments: ["Global Studies and Languages"],
    topics: ["Mandarin", "Chinese", "Language Learning", "Culture", "Communication"],
    pathways: ["Humanities + Ethics of Technology", "Global Collaboration"],
    description:
      "An introductory Mandarin Chinese course for students building speaking, listening, reading, writing, pinyin, and character skills.",
    recommendedArtifact: "Language practice log, oral recording, vocabulary portfolio, and cultural reflection.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
  {
    urn: "urn:vrmit:course:mit-ocw:21m-301-harmony-and-counterpoint-i-spring-2005",
    courseNumber: "21M.301",
    title: "Harmony and Counterpoint I",
    url: "https://ocw.mit.edu/courses/21m-301-harmony-and-counterpoint-i-spring-2005/",
    level: ["Undergraduate"],
    departments: ["Music and Theater Arts"],
    topics: ["Music", "Music Theory", "Harmony", "Counterpoint", "Composition"],
    pathways: ["Humanities + Ethics of Technology", "Creative Technology"],
    description:
      "An introduction to Western tonal harmony and counterpoint through analysis, writing, composition, and musical structure.",
    recommendedArtifact: "Composition portfolio, annotated score, analysis journal, and performance/reflection evidence.",
    creditPolicy:
      "Aspirational transcript eligible; official credit requires VR School counseling and academic advisor approval before transcript treatment.",
    source: "MIT_OCW",
    license: "CC-BY-NC-SA-4.0",
  },
]

export const mitPathwayPrompts = [
  "AI + Computer Science",
  "Mathematics + Quantitative Reasoning",
  "Engineering + Spatial Design",
  "Biomedical / Premed Research",
  "Humanities + Ethics of Technology",
]
