// ============================================
// SINGLE SOURCE OF TRUTH - Edit this file to update all pages
// ============================================

const DATA = {
  meta: {
    name: "Krish Shah",
    tagline: "Software Engineer • Sports Analytics",
    location: "Los Angeles, CA",
    email: "ktshah@usc.edu",
    phone: "(213) 994-2276",
    rookieCardImage: "assets/profileII.jpg",
    rookieCardSvg: null,
    links: {
      linkedin: "https://www.linkedin.com/in/krish-shah-computer-science/",
      github: "https://github.com/glitchy-impostor"
    },
    photo: "assets/profile.jpg",
    availability: "Summer 2026"
  },

  about: {
    short: "CS student at USC Viterbi with expertise in AI/ML systems, RAG architectures, and generative AI applications. Dean's List Fall '24 & Spring '25.",
    paragraphs: [
      "I'm a Computer Science student at USC's Viterbi School of Engineering, passionate about building intelligent systems and applying data-driven approaches to challenging problems.",
      "My work spans AI-powered code generation systems, full-stack web applications, and sports analytics. I've built production RAG pipelines, organized hackathons, and created software used by thousands of engineering students.",
      "Currently seeking opportunities where I can apply my technical skills to impactful problems in software engineering or sports analytics."
    ]
  },

  education: {
    school: "University of Southern California",
    college: "Viterbi School of Engineering",
    degree: "B.S. Computer Science",
    minor: "Mathematical Data Analytics",
    gpa: "3.84",
    startYear: "2024",
    endYear: "2028",
    honors: ["Dean's List – Fall 2024, Spring 2025, Fall 2025"],
    coursework: ["Data Structures & Algorithms", "Discrete Mathematics", "Probability Theory", "Linear Algebra"]
  },

  experience: [
    {
      id: "makerspace",
      role: "Student Worker",
      company: "Baum Family Maker Space",
      location: "Los Angeles, CA",
      startDate: "Sep 2025",
      endDate: "Present",
      year: "2025—",
      current: true,
      type: "Student Worker",
      bullets: [
        "Developed and maintained internal software systems used by 2,700+ engineering students to access Maker Space tools and services",
        "Implemented backend features to streamline service requests, resource access, and student workflows", 
        "Collaborated with staff and student engineers to troubleshoot issues and deploy improvements in a live production environment"
      ],
      tags: ["Current", "Software", "Leadership"],
      typeArt: {
        text: "USC",
        subtext: "VERSATILE"
      }
    },
    {
      id: "whiteklay",
      role: "AI Implementation & Development Intern",
      company: "Whiteklay Technologies",
      location: "Mumbai, India",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      year: "2025",
      current: false,
      type: "Internship",
      bullets: [
        "Designed and implemented a backend system to index and retrieve a large internal codebase, enabling efficient code reuse across teams",
        "Built a retrieval-augmented generation (RAG) pipeline allowing AI models to reference legacy code, reducing duplicate development",
        "Integrated open-source and proprietary components into a company-wide service adopted by multiple engineering teams"
      ],
      tags: ["AI/ML", "Python", "RAG"],
      typeArt: {
        text: "AI/ML",
        subtext: "INDUSTRY EXPERIENCE"
      }
    },
    {
      id: "tridenthacks",
      role: "Founder & Lead Organizer",
      company: "Trident Hacks",
      location: "Pune, India",
      startDate: "Jan 2023",
      endDate: "May 2023",
      year: "2023",
      current: false,
      type: "Founder",
      bullets: [
        "Founded and led a national student hackathon in India, coordinating operations for 800+ teams across 50+ institutions",
        "Managed end-to-end planning, logistics, sponsorships, and judging infrastructure for a large-scale technical event",
        "Raised ₹54,000 in funding and secured sponsored prizes to support participants and winning teams"
      ],
      tags: ["Leadership", "Events", "Founder"],
      typeArt: {
        text: "LEADERSHIP",
        subtext: "FOUNDER"
      }
    },
    {
      id: "scholastic",
      role: "Sales & Management Intern",
      company: "Scholastic India",
      location: "Pune, India",
      startDate: "Jul 2022",
      endDate: "Dec 2022",
      year: "2022",
      current: false,
      type: "Internship",
      bullets: [
        "Managed sales exceeding ₹3,00,000 in three days, handling billing and fulfillment for ~500 customer orders",
        "Streamlined order processing and billing workflows to improve operational efficiency under high volume"
      ],
      tags: ["Business", "Operations", "Execution"],
      typeArt: {
        text: "BUSINESS",
        subtext: "VERSATILE"
      }
    },
    {
      id: "student-council",
      role: "Student Council President",
      company: "The Bishop’s Co-Ed School, Undri",
      location: "Pune, India",
      startDate: "Jul 2022",
      endDate: "May 2024",
      year: "2021–2024",
      current: false,
      type: "Leadership",
      bullets: [
        "Served as President (2023–24) and Vice President (2022–23), leading a 100+ member council supporting 4,000 students",
        "Planned and executed large-scale intra- and inter-school events with 500+ participants per event",
        "Coordinated teams, timelines, and stakeholders to ensure smooth execution of school-wide initiatives"
      ],
      tags: ["Leadership", "Management", "Public Speaking"],
      typeArt: {
        text: "LEADERSHIP",
        subtext: "MANAGEMENT"
      }
    },
    {
      id: "viterbi-education",
      role: "B.S. Computer Science",
      company: "USC Viterbi",
      location: "Los Angeles, CA",
      startDate: "Aug 2024",
      endDate: "Present",
      year: "2024—",
      current: true,
      type: "Education",
      bullets: [
        "GPA: 3.84",
        "Dean's List: Fall 2024, Spring 2025, Fall 2025",
        "Focus: AI/ML, Backend Systems"
      ],
      tags: ["Education", "CS", "Analytics"],
      typeArt: {
        text: "USC",
        subtext: "LEARNING"
      }
    }
  ],

  projects: [
    {
      id: "rag-code-gen",
      name: "RAG Code Generator",
      shortDesc: "AI-powered code retrieval & generation",
      description: "Designed and built a backend system that indexes and retrieves a large internal codebase using vector search and retrieval-augmented generation (RAG) to enable efficient code reuse across engineering teams.",
      tech: ["Python", "Vector DB", "LLMs", "RAG"],
      type: "AI/ML",
      featured: true,
      rarity: "★ Featured",
      metrics: { label: "Wide Adoption", value: "Company" },
      links: {},
      typeArt: {
        text: "RAG",
        subtext: "CODE GENERATOR"
      }
    },
    {
      id: "trashure-cove",
      name: "Trashure Cove",
      shortDesc: "Waste management platform",
      description: "Built a full-stack waste management platform in 24 hours using Flask, React, and AJAX, enabling users to create and participate in public cleanup drives.",
      tech: ["Python", "Flask", "React", "jQuery"],
      type: "Hackathon",
      featured: true,
      award: "Winner",
      rarity: "🏆 Winner, Aylus Humanity Hacks",
      metrics: { label: "Build Time", value: "24hr" },
      links: {},
      typeArt: {
        text: "TRASHURE",
        subtext: "COVE"
      }
    },
    {
      id: "qgo",
      name: "QGo",
      shortDesc: "Local grocery delivery platform",
      description: "Developed a full-stack grocery and local item delivery platform using Flask, PostgreSQL, Svelte, and Tailwind CSS, supporting seamless ordering from local stores with doorstep delivery.",
      tech: ["Python", "Flask", "PostgreSQL", "Svelte", "Tailwind"],
      type: "Full Stack",
      featured: true,
      award: "1st Place",
      rarity: "🏆 Winner, Times of India WorldCodingBee",
      metrics: { label: "Place", value: "1st" },
      links: {},
      typeArt: {
        text: "QGO",
        subtext: "Winner, TOI WORLDCODINGBEE"
      }
    },
    {
      id: "vyz",
      name: "Vyz",
      shortDesc: "AI-powered sensory adaptive wearable",
      description: "Built an AI-powered sensory adaptive wearable using an NVIDIA Jetson Orin Nano that fuses real-time audio and visual sensing to dynamically mitigate sensory overload, winning Best Hardware Project at the Good Vibes Only Buildathon.",
      tech: [
        "Python","NVIDIA Jetson Orin Nano","OpenCV","SciPy","Flask","React Native","Firebase","GPIO","Embedded Systems"
      ],
      type: "Hardware / AI",
      featured: true,
      award: "Best Hardware Project",
      rarity: "🏆 Best Hardware",
      metrics: { label: "Build Time", value: "24hr" },
      links: {},
      typeArt: {
        text: "VYZ",
        subtext: "POWERED BY NVIDIA"
      }
    }

  ],

  skills: {
    languages: ["Python", "JavaScript", "Java", "C++"],
    frameworks: ["Flask", "Svelte", "React", "Tailwind CSS", "HTML/CSS", "jQuery(AJAX)"],
    databases: ["PostgreSQL", "ChromaDB", "Vector Databases"],
    tools: ["Git", "Docker", "LLMs", "RAG"],
    other: ["Event Management", "Team Leadership", "Public Speaking","Communication","Adaptability","Innovation","Collaboration","Critical Thinking","Resilience"],
    languages_spoken: ["English", "Hindi", "Gujarati"],
    ratings: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 85 },
      { name: "AI/ML & LLMs", level: 88 },
      { name: "Flask / Backend", level: 86 },
      { name: "Java / C++", level: 78 },
      { name: "Leadership", level: 90 }
    ]
  },

  certifications: [
    "Back End Development and APIs – freeCodeCamp",
    "Scientific Computing with Python – freeCodeCamp",
    "Responsive Web Design – freeCodeCamp",
    "JavaScript Algorithms and Data Structures – freeCodeCamp"
  ]
};
