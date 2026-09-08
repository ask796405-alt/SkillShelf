// ============================================================
// SKILLSHELF RESOURCE DATABASE
// ============================================================
//
// 100+ AI CODING SKILLS
// PLUS the original libraries, UI resources, MCP resources,
// documentation and developer tools.
//
// Each skill can have:
// - name
// - category
// - description
// - website / repository
// - install command
// - tags
//
// ============================================================

const resources = [

  // ==========================================================
  // AI SKILLS — ORIGINAL + NEW
  // ==========================================================

  {
    name: "Tailwind 4 Docs",
    cat: "AI Skills",
    type: "skill",
    desc: "Tailwind CSS v4 documentation skill for AI coding agents.",
    url: "https://github.com/lombiq/tailwind-agent-skills",
    cmd: "npx skills add https://github.com/lombiq/tailwind-agent-skills --skill tailwind-4-docs",
    tags: ["Tailwind", "Docs", "Agent"]
  },

  {
    name: "GSAP Skills",
    cat: "AI Skills",
    type: "skill",
    desc: "GSAP-focused skills for creating polished web animations.",
    url: "https://github.com/greensock/gsap-skills",
    cmd: "npx skills add https://github.com/greensock/gsap-skills",
    tags: ["GSAP", "Motion", "Animation"]
  },

  {
    name: "Web Design Guidelines",
    cat: "AI Skills",
    type: "skill",
    desc: "Vercel web design guidance for AI coding agents.",
    url: "https://github.com/vercel-labs/agent-skills",
    cmd: "npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines",
    tags: ["Vercel", "Design", "Agent"]
  },

  {
    name: "Taste Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design taste guidance for AI-generated interfaces.",
    url: "https://github.com/Leonxlnx/taste-skill",
    cmd: "npx skills add Leonxlnx/taste-skill",
    tags: ["Design", "Taste", "Agent"]
  },

  {
    name: "Anthropic Skills",
    cat: "AI Skills",
    type: "skill",
    desc: "Reusable skills and examples for AI coding workflows.",
    url: "https://github.com/anthropics/skills",
    cmd: "npx skills add https://github.com/anthropics/skills",
    tags: ["Claude", "Anthropic", "Agent"]
  },

  {
    name: "Vercel Agent Skills",
    cat: "AI Skills",
    type: "skill",
    desc: "Reusable skills from the Vercel Labs agent ecosystem.",
    url: "https://github.com/vercel-labs/agent-skills",
    cmd: "npx skills add https://github.com/vercel-labs/agent-skills",
    tags: ["Vercel", "Agent"]
  },

  {
    name: "React Best Practices",
    cat: "AI Skills",
    type: "skill",
    desc: "React implementation and architecture guidance for agents.",
    url: "https://github.com/vercel-labs/agent-skills",
    cmd: "npx skills add https://github.com/vercel-labs/agent-skills",
    tags: ["React", "Best Practices"]
  },

  {
    name: "Frontend Design",
    cat: "AI Skills",
    type: "skill",
    desc: "Frontend design guidance for building better interfaces with AI.",
    url: "https://github.com/vercel-labs/agent-skills",
    cmd: "npx skills add https://github.com/vercel-labs/agent-skills",
    tags: ["Frontend", "Design"]
  },


  // ==========================================================
  // COPY-READY SKILLS — VERCEL ECOSYSTEM + ANTHROPIC
  // Every entry below has a 1-click copy install command.
  // ==========================================================

  {
    name: "Vercel React Best Practices",
    cat: "AI Skills",
    type: "skill",
    desc: "React and Next.js performance guidelines — 40+ rules across 8 categories. One of the most installed skills.",
    url: "https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices",
    cmd: "npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices",
    tags: ["React", "Next.js", "Vercel"]
  },

  {
    name: "Vercel Composition Patterns",
    cat: "AI Skills",
    type: "skill",
    desc: "React composition patterns that scale — avoid boolean prop sprawl and build flexible components.",
    url: "https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns",
    cmd: "npx skills add vercel-labs/agent-skills --skill vercel-composition-patterns",
    tags: ["React", "Patterns", "Vercel"]
  },

  {
    name: "Vercel React Native",
    cat: "AI Skills",
    type: "skill",
    desc: "React Native best practices — 16 rules covering performance, architecture and platform patterns.",
    url: "https://skills.sh/vercel-labs/agent-skills/vercel-react-native-skills",
    cmd: "npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills",
    tags: ["React Native", "Mobile"]
  },

  {
    name: "Vercel Deploy Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Deploy applications to Vercel with framework auto-detection for 40+ frameworks.",
    url: "https://github.com/vercel-labs/agent-skills",
    cmd: "npx skills add vercel-labs/agent-skills --skill vercel-deploy",
    tags: ["Vercel", "Deploy"]
  },

  {
    name: "Vercel View Transitions",
    cat: "AI Skills",
    type: "skill",
    desc: "Smooth native-feeling animations with React's View Transition API — route transitions and shared elements.",
    url: "https://github.com/vercel-labs/agent-skills",
    cmd: "npx skills add vercel-labs/agent-skills --skill vercel-react-view-transitions",
    tags: ["React", "Animation"]
  },

  {
    name: "Agent Browser Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Browser automation CLI for AI agents — navigation, forms, screenshots and data extraction. 800K+ installs.",
    url: "https://skills.sh/vercel-labs/agent-browser/agent-browser",
    cmd: "npx skills add vercel-labs/agent-browser",
    tags: ["Browser", "Agents", "Vercel"]
  },

  {
    name: "Find Skills",
    cat: "AI Skills",
    type: "skill",
    desc: "The meta-skill for skill discovery — search and install from the open agent skills ecosystem.",
    url: "https://skills.sh/vercel-labs/skills/find-skills",
    cmd: "npx skills add vercel-labs/skills --skill find-skills",
    tags: ["Skills", "Discovery"]
  },

  {
    name: "Vercel AI SDK Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build AI-powered features with the Vercel AI SDK — agents, chatbots and RAG systems.",
    url: "https://skills.sh/vercel/ai/ai-sdk",
    cmd: "npx skills add vercel/ai --skill ai-sdk",
    tags: ["AI SDK", "Vercel"]
  },

  {
    name: "AI Elements Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Component library built on shadcn/ui for AI-native applications.",
    url: "https://skills.sh/vercel/ai-elements/ai-elements",
    cmd: "npx skills add vercel/ai-elements --skill ai-elements",
    tags: ["AI", "Components", "shadcn"]
  },

  {
    name: "Streamdown Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Streaming-optimized React Markdown renderer with built-in security.",
    url: "https://skills.sh/vercel/streamdown/streamdown",
    cmd: "npx skills add vercel/streamdown --skill streamdown",
    tags: ["React", "Markdown", "AI"]
  },

  {
    name: "Vercel CLI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Deploy, manage and develop Vercel projects from the command line.",
    url: "https://skills.sh/vercel/vercel/vercel-cli",
    cmd: "npx skills add vercel/vercel --skill vercel-cli",
    tags: ["Vercel", "CLI", "Deploy"]
  },

  {
    name: "Turborepo Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build system guide for JavaScript and TypeScript monorepos — caching and parallel tasks.",
    url: "https://github.com/vercel/turborepo",
    cmd: "npx skills add vercel/turborepo",
    tags: ["Monorepo", "Build", "Vercel"]
  },

  {
    name: "Vercel Workflow Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Durable, resilient async functions with retry logic and step-based orchestration.",
    url: "https://skills.sh/vercel/workflow/workflow",
    cmd: "npx skills add vercel/workflow --skill workflow",
    tags: ["Workflows", "Backend", "Vercel"]
  },

  {
    name: "Anthropic Frontend Design",
    cat: "AI Skills",
    type: "skill",
    desc: "Anthropic's official frontend design skill. 800K+ installs.",
    url: "https://skills.sh/anthropics/skills/frontend-design",
    cmd: "npx skills add anthropics/skills --skill frontend-design",
    tags: ["Claude", "Frontend", "Design"]
  },

  {
    name: "Anthropic Skill Creator",
    cat: "AI Skills",
    type: "skill",
    desc: "Q&A-driven guide that walks you through building new SKILL.md files from scratch.",
    url: "https://skills.sh/anthropics/skills/skill-creator",
    cmd: "npx skills add anthropics/skills --skill skill-creator",
    tags: ["Claude", "Meta", "Skills"]
  },

  {
    name: "Anthropic PPTX Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create and edit PowerPoint presentations with AI assistance.",
    url: "https://skills.sh/anthropics/skills/pptx",
    cmd: "npx skills add anthropics/skills --skill pptx",
    tags: ["Claude", "Documents"]
  },


  // ==========================================================
  // COPY-READY SKILLS — COMMUNITY FAVORITES (800K+ installs)
  // Every entry below has a 1-click copy install command.
  // ==========================================================

  {
    name: "TDD Workflow",
    cat: "AI Skills",
    type: "skill",
    desc: "Test-driven development workflow — write failing tests first, then make them pass.",
    url: "https://skills.sh/mattpocock/skills/tdd",
    cmd: "npx skills add mattpocock/skills --skill tdd",
    tags: ["Testing", "TDD"]
  },

  {
    name: "Code Review Workflow",
    cat: "AI Skills",
    type: "skill",
    desc: "Structured code review workflow for catching bugs and improving quality.",
    url: "https://skills.sh/mattpocock/skills/code-review",
    cmd: "npx skills add mattpocock/skills --skill code-review",
    tags: ["Code Review", "Quality"]
  },

  {
    name: "Improve Codebase Architecture",
    cat: "AI Skills",
    type: "skill",
    desc: "Analyze and improve the architecture of an existing codebase step by step.",
    url: "https://skills.sh/mattpocock/skills/improve-codebase-architecture",
    cmd: "npx skills add mattpocock/skills --skill improve-codebase-architecture",
    tags: ["Architecture", "Refactoring"]
  },

  {
    name: "Diagnosing Bugs",
    cat: "AI Skills",
    type: "skill",
    desc: "Systematic bug diagnosis workflow — reproduce, isolate and fix with confidence.",
    url: "https://skills.sh/mattpocock/skills/diagnosing-bugs",
    cmd: "npx skills add mattpocock/skills --skill diagnosing-bugs",
    tags: ["Debugging", "Bugs"]
  },

  {
    name: "Resolving Merge Conflicts",
    cat: "AI Skills",
    type: "skill",
    desc: "Resolve Git merge conflicts safely without losing work.",
    url: "https://skills.sh/mattpocock/skills/resolving-merge-conflicts",
    cmd: "npx skills add mattpocock/skills --skill resolving-merge-conflicts",
    tags: ["Git", "Conflicts"]
  },

  {
    name: "Teach Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Step-by-step teaching workflow — explains concepts clearly with examples.",
    url: "https://skills.sh/mattpocock/skills/teach",
    cmd: "npx skills add mattpocock/skills --skill teach",
    tags: ["Learning", "Teaching"]
  },

  {
    name: "Brainstorming",
    cat: "AI Skills",
    type: "skill",
    desc: "Socratic design refinement that turns rough ideas into structured, actionable designs.",
    url: "https://skills.sh/obra/superpowers/brainstorming",
    cmd: "npx skills add obra/superpowers --skill brainstorming",
    tags: ["Planning", "Ideas"]
  },

  {
    name: "Systematic Debugging",
    cat: "AI Skills",
    type: "skill",
    desc: "Disciplined debugging workflow for tracking down root causes methodically.",
    url: "https://skills.sh/obra/superpowers/systematic-debugging",
    cmd: "npx skills add obra/superpowers --skill systematic-debugging",
    tags: ["Debugging", "Workflow"]
  },

  {
    name: "Writing Plans",
    cat: "AI Skills",
    type: "skill",
    desc: "Write clear implementation plans before touching code.",
    url: "https://skills.sh/obra/superpowers/writing-plans",
    cmd: "npx skills add obra/superpowers --skill writing-plans",
    tags: ["Planning", "Workflow"]
  },

  {
    name: "Test-Driven Development",
    cat: "AI Skills",
    type: "skill",
    desc: "Rigorous test-driven development discipline for reliable features.",
    url: "https://skills.sh/obra/superpowers/test-driven-development",
    cmd: "npx skills add obra/superpowers --skill test-driven-development",
    tags: ["Testing", "TDD"]
  },

  {
    name: "Executing Plans",
    cat: "AI Skills",
    type: "skill",
    desc: "Execute implementation plans step by step without losing track.",
    url: "https://skills.sh/obra/superpowers/executing-plans",
    cmd: "npx skills add obra/superpowers --skill executing-plans",
    tags: ["Planning", "Execution"]
  },

  {
    name: "Requesting Code Review",
    cat: "AI Skills",
    type: "skill",
    desc: "Prepare your changes and request thorough, useful code reviews.",
    url: "https://skills.sh/obra/superpowers/requesting-code-review",
    cmd: "npx skills add obra/superpowers --skill requesting-code-review",
    tags: ["Code Review", "Workflow"]
  },

  {
    name: "Supabase Postgres Best Practices",
    cat: "AI Skills",
    type: "skill",
    desc: "Supabase Postgres best practices for schema, queries and security.",
    url: "https://skills.sh/supabase/agent-skills/supabase-postgres-best-practices",
    cmd: "npx skills add supabase/agent-skills --skill supabase-postgres-best-practices",
    tags: ["Supabase", "Postgres"]
  },

  {
    name: "Supabase Toolkit",
    cat: "AI Skills",
    type: "skill",
    desc: "Build with Supabase — Postgres, auth, storage and edge functions.",
    url: "https://skills.sh/supabase/agent-skills/supabase",
    cmd: "npx skills add supabase/agent-skills --skill supabase",
    tags: ["Supabase", "Backend"]
  },

  {
    name: "Prisma Database Setup",
    cat: "AI Skills",
    type: "skill",
    desc: "Set up Prisma databases correctly — schema, migrations and client.",
    url: "https://skills.sh/prisma/skills/prisma-database-setup",
    cmd: "npx skills add prisma/skills --skill prisma-database-setup",
    tags: ["Prisma", "Database"]
  },

  {
    name: "Prisma Client API",
    cat: "AI Skills",
    type: "skill",
    desc: "Master the Prisma Client API for type-safe database access.",
    url: "https://skills.sh/prisma/skills/prisma-client-api",
    cmd: "npx skills add prisma/skills --skill prisma-client-api",
    tags: ["Prisma", "Database"]
  },

  {
    name: "Prisma Postgres",
    cat: "AI Skills",
    type: "skill",
    desc: "Build on Prisma Postgres with best-practice configuration.",
    url: "https://skills.sh/prisma/skills/prisma-postgres",
    cmd: "npx skills add prisma/skills --skill prisma-postgres",
    tags: ["Prisma", "Postgres"]
  },

  {
    name: "Remotion Best Practices",
    cat: "AI Skills",
    type: "skill",
    desc: "Build videos programmatically with Remotion best practices. 500K+ installs.",
    url: "https://skills.sh/remotion-dev/skills/remotion-best-practices",
    cmd: "npx skills add remotion-dev/skills --skill remotion-best-practices",
    tags: ["Video", "React", "Remotion"]
  },

  {
    name: "shadcn Registry",
    cat: "AI Skills",
    type: "skill",
    desc: "Work with the shadcn/ui registry — find, install and customize components.",
    url: "https://skills.sh/shadcn/ui/shadcn",
    cmd: "npx skills add shadcn/ui --skill shadcn",
    tags: ["shadcn", "Components"]
  },

  {
    name: "Emil Design Engineering",
    cat: "AI Skills",
    type: "skill",
    desc: "Design engineering guidance — polished interactions and motion details.",
    url: "https://skills.sh/emilkowalski/skills/emil-design-eng",
    cmd: "npx skills add emilkowalski/skills --skill emil-design-eng",
    tags: ["Design", "Motion", "UI"]
  },

  {
    name: "Just Scrape",
    cat: "AI Skills",
    type: "skill",
    desc: "Scrape websites into clean, LLM-ready data for agents and RAG.",
    url: "https://skills.sh/scrapegraphai/just-scrape/just-scrape",
    cmd: "npx skills add scrapegraphai/just-scrape --skill just-scrape",
    tags: ["Scraping", "Web", "RAG"]
  },

  {
    name: "Design Taste Frontend",
    cat: "AI Skills",
    type: "skill",
    desc: "Frontend design-taste guidance for interfaces that look high-end. 450K+ installs.",
    url: "https://skills.sh/leonxlnx/taste-skill/design-taste-frontend",
    cmd: "npx skills add leonxlnx/taste-skill --skill design-taste-frontend",
    tags: ["Design", "Taste", "Frontend"]
  },


  // ==========================================================
  // AI CODING AGENTS
  // ==========================================================

  {
    name: "Claude Code",
    cat: "AI Skills",
    type: "skill",
    desc: "Anthropic's coding agent for terminal-based software development.",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    tags: ["Claude", "CLI", "Agent"]
  },

  {
    name: "OpenAI Codex",
    cat: "AI Skills",
    type: "skill",
    desc: "AI coding agent for software development workflows.",
    url: "https://developers.openai.com/codex",
    tags: ["OpenAI", "Codex", "Agent"]
  },

  {
    name: "Cursor",
    cat: "AI Skills",
    type: "skill",
    desc: "AI-first code editor with agentic coding capabilities.",
    url: "https://cursor.com",
    tags: ["Cursor", "IDE", "Agent"]
  },

  {
    name: "GitHub Copilot",
    cat: "AI Skills",
    type: "skill",
    desc: "AI coding assistant and agent ecosystem from GitHub.",
    url: "https://github.com/features/copilot",
    tags: ["GitHub", "Copilot", "Agent"]
  },

  {
    name: "Windsurf",
    cat: "AI Skills",
    type: "skill",
    desc: "AI-powered development environment and coding agent.",
    url: "https://windsurf.com",
    tags: ["Windsurf", "IDE", "Agent"]
  },

  {
    name: "Cline",
    cat: "AI Skills",
    type: "skill",
    desc: "Autonomous coding agent for VS Code.",
    url: "https://github.com/cline/cline",
    tags: ["VS Code", "Agent", "Open Source"]
  },

  {
    name: "Roo Code",
    cat: "AI Skills",
    type: "skill",
    desc: "Open-source AI coding agent for VS Code.",
    url: "https://github.com/RooCodeInc/Roo-Code",
    tags: ["VS Code", "Agent"]
  },

  {
    name: "Continue",
    cat: "AI Skills",
    type: "skill",
    desc: "Open-source AI coding assistant and agent platform.",
    url: "https://github.com/continuedev/continue",
    tags: ["Agent", "Open Source"]
  },

  {
    name: "Aider",
    cat: "AI Skills",
    type: "skill",
    desc: "AI pair programming directly from the terminal.",
    url: "https://github.com/Aider-AI/aider",
    tags: ["CLI", "Git", "Agent"]
  },

  {
    name: "OpenHands",
    cat: "AI Skills",
    type: "skill",
    desc: "Open-source AI software development agent.",
    url: "https://github.com/All-Hands-AI/OpenHands",
    tags: ["Agent", "Open Source"]
  },

  {
    name: "SWE-agent",
    cat: "AI Skills",
    type: "skill",
    desc: "Agent framework designed for software engineering tasks.",
    url: "https://github.com/SWE-agent/SWE-agent",
    tags: ["SWE", "Agent", "GitHub"]
  },

  {
    name: "OpenCode",
    cat: "AI Skills",
    type: "skill",
    desc: "Open-source terminal AI coding agent.",
    url: "https://github.com/opencode-ai/opencode",
    tags: ["CLI", "Agent", "Open Source"]
  },

  {
    name: "Aider Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Workflow guidance for AI-assisted Git development.",
    url: "https://aider.chat",
    tags: ["Git", "CLI"]
  },

  {
    name: "AGENTS.md",
    cat: "AI Skills",
    type: "skill",
    desc: "Repository instructions convention for coding agents.",
    url: "https://agents.md",
    tags: ["Agents", "Instructions"]
  },

  {
    name: "Agent Skills",
    cat: "AI Skills",
    type: "skill",
    desc: "Discover reusable skills for AI coding agents.",
    url: "https://skills.sh",
    tags: ["Skills", "Directory"]
  },

  {
    name: "Awesome AI Agents",
    cat: "AI Skills",
    type: "skill",
    desc: "Curated collection of AI agent frameworks and tools.",
    url: "https://github.com/e2b-dev/awesome-ai-agents",
    tags: ["Agents", "Resources"]
  },


  // ==========================================================
  // FRONTEND AI SKILLS
  // ==========================================================

  {
    name: "React Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build React interfaces with modern component patterns.",
    url: "https://react.dev",
    tags: ["React", "Frontend"]
  },

  {
    name: "Next.js Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Next.js architecture and App Router development guidance.",
    url: "https://nextjs.org",
    tags: ["Next.js", "React"]
  },

  {
    name: "Vue Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Vue development patterns for AI coding agents.",
    url: "https://vuejs.org",
    tags: ["Vue", "Frontend"]
  },

  {
    name: "Svelte Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Svelte component and application development guidance.",
    url: "https://svelte.dev",
    tags: ["Svelte", "Frontend"]
  },

  {
    name: "Astro Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Astro architecture and content-focused web development.",
    url: "https://astro.build",
    tags: ["Astro", "Web"]
  },

  {
    name: "TypeScript Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Type-safe TypeScript development patterns.",
    url: "https://www.typescriptlang.org",
    tags: ["TypeScript", "Code Quality"]
  },

  {
    name: "JavaScript Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Modern JavaScript development guidance.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    tags: ["JavaScript", "Frontend"]
  },

  {
    name: "CSS Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Modern CSS layout, responsive design and architecture guidance.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    tags: ["CSS", "Frontend"]
  },

  {
    name: "HTML Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Semantic HTML and accessible document structure.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tags: ["HTML", "Accessibility"]
  },

  {
    name: "Tailwind CSS Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Utility-first Tailwind CSS implementation guidance.",
    url: "https://tailwindcss.com",
    tags: ["Tailwind", "CSS"]
  },

  {
    name: "shadcn/ui Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build consistent interfaces using shadcn/ui patterns.",
    url: "https://ui.shadcn.com",
    tags: ["shadcn", "React", "UI"]
  },

  {
    name: "Radix UI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Accessible UI primitives and composition patterns.",
    url: "https://www.radix-ui.com",
    tags: ["Radix", "Accessibility"]
  },

  {
    name: "React Aria Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Accessible React interaction and component patterns.",
    url: "https://react-spectrum.adobe.com/react-aria",
    tags: ["React", "Accessibility"]
  },

  {
    name: "TanStack Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "TanStack Query, Router, Table and ecosystem guidance.",
    url: "https://tanstack.com",
    tags: ["TanStack", "React"]
  },

  {
    name: "React Hook Form Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build performant and accessible React forms.",
    url: "https://react-hook-form.com",
    tags: ["React", "Forms"]
  },

  {
    name: "Zod Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Schema validation and type-safe data parsing with Zod.",
    url: "https://zod.dev",
    tags: ["Zod", "TypeScript"]
  },

  {
    name: "Zustand Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Simple state management patterns for React.",
    url: "https://zustand.docs.pmnd.rs",
    tags: ["Zustand", "React"]
  },

  {
    name: "Redux Toolkit Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Modern Redux state management patterns.",
    url: "https://redux-toolkit.js.org",
    tags: ["Redux", "React"]
  },


  // ==========================================================
  // UI / DESIGN AI SKILLS
  // ==========================================================

  {
    name: "UI Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "General interface design guidance for AI-generated products.",
    url: "https://godly.design",
    tags: ["UI", "Design"]
  },

  {
    name: "UX Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "User experience patterns for building intuitive applications.",
    url: "https://www.nngroup.com",
    tags: ["UX", "Research"]
  },

  {
    name: "Responsive Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Responsive layouts for desktop, tablet and mobile.",
    url: "https://web.dev/responsive-web-design-basics",
    tags: ["Responsive", "CSS"]
  },

  {
    name: "Accessibility Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Accessibility-first interface development guidance.",
    url: "https://www.w3.org/WAI/",
    tags: ["A11y", "Accessibility"]
  },

  {
    name: "WCAG Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Web Content Accessibility Guidelines reference for agents.",
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    tags: ["WCAG", "A11y"]
  },

  {
    name: "Design System Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build scalable tokens, components and design systems.",
    url: "https://www.designsystems.com",
    tags: ["Design System", "UI"]
  },

  {
    name: "Typography Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Typography hierarchy and readable interface guidance.",
    url: "https://fonts.google.com",
    tags: ["Typography", "Design"]
  },

  {
    name: "Color Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Color systems, contrast and interface color guidance.",
    url: "https://color.adobe.com",
    tags: ["Color", "Design"]
  },

  {
    name: "Motion Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Motion principles for polished web interfaces.",
    url: "https://motion.dev",
    tags: ["Motion", "Animation"]
  },

  {
    name: "Micro Interaction Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design small interactions that make interfaces feel responsive.",
    url: "https://www.uxmatters.com",
    tags: ["UX", "Motion"]
  },

  {
    name: "Landing Page Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build conversion-focused landing pages with strong hierarchy.",
    url: "https://godly.design",
    tags: ["Landing", "Conversion"]
  },

  {
    name: "Dashboard Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design useful dashboards with clear information hierarchy.",
    url: "https://www.nngroup.com",
    tags: ["Dashboard", "UX"]
  },

  {
    name: "Mobile UI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Mobile-first interface and interaction guidance.",
    url: "https://developer.apple.com/design/human-interface-guidelines/",
    tags: ["Mobile", "UI"]
  },

  {
    name: "Web Design Inspiration",
    cat: "AI Skills",
    type: "skill",
    desc: "Use curated web inspiration when designing interfaces with AI.",
    url: "https://godly.design",
    tags: ["Inspiration", "Design"]
  },

  {
    name: "21st.dev Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Component discovery and AI-assisted interface workflows.",
    url: "https://21st.dev",
    tags: ["Components", "AI"]
  },

  {
    name: "Magic UI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Animated UI component patterns for modern React products.",
    url: "https://magicui.design",
    tags: ["React", "Animation"]
  },

  {
    name: "Aceternity UI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Modern animated interface patterns for React.",
    url: "https://ui.aceternity.com",
    tags: ["React", "Motion"]
  },

  {
    name: "React Bits Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Interactive React component inspiration for AI builders.",
    url: "https://reactbits.dev",
    tags: ["React", "Components"]
  },

  {
    name: "Three.js Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "3D web experiences using Three.js.",
    url: "https://threejs.org",
    tags: ["3D", "WebGL"]
  },

  {
    name: "Spline Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Interactive 3D scenes and web experiences.",
    url: "https://spline.design",
    tags: ["3D", "Design"]
  },

  {
    name: "Rive Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Interactive real-time animation workflows.",
    url: "https://rive.app",
    tags: ["Animation", "Interactive"]
  },

  {
    name: "Lottie Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Use lightweight Lottie animations in product interfaces.",
    url: "https://lottiefiles.com",
    tags: ["Animation", "Lottie"]
  },


  // ==========================================================
  // BACKEND AI SKILLS
  // ==========================================================

  {
    name: "Node.js Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Node.js backend architecture and runtime guidance.",
    url: "https://nodejs.org",
    tags: ["Node", "Backend"]
  },

  {
    name: "Express Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build HTTP APIs using Express.",
    url: "https://expressjs.com",
    tags: ["Express", "API"]
  },

  {
    name: "Hono Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build lightweight web APIs with Hono.",
    url: "https://hono.dev",
    tags: ["Hono", "API"]
  },

  {
    name: "Fastify Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "High-performance Node.js API development.",
    url: "https://fastify.dev",
    tags: ["Fastify", "API"]
  },

  {
    name: "PostgreSQL Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "PostgreSQL database design and query guidance.",
    url: "https://www.postgresql.org",
    tags: ["Postgres", "Database"]
  },

  {
    name: "Supabase Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build applications with Supabase Postgres and backend services.",
    url: "https://supabase.com",
    tags: ["Supabase", "Backend"]
  },

  {
    name: "Firebase Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Firebase backend, authentication and database guidance.",
    url: "https://firebase.google.com",
    tags: ["Firebase", "Backend"]
  },

  {
    name: "Prisma Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Type-safe database workflows with Prisma.",
    url: "https://www.prisma.io",
    tags: ["Prisma", "Database"]
  },

  {
    name: "Drizzle Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "TypeScript-first SQL and ORM development.",
    url: "https://orm.drizzle.team",
    tags: ["Drizzle", "Database"]
  },

  {
    name: "Convex Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Reactive backend development using Convex.",
    url: "https://www.convex.dev",
    tags: ["Convex", "Backend"]
  },

  {
    name: "Clerk Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Authentication and user management workflows.",
    url: "https://clerk.com",
    tags: ["Auth", "Clerk"]
  },

  {
    name: "Better Auth Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Authentication implementation for TypeScript applications.",
    url: "https://www.better-auth.com",
    tags: ["Auth", "TypeScript"]
  },

  {
    name: "Stripe Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Payments and checkout implementation guidance.",
    url: "https://stripe.com/docs",
    tags: ["Payments", "Stripe"]
  },

  {
    name: "Resend Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Transactional email implementation for developers.",
    url: "https://resend.com/docs",
    tags: ["Email", "API"]
  },

  {
    name: "UploadThing Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "File upload implementation for modern TypeScript apps.",
    url: "https://uploadthing.com",
    tags: ["Files", "TypeScript"]
  },


  // ==========================================================
  // AI / LLM DEVELOPMENT SKILLS
  // ==========================================================

  {
    name: "AI SDK Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build AI-powered TypeScript applications with the Vercel AI SDK.",
    url: "https://ai-sdk.dev",
    tags: ["AI SDK", "TypeScript"]
  },

  {
    name: "Vercel AI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "AI application architecture for the Vercel ecosystem.",
    url: "https://vercel.com/ai",
    tags: ["Vercel", "AI"]
  },

  {
    name: "OpenAI API Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build AI features and agent workflows with OpenAI APIs.",
    url: "https://platform.openai.com/docs",
    tags: ["OpenAI", "API"]
  },

  {
    name: "Anthropic API Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build applications using Claude APIs.",
    url: "https://docs.anthropic.com",
    tags: ["Claude", "API"]
  },

  {
    name: "Gemini API Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build AI applications using Google's Gemini APIs.",
    url: "https://ai.google.dev",
    tags: ["Gemini", "Google"]
  },

  {
    name: "LangChain Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build LLM applications and agent workflows with LangChain.",
    url: "https://www.langchain.com",
    tags: ["LangChain", "LLM"]
  },

  {
    name: "LlamaIndex Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build LLM applications over private and external data.",
    url: "https://www.llamaindex.ai",
    tags: ["RAG", "LLM"]
  },

  {
    name: "Mastra Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "TypeScript framework for agents and AI workflows.",
    url: "https://mastra.ai",
    tags: ["Agents", "TypeScript"]
  },

  {
    name: "LiteLLM Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Unified API interface for multiple LLM providers.",
    url: "https://www.litellm.ai",
    tags: ["LLM", "API"]
  },

  {
    name: "Ollama Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Run local language models and AI workflows.",
    url: "https://ollama.com",
    tags: ["Local AI", "LLM"]
  },

  {
    name: "Hugging Face Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Work with open models, datasets and AI tooling.",
    url: "https://huggingface.co",
    tags: ["Models", "AI"]
  },

  {
    name: "Replicate Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Run machine learning models through APIs.",
    url: "https://replicate.com",
    tags: ["AI", "Models"]
  },

  {
    name: "Groq Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build fast LLM applications using Groq inference.",
    url: "https://groq.com",
    tags: ["LLM", "Inference"]
  },

  {
    name: "Together AI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build applications using open-source AI models.",
    url: "https://www.together.ai",
    tags: ["LLM", "Open Models"]
  },

  {
    name: "Modal Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Run AI and Python workloads in cloud infrastructure.",
    url: "https://modal.com",
    tags: ["AI", "Cloud"]
  },

  {
    name: "E2B Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Secure cloud sandboxes for AI-generated code.",
    url: "https://e2b.dev",
    tags: ["Agents", "Sandbox"]
  },

  {
    name: "Firecrawl Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Give AI applications clean web data and crawling capabilities.",
    url: "https://www.firecrawl.dev",
    tags: ["Web", "Agents"]
  },

  {
    name: "Browser Use Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Enable AI agents to operate browsers.",
    url: "https://browser-use.com",
    tags: ["Browser", "Agents"]
  },

  {
    name: "Stagehand Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "AI-powered browser automation for developers.",
    url: "https://www.stagehand.dev",
    tags: ["Browser", "Automation"]
  },

  {
    name: "Playwright Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Browser testing and automation guidance.",
    url: "https://playwright.dev",
    tags: ["Testing", "Browser"]
  },


  // ==========================================================
  // MCP SKILLS
  // ==========================================================

  {
    name: "Model Context Protocol",
    cat: "AI Skills",
    type: "skill",
    desc: "Open protocol for connecting AI models to tools and data.",
    url: "https://modelcontextprotocol.io",
    tags: ["MCP", "Protocol"]
  },

  {
    name: "MCP Server Development",
    cat: "AI Skills",
    type: "skill",
    desc: "Build custom MCP servers and tool integrations.",
    url: "https://modelcontextprotocol.io",
    tags: ["MCP", "Servers"]
  },

  {
    name: "MCP Tools",
    cat: "AI Skills",
    type: "skill",
    desc: "Design tools that AI agents can call through MCP.",
    url: "https://modelcontextprotocol.io",
    tags: ["MCP", "Tools"]
  },

  {
    name: "MCP Resources",
    cat: "AI Skills",
    type: "skill",
    desc: "Expose structured application resources to AI assistants.",
    url: "https://modelcontextprotocol.io",
    tags: ["MCP", "Resources"]
  },

  {
    name: "MCP Prompts",
    cat: "AI Skills",
    type: "skill",
    desc: "Create reusable MCP prompt templates.",
    url: "https://modelcontextprotocol.io",
    tags: ["MCP", "Prompts"]
  },

  {
    name: "MCP Registry",
    cat: "AI Skills",
    type: "skill",
    desc: "Discover MCP servers and integrations.",
    url: "https://registry.modelcontextprotocol.io",
    tags: ["MCP", "Directory"]
  },

  {
    name: "Smithery",
    cat: "AI Skills",
    type: "skill",
    desc: "Discover and connect MCP servers.",
    url: "https://smithery.ai",
    tags: ["MCP", "Directory"]
  },

  {
    name: "Glama MCP",
    cat: "AI Skills",
    type: "skill",
    desc: "MCP server discovery and ecosystem directory.",
    url: "https://glama.ai/mcp",
    tags: ["MCP", "Directory"]
  },

  {
    name: "MCP.so",
    cat: "AI Skills",
    type: "skill",
    desc: "Community directory of MCP servers.",
    url: "https://mcp.so",
    tags: ["MCP", "Directory"]
  },

  {
    name: "Context7",
    cat: "AI Skills",
    type: "skill",
    desc: "Current library documentation for AI coding agents.",
    url: "https://context7.com",
    tags: ["MCP", "Docs"]
  },

  {
    name: "shadcn MCP",
    cat: "AI Skills",
    type: "skill",
    desc: "Use shadcn/ui through AI coding workflows and MCP.",
    url: "https://ui.shadcn.com/docs/mcp",
    tags: ["MCP", "shadcn"]
  },


  // ==========================================================
  // CODE QUALITY SKILLS
  // ==========================================================

  {
    name: "ESLint Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "JavaScript and TypeScript linting guidance.",
    url: "https://eslint.org",
    tags: ["Linting", "JavaScript"]
  },

  {
    name: "Prettier Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Consistent code formatting guidance.",
    url: "https://prettier.io",
    tags: ["Formatting", "Code Quality"]
  },

  {
    name: "Biome Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Fast JavaScript and TypeScript formatter and linter.",
    url: "https://biomejs.dev",
    tags: ["Linting", "Formatting"]
  },

  {
    name: "Vitest Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Unit testing patterns for modern JavaScript applications.",
    url: "https://vitest.dev",
    tags: ["Testing", "JavaScript"]
  },

  {
    name: "Jest Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "JavaScript testing patterns and workflows.",
    url: "https://jestjs.io",
    tags: ["Testing", "JavaScript"]
  },

  {
    name: "Playwright Testing Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "End-to-end browser testing workflows.",
    url: "https://playwright.dev",
    tags: ["Testing", "E2E"]
  },

  {
    name: "Cypress Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Browser-based end-to-end testing guidance.",
    url: "https://www.cypress.io",
    tags: ["Testing", "E2E"]
  },

  {
    name: "Lighthouse Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Website performance and quality auditing.",
    url: "https://developer.chrome.com/docs/lighthouse",
    tags: ["Performance", "Audit"]
  },

  {
    name: "Web Performance Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Core Web Vitals and frontend performance guidance.",
    url: "https://web.dev",
    tags: ["Performance", "Web"]
  },

  {
    name: "SEO Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Search-engine-friendly website implementation guidance.",
    url: "https://developers.google.com/search",
    tags: ["SEO", "Web"]
  },

  {
    name: "Security Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Secure application development principles.",
    url: "https://owasp.org",
    tags: ["Security", "OWASP"]
  },

  {
    name: "OWASP Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Application security guidance based on OWASP resources.",
    url: "https://owasp.org",
    tags: ["Security", "Web"]
  },

  {
    name: "Git Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Git branching, commits and repository workflows.",
    url: "https://git-scm.com",
    tags: ["Git", "Development"]
  },

  {
    name: "GitHub Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "GitHub repository, issue and pull-request workflows.",
    url: "https://github.com",
    tags: ["GitHub", "Git"]
  },


  // ==========================================================
  // DEVOPS / DEPLOYMENT SKILLS
  // ==========================================================

  {
    name: "Vercel Deployment Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Deploy frontend and full-stack applications to Vercel.",
    url: "https://vercel.com",
    tags: ["Vercel", "Deploy"]
  },

  {
    name: "Netlify Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Deploy and manage modern web applications.",
    url: "https://www.netlify.com",
    tags: ["Netlify", "Deploy"]
  },

  {
    name: "Railway Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Deploy applications, databases and services with Railway.",
    url: "https://railway.com",
    tags: ["Railway", "Cloud"]
  },

  {
    name: "Docker Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Containerization and Docker development guidance.",
    url: "https://www.docker.com",
    tags: ["Docker", "DevOps"]
  },

  {
    name: "GitHub Actions Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "CI/CD automation using GitHub Actions.",
    url: "https://docs.github.com/actions",
    tags: ["CI/CD", "GitHub"]
  },

  {
    name: "Cloudflare Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Cloudflare Workers and edge application development.",
    url: "https://developers.cloudflare.com",
    tags: ["Cloudflare", "Edge"]
  },

  {
    name: "AWS Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "AWS cloud architecture and deployment guidance.",
    url: "https://aws.amazon.com",
    tags: ["AWS", "Cloud"]
  },

  {
    name: "Google Cloud Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Google Cloud development and deployment guidance.",
    url: "https://cloud.google.com",
    tags: ["GCP", "Cloud"]
  },

  {
    name: "Azure Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Microsoft Azure application and cloud development.",
    url: "https://azure.microsoft.com",
    tags: ["Azure", "Cloud"]
  },


  // ==========================================================
  // DOCUMENTATION / CONTEXT SKILLS
  // ==========================================================

  {
    name: "MDN Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Use MDN as a reference for browser technologies.",
    url: "https://developer.mozilla.org",
    tags: ["MDN", "Docs"]
  },

  {
    name: "Web.dev Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Modern web performance and platform guidance.",
    url: "https://web.dev",
    tags: ["Web", "Docs"]
  },

  {
    name: "Context Engineering",
    cat: "AI Skills",
    type: "skill",
    desc: "Organize project context so coding agents produce better results.",
    url: "https://context7.com",
    tags: ["Context", "Agents"]
  },

  {
    name: "Repo Context Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Structure repositories so AI coding agents understand projects.",
    url: "https://repomix.com",
    tags: ["Context", "Repository"]
  },

  {
    name: "Repomix Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Package repository context for AI-assisted development.",
    url: "https://repomix.com",
    tags: ["Context", "CLI"]
  },

  {
    name: "API Documentation Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create clear developer-friendly API documentation.",
    url: "https://swagger.io",
    tags: ["API", "Docs"]
  },

  {
    name: "OpenAPI Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design and document APIs using OpenAPI.",
    url: "https://www.openapis.org",
    tags: ["API", "OpenAPI"]
  },

  {
    name: "Swagger Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "API documentation and testing workflows.",
    url: "https://swagger.io",
    tags: ["API", "Docs"]
  },

  {
    name: "README Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Generate clear project README documentation.",
    url: "https://docs.github.com/repositories",
    tags: ["Docs", "GitHub"]
  },


  // ==========================================================
  // PRODUCT / UX AI SKILLS
  // ==========================================================

  {
    name: "Product Thinking Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Help coding agents think about user problems before implementation.",
    url: "https://www.nngroup.com",
    tags: ["Product", "UX"]
  },

  {
    name: "UX Research Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "User research and usability guidance for product builders.",
    url: "https://www.nngroup.com",
    tags: ["UX", "Research"]
  },

  {
    name: "Conversion Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Landing-page conversion and CTA design guidance.",
    url: "https://godly.design",
    tags: ["Conversion", "Landing"]
  },

  {
    name: "Design Critique Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Review interfaces for hierarchy, spacing, usability and polish.",
    url: "https://getdesign.md",
    tags: ["Design", "Critique"]
  },

  {
    name: "UI Audit Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Systematically audit interface quality and usability.",
    url: "https://www.nngroup.com",
    tags: ["UI", "Audit"]
  },

  {
    name: "Accessibility Audit Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Audit interfaces for accessibility issues.",
    url: "https://webaim.org",
    tags: ["A11y", "Audit"]
  },

  {
    name: "Performance Audit Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Analyze frontend performance and loading behavior.",
    url: "https://pagespeed.web.dev",
    tags: ["Performance", "Audit"]
  },

  {
    name: "Responsive Audit Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Check layouts across mobile, tablet and desktop breakpoints.",
    url: "https://web.dev",
    tags: ["Responsive", "Audit"]
  },

  {
    name: "Design Token Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create consistent colors, spacing, typography and component tokens.",
    url: "https://design-tokens.github.io/community-group/",
    tags: ["Tokens", "Design System"]
  },

  {
    name: "Component Architecture Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create reusable and maintainable component structures.",
    url: "https://react.dev",
    tags: ["Components", "Architecture"]
  },

  {
    name: "Frontend Architecture Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Structure frontend projects for long-term maintainability.",
    url: "https://nextjs.org",
    tags: ["Architecture", "Frontend"]
  },

  {
    name: "Full Stack Architecture Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Plan frontend, backend, database and API boundaries.",
    url: "https://nextjs.org",
    tags: ["Architecture", "Full Stack"]
  },

  {
    name: "Clean Code Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Write readable, maintainable and intentional code.",
    url: "https://martinfowler.com",
    tags: ["Code Quality", "Architecture"]
  },

  {
    name: "Refactoring Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Improve existing code without changing behavior.",
    url: "https://refactoring.com",
    tags: ["Refactoring", "Code Quality"]
  },

  {
    name: "Debugging Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Systematic debugging and root-cause analysis workflows.",
    url: "https://developer.chrome.com/docs/devtools",
    tags: ["Debugging", "Development"]
  },

  {
    name: "Code Review Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Review code for bugs, maintainability and security issues.",
    url: "https://github.com",
    tags: ["Code Review", "GitHub"]
  },

  {
    name: "Testing Strategy Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Plan unit, integration and end-to-end testing strategies.",
    url: "https://testing-library.com",
    tags: ["Testing", "Quality"]
  },

  {
    name: "Architecture Review Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Review application architecture before implementation.",
    url: "https://martinfowler.com",
    tags: ["Architecture", "Review"]
  },

  {
    name: "Database Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Database schema, relationships and query design guidance.",
    url: "https://www.postgresql.org/docs/",
    tags: ["Database", "Architecture"]
  },

  {
    name: "API Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design clean and predictable APIs.",
    url: "https://www.openapis.org",
    tags: ["API", "Architecture"]
  },

  {
    name: "Error Handling Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create robust error handling and user-friendly failure states.",
    url: "https://developer.mozilla.org",
    tags: ["Errors", "UX"]
  },

  {
    name: "Loading State Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design useful loading, skeleton and progress states.",
    url: "https://www.nngroup.com",
    tags: ["UX", "Loading"]
  },

  {
    name: "Empty State Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design useful empty states instead of dead-end screens.",
    url: "https://www.nngroup.com",
    tags: ["UX", "Empty State"]
  },

  {
    name: "Form UX Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build understandable, forgiving and accessible forms.",
    url: "https://www.nngroup.com",
    tags: ["Forms", "UX"]
  },

  {
    name: "Navigation UX Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design intuitive navigation structures.",
    url: "https://www.nngroup.com",
    tags: ["Navigation", "UX"]
  },

  {
    name: "Information Architecture Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Organize content and application structures logically.",
    url: "https://www.nngroup.com",
    tags: ["IA", "UX"]
  },

  {
    name: "Microcopy Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Write useful interface labels, hints and error messages.",
    url: "https://www.nngroup.com",
    tags: ["UX Writing", "Copy"]
  },

  {
    name: "Design Handoff Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Translate design decisions into implementation-ready requirements.",
    url: "https://www.figma.com",
    tags: ["Figma", "Design"]
  },

  {
    name: "Figma Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Work with Figma design systems and interface specifications.",
    url: "https://www.figma.com",
    tags: ["Figma", "Design"]
  },

  {
    name: "Webflow Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Web design and development workflows inspired by Webflow.",
    url: "https://webflow.com",
    tags: ["Web", "Design"]
  },

  {
    name: "Framer Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create polished marketing sites and interactions.",
    url: "https://www.framer.com",
    tags: ["Framer", "Design"]
  },


  // ==========================================================
  // MORE AI WORKFLOW SKILLS
  // ==========================================================

  {
    name: "Prompt Engineering Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create structured prompts for coding agents.",
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
    tags: ["Prompting", "AI"]
  },

  {
    name: "Agent Planning Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Break large software tasks into safe implementation steps.",
    url: "https://agents.md",
    tags: ["Planning", "Agents"]
  },

  {
    name: "Task Decomposition Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Break complex features into smaller executable tasks.",
    url: "https://agents.md",
    tags: ["Planning", "AI"]
  },

  {
    name: "Repository Analysis Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Understand an existing repository before changing it.",
    url: "https://repomix.com",
    tags: ["Repository", "Context"]
  },

  {
    name: "Legacy Code Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Safely work with older or unfamiliar codebases.",
    url: "https://martinfowler.com",
    tags: ["Legacy", "Refactoring"]
  },

  {
    name: "Migration Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Plan framework, dependency and architecture migrations.",
    url: "https://nextjs.org/docs",
    tags: ["Migration", "Architecture"]
  },

  {
    name: "Dependency Upgrade Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Safely update project dependencies.",
    url: "https://docs.npmjs.com",
    tags: ["npm", "Dependencies"]
  },

  {
    name: "NPM Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Package installation, publishing and dependency management.",
    url: "https://www.npmjs.com",
    tags: ["npm", "Packages"]
  },

  {
    name: "Package Selection Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Evaluate libraries before adding them to a project.",
    url: "https://www.npmjs.com",
    tags: ["npm", "Architecture"]
  },

  {
    name: "Bundle Size Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Keep frontend dependencies lightweight.",
    url: "https://bundlephobia.com",
    tags: ["Performance", "npm"]
  },

  {
    name: "Browser Compatibility Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Check browser support before using web platform features.",
    url: "https://caniuse.com",
    tags: ["Browser", "Compatibility"]
  },

  {
    name: "Progressive Enhancement Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build resilient experiences that work across environments.",
    url: "https://developer.mozilla.org",
    tags: ["Web", "Architecture"]
  },

  {
    name: "SEO Technical Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Technical SEO implementation for web applications.",
    url: "https://developers.google.com/search",
    tags: ["SEO", "Technical"]
  },

  {
    name: "Schema Markup Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Structured data and search-engine markup guidance.",
    url: "https://schema.org",
    tags: ["SEO", "Schema"]
  },

  {
    name: "Analytics Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Add useful product analytics without compromising UX.",
    url: "https://posthog.com",
    tags: ["Analytics", "Product"]
  },

  {
    name: "Observability Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Application monitoring, logs and error visibility.",
    url: "https://sentry.io",
    tags: ["Monitoring", "Errors"]
  },

  {
    name: "Sentry Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Error monitoring and application debugging workflows.",
    url: "https://sentry.io",
    tags: ["Sentry", "Debugging"]
  },

  {
    name: "PostHog Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Product analytics and feature experimentation guidance.",
    url: "https://posthog.com",
    tags: ["Analytics", "Product"]
  },

  {
    name: "Feature Flag Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Safely release application functionality behind feature flags.",
    url: "https://posthog.com",
    tags: ["Feature Flags", "Deploy"]
  },

  {
    name: "Cron / Scheduled Jobs Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build reliable scheduled backend tasks.",
    url: "https://trigger.dev",
    tags: ["Jobs", "Backend"]
  },

  {
    name: "Background Jobs Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design reliable asynchronous backend workflows.",
    url: "https://www.inngest.com",
    tags: ["Backend", "Jobs"]
  },

  {
    name: "Webhooks Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build secure and reliable webhook integrations.",
    url: "https://docs.stripe.com/webhooks",
    tags: ["Webhooks", "API"]
  },

  {
    name: "Rate Limiting Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Protect APIs and applications from excessive requests.",
    url: "https://owasp.org",
    tags: ["Security", "API"]
  },

  {
    name: "Caching Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Design effective caching strategies for web applications.",
    url: "https://web.dev",
    tags: ["Performance", "Backend"]
  },

  {
    name: "Image Optimization Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Optimize images for speed and visual quality.",
    url: "https://web.dev/learn/images",
    tags: ["Images", "Performance"]
  },

  {
    name: "Font Optimization Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Improve typography loading performance.",
    url: "https://web.dev/learn/performance/optimize-web-fonts",
    tags: ["Fonts", "Performance"]
  },

  {
    name: "Core Web Vitals Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Optimize websites around Google's Core Web Vitals.",
    url: "https://web.dev/vitals/",
    tags: ["Performance", "Web"]
  },

  {
    name: "PWA Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build progressive web applications.",
    url: "https://web.dev/progressive-web-apps/",
    tags: ["PWA", "Web"]
  },

  {
    name: "Service Worker Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build offline and background web capabilities.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
    tags: ["PWA", "Web"]
  },

  {
    name: "Web Components Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Build reusable native web components.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components",
    tags: ["Web Components", "HTML"]
  },

  {
    name: "SVG Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create scalable vector graphics for modern interfaces.",
    url: "https://developer.mozilla.org/en-US/docs/Web/SVG",
    tags: ["SVG", "Design"]
  },

  {
    name: "Icon Design Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Use consistent iconography across product interfaces.",
    url: "https://lucide.dev",
    tags: ["Icons", "UI"]
  },

  {
    name: "Animation Performance Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create smooth animations without damaging performance.",
    url: "https://web.dev/animations",
    tags: ["Animation", "Performance"]
  },

  {
    name: "Scroll Animation Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Create scroll-driven interactions and animations.",
    url: "https://gsap.com",
    tags: ["GSAP", "Scroll"]
  },

  {
    name: "GSAP Animation Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Advanced animation workflows using GSAP.",
    url: "https://gsap.com",
    tags: ["GSAP", "Animation"]
  },

  {
    name: "Framer Motion Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "React animation patterns using Motion.",
    url: "https://motion.dev",
    tags: ["React", "Motion"]
  },

  {
    name: "Lenis Skill",
    cat: "AI Skills",
    type: "skill",
    desc: "Smooth scrolling implementation guidance.",
    url: "https://lenis.darkroom.engineering",
    tags: ["Scroll", "Motion"]
  },


  // ==========================================================
  // ORIGINAL NON-AI RESOURCES
  // ==========================================================

  {
    name: "Godly",
    cat: "UI & Design",
    type: "site",
    desc: "Curated web design inspiration.",
    url: "https://godly.design",
    tags: ["Inspiration", "Web"]
  },

  {
    name: "getdesign.md",
    cat: "UI & Design",
    type: "site",
    desc: "Design resources and references for developers.",
    url: "https://getdesign.md",
    tags: ["Design", "Reference"]
  },

  {
    name: "shadcn/ui",
    cat: "UI & Design",
    type: "library",
    desc: "Beautifully designed components built with Radix and Tailwind.",
    url: "https://ui.shadcn.com",
    tags: ["React", "Tailwind"]
  },

  {
    name: "21st.dev",
    cat: "UI & Design",
    type: "site",
    desc: "Discover and remix high-quality React components.",
    url: "https://21st.dev",
    tags: ["Components", "React"]
  },

  {
    name: "Aceternity UI",
    cat: "UI & Design",
    type: "library",
    desc: "Animated React and Tailwind components.",
    url: "https://ui.aceternity.com",
    tags: ["React", "Animation"]
  },

  {
    name: "Magic UI",
    cat: "UI & Design",
    type: "library",
    desc: "Animated components and effects for React.",
    url: "https://magicui.design",
    tags: ["React", "Motion"]
  },

  {
    name: "React Bits",
    cat: "UI & Design",
    type: "library",
    desc: "Animated and interactive React components.",
    url: "https://reactbits.dev",
    tags: ["React", "Components"]
  },

  {
    name: "Tailwind UI",
    cat: "UI & Design",
    type: "library",
    desc: "Official Tailwind UI component library.",
    url: "https://tailwindui.com",
    tags: ["Tailwind", "UI"]
  },

  {
    name: "HyperUI",
    cat: "UI & Design",
    type: "library",
    desc: "Free Tailwind CSS components.",
    url: "https://hyperui.dev",
    tags: ["Tailwind", "Free"]
  },

  {
    name: "Flowbite",
    cat: "UI & Design",
    type: "library",
    desc: "Tailwind component library.",
    url: "https://flowbite.com",
    tags: ["Tailwind", "Components"]
  },

  {
    name: "DaisyUI",
    cat: "UI & Design",
    type: "library",
    desc: "Tailwind CSS component plugin.",
    url: "https://daisyui.com",
    tags: ["Tailwind", "Components"]
  },

  {
    name: "Radix UI",
    cat: "UI & Design",
    type: "library",
    desc: "Accessible React primitives.",
    url: "https://www.radix-ui.com",
    tags: ["React", "Accessibility"]
  },

  {
    name: "Headless UI",
    cat: "UI & Design",
    type: "library",
    desc: "Unstyled accessible UI components.",
    url: "https://headlessui.com",
    tags: ["React", "Accessibility"]
  },

  {
    name: "Lucide",
    cat: "UI & Design",
    type: "library",
    desc: "Open-source icon library.",
    url: "https://lucide.dev",
    tags: ["Icons", "SVG"]
  },

  {
    name: "Tabler Icons",
    cat: "UI & Design",
    type: "library",
    desc: "Open-source SVG icon library.",
    url: "https://tabler.io/icons",
    tags: ["Icons", "SVG"]
  },

  {
    name: "Phosphor Icons",
    cat: "UI & Design",
    type: "library",
    desc: "Flexible icon family.",
    url: "https://phosphoricons.com",
    tags: ["Icons", "SVG"]
  },


  // ==========================================================
  // LIBRARIES
  // ==========================================================

  {
    name: "React",
    cat: "Libraries",
    type: "library",
    desc: "Component library for building web interfaces.",
    url: "https://react.dev",
    tags: ["JS", "UI"]
  },

  {
    name: "Next.js",
    cat: "Libraries",
    type: "library",
    desc: "React framework for full-stack applications.",
    url: "https://nextjs.org",
    tags: ["React", "Full Stack"]
  },

  {
    name: "Vue",
    cat: "Libraries",
    type: "library",
    desc: "Progressive JavaScript framework.",
    url: "https://vuejs.org",
    tags: ["JS", "UI"]
  },

  {
    name: "Svelte",
    cat: "Libraries",
    type: "library",
    desc: "Compiler-based UI framework.",
    url: "https://svelte.dev",
    tags: ["JS", "UI"]
  },

  {
    name: "Astro",
    cat: "Libraries",
    type: "library",
    desc: "Content-focused web framework.",
    url: "https://astro.build",
    tags: ["Web", "Performance"]
  },

  {
    name: "Tailwind CSS",
    cat: "Libraries",
    type: "library",
    desc: "Utility-first CSS framework.",
    url: "https://tailwindcss.com",
    tags: ["CSS", "UI"]
  },

  {
    name: "Vite",
    cat: "Libraries",
    type: "library",
    desc: "Fast frontend build tool.",
    url: "https://vite.dev",
    tags: ["Build", "JS"]
  },

  {
    name: "TypeScript",
    cat: "Libraries",
    type: "library",
    desc: "Typed superset of JavaScript.",
    url: "https://www.typescriptlang.org",
    tags: ["TS", "Language"]
  },

  {
    name: "Zod",
    cat: "Libraries",
    type: "library",
    desc: "TypeScript-first validation library.",
    url: "https://zod.dev",
    tags: ["TS", "Validation"]
  },

  {
    name: "Zustand",
    cat: "Libraries",
    type: "library",
    desc: "Small React state management library.",
    url: "https://zustand.docs.pmnd.rs",
    tags: ["React", "State"]
  },

  {
    name: "TanStack Query",
    cat: "Libraries",
    type: "library",
    desc: "Async state management.",
    url: "https://tanstack.com/query",
    tags: ["React", "Data"]
  },

  {
    name: "Drizzle ORM",
    cat: "Libraries",
    type: "library",
    desc: "TypeScript ORM with SQL-like syntax.",
    url: "https://orm.drizzle.team",
    tags: ["Database", "TS"]
  },

  {
    name: "Prisma",
    cat: "Libraries",
    type: "library",
    desc: "Type-safe database toolkit.",
    url: "https://www.prisma.io",
    tags: ["Database", "TS"]
  },

  {
    name: "Motion",
    cat: "Libraries",
    type: "library",
    desc: "Animation library for React and JavaScript.",
    url: "https://motion.dev",
    tags: ["Animation", "React"]
  },

  {
    name: "GSAP",
    cat: "Libraries",
    type: "library",
    desc: "High-performance animation platform.",
    url: "https://gsap.com",
    tags: ["Animation", "JS"]
  },

  {
    name: "Three.js",
    cat: "Libraries",
    type: "library",
    desc: "3D graphics library for the web.",
    url: "https://threejs.org",
    tags: ["3D", "WebGL"]
  },


  // ==========================================================
  // MCP & TOOLS
  // ==========================================================

  {
    name: "MCP",
    cat: "MCP & Tools",
    type: "docs",
    desc: "Open protocol for connecting AI assistants to tools and data.",
    url: "https://modelcontextprotocol.io",
    tags: ["MCP", "Protocol"]
  },

  {
    name: "MCP Registry",
    cat: "MCP & Tools",
    type: "site",
    desc: "Browse MCP servers and integrations.",
    url: "https://registry.modelcontextprotocol.io",
    tags: ["MCP", "Directory"]
  },

  {
    name: "Smithery",
    cat: "MCP & Tools",
    type: "site",
    desc: "Discover MCP servers.",
    url: "https://smithery.ai",
    tags: ["MCP", "Directory"]
  },

  {
    name: "Glama MCP",
    cat: "MCP & Tools",
    type: "site",
    desc: "MCP ecosystem directory.",
    url: "https://glama.ai/mcp",
    tags: ["MCP", "Directory"]
  },

  {
    name: "Context7",
    cat: "MCP & Tools",
    type: "site",
    desc: "Current documentation for AI coding agents.",
    url: "https://context7.com",
    tags: ["MCP", "Docs"]
  },

  {
    name: "Firecrawl",
    cat: "MCP & Tools",
    type: "site",
    desc: "Turn websites into AI-ready data.",
    url: "https://www.firecrawl.dev",
    tags: ["AI", "Web"]
  },

  {
    name: "Browser Use",
    cat: "MCP & Tools",
    type: "site",
    desc: "Browser automation for AI agents.",
    url: "https://browser-use.com",
    tags: ["Agents", "Browser"]
  },

  {
    name: "Playwright",
    cat: "MCP & Tools",
    type: "site",
    desc: "Browser automation and testing.",
    url: "https://playwright.dev",
    tags: ["Testing", "Browser"]
  },

  {
    name: "Repomix",
    cat: "MCP & Tools",
    type: "site",
    desc: "Package repositories for AI context.",
    url: "https://repomix.com",
    tags: ["Context", "AI"]
  },

  {
    name: "MDN Web Docs",
    cat: "MCP & Tools",
    type: "docs",
    desc: "Comprehensive web development documentation.",
    url: "https://developer.mozilla.org",
    tags: ["Docs", "Web"]
  },

  {
    name: "web.dev",
    cat: "MCP & Tools",
    type: "docs",
    desc: "Guidance for fast and modern websites.",
    url: "https://web.dev",
    tags: ["Web", "Performance"]
  },

  {
    name: "Can I Use",
    cat: "MCP & Tools",
    type: "site",
    desc: "Browser compatibility tables.",
    url: "https://caniuse.com",
    tags: ["Browser", "Compatibility"]
  },

  {
    name: "Bundlephobia",
    cat: "MCP & Tools",
    type: "site",
    desc: "Check npm package bundle size.",
    url: "https://bundlephobia.com",
    tags: ["npm", "Performance"]
  },

  {
    name: "Excalidraw",
    cat: "MCP & Tools",
    type: "site",
    desc: "Collaborative whiteboard and diagramming.",
    url: "https://excalidraw.com",
    tags: ["Diagram", "Planning"]
  },

  {
    name: "Mermaid",
    cat: "MCP & Tools",
    type: "library",
    desc: "Generate diagrams from text.",
    url: "https://mermaid.js.org",
    tags: ["Diagrams", "Docs"]
  },

  {
    name: "Ray.so",
    cat: "MCP & Tools",
    type: "site",
    desc: "Beautiful code screenshots.",
    url: "https://ray.so",
    tags: ["Code", "Visual"]
  },

  {
    name: "Carbon",
    cat: "MCP & Tools",
    type: "site",
    desc: "Create images of source code.",
    url: "https://carbon.now.sh",
    tags: ["Code", "Visual"]
  },

  {
    name: "Regex101",
    cat: "MCP & Tools",
    type: "site",
    desc: "Interactive regex tester.",
    url: "https://regex101.com",
    tags: ["Regex", "Debugging"]
  },

  {
    name: "DevDocs",
    cat: "MCP & Tools",
    type: "docs",
    desc: "Searchable developer documentation.",
    url: "https://devdocs.io",
    tags: ["Docs", "Reference"]
  }

];


// ============================================================
// AI SKILL COUNT
// ============================================================

const aiSkills = resources.filter(
  resource => resource.cat === "AI Skills"
);

console.log(
  `SkillShelf loaded ${aiSkills.length} AI skills.`
);


// ============================================================
// OPTIONAL — ONLY SHOW A WARNING IF UNDER 100
// ============================================================

if (aiSkills.length < 100) {
  console.warn(
    `SkillShelf currently has only ${aiSkills.length} AI skills.`
  );
} else {
  console.log(
    `✓ SkillShelf has ${aiSkills.length}+ AI skills available.`
  );
}


// ============================================================
// SAFE ELEMENT LOOKUP
// The same script runs on every page, so elements that only
// exist on one page resolve to a harmless stand-in instead
// of throwing.
// ============================================================

const NULL_STYLE = {};
const NULL_DATASET = {};

const NULL_CLASSLIST = {
  add() {},
  remove() {},
  toggle() {},
  contains() { return false; }
};

function nullEl() {

  return {
    innerHTML: "",
    textContent: "",
    value: "",
    hidden: true,
    files: null,
    scrollTop: 0,
    href: "",
    download: "",
    dataset: NULL_DATASET,
    style: NULL_STYLE,
    classList: NULL_CLASSLIST,
    addEventListener() {},
    querySelectorAll() { return []; },
    closest() { return null; },
    getAttribute() { return null; },
    scrollIntoView() {},
    select() {},
    remove() {},
    appendChild() {},
    focus() {},
    click() {}
  };
}

const nullElCache = {};

function $(id) {

  return (
    document.getElementById(id) ||
    (nullElCache[id] =
      nullElCache[id] || nullEl())
  );
}


// ============================================================
// DOM ELEMENTS
// ============================================================

const grid = $("resourceGrid");
const favGrid = $("favoritesGrid");
const search = $("search");
const filters = $("filters");
const filterPills = $("filterPills");
const resultCount = $("resultCount");
const emptyState = $("emptyState");
const favoritesEmpty = $("favoritesEmpty");
const toast = $("toast");
const stackBar = $("stackBar");
const stackCount = $("stackCount");

let activeCat = "All";

const SORT_OPTIONS = [
  "curated",
  "copyable",
  "az"
];

let activeSort =
  localStorage.getItem("skillshelf-sort") ||
  "curated";

if (!SORT_OPTIONS.includes(activeSort)) {
  activeSort = "curated";
}

function readList(key) {

  try {

    const value = JSON.parse(
      localStorage.getItem(key)
    );

    return Array.isArray(value) ? value : [];

  } catch {

    return [];
  }
}


let saved = readList("skillshelf-favorites");

let selected = new Set(
  readList("skillshelf-stack")
);


// ============================================================
// CATEGORY FILTERS
// ============================================================

const categories = [
  "All",
  ...new Set(resources.map(resource => resource.cat))
];

filterPills.innerHTML = categories
  .map(category => {
    const count =
      category === "All"
        ? resources.length
        : resources.filter(
            resource => resource.cat === category
          ).length;

    return `
      <button
        class="filter ${category === "All" ? "active" : ""}"
        data-cat="${escapeHtml(category)}"
      >
        ${escapeHtml(category)}
        <span class="filter-count">${count}</span>
      </button>
    `;
  })
  .join("");


// ============================================================
// SECURITY / HTML ESCAPING
// ============================================================

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]
  );
}


// ============================================================
// CREATE SHORT LOGO / INITIALS
// ============================================================

function initials(name) {
  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean);

  if (words.length > 1) {
    return (
      words[0][0] +
      words[1][0]
    ).toUpperCase();
  }

  return name
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();
}


// ============================================================
// SITE FAVICON (falls back to initials if it fails to load)
// ============================================================

function logoImg(url) {
  let host = "";

  try {
    host = new URL(url).hostname;
  } catch {
    return "";
  }

  if (!host) return "";

  return `
    <img
      class="logo-img"
      src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64"
      alt=""
      loading="lazy"
      decoding="async"
    >
  `;
}


// ============================================================
// FILTER RESOURCES
// ============================================================

function getFilteredResources() {
  const query = search.value.trim().toLowerCase();

  const filtered = resources.filter(resource => {

    const matchesCategory =
      activeCat === "All" ||
      resource.cat === activeCat;

    const searchableText = [
      resource.name,
      resource.cat,
      resource.type,
      resource.desc,
      resource.url,
      resource.cmd || "",
      ...(resource.tags || [])
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !query ||
      searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });

  const sorted = [...filtered];

  if (activeSort === "az") {
    sorted.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (activeSort === "copyable") {
    sorted.sort(
      (a, b) =>
        Number(Boolean(b.cmd)) -
        Number(Boolean(a.cmd))
    );
  }

  return sorted;
}


// ============================================================
// RESOURCE CARD
// ============================================================

function typeLabelFor(type) {

  return {
    skill: "AI Skill",
    library: "Library",
    mcp: "MCP",
    docs: "Documentation",
    site: "Resource"
  }[type] || "Resource";
}


function createCard(resource) {
  const isSaved = saved.includes(resource.name);
  const isSelected = selected.has(resource.name);

  const iconLetters = initials(resource.name);

  const typeLabel = typeLabelFor(resource.type);

  const commandBlock = resource.cmd
    ? `
      <div class="card-command">
        <div class="command-top">
          <span class="command-label">
            <span class="terminal-dot"></span>
            Install
          </span>

          <button
            class="command-copy"
            type="button"
            data-copy="${encodeURIComponent(resource.cmd)}"
            aria-label="Copy install command"
            title="Copy command"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="9" width="10" height="10" rx="2"></rect>
              <path d="M5 15V5a2 2 0 0 1 2-2h10"></path>
            </svg>
          </button>
        </div>

        <code>${escapeHtml(resource.cmd)}</code>
      </div>
    `
    : `
      <div class="card-command card-command-empty">
        <span class="command-label">
          <span class="command-dot"></span>
          Official resource
        </span>

        <span class="command-arrow">↗</span>
      </div>
    `;

  return `
    <article class="card reveal">

      <div class="card-glow"></div>

      <div class="card-header">

        <div class="resource-brand">

          <div class="resource-logo">
            ${escapeHtml(iconLetters)}
            ${logoImg(resource.url)}
          </div>

          <div class="resource-meta">
            <span class="resource-type">
              ${escapeHtml(typeLabel)}
            </span>

            <span class="resource-status">
              <span></span>
              Ready
            </span>
          </div>

        </div>


        <div class="card-actions">

          <button
            class="stack-button ${isSelected ? "selected" : ""}"
            data-stack="${escapeHtml(resource.name)}"
            aria-label="${isSelected ? "Remove from stack" : "Add to stack"}"
            title="${isSelected ? "Remove from stack" : "Add to install stack"}"
            type="button"
          >
            ${isSelected ? "✓" : "+"}
          </button>

          <button
            class="save-button ${isSaved ? "saved" : ""}"
            data-save="${escapeHtml(resource.name)}"
            aria-label="${isSaved ? "Remove from saved" : "Save resource"}"
            title="${isSaved ? "Remove from saved" : "Save resource"}"
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
              ></path>
            </svg>
          </button>

        </div>

      </div>


      <div class="card-main">

        <div class="title-row">

          <h3>
            <button
              class="title-button"
              type="button"
              data-detail="${escapeHtml(resource.name)}"
              title="View details"
            >
              ${escapeHtml(resource.name)}
            </button>
          </h3>

          <span class="external-mark">↗</span>

        </div>

        <p>
          ${escapeHtml(resource.desc)}
        </p>


        <div class="tags">
          ${(resource.tags || [])
            .slice(0, 3)
            .map(
              tag => `
                <button
                  class="tag"
                  type="button"
                  data-tag="${escapeHtml(tag)}"
                  title="Filter by ${escapeHtml(tag)}"
                >
                  ${escapeHtml(tag)}
                </button>
              `
            )
            .join("")}
        </div>

      </div>


      ${commandBlock}


      <div class="card-footer">

        <a
          class="open-resource"
          href="${escapeHtml(resource.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Open resource</span>

          <span class="open-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 17L17 7"></path>
              <path d="M8 7h9v9"></path>
            </svg>
          </span>
        </a>

        <button
          class="copy-resource"
          type="button"
          data-copy="${encodeURIComponent(
            resource.cmd || resource.url
          )}"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect
              x="9"
              y="9"
              width="10"
              height="10"
              rx="2"
            ></rect>

            <path
              d="M5 15V5a2 2 0 0 1 2-2h10"
            ></path>
          </svg>

          <span>
            ${resource.cmd ? "Copy command" : "Copy link"}
          </span>
        </button>

      </div>

    </article>
  `;
}


// ============================================================
// MAIN RESOURCE RENDER
// ============================================================

const FIRST_PAINT_COUNT = 24;
const CHUNK_SIZE = 48;

let renderToken = 0;

function scheduleChunk(fn) {

  if (
    typeof window.requestIdleCallback === "function"
  ) {
    window.requestIdleCallback(fn, { timeout: 800 });
  } else {
    setTimeout(fn, 0);
  }
}


function renderResources() {

  const list = getFilteredResources();

  renderToken += 1;

  const token = renderToken;

  grid.innerHTML = list
    .slice(0, FIRST_PAINT_COUNT)
    .map(createCard)
    .join("");

  observeReveals(grid);

  invalidateScrollMax();

  resultCount.textContent =
    `${list.length} result${list.length === 1 ? "" : "s"}`;

  emptyState.hidden =
    list.length !== 0;


  $("totalCount").textContent =
    `${resources.length}+`;

  $("skillCount").textContent =
    `${resources.filter(
      resource => resource.type === "skill"
    ).length}+`;

  if (list.length > FIRST_PAINT_COUNT) {
    scheduleChunk(() =>
      appendCards(list, FIRST_PAINT_COUNT, token)
    );
  }
}


function appendCards(list, start, token) {

  if (token !== renderToken) return;

  if (userScrolling) {

    // never mutate the grid mid-scroll — retry when calm

    setTimeout(() => {
      appendCards(list, start, token);
    }, 200);

    return;
  }

  const chunk = list.slice(start, start + CHUNK_SIZE);

  if (!chunk.length) return;

  grid.insertAdjacentHTML(
    "beforeend",
    chunk.map(createCard).join("")
  );

  observeReveals(grid);

  invalidateScrollMax();

  scheduleChunk(() =>
    appendCards(list, start + CHUNK_SIZE, token)
  );
}


// ============================================================
// FAVORITES
// ============================================================

function renderFavorites() {

  const favorites = resources.filter(resource =>
    saved.includes(resource.name)
  );

  favGrid.innerHTML = favorites
    .map(createCard)
    .join("");

  favoritesEmpty.hidden =
    favorites.length !== 0;

  observeReveals(favGrid);

  invalidateScrollMax();
}


// ============================================================
// SAVE FAVORITES
// ============================================================

function persistFavorites() {

  localStorage.setItem(
    "skillshelf-favorites",
    JSON.stringify(saved)
  );
}


function refreshSaveButtons(name) {

  const on = saved.includes(name);

  const label = on
    ? "Remove from saved"
    : "Save resource";

  document
    .querySelectorAll("[data-save]")
    .forEach(button => {

      if (button.dataset.save !== name) return;

      button.classList.toggle("saved", on);

      button.setAttribute("aria-label", label);

      button.setAttribute("title", label);
    });
}


function saveFavorites() {

  persistFavorites();

  renderResources();
  renderFavorites();
}


// ============================================================
// INSTALL STACK
// ============================================================

function getStackResources() {

  return resources.filter(resource =>
    selected.has(resource.name)
  );
}


function persistStack() {

  localStorage.setItem(
    "skillshelf-stack",
    JSON.stringify([...selected])
  );
}


function refreshStackButtons(name) {

  const on = selected.has(name);

  const label = on
    ? "Remove from stack"
    : "Add to install stack";

  document
    .querySelectorAll("[data-stack]")
    .forEach(button => {

      if (button.dataset.stack !== name) return;

      button.classList.toggle("selected", on);

      button.textContent = on ? "✓" : "+";

      button.setAttribute("aria-label", label);

      button.setAttribute("title", label);
    });
}


function saveStack() {

  persistStack();

  renderResources();
  renderFavorites();
  renderStackBar();
}


function renderStackBar() {

  const list = getStackResources();

  stackBar.hidden =
    list.length === 0;

  stackBar.classList.toggle(
    "visible",
    list.length !== 0
  );

  stackCount.textContent =
    `${list.length} in stack`;

  document.body.classList.toggle(
    "has-stack",
    list.length !== 0
  );
}


$(
"copyStackBtn")
  .addEventListener(
    "click",
    async () => {

      const list = getStackResources();

      const cmds = list
        .map(resource => resource.cmd)
        .filter(Boolean);

      if (!cmds.length) {

        showToast(
          "No install commands in stack"
        );

        return;
      }

      await copyText(
        cmds.join("\n")
      );

      const skipped =
        list.length - cmds.length;

      showToast(
        skipped
          ? `Copied ${cmds.length} commands (${skipped} skipped) ✓`
          : `Copied ${cmds.length} commands ✓`
      );
    }
  );


$(
"copyStackMdBtn")
  .addEventListener(
    "click",
    async () => {

      const list = getStackResources();

      if (!list.length) return;

      const lines = list.map(resource => {
        const cmdPart = resource.cmd
          ? ` — \`${resource.cmd}\``
          : "";

        return `- [${resource.name}](${resource.url})${cmdPart}`;
      });

      await copyText(
        `# SkillShelf stack\n\n${lines.join("\n")}\n`
      );

      showToast(
        "Stack copied as Markdown ✓"
      );
    }
  );


$(
"clearStackBtn")
  .addEventListener(
    "click",
    () => {

      selected.clear();

      saveStack();

      showToast(
        "Stack cleared"
      );
    }
  );


// ============================================================
// TOAST MESSAGE
// ============================================================

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(showToast.timeout);

  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}


// ============================================================
// CATEGORY CLICK
// ============================================================

filters.addEventListener("click", event => {

  const button =
    event.target.closest(".filter");

  if (!button) return;

  activeCat =
    button.dataset.cat;

  document
    .querySelectorAll(".filter")
    .forEach(filter => {

      filter.classList.toggle(
        "active",
        filter === button
      );

    });


  $(
    "sectionTitle"
  ).textContent =
    activeCat === "All"
      ? "Everything you need"
      : activeCat;


  renderResources();
});


// ============================================================
// SEARCH
// ============================================================

let searchTimer = null;

const clearSearch = $("clearSearch");

function syncClearSearch() {
  clearSearch.hidden = search.value.length === 0;
}

search.addEventListener("input", () => {

  syncClearSearch();

  clearTimeout(searchTimer);

  searchTimer = setTimeout(
    renderResources,
    120
  );
});

clearSearch.addEventListener("click", () => {

  search.value = "";

  syncClearSearch();

  renderResources();

  search.focus();
});

syncClearSearch();


// ============================================================
// SORT
// ============================================================

const sortSel = $("sortSel");

sortSel.value = activeSort;

sortSel.addEventListener("change", () => {

  activeSort = SORT_OPTIONS.includes(sortSel.value)
    ? sortSel.value
    : "curated";

  localStorage.setItem(
    "skillshelf-sort",
    activeSort
  );

  renderResources();
});


// ============================================================
// CLIPBOARD HELPER
// ============================================================

async function copyText(value) {

  try {

    await navigator.clipboard.writeText(
      value
    );

    return;

  } catch {

    // fall through to legacy fallback

  }

  const textarea =
    document.createElement("textarea");

  textarea.value = value;

  document.body.appendChild(
    textarea
  );

  textarea.select();

  document.execCommand(
    "copy"
  );

  textarea.remove();
}


// Logo fallback is delegated here so the Content-Security-Policy
// can stay strict (no inline handlers anywhere on the site).
document.addEventListener(
  "error",
  event => {

    const img = event.target;

    if (
      img &&
      img.tagName === "IMG" &&
      img.classList &&
      typeof img.classList.contains === "function" &&
      img.classList.contains("logo-img") &&
      typeof img.remove === "function"
    ) {
      img.remove();
    }
  },
  true
);


// ============================================================
// GLOBAL CLICK HANDLER
// ============================================================

document.addEventListener(
  "click",
  async event => {

    // --------------------------------------------------------
    // NAV LINKS — shelf vs saved view
    // --------------------------------------------------------

    const navLink =
      event.target.closest('a[href^="#"]');

    if (navLink) {

      const hash =
        navLink.getAttribute("href");

      if (
        hash === "#favorites" ||
        hash === "#saved"
      ) {

        event.preventDefault();

        setView("saved");

        return;
      }

      if (hash === "#top") {

        event.preventDefault();

        smoothTo(0);

        return;
      }

      if (
        hash === "#skills" ||
        hash === "#resources"
      ) {

        event.preventDefault();

        setView("shelf");

        smoothTo(
          hash,
          hash === "#skills" ? -84 : -224
        );

        return;
      }
    }


    // --------------------------------------------------------
    // DETAIL BUTTON — open detail modal
    // --------------------------------------------------------

    const detailButton =
      event.target.closest("[data-detail]");

    if (detailButton) {

      openDetail(
        detailButton.dataset.detail
      );

      return;
    }


    // --------------------------------------------------------
    // TAG BUTTON — filter by tag
    // --------------------------------------------------------

    const tagButton =
      event.target.closest("[data-tag]");

    if (tagButton) {

      closeModal();

      const tag =
        tagButton.dataset.tag;

      search.value = tag;

      syncClearSearch();

      activeCat = "All";

      document
        .querySelectorAll(".filter")
        .forEach((button, index) => {

          button.classList.toggle(
            "active",
            index === 0
          );

        });


      $(
        "sectionTitle"
      ).textContent =
        "Everything you need";

      renderResources();

      showToast(
        `Filtered by "${tag}"`
      );

      if (
        document.body.dataset.view === "saved"
      ) {
        setView("shelf");
      }

      smoothTo("#skills", -84);

      return;
    }


    // --------------------------------------------------------
    // STACK BUTTON — add/remove from install stack
    // --------------------------------------------------------

    const stackButton =
      event.target.closest("[data-stack]");

    if (stackButton) {

      const name =
        stackButton.dataset.stack;

      if (selected.has(name)) {

        selected.delete(name);

        showToast(
          "Removed from stack"
        );

      } else {

        selected.add(name);

        showToast(
          "Added to stack ✓"
        );
      }

      persistStack();

      refreshStackButtons(name);

      renderStackBar();

      return;
    }


    // --------------------------------------------------------
    // SAVE BUTTON
    // --------------------------------------------------------

    const saveButton =
      event.target.closest("[data-save]");

    if (saveButton) {

      const name =
        saveButton.dataset.save;

      if (saved.includes(name)) {

        saved =
          saved.filter(item => item !== name);

        showToast(
          "Removed from saved"
        );

      } else {

        saved.push(name);

        showToast(
          "Saved to your shelf ✓"
        );
      }

      persistFavorites();

      refreshSaveButtons(name);

      renderFavorites();

      return;
    }


    // --------------------------------------------------------
    // COPY BUTTON
    // --------------------------------------------------------

    const copyButton =
      event.target.closest("[data-copy]");

    if (copyButton) {

      let value = "";

      try {

        value = decodeURIComponent(
          copyButton.dataset.copy
        );

      } catch {

        showToast(
          "Copy failed"
        );

        return;
      }

      await copyText(value);


      showToast(
        value.startsWith("npx ") ||
        value.startsWith("npm ")
          ? "Install command copied ✓"
          : "Link copied ✓"
      );

      return;
    }
  }
);


// ============================================================
// CLEAR SEARCH
// ============================================================

$(
"clearBtn")
  .addEventListener(
    "click",
    () => {

      search.value = "";

      syncClearSearch();

      activeCat = "All";

      activeSort = "curated";

      localStorage.setItem(
        "skillshelf-sort",
        activeSort
      );

      $("sortSel").value =
        activeSort;

      document
        .querySelectorAll(".filter")
        .forEach((button, index) => {

          button.classList.toggle(
            "active",
            index === 0
          );

        });


      $(
        "sectionTitle"
      ).textContent =
        "Everything you need";

      renderResources();
    }
  );


// ============================================================
// RANDOM RESOURCE
// ============================================================

$(
"randomBtn")
  .addEventListener(
    "click",
    () => {

      const current =
        getFilteredResources();

      const list =
        current.length
          ? current
          : resources;

      const resource =
        list[
          Math.floor(
            Math.random() * list.length
          )
        ];

      window.open(
        resource.url,
        "_blank",
        "noopener,noreferrer"
      );
    }
  );


// ============================================================
// DARK / LIGHT MODE
// ============================================================

$(
"themeBtn")
  .addEventListener(
    "click",
    () => {

      const current =
        document.documentElement.dataset.theme;

      const next =
        current === "dark"
          ? "light"
          : "dark";

      document.documentElement.dataset.theme =
        next;

      localStorage.setItem(
        "skillshelf-theme",
        next
      );
    }
  );


// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================

document.addEventListener(
  "keydown",
  event => {

    // Press "/" to search
    if (
      event.key === "/" &&
      document.activeElement !== search &&
      !event.ctrlKey &&
      !event.metaKey
    ) {

      event.preventDefault();

      search.focus();
    }


    // Ctrl/Cmd + K
    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {

      event.preventDefault();

      search.focus();
    }


    // Escape closes the mobile menu first
    if (
      event.key === "Escape" &&
      document.body.classList.contains("nav-open")
    ) {

      event.preventDefault();

      document.body.classList.remove("nav-open");

      return;
    }


    // Escape closes the modal first
    if (
      event.key === "Escape" &&
      !$("modalBackdrop").hidden
    ) {

      event.preventDefault();

      closeModal();

      return;
    }


    // Escape clears focus
    if (
      event.key === "Escape" &&
      document.activeElement === search
    ) {

      search.blur();
    }
  }
);


// ============================================================
// RESTORE THEME
// ============================================================

const savedTheme =
  localStorage.getItem(
    "skillshelf-theme"
  );

if (savedTheme) {

  document.documentElement.dataset.theme =
    savedTheme;
}


// ============================================================
// DETAIL MODAL
// ============================================================

let lastFocused = null;


function installVariants(resource) {

  if (!resource.cmd) return [];

  const variants = [
    {
      label: "Install · project",
      cmd: resource.cmd
    }
  ];

  if (resource.cmd.startsWith("npx skills add")) {

    variants.push({
      label: "Install · global",
      cmd: `${resource.cmd} -g -y`
    });

    const skillIdx =
      resource.cmd.indexOf(" --skill ");

    if (skillIdx !== -1) {

      variants.push({
        label: "Install · entire repo",
        cmd: resource.cmd.slice(0, skillIdx)
      });
    }
  }

  return variants;
}


function relatedResources(resource) {

  const tags = new Set(resource.tags || []);

  return resources
    .filter(other =>
      other.name !== resource.name
    )
    .map(other => {

      let score = 0;

      if (other.cat === resource.cat) {
        score += 2;
      }

      for (const tag of other.tags || []) {
        if (tags.has(tag)) score += 1;
      }

      return { other, score };
    })
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(entry => entry.other);
}


function detailHtml(resource) {

  const variants = installVariants(resource);

  const related = relatedResources(resource);

  const variantBlock = variants.length
    ? `
      <p class="detail-label">Install</p>

      ${variants
        .map(variant => `
          <div class="detail-variant">
            <div class="detail-variant-top">
              <span class="command-label">
                ${escapeHtml(variant.label)}
              </span>

              <button
                class="command-copy"
                type="button"
                data-copy="${encodeURIComponent(variant.cmd)}"
                aria-label="Copy ${escapeHtml(variant.label)}"
                title="Copy command"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="9" y="9" width="10" height="10" rx="2"></rect>
                  <path d="M5 15V5a2 2 0 0 1 2-2h10"></path>
                </svg>
              </button>
            </div>

            <code>${escapeHtml(variant.cmd)}</code>
          </div>
        `)
        .join("")}
    `
    : "";

  const relatedBlock = related.length
    ? `
      <p class="detail-label">Related</p>

      <div class="detail-related">
        ${related
          .map(item => `
            <button
              class="related-btn"
              type="button"
              data-detail="${escapeHtml(item.name)}"
            >
              <span>${escapeHtml(item.name)}</span>
              <span class="related-go">→</span>
            </button>
          `)
          .join("")}
      </div>
    `
    : "";

  return `
    <p class="detail-eyebrow">
      ${escapeHtml(typeLabelFor(resource.type))}
      <span> · </span>
      ${escapeHtml(resource.cat)}
    </p>

    <h2 id="modalTitle">
      ${escapeHtml(resource.name)}
    </h2>

    <p class="detail-desc">
      ${escapeHtml(resource.desc)}
    </p>

    <div class="tags">
      ${(resource.tags || [])
        .map(
          tag => `
            <button
              class="tag"
              type="button"
              data-tag="${escapeHtml(tag)}"
              title="Filter by ${escapeHtml(tag)}"
            >
              ${escapeHtml(tag)}
            </button>
          `
        )
        .join("")}
    </div>

    ${variantBlock}

    ${relatedBlock}

    <div class="detail-footer">
      <a
        class="open-resource"
        href="${escapeHtml(resource.url)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Open official page</span>

        <span class="open-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17L17 7"></path>
            <path d="M8 7h9v9"></path>
          </svg>
        </span>
      </a>
    </div>
  `;
}


function openDetail(name) {

  const resource = resources.find(
    item => item.name === name
  );

  if (!resource) return;

  lastFocused = document.activeElement;

  $(
    "modalBody"
  ).innerHTML = detailHtml(resource);

  const backdrop = $(
    "modalBackdrop"
  );

  backdrop.hidden = false;

  document.body.style.overflow = "hidden";

  if (lenis) lenis.stop();

  $("modal").scrollTop = 0;

  $("modalClose").focus();
}


function closeModal() {

  const backdrop = $(
    "modalBackdrop"
  );

  if (!backdrop || backdrop.hidden) return;

  backdrop.hidden = true;

  $(
    "modalBody"
  ).innerHTML = "";

  document.body.style.overflow = "";

  if (lenis) lenis.start();

  if (
    lastFocused &&
    typeof lastFocused.focus === "function"
  ) {
    lastFocused.focus();
  }
}


$(
"modalClose")
  .addEventListener("click", closeModal);


$(
"modalBackdrop")
  .addEventListener("click", event => {

    if (event.target === event.currentTarget) {
      closeModal();
    }
  });


// ============================================================
// SAVED VIEW (dedicated page feel, no scrolling needed)
// ============================================================

function setView(view) {

  const showSaved = view === "saved";

  if (
    showSaved &&
    !document.querySelector("#filterPills")
  ) {

    // dedicated saved page already shows the collection

    return;
  }

  if (showSaved) {

    document.body.dataset.view = "saved";

    renderFavorites();

  } else {

    delete document.body.dataset.view;
  }

  smoothTo(0);

  try {

    history.replaceState(
      null,
      "",
      showSaved
        ? "#saved"
        : location.pathname + location.search
    );

  } catch {

    // non-browser environment

  }
}


// ============================================================
// SMOOTH SCROLL (Lenis) + SCROLL REVEALS
// Lenis is optional: everything falls back to native smooth
// scrolling when the CDN is blocked or reduced motion is set.
// ============================================================

const reduceMotion =
  typeof window.matchMedia === "function" &&
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

let lenis = null;

function startLenis() {

  if (lenis || reduceMotion) return;

  if (typeof Lenis === "undefined") return;

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

startLenis();

// retry once everything (including an async CDN script) is loaded,
// so a slow library never leaves the site without smooth scroll
window.addEventListener("load", startLenis);


function smoothTo(target, offset = 0) {

  if (lenis) {

    lenis.scrollTo(target, {
      offset,
      duration: 1.2
    });

    return;
  }

  if (target === 0) {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }

  const el =
    typeof target === "string"
      ? document.querySelector(target)
      : target;

  if (el) {

    el.scrollIntoView({
      behavior: "smooth"
    });

  } else {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


const revealObserver =
  !reduceMotion &&
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        entries => {

          for (const entry of entries) {

            if (!entry.isIntersecting) continue;

            entry.target.classList.add("in");

            revealObserver.unobserve(entry.target);
          }
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -4% 0px"
        }
      )
    : null;


function observeReveals(scope) {

  const root = scope || document;

  const cards = root.querySelectorAll(
    ".reveal:not(.in)"
  );

  if (!revealObserver) {

    cards.forEach(card =>
      card.classList.add("in")
    );

    return;
  }

  cards.forEach(card =>
    revealObserver.observe(card)
  );
}


// ============================================================
// BACK TO TOP + SCROLL PROGRESS
// ============================================================

const toTop = $("toTop");
const toTopRing = $("toTopRing");

const RING_CIRC = 2 * Math.PI * 19;

toTopRing.style.strokeDasharray = `${RING_CIRC}`;
toTopRing.style.strokeDashoffset = `${RING_CIRC}`;

let scrollMaxCache = -1;
let scrollMaxAt = 0;

function scrollMax() {

  const now = Date.now();

  if (
    scrollMaxCache < 0 ||
    now - scrollMaxAt > 500
  ) {
    scrollMaxCache =
      document.documentElement.scrollHeight -
      window.innerHeight;

    scrollMaxAt = now;
  }

  return scrollMaxCache;
}


function invalidateScrollMax() {
  scrollMaxCache = -1;
}


function updateToTop() {
  const max = scrollMax();

  const y = window.scrollY || 0;

  const progress =
    max > 0 ? Math.min(y / max, 1) : 0;

  toTopRing.style.strokeDashoffset =
    `${RING_CIRC * (1 - progress)}`;

  toTop.classList.toggle("show", y > 500);
}

let toTopQueued = false;
let userScrolling = false;
let scrollIdleTimer = null;

window.addEventListener(
  "scroll",
  () => {

    userScrolling = true;

    clearTimeout(scrollIdleTimer);

    scrollIdleTimer = setTimeout(() => {
      userScrolling = false;
    }, 150);

    if (toTopQueued) return;

    toTopQueued = true;

    requestAnimationFrame(() => {

      toTopQueued = false;

      updateToTop();
    });
  },
  { passive: true }
);

toTop.addEventListener("click", () => {
  smoothTo(0);
});

updateToTop();


// ============================================================
// SHAREABLE SHELF (export / import / link)
// ============================================================

function shelfData() {

  return {
    app: "skillshelf",
    version: 1,
    names: [...saved]
  };
}


function applyShelfNames(names) {

  if (!Array.isArray(names)) return 0;

  const known = new Set(
    resources.map(resource => resource.name)
  );

  let added = 0;

  for (const name of names) {

    if (typeof name !== "string") continue;

    if (!known.has(name)) continue;

    if (saved.includes(name)) continue;

    saved.push(name);

    added += 1;
  }

  if (added) {
    saveFavorites();
  }

  return added;
}


function encodeShelf(names) {

  return btoa(
    unescape(encodeURIComponent(JSON.stringify(names)))
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}


function decodeShelf(code) {

  const b64 = code
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const pad =
    b64.length % 4
      ? "=".repeat(4 - (b64.length % 4))
      : "";

  return JSON.parse(
    decodeURIComponent(escape(atob(b64 + pad)))
  );
}


$(
"exportShelfBtn")
  .addEventListener("click", () => {

    if (!saved.length) {

      showToast(
        "Your shelf is empty"
      );

      return;
    }

    const blob = new Blob(
      [JSON.stringify(shelfData(), null, 2)],
      { type: "application/json" }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "skillshelf-shelf.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    setTimeout(
      () => URL.revokeObjectURL(link.href),
      1000
    );

    showToast(
      "Shelf exported ✓"
    );
  });


$(
"copyShelfLinkBtn")
  .addEventListener("click", async () => {

    if (!saved.length) {

      showToast(
        "Your shelf is empty"
      );

      return;
    }

    const link =
      `${location.origin}${location.pathname}` +
      `#shelf=${encodeShelf(saved)}`;

    if (link.length > 2000) {

      showToast(
        "Shelf too big for a link — use Export"
      );

      return;
    }

    await copyText(link);

    showToast(
      "Share link copied ✓"
    );
  });


const importShelfFile = $(
  "importShelfFile"
);

$(
"importShelfBtn")
  .addEventListener("click", () => {

    importShelfFile.click();
  });

importShelfFile.addEventListener(
  "change",
  async () => {

    const file =
      importShelfFile.files &&
      importShelfFile.files[0];

    if (!file) return;

    try {

      const data = JSON.parse(
        await file.text()
      );

      const added = applyShelfNames(
        Array.isArray(data) ? data : data.names
      );

      showToast(
        added
          ? `Imported ${added} saved item${added === 1 ? "" : "s"} ✓`
          : "Nothing new to import"
      );

    } catch {

      showToast(
        "Could not read that file"
      );
    }

    importShelfFile.value = "";
  }
);


(function importShelfFromHash() {

  if (
    typeof location === "undefined" ||
    !location.hash.startsWith("#shelf=")
  ) {
    return;
  }

  try {

    const added = applyShelfNames(
      decodeShelf(location.hash.slice(7))
    );

    if (added) {

      showToast(
        `Imported ${added} saved item${added === 1 ? "" : "s"} from link ✓`
      );
    }

  } catch {

    // ignore malformed share links

  }

  try {

    history.replaceState(
      null,
      "",
      location.pathname + location.search
    );

  } catch {

    // non-browser environment

  }
})();


// ============================================================
// FOOTER — scroll glow reveal
// ============================================================

(function footerGlow() {

  const footer = $("siteFooter");

  if (
    !footer ||
    typeof footer.querySelector !== "function"
  ) {
    return;
  }

  const glow = footer.querySelector(".footer-glow");

  if (
    !glow ||
    typeof IntersectionObserver === "undefined"
  ) {
    footer.style.setProperty?.("--reveal", 1);
    return;
  }

  const steps = [];

  for (let i = 0; i <= 20; i += 1) {
    steps.push(i / 20);
  }

  const observer = new IntersectionObserver(
    entries => {

      for (const entry of entries) {
        footer.style.setProperty?.(
          "--reveal",
          entry.intersectionRatio.toFixed(3)
        );
      }
    },
    { threshold: steps }
  );

  observer.observe(footer);
})();


// ============================================================
// FOOTER — newsletter
// ============================================================

$("newsletterForm").addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const email = $("newsletterEmail").value.trim();

    if (
      !email ||
      !email.includes("@")
    ) {

      showToast(
        "Enter a valid email"
      );

      return;
    }

    $("newsletterEmail").value = "";

    showToast(
      "You're on the list ✓"
    );
  }
);


// ============================================================
// URL DEEP LINKS (?cat= / ?q=)
// ============================================================

(function applyUrlFilters() {

  let params = null;

  try {
    params = new URLSearchParams(location.search);
  } catch {
    return;
  }

  const cat = params.get("cat");
  const query = params.get("q");

  if (!cat && !query) return;

  if (
    cat &&
    categories.includes(cat)
  ) {

    activeCat = cat;

    document
      .querySelectorAll(".filter")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.cat === cat
        );
      });


    $("sectionTitle").textContent = cat;
  }

  if (query) {
    search.value = query;
  }

  syncClearSearch();

  renderResources();

  try {

    history.replaceState(
      null,
      "",
      location.pathname + location.hash
    );

  } catch {

    // non-browser environment

  }
})();


// ============================================================
// SKIP LINK (keyboard users jump straight to content)
// ============================================================

(function skipLink() {

  if (
    !document.body ||
    typeof document.createElement !== "function"
  ) {
    return;
  }

  const main = document.querySelector("main");

  if (
    !main ||
    typeof main.setAttribute !== "function"
  ) {
    return;
  }

  main.setAttribute("id", "main-content");

  const link = document.createElement("a");

  link.href = "#main-content";

  link.className = "skip-link";

  link.textContent = "Skip to content";

  document.body.insertBefore(
    link,
    document.body.firstChild
  );
})();


// ============================================================
// MOBILE NAV (hamburger, injected on every page)
// ============================================================

(function mobileNav() {

  const actions = document.querySelector(
    ".topbar .top-actions"
  );

  const nav = document.querySelector(
    ".topbar nav"
  );

  if (
    !actions ||
    !nav ||
    typeof nav.querySelectorAll !== "function" ||
    typeof document.createElement !== "function"
  ) {
    return;
  }

  const backdrop = document.createElement("div");

  backdrop.className = "menu-backdrop";

  backdrop.setAttribute("aria-hidden", "true");

  backdrop.addEventListener("click", () => {
    setMenuOpen(false);
  });

  document.body.appendChild(backdrop);

  const toggle = document.createElement("button");

  toggle.type = "button";

  toggle.className = "nav-toggle";

  toggle.setAttribute("aria-label", "Open menu");

  toggle.setAttribute("aria-expanded", "false");

  toggle.innerHTML =
    "<span></span><span></span><span></span>";

  function setMenuOpen(open) {

    if (open) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    toggle.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );

    if (open) {

      document.body.style.overflow = "hidden";

      if (lenis) lenis.stop();

    } else {

      if ($("modalBackdrop").hidden) {
        document.body.style.overflow = "";
      }

      if (lenis) lenis.start();
    }
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(
      !document.body.classList.contains("nav-open")
    );
  });

  nav.addEventListener("click", () => {
    setMenuOpen(false);
  });

  actions.insertBefore(
    toggle,
    actions.firstChild
  );
})();


// ============================================================
// INITIAL RENDER
// ============================================================

renderResources();
renderFavorites();
renderStackBar();

if (
  location.hash === "#saved" &&
  document.querySelector("#filterPills")
) {

  // legacy saved link — the collection has its own page now

  location.href = "saved.html";
}


// ============================================================
// OPTIONAL: RESOURCE API HELPERS
// ============================================================

/*
  These functions make it easier to extend the site later.

  Example:

  addResource({
    name: "My Library",
    cat: "Libraries",
    type: "library",
    desc: "My awesome library.",
    url: "https://example.com",
    cmd: "npm install my-library",
    tags: ["JavaScript", "npm"]
  });
*/

function addResource(resource) {

  if (
    !resource ||
    !resource.name ||
    !resource.url
  ) {
    console.warn(
      "Invalid resource:",
      resource
    );

    return;
  }

  resources.push({
    name: resource.name,
    cat: resource.cat || "Other",
    type: resource.type || "site",
    desc: resource.desc || "",
    url: resource.url,
    cmd: resource.cmd || "",
    tags: resource.tags || []
  });

  renderResources();
}


// Make resources accessible from the browser console.
window.SkillShelf = {
  resources,
  addResource,
  renderResources,
  renderFavorites
};
