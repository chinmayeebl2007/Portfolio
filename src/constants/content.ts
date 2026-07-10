export const PORTFOLIO_CONTENT = {
  name: "Chinmayee B. L.",
  title: "AI & Data Science Student | Java Developer | Problem Solver",
  bio: "Artificial Intelligence and Data Science student with strong foundations in Java, data structures, and problem-solving. Passionate about building scalable solutions and applying analytical thinking to real-world challenges.",
  email: "chinmayeebl27@gmail.com",
  phone: "+91 7676032028",
  location: "Bangalore, India",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/chinmayee-b-l-2160b2366",
  profileImage: "/Profileimage.jpeg",
  resumeUrl: "/UpdatedResume.pdf",
  
  stats: [
    { label: "GPA", value: "9.50" },
    { label: "Projects", value: "3+" },
    { label: "Aggregate %", value: "97.16" },
    { label: "Rank", value: "Top Tier" }
  ],

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    backend: ["Java", "C", "Data Structures", "OOPS"],
    ai: ["Artificial Intelligence", "Data Science", "Algorithm Design"],
    tools: ["SQL", "MongoDB", "Git", "GitHub", "VS Code"]
  },

  projects: [
  {
    id: "jobbridge",
    title: "JobBridge - AI Resume Analyzer",
    description:
      "An AI-powered platform integrating the Gemini API for resume analysis, skill extraction, intelligent job matching, and personalized recommendations with an interactive dashboard.",
    image: "/projects/Jobbridge.png",
    tags: ["React", "Gemini API", "AI", "Node.js"],
    github: "https://github.com/chinmayeebl2007/Jobbridge.git",
    demo: "#"
  },
  {
    id: "lost-found",
    title: "Lost & Found Portal",
    description:
      "A full-stack portal built using React and MongoDB for reporting, tracking, and recovering lost items with search, filtering, and responsive interfaces.",
    image: "/projects/Lostnfound.png",
    tags: ["React", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/chinmayeebl2007/Lost-And-Found-Portal.git",
    demo: "#"
  },
  {
    id: "document-ai",
    title: "AI Document Analysis & Retrieval System",
    description:
      "An AI-powered document intelligence platform using Retrieval-Augmented Generation (RAG), semantic retrieval, and contextual question answering for PDF, DOCX, and text files.",
    image: "/projects/ragx.png",
    tags: ["React", "TypeScript", "RAG", "Gemini API"],
    github: "https://github.com/chinmayeebl2007/3GPP.git",
    demo: "#"
  }
],
  experience: [
    {
      company: "M. S. Ramaiah Institute of Technology",
      role: "B.E - Artificial Intelligence and Data Science",
      period: "2024 - 2028",
      description: "Focusing on advanced algorithms, machine learning, and data engineering. Current GPA: 9.50"
    },
    {
      company: "National Composite PU College",
      role: "Science - PCMB",
      period: "2022 - 2024",
      description: "Pre-University course with a focus on Physics, Chemistry, Mathematics, and Biology. Percentage: 97.16%"
    },
    {
      company: "St Joseph English High School",
      role: "SSLC",
      period: "2021 - 2022",
      description: "Secondary education with exceptional academic performance. Percentage: 99.05%"
    }
  ],

  achievements: [
    {
      title: "NPTEL Certification",
      year: "2023",
      description: "Completed certification in Data Structures and Algorithms with high merit."
    }
  ]
};
