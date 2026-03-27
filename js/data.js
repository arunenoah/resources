const resources = [
    // ── Awesome Lists (Claude Code) ──
    { category: "cc-awesome", title: "Awesome Claude Code", provider: "Community", desc: "The definitive curated collection (21k+ stars) of Claude Code skills, hooks, slash-commands, agents, plugins, MCP servers, CLI tools, and workflows.", type: "GitHub", url: "https://github.com/hesreallyhim/awesome-claude-code" },
    { category: "cc-awesome", title: "Awesome Claude Code (ZH)", provider: "LangGPT", desc: "Chinese-language curated list of Claude Code resources, projects, prompts, agents, and commands by the LangGPT organization.", type: "GitHub", url: "https://github.com/LangGPT/awesome-claude-code" },
    { category: "cc-awesome", title: "Awesome Claude Code Toolkit", provider: "Community", desc: "Massive collection featuring 135 agents, 35 skills, 42 commands, and 150+ plugins for Claude Code power users.", type: "GitHub", url: "https://github.com/rohitg00/awesome-claude-code-toolkit" },
    { category: "cc-awesome", title: "Awesome Claude Code (Tools & IDEs)", provider: "Community", desc: "Curated list focused on Claude Code tools, IDE integrations, frameworks, and developer productivity resources.", type: "GitHub", url: "https://github.com/jqueryscript/awesome-claude-code" },

    // ── Official Docs (Claude Code) ──
    { category: "cc-docs", title: "Claude Code Overview", provider: "Anthropic", desc: "Official documentation hub covering everything from quickstart to advanced features — the single source of truth for Claude Code.", type: "Docs", url: "https://code.claude.com/docs/en/overview" },
    { category: "cc-docs", title: "Claude Code Best Practices", provider: "Anthropic", desc: "Official best practices covering context management, CLAUDE.md setup, the Writer/Reviewer pattern, and multi-agent orchestration.", type: "Docs", url: "https://code.claude.com/docs/en/best-practices" },
    { category: "cc-docs", title: "CLAUDE.md & Memory System", provider: "Anthropic", desc: "How to control context with CLAUDE.md files — set coding standards, architecture decisions, preferred libraries, and workflow rules per project.", type: "Docs", url: "https://code.claude.com/docs/en/memory" },
    { category: "cc-docs", title: "CLI Reference", provider: "Anthropic", desc: "Complete official reference for the Claude Code command-line interface with all available commands, flags, and usage patterns.", type: "Docs", url: "https://code.claude.com/docs/en/cli-reference" },
    { category: "cc-docs", title: "Sub-agents Documentation", provider: "Anthropic", desc: "Official guide to Claude Code sub-agents — spawn specialized agents for parallel tasks, research, and complex multi-step workflows.", type: "Docs", url: "https://code.claude.com/docs/en/sub-agents" },

    // ── Tutorials & Courses (Claude Code) ──
    { category: "cc-learn", title: "Claude Code: Agentic Coding Assistant", provider: "DeepLearning.AI", desc: "Free course by Anthropic & Andrew Ng covering Git worktrees, sub-agent orchestration, GitHub issue automation, MCP servers, and production workflows.", type: "Course", url: "https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/lesson/66b35/introduction" },
    { category: "cc-learn", title: "Agent Skills with Anthropic", provider: "DeepLearning.AI", desc: "Learn to build custom skills for Claude Code — prompt engineering, real project setups, and agentic workflow design.", type: "Course", url: "https://learn.deeplearning.ai/courses/agent-skills-with-anthropic/lesson/cniu9b/skills-with-claude-code" },
    { category: "cc-learn", title: "Claude Code Quickstart", provider: "Anthropic", desc: "Official step-by-step getting started guide — install, configure, and run your first agentic coding session in minutes.", type: "Docs", url: "https://code.claude.com/docs/en/quickstart" },
    { category: "cc-learn", title: "Claude Code Guide (ZH)", provider: "Community", desc: "Comprehensive 100k+ word Chinese guide covering every Claude Code feature with detailed walkthroughs and examples.", type: "GitHub", url: "https://github.com/KimYx0207/Claude-Code-Guide-Zh" },

    // ── Patterns & Workflows (Claude Code) ──
    { category: "cc-patterns", title: "Claude Code Best Practices Repo", provider: "Community", desc: "Real-world prompt patterns, automation workflows, repo structure templates, and configuration examples for agentic coding.", type: "GitHub", url: "https://github.com/awattar/claude-code-best-practices" },
    { category: "cc-patterns", title: "Command-to-Agent-to-Skill Architecture", provider: "Community", desc: "Reference implementation for Claude Code configuration — skills, sub-agents, hooks, and commands following production-ready patterns.", type: "GitHub", url: "https://github.com/shanraisshan/claude-code-best-practice" },
    { category: "cc-patterns", title: "How Claude Code Works (Deep Dive)", provider: "Anthropic", desc: "Understand Claude Code as a full codebase agent — not autocomplete. Covers exploration, planning, multi-file edits, and agentic decision-making.", type: "Docs", url: "https://code.claude.com/docs/en/how-claude-code-works" },

    // ── MCP & Ecosystem (Claude Code) ──
    { category: "cc-ecosystem", title: "Official MCP Servers", provider: "Anthropic", desc: "Reference implementations of Model Context Protocol servers — the standard for connecting Claude Code to external tools and data sources.", type: "GitHub", url: "https://github.com/modelcontextprotocol/servers" },
    { category: "cc-ecosystem", title: "Claude Code GitHub Action", provider: "Anthropic", desc: "Official GitHub Action for CI/CD — Claude responds to @claude mentions, reviews PRs, fixes issues, and merges code autonomously.", type: "GitHub", url: "https://github.com/anthropics/claude-code-action" },
    { category: "cc-ecosystem", title: "GitHub MCP Server", provider: "GitHub", desc: "GitHub's official MCP server — gives Claude Code native access to repos, issues, PRs, and GitHub API directly.", type: "GitHub", url: "https://github.com/github/github-mcp-server" },
    { category: "cc-ecosystem", title: "Awesome MCP Servers", provider: "Community", desc: "Curated list of MCP servers — Playwright, Figma, databases, APIs, and more. Connect Claude Code to anything.", type: "GitHub", url: "https://github.com/wong2/awesome-mcp-servers" },
    { category: "cc-ecosystem", title: "Claude-Optimized MCP Servers", provider: "Community", desc: "MCP servers specifically optimized and tested for Claude Code — browser automation, design tools, data pipelines.", type: "GitHub", url: "https://github.com/win4r/Awesome-Claude-MCP-Servers" },
    { category: "cc-ecosystem", title: "MCP Integration Guide", provider: "Anthropic", desc: "Official guide to configuring and using MCP servers with Claude Code — setup, authentication, and real-world integration examples.", type: "Docs", url: "https://code.claude.com/docs/en/mcp" },

    // ── AI Agents ──
    { category: "ai-agents", title: "Agentic AI with Andrew Ng", provider: "DeepLearning.AI", desc: "Build agentic AI systems with iterative, multi-step workflows. Learn reflection, tool use, planning, and multi-agent patterns.", type: "Course", url: "https://www.deeplearning.ai/courses/agentic-ai" },
    { category: "ai-agents", title: "AI Agents for Beginners", provider: "Microsoft", desc: "Free comprehensive course with 12+ lessons covering AI agent fundamentals using AutoGen, Semantic Kernel, and Azure AI.", type: "Course", url: "https://microsoft.github.io/ai-agents-for-beginners/" },
    { category: "ai-agents", title: "Google AI Agents Intensive - Kaggle", provider: "Google / Kaggle", desc: "5-Day AI Agents Intensive Course covering hands-on training to build advanced AI agent systems.", type: "Video", url: "https://youtube.com/playlist?list=PLqFaTIg4myu9r7uRoNfbJhHUbLp-1t1YE" },
    { category: "ai-agents", title: "Hugging Face Agents Course", provider: "Hugging Face", desc: "Learn to build AI agents with Hugging Face tools covering transformers, agent frameworks, and practical implementations.", type: "Course", url: "https://huggingface.co/learn/agents-course/en/unit0/introduction" },
    { category: "ai-agents", title: "Agent Quality Whitepaper", provider: "Kaggle", desc: "In-depth research whitepaper on AI agent quality metrics and evaluation frameworks.", type: "Whitepaper", url: "https://www.kaggle.com/whitepaper-agent-quality" },
    { category: "ai-agents", title: "Prototype to Production", provider: "Kaggle", desc: "Comprehensive guide on moving AI agents from prototype to production covering deployment strategies and scaling.", type: "Whitepaper", url: "https://www.kaggle.com/whitepaper-prototype-to-production" },
    { category: "ai-agents", title: "Beyond Vibe Coding: 200 Autonomous Agents", provider: "AgentField", desc: "How AgentField orchestrates 200+ Claude Code agents on a shared codebase using two LLM primitives, nested failure loops, and checkpoint-based execution.", type: "Blog", url: "https://agentfield.ai/blog/beyond-vibe-coding" },
    { category: "ai-agents", title: "What Breaks When AI Makes a Trillion Decisions", provider: "AgentField", desc: "Why current infrastructure isn't ready for hundreds of billions of AI API calls daily — failure modes, latency, and reliability at scale.", type: "Blog", url: "https://agentfield.ai/blog/what-breaks-trillion-decisions" },
    { category: "ai-agents", title: "Where AI Fits in Software Architecture", provider: "AgentField", desc: "A practical framework for deciding where intelligence belongs architecturally in agent-style software systems.", type: "Blog", url: "https://agentfield.ai/blog/where-ai-fits-in-software" },
    { category: "ai-agents", title: "The AI Agent Accountability Gap", provider: "AgentField", desc: "Why AI backends need observability and accountability tooling we haven't built yet — tracing agent decisions in production.", type: "Blog", url: "https://agentfield.ai/blog/ai-agent-accountability-gap" },
    { category: "ai-agents", title: "The Microservices Moment for AI", provider: "AgentField", desc: "AI systems are hitting the monolith-to-microservices inflection — modular 'agent nodes' with a shared control plane for orchestration and memory.", type: "Blog", url: "https://agentfield.ai/blog/microservices-moment-for-ai" },
    { category: "ai-agents", title: "IAM for AI Backends", provider: "AgentField", desc: "How DIDs and Verifiable Credentials enable trust, identity, and access control for autonomous AI agents.", type: "Blog", url: "https://agentfield.ai/blog/iam-ai-backends" },
    { category: "ai-agents", title: "The AI Backend", provider: "AgentField", desc: "Introduces the concept of AI backends as dedicated reasoning layers for autonomous decision-making in production systems.", type: "Blog", url: "https://agentfield.ai/blog/ai-backend" },
    { category: "ai-agents", title: "AI Idea Guide for Learners", provider: "arunenoah", desc: "Curated guide of AI project ideas and learning paths to help beginners and intermediate learners build real-world AI applications.", type: "GitHub", url: "https://github.com/arunenoah/Guide" },

    // ── ML Foundations ──
    { category: "ml-foundations", title: "Stanford CS229: Machine Learning", provider: "Stanford University", desc: "Graduate-level course by Andrew Ng covering supervised learning, unsupervised learning, neural networks, SVMs, and reinforcement learning.", type: "Course", url: "https://see.stanford.edu/course/cs229" },
    { category: "ml-foundations", title: "Stanford CS224N: NLP with Deep Learning", provider: "Stanford University", desc: "NLP course by Chris Manning covering word embeddings, RNNs, transformers, and LLMs.", type: "Video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D" },
    { category: "ml-foundations", title: "Supervised Learning with scikit-learn", provider: "DataCamp", desc: "4-hour intermediate course covering classification, regression, model evaluation, and hyperparameter tuning.", type: "Course", url: "https://www.datacamp.com/courses/supervised-learning-with-scikit-learn" },

    // ── Deep Learning ──
    { category: "deep-learning", title: "MIT 6.S191: Intro to Deep Learning", provider: "MIT", desc: "MIT's introductory deep learning program covering neural networks, CNNs, RNNs, transformers, and generative AI.", type: "Course", url: "https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI" },
    { category: "deep-learning", title: "Deep Learning in Python Track", provider: "DataCamp", desc: "Comprehensive 4-course track using PyTorch building models for image classification and text processing.", type: "Course", url: "https://www.datacamp.com/tracks/deep-learning-in-python" },
    { category: "deep-learning", title: "MIT Hands-on Deep Learning 2024", provider: "MIT OpenCourseWare", desc: "Hands-on deep learning course covering practical techniques with real-world applications.", type: "Course", url: "https://ocw.mit.edu/courses/15-773-hands-on-deep-learning-spring-2024/video_galleries/lecture-videos/" },

    // ── Large Language Models ──
    { category: "llm", title: "Developing Large Language Models", provider: "DataCamp", desc: "16-hour track covering LLM concepts, transformer architecture, Hugging Face, and building LLM applications with LangChain.", type: "Course", url: "https://www.datacamp.com/tracks/developing-large-language-models" },
    { category: "llm", title: "Stanford CS229 YouTube Lectures", provider: "Stanford University", desc: "Complete video lecture series from Stanford's CS229 Machine Learning course (Autumn 2018) by Andrew Ng.", type: "Video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" },

    // ── Reinforcement Learning ──
    { category: "rl", title: "Reinforcement Learning in Python", provider: "DataCamp", desc: "12-hour track covering RL fundamentals, Deep Q-Networks, Policy Gradient methods, and RLHF.", type: "Course", url: "https://www.datacamp.com/tracks/reinforcement-learning" },

    // ── MLOps ──
    { category: "mlops", title: "MLOps Concepts", provider: "DataCamp", desc: "2-hour course on deploying ML models to production covering feature stores and CI/CD pipelines.", type: "Course", url: "https://www.datacamp.com/courses/mlops-concepts" },

    // ── Google AI & Cloud ──
    { category: "google-ai", title: "Google AI Essentials", provider: "Google", desc: "Under 5 hours to learn AI fundamentals, prompt engineering, and responsible AI usage with Google certificate.", type: "Course", url: "https://grow.google/ai-essentials/" },
    { category: "google-ai", title: "Introduction to Vertex AI Studio", provider: "Google Cloud", desc: "Free 1.5-hour course on Gemini multimodal applications, prompt design, and model tuning.", type: "Course", url: "https://www.skills.google/course_templates/552" },
    { category: "google-ai", title: "Build AI Apps with Gemini & Imagen", provider: "Google Cloud", desc: "Free 1.25-hour skill badge course covering image recognition, NLP, and image generation using Google tools.", type: "Course", url: "https://www.skills.google/course_templates/1076" },

    // ── CS Fundamentals ──
    { category: "cs-fundamentals", title: "CS50 - Harvard", provider: "Harvard University", desc: "Harvard's legendary introduction to computer science with lectures, problem sets, and certificates.", type: "Course", url: "https://cs50.harvard.edu/" },
    { category: "cs-fundamentals", title: "CS50's CS for Business Professionals", provider: "Harvard / edX", desc: "Harvard's CS50 variant for business professionals covering computational thinking and cloud computing.", type: "Course", url: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-computer-science-for-business-professionals" },
    { category: "cs-fundamentals", title: "Transformer Architecture Deep Dive", provider: "Stanford University", desc: "Advanced Stanford lecture on transformer-based models covering attention approximation and architectural modifications.", type: "Video", url: "https://www.youtube.com/watch?v=yT84Y5zCnaA" },

    // ── Career ──
    { category: "career", title: "Career Advice in AI", provider: "Various", desc: "Expert guidance on building and advancing your career in artificial intelligence covering paths and industry trends.", type: "Video", url: "https://www.youtube.com/watch?v=AuZoDsNmG_s" },

    // ── Free Online Textbooks ──
    { category: "free-textbooks", title: "Understanding Machine Learning", provider: "", desc: "Comprehensive textbook covering theoretical foundations of machine learning with mathematical rigor.", type: "Book", url: "https://cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf" },
    { category: "free-textbooks", title: "Mathematics for Machine Learning", provider: "", desc: "Covers essential mathematical foundations including linear algebra, analytic geometry, and optimization.", type: "Book", url: "https://mml-book.github.io/book/mml-book.pdf" },
    { category: "free-textbooks", title: "Mathematical Analysis of ML", provider: "", desc: "Deep dive into mathematical analysis powering ML algorithms covering convergence proofs and generalization bounds.", type: "Book", url: "https://tongzhang-ml.org/lt-book/lt-book.pdf" },
    { category: "free-textbooks", title: "Deep Learning Principles", provider: "", desc: "Structured approach to understanding deep learning from fundamental principles covering architectures and training.", type: "Book", url: "https://arxiv.org/pdf/2106.10165" },
    { category: "free-textbooks", title: "ML with Networks", provider: "", desc: "Covers neural network fundamentals, learning algorithms, and architectures explaining how networks learn.", type: "Book", url: "https://arxiv.org/pdf/1901.05639" },
    { category: "free-textbooks", title: "Deep Learning on Graphs", provider: "", desc: "Explores deep learning on graph-structured data covering GNNs, message passing, and graph transformers.", type: "Book", url: "https://yaoma24.github.io/dlg_book/dlg_book.pdf" },
    { category: "free-textbooks", title: "Algorithmic Machine Learning", provider: "", desc: "Covers algorithmic foundations of ML including computational complexity and optimization methods.", type: "Book", url: "https://people.csail.mit.edu/moitra/docs/bookexv2.pdf" },
    { category: "free-textbooks", title: "Probability Theory", provider: "", desc: "Build understanding of probability theory essential for ML from distributions to Bayesian inference.", type: "Book", url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf" },
    { category: "free-textbooks", title: "Elementary Probability", provider: "", desc: "Accessible introduction to probability concepts with practical examples for those starting ML journey.", type: "Book", url: "https://sites.math.duke.edu/~rtd/EP4A/EP4A_April2021.pdf" },
    { category: "free-textbooks", title: "Advanced Data Analysis", provider: "", desc: "Statistical learning methods for production systems covering regression, classification, and model selection.", type: "Book", url: "https://stat.cmu.edu/~cshalizi/ADAfaEPoV/ADAfaEPoV.pdf" },
    { category: "free-textbooks", title: "ML Interview Preparation", provider: "", desc: "Comprehensive resource for preparing for machine learning interviews covering key concepts and practical tips.", type: "Video", url: "https://www.youtube.com/playlist?list=PLgPbN3w-ia_PeT1_c5jiLW3RJdR7853b9" },

    // ── MIT Free Books ──
    { category: "mit-books", title: "Foundations of Machine Learning", provider: "Mohri, Rostamizadeh, Talwalkar", desc: "Rigorous mathematical treatment of ML foundations covering PAC learning and kernel methods.", type: "Book", url: "https://cs.nyu.edu/~mohri/mlbook/" },
    { category: "mit-books", title: "Understanding Deep Learning", provider: "", desc: "Modern comprehensive textbook covering neural networks, CNNs, transformers, GANs, and diffusion models.", type: "Book", url: "https://udlbook.github.io/udlbook/" },
    { category: "mit-books", title: "Algorithms for Machine Learning", provider: "", desc: "Covers decision making under uncertainty exploring optimization and probabilistic reasoning.", type: "Book", url: "https://algorithmsbook.com" },
    { category: "mit-books", title: "Reinforcement Learning: An Introduction", provider: "Sutton & Barto", desc: "Definitive textbook on reinforcement learning covering MDPs and deep RL.", type: "Book", url: "https://andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf" },
    { category: "mit-books", title: "Intro to Machine Learning Systems", provider: "", desc: "Comprehensive guide to building production ML systems covering data pipelines and model serving.", type: "Book", url: "https://mlsysbook.ai/book/assets/downloads/Machine-Learning-Systems.pdf" },
    { category: "mit-books", title: "Deep Learning", provider: "Goodfellow, Bengio, Courville", desc: "Classic deep learning textbook covering neural networks, CNNs, RNNs, and generative models.", type: "Book", url: "http://deeplearningbook.org" },
    { category: "mit-books", title: "Distributional Reinforcement Learning", provider: "MIT Press", desc: "Open access book exploring distributional perspective where agents learn full return distribution.", type: "Book", url: "https://direct.mit.edu/books/oa-monograph-pdf/2111075/book_9780262374026.pdf" },
    { category: "mit-books", title: "Multi-Agent Reinforcement Learning", provider: "", desc: "Comprehensive resource on MARL covering cooperative and competitive multi-agent environments.", type: "Book", url: "https://marl-book.com" },
    { category: "mit-books", title: "Agents in the Long Game of AI", provider: "MIT Press", desc: "Open access book exploring role of AI agents in long-term AI development.", type: "Book", url: "https://direct.mit.edu/books/oa-monograph-pdf/2471103/book_9780262380355.pdf" },
    { category: "mit-books", title: "Fairness and Machine Learning", provider: "", desc: "Explores limitations and opportunities in fairness-aware ML covering bias detection and algorithmic fairness.", type: "Book", url: "https://fairmlbook.org" },

    // ── YouTube Channels ──
    { category: "youtube", title: "Andrej Karpathy", provider: "", desc: "Former Tesla AI Director sharing deep dives into neural networks, GPT internals, and building AI from scratch.", type: "Channel", url: "https://www.youtube.com/@AndrejKarpathy" },
    { category: "youtube", title: "StatQuest with Josh Starmer", provider: "", desc: "Statistics and machine learning concepts explained clearly with illustrations covering basics to neural networks.", type: "Channel", url: "https://www.youtube.com/@statquest" },
    { category: "youtube", title: "3Blue1Brown", provider: "", desc: "Visual explanations of mathematics, linear algebra, calculus, and neural networks with beautiful animations.", type: "Channel", url: "https://www.youtube.com/@3blue1brown" },
    { category: "youtube", title: "Sebastian Raschka", provider: "", desc: "AI researcher sharing tutorials on deep learning, LLMs, research paper walkthroughs, and ML engineering.", type: "Channel", url: "https://www.youtube.com/@SebastianRaschka" },

    // ── Recommended Books ──
    { category: "books", title: "Hands-On ML with Scikit-Learn, Keras & TensorFlow", provider: "Aur\u00e9lien G\u00e9ron", desc: "Go-to practical guide for ML engineers covering end-to-end projects with scikit-learn, Keras, TensorFlow.", type: "Book", url: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1098125975" },
    { category: "books", title: "An Introduction to Statistical Learning", provider: "James, Witten, Hastie, Tibshirani", desc: "Widely used textbook for statistical learning methods including regression, classification, and SVMs.", type: "Book", url: "https://www.statlearning.com/" },
    { category: "books", title: "The Hundred-Page Machine Learning Book", provider: "Andriy Burkov", desc: "Concise yet comprehensive overview of machine learning perfect for quick reference and exam preparation.", type: "Book", url: "https://themlbook.com/" },
    { category: "books", title: "Machine Learning Yearning", provider: "Andrew Ng", desc: "Practical guide focused on structuring ML projects, diagnosing errors, and strategic decision-making.", type: "Book", url: "https://info.deeplearning.ai/machine-learning-yearning-book" },
    { category: "books", title: "Pattern Recognition and Machine Learning", provider: "Christopher M. Bishop", desc: "Comprehensive textbook covering probability distributions, linear models, kernel methods, and graphical models.", type: "Book", url: "https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/" },
];

const categoryMeta = {
    "all":              { icon: "\u2630", label: "All Topics",               desc: "Browse 75+ curated free resources for AI, ML, Claude Code & Programming" },
    "cc-awesome":       { icon: "\u2B50", label: "Awesome Lists",            desc: "Community-curated collections of Claude Code tools, plugins, agents & workflows" },
    "cc-docs":          { icon: "\uD83D\uDCCB", label: "Official Documentation",   desc: "Anthropic's official Claude Code docs — best practices, CLAUDE.md, CLI, sub-agents" },
    "cc-learn":         { icon: "\uD83C\uDFAF", label: "Tutorials & Courses",      desc: "Step-by-step courses and guides from beginner to advanced agentic workflows" },
    "cc-patterns":      { icon: "\uD83D\uDEE0", label: "Patterns & Workflows",     desc: "Real-world prompt patterns, repo structures, and automation configurations" },
    "cc-ecosystem":     { icon: "\uD83D\uDE80", label: "MCP & Ecosystem",          desc: "MCP servers, GitHub Actions, integrations — connect Claude Code to everything" },
    "ai-agents":        { icon: "\uD83E\uDD16", label: "AI Agents",                desc: "Courses and whitepapers on building agentic AI systems" },
    "ml-foundations":   { icon: "\uD83E\uDDE0", label: "ML Foundations",            desc: "Core machine learning courses from top universities" },
    "deep-learning":    { icon: "\uD83D\uDCC8", label: "Deep Learning",            desc: "Neural networks, CNNs, RNNs, transformers and more" },
    "llm":              { icon: "\uD83D\uDCAC", label: "Large Language Models",    desc: "Understanding and building with LLMs" },
    "rl":               { icon: "\uD83C\uDFAE", label: "Reinforcement Learning",   desc: "RL fundamentals, DQN, policy gradients & RLHF" },
    "mlops":            { icon: "\u2699",  label: "MLOps & Production",       desc: "Deploying and maintaining ML systems in production" },
    "google-ai":        { icon: "\u2601",  label: "Google AI & Cloud",        desc: "Google's AI courses and cloud certifications" },
    "cs-fundamentals":  { icon: "\uD83D\uDCBB", label: "CS Fundamentals",          desc: "Core computer science courses and concepts" },
    "career":           { icon: "\uD83D\uDCBC", label: "Career & Development",     desc: "Guidance for building a career in AI" },
    "free-textbooks":   { icon: "\uD83D\uDCDA", label: "Free Online Textbooks",    desc: "Downloadable textbooks covering ML, math & probability" },
    "mit-books":        { icon: "\uD83C\uDF93", label: "MIT Free Books",           desc: "Open access books from MIT Press and top researchers" },
    "youtube":          { icon: "\u25B6",  label: "YouTube Channels",         desc: "Top YouTube channels for learning AI & ML" },
    "books":            { icon: "\uD83D\uDCD6", label: "Recommended Books",        desc: "Must-read books for ML practitioners" },
};
