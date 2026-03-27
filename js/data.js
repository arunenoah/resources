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
    { category: "cc-ecosystem", title: "Crusoe Cloud MCP Server", provider: "Crusoe AI", desc: "MCP server for Crusoe Cloud — manage GPU instances, inference endpoints, and AI infrastructure directly from Claude Code.", type: "Blog", url: "https://www.crusoe.ai/resources/blog/introducing-the-crusoe-cloud-mcp-server" },
    { category: "cc-ecosystem", title: "Anthropic Skills Library", provider: "Anthropic", desc: "Official Anthropic-curated Claude Code skills — production-ready, reusable skill definitions you can drop directly into your project. Save hours over writing skills from scratch.", type: "GitHub", url: "https://github.com/anthropics/skills" },
    { category: "cc-ecosystem", title: "Claude Code (Official Repo)", provider: "Anthropic", desc: "The official open-source repository for Claude Code — track releases, report issues, read the changelog, and contribute. Essential if you want to stay current with new features.", type: "GitHub", url: "https://github.com/anthropics/claude-code" },
    { category: "cc-ecosystem", title: "Superpowers for Claude", provider: "obra", desc: "A battle-tested set of command-line extensions that push Claude Code further — custom tools and utilities built by a veteran developer to handle real production workflows.", type: "GitHub", url: "https://github.com/obra/superpowers" },
    { category: "cc-ecosystem", title: "claude-mem", provider: "thedotmack", desc: "Persistent memory layer for Claude Code — store context across sessions so Claude remembers your project decisions, preferences, and past work without repeating yourself every time.", type: "GitHub", url: "https://github.com/thedotmack/claude-mem" },
    { category: "cc-ecosystem", title: "UI/UX Pro Max Skill", provider: "nextlevelbuilder", desc: "Advanced Claude Code skill for UI/UX work — design-aware prompting patterns and commands that help Claude produce professional-grade interfaces rather than generic scaffolding.", type: "GitHub", url: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" },
    { category: "cc-ecosystem", title: "Open Claude Cowork", provider: "Composio", desc: "Multi-agent collaborative workspace powered by Claude — run coordinated Claude instances in a shared environment to tackle complex, parallelizable tasks that exceed a single context window.", type: "GitHub", url: "https://github.com/composiohq/open-claude-cowork" },

    // ── Prompt Engineering ──
    { category: "prompt-eng", title: "Prompt Engineering Interactive Tutorial", provider: "Anthropic", desc: "Hands-on, browser-based tutorial from Anthropic covering prompt structure, chain-of-thought, few-shot examples, and advanced techniques — the best place to start if you want to write effective prompts.", type: "GitHub", url: "https://github.com/anthropics/prompt-eng-interactive-tutorial" },
    { category: "prompt-eng", title: "Anthropic Courses", provider: "Anthropic", desc: "Official educational courses from Anthropic covering Claude API usage, prompt engineering, tool use, and building real applications — taught directly by the team that built Claude.", type: "GitHub", url: "https://github.com/anthropics/courses" },
    { category: "prompt-eng", title: "Claude Cookbooks", provider: "Anthropic", desc: "Ready-to-run Jupyter notebooks demonstrating real-world patterns — tool use, RAG pipelines, multi-modal tasks, and agentic workflows using Claude's API. A practical companion to the official docs.", type: "GitHub", url: "https://github.com/anthropics/claude-cookbooks" },

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
    { category: "ai-agents", title: "LangGraph", provider: "LangChain", desc: "Stateful, controllable agent orchestration — build agents with cycles, persistence, and human-in-the-loop workflows.", type: "GitHub", url: "https://github.com/langchain-ai/langgraph" },
    { category: "ai-agents", title: "CrewAI", provider: "CrewAI", desc: "Role-based multi-agent framework — define agents with roles, goals, and tools that collaborate on complex tasks.", type: "GitHub", url: "https://github.com/crewAIInc/crewAI" },
    { category: "ai-agents", title: "AutoGen", provider: "Microsoft", desc: "Flexible multi-agent conversation platform — agents chat, plan, and execute code together to solve problems.", type: "GitHub", url: "https://github.com/microsoft/autogen" },
    { category: "ai-agents", title: "DSPy", provider: "Stanford NLP", desc: "Programming framework for LLM pipelines — replace prompt engineering with modular, optimizable programs.", type: "GitHub", url: "https://github.com/stanfordnlp/dspy" },
    { category: "ai-agents", title: "MetaGPT", provider: "Community", desc: "Simulates an AI software company — multi-agent system where agents take roles like PM, architect, and engineer.", type: "GitHub", url: "https://github.com/FoundationAgents/MetaGPT" },
    { category: "ai-agents", title: "Openwork", provider: "different-ai", desc: "Open-source autonomous work agent — delegate entire workflows to AI that plans, researches, and executes multi-step tasks end to end without hand-holding.", type: "GitHub", url: "https://github.com/different-ai/openwork" },
    { category: "ai-agents", title: "Agent Bank", provider: "different-ai", desc: "Library of pre-built, reusable AI agents for common tasks — drop-in agents for research, writing, data analysis, and code review so you don't build from scratch every time.", type: "GitHub", url: "https://github.com/different-ai/agent-bank" },
    { category: "ai-agents", title: "Awesome LLM Apps", provider: "Shubhamsaboo", desc: "Curated collection of real, runnable LLM-powered applications with full source code — see how others built agents, RAG systems, and AI products and adapt their patterns for your own.", type: "GitHub", url: "https://github.com/Shubhamsaboo/awesome-llm-apps" },

    // ── ML Foundations ──
    { category: "ml-foundations", title: "Stanford CS229: Machine Learning", provider: "Stanford University", desc: "Graduate-level course by Andrew Ng covering supervised learning, unsupervised learning, neural networks, SVMs, and reinforcement learning.", type: "Course", url: "https://see.stanford.edu/course/cs229" },
    { category: "ml-foundations", title: "Stanford CS224N: NLP with Deep Learning", provider: "Stanford University", desc: "NLP course by Chris Manning covering word embeddings, RNNs, transformers, and LLMs.", type: "Video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D" },
    { category: "ml-foundations", title: "Supervised Learning with scikit-learn", provider: "DataCamp", desc: "4-hour intermediate course covering classification, regression, model evaluation, and hyperparameter tuning.", type: "Course", url: "https://www.datacamp.com/courses/supervised-learning-with-scikit-learn" },

    // ── Deep Learning ──
    { category: "deep-learning", title: "MIT 6.S191: Intro to Deep Learning", provider: "MIT", desc: "MIT's introductory deep learning program covering neural networks, CNNs, RNNs, transformers, and generative AI.", type: "Course", url: "https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI" },
    { category: "deep-learning", title: "Deep Learning in Python Track", provider: "DataCamp", desc: "Comprehensive 4-course track using PyTorch building models for image classification and text processing.", type: "Course", url: "https://www.datacamp.com/tracks/deep-learning-in-python" },
    { category: "deep-learning", title: "MIT Hands-on Deep Learning 2024", provider: "MIT OpenCourseWare", desc: "Hands-on deep learning course covering practical techniques with real-world applications.", type: "Course", url: "https://ocw.mit.edu/courses/15-773-hands-on-deep-learning-spring-2024/video_galleries/lecture-videos/" },
    { category: "deep-learning", title: "Fast.ai Practical Deep Learning", provider: "fast.ai", desc: "Legendary free course teaching deep learning top-down — build real models from day one, then understand the theory.", type: "Course", url: "https://github.com/fastai/fastai" },

    // ── Large Language Models ──
    { category: "llm", title: "Developing Large Language Models", provider: "DataCamp", desc: "16-hour track covering LLM concepts, transformer architecture, Hugging Face, and building LLM applications with LangChain.", type: "Course", url: "https://www.datacamp.com/tracks/developing-large-language-models" },
    { category: "llm", title: "Stanford CS229 YouTube Lectures", provider: "Stanford University", desc: "Complete video lecture series from Stanford's CS229 Machine Learning course (Autumn 2018) by Andrew Ng.", type: "Video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" },

    // ── Reinforcement Learning ──
    { category: "rl", title: "Reinforcement Learning in Python", provider: "DataCamp", desc: "12-hour track covering RL fundamentals, Deep Q-Networks, Policy Gradient methods, and RLHF.", type: "Course", url: "https://www.datacamp.com/tracks/reinforcement-learning" },

    // ── MLOps ──
    { category: "mlops", title: "MLOps Concepts", provider: "DataCamp", desc: "2-hour course on deploying ML models to production covering feature stores and CI/CD pipelines.", type: "Course", url: "https://www.datacamp.com/courses/mlops-concepts" },
    { category: "mlops", title: "Self-Healing Distributed PyTorch Training", provider: "Crusoe AI", desc: "How to build resilient distributed PyTorch training with Slurm on Kubernetes — automatic fault recovery and checkpoint resumption at scale.", type: "Blog", url: "https://www.crusoe.ai/resources/blog/self-healing-distributed-pytorch-training-with-slurm-on-crusoe-managed-kubernetes" },
    { category: "mlops", title: "Reducing TTFT by CPUMaxxing Tokenization", provider: "Crusoe AI", desc: "Inference performance optimization — techniques to reduce time-to-first-token by moving tokenization bottlenecks to CPU for faster LLM serving.", type: "Blog", url: "https://www.crusoe.ai/resources/blog/reducing-ttft-by-cpumaxxing-tokenization" },
    { category: "mlops", title: "Benchmarking Llama 3.1 Fine-Tuning on GB200 NVL72", provider: "Crusoe AI", desc: "Up to 3x faster fine-tuning — detailed performance benchmarks for Llama 3.1 on NVIDIA GB200 NVL72 hardware.", type: "Blog", url: "https://www.crusoe.ai/resources/blog/benchmarking-llama-3-1-fine-tuning-on-crusoe-cloud-with-nvidia-gb200-nvl72" },
    { category: "mlops", title: "MemoryAlloy: KV Caching for Cluster-Scale Inference", provider: "Crusoe AI", desc: "Reinventing KV caching for distributed inference — how to manage memory efficiently when serving LLMs across GPU clusters.", type: "Blog", url: "https://www.crusoe.ai/resources/blog/crusoe-memoryalloy-technology-kv-caching" },
    { category: "mlops", title: "GPU Cluster Orchestration with dstack", provider: "Crusoe AI", desc: "Practical guide to orchestrating GPU clusters using dstack — provisioning, scheduling, and managing distributed AI training jobs.", type: "Blog", url: "https://www.crusoe.ai/resources/blog/gpu-cluster-orchestration-on-crusoe-with-dstack" },
    { category: "mlops", title: "MLflow", provider: "Databricks", desc: "End-to-end ML lifecycle platform — experiment tracking, model registry, deployment, and reproducibility in one tool.", type: "GitHub", url: "https://github.com/mlflow/mlflow" },
    { category: "mlops", title: "Langfuse", provider: "Langfuse", desc: "Open-source LLM observability — trace, evaluate, and debug LLM applications in production with detailed analytics.", type: "GitHub", url: "https://github.com/langfuse/langfuse" },
    { category: "mlops", title: "BentoML", provider: "BentoML", desc: "Build and ship AI applications fast — package models as production-ready APIs with built-in serving and scaling.", type: "GitHub", url: "https://github.com/bentoml/BentoML" },
    { category: "mlops", title: "Promptfoo", provider: "Community", desc: "Systematic LLM testing and red-teaming — evaluate prompts, compare models, and catch regressions with CI-friendly tests.", type: "GitHub", url: "https://github.com/promptfoo/promptfoo" },

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
    { category: "mit-books", title: "Machine Learning Systems (CS249r)", provider: "Harvard Edge", desc: "Open-access book on TinyML and efficient deep learning from Harvard — covers deploying ML on edge devices and resource-constrained hardware. Essential if you care about running AI beyond the cloud.", type: "GitHub", url: "https://github.com/harvard-edge/cs249r_book" },

    // ── YouTube Channels ──
    { category: "youtube", title: "Andrej Karpathy", provider: "", desc: "Former Tesla AI Director sharing deep dives into neural networks, GPT internals, and building AI from scratch.", type: "Channel", url: "https://www.youtube.com/@AndrejKarpathy" },
    { category: "youtube", title: "StatQuest with Josh Starmer", provider: "", desc: "Statistics and machine learning concepts explained clearly with illustrations covering basics to neural networks.", type: "Channel", url: "https://www.youtube.com/@statquest" },
    { category: "youtube", title: "3Blue1Brown", provider: "", desc: "Visual explanations of mathematics, linear algebra, calculus, and neural networks with beautiful animations.", type: "Channel", url: "https://www.youtube.com/@3blue1brown" },
    { category: "youtube", title: "Sebastian Raschka", provider: "", desc: "AI researcher sharing tutorials on deep learning, LLMs, research paper walkthroughs, and ML engineering.", type: "Channel", url: "https://www.youtube.com/@SebastianRaschka" },

    // ── AI Frameworks & Libraries ──
    { category: "ai-frameworks", title: "PyTorch", provider: "Meta", desc: "Dominant deep learning framework with dynamic computation graphs, Pythonic API, and first-class GPU support — the standard for research and production.", type: "GitHub", url: "https://github.com/pytorch/pytorch" },
    { category: "ai-frameworks", title: "Hugging Face Transformers", provider: "Hugging Face", desc: "De facto standard library for pretrained models — 1M+ models available for NLP, vision, audio, and multimodal tasks.", type: "GitHub", url: "https://github.com/huggingface/transformers" },
    { category: "ai-frameworks", title: "scikit-learn", provider: "Community", desc: "Industry-standard library for classical ML — classification, regression, clustering, and model evaluation in Python.", type: "GitHub", url: "https://github.com/scikit-learn/scikit-learn" },
    { category: "ai-frameworks", title: "JAX", provider: "Google", desc: "High-performance numerical computing with composable transformations — JIT compilation, auto-differentiation, and vectorization.", type: "GitHub", url: "https://github.com/jax-ml/jax" },
    { category: "ai-frameworks", title: "Keras", provider: "Google", desc: "High-level deep learning API running on TensorFlow, JAX, and PyTorch — fastest path from idea to working model.", type: "GitHub", url: "https://github.com/keras-team/keras" },
    { category: "ai-frameworks", title: "XGBoost", provider: "DMLC", desc: "Scalable gradient boosting library that still dominates Kaggle — the go-to for structured/tabular data.", type: "GitHub", url: "https://github.com/dmlc/xgboost" },
    { category: "ai-frameworks", title: "Polars", provider: "Community", desc: "Blazing-fast DataFrame library with Rust backend — modern alternative to pandas for large-scale data processing.", type: "GitHub", url: "https://github.com/pola-rs/polars" },

    // ── Inference & Local AI ──
    { category: "inference-tools", title: "Ollama", provider: "Ollama", desc: "Run LLMs locally with a single command — simple registry, OpenAI-compatible API, and easy model management.", type: "GitHub", url: "https://github.com/ollama/ollama" },
    { category: "inference-tools", title: "vLLM", provider: "vLLM Project", desc: "State-of-the-art LLM serving engine with PagedAttention — high throughput and low latency for production deployments.", type: "GitHub", url: "https://github.com/vllm-project/vllm" },
    { category: "inference-tools", title: "llama.cpp", provider: "Georgi Gerganov", desc: "Pure C/C++ LLM inference with GGUF quantization — run models on CPU, GPU, or edge devices without Python.", type: "GitHub", url: "https://github.com/ggerganov/llama.cpp" },
    { category: "inference-tools", title: "MLX", provider: "Apple", desc: "ML framework optimized for Apple Silicon — run and fine-tune models natively on Mac with unified memory.", type: "GitHub", url: "https://github.com/ml-explore/mlx" },
    { category: "inference-tools", title: "TensorRT-LLM", provider: "NVIDIA", desc: "NVIDIA's high-performance inference backend — maximum throughput for production LLM serving on NVIDIA GPUs.", type: "GitHub", url: "https://github.com/NVIDIA/TensorRT-LLM" },
    { category: "inference-tools", title: "SGLang", provider: "SGLang Project", desc: "Next-gen serving framework with RadixAttention — structured generation and fast inference for complex LLM workloads.", type: "GitHub", url: "https://github.com/sgl-project/sglang" },
    { category: "inference-tools", title: "Free LLM API Resources", provider: "cheahjs", desc: "Comprehensive, up-to-date list of free-tier LLM APIs across providers — find free access to GPT, Claude, Gemini, Llama, and more so you can prototype and build without upfront API costs.", type: "GitHub", url: "https://github.com/cheahjs/free-llm-api-resources" },

    // ── Fine-Tuning & Training ──
    { category: "fine-tuning", title: "Unsloth", provider: "Unsloth AI", desc: "2x faster fine-tuning with 70% less memory — the easiest way to fine-tune Llama, Mistral, and other open models.", type: "GitHub", url: "https://github.com/unslothai/unsloth" },
    { category: "fine-tuning", title: "LLaMA-Factory", provider: "Community", desc: "Unified fine-tuning framework supporting SFT, DPO, ORPO, and RLHF with a web UI — supports 100+ models.", type: "GitHub", url: "https://github.com/hiyouga/LLaMA-Factory" },
    { category: "fine-tuning", title: "Axolotl", provider: "Community", desc: "YAML-driven training pipeline — configure and launch fine-tuning jobs for any model with minimal code.", type: "GitHub", url: "https://github.com/axolotl-ai-cloud/axolotl" },
    { category: "fine-tuning", title: "PEFT", provider: "Hugging Face", desc: "Parameter-efficient fine-tuning library — LoRA, QLoRA, prefix tuning, and adapters for training large models on consumer GPUs.", type: "GitHub", url: "https://github.com/huggingface/peft" },
    { category: "fine-tuning", title: "TRL", provider: "Hugging Face", desc: "Full-stack RLHF, SFT, DPO, and reward modeling library — train and align language models with human preferences.", type: "GitHub", url: "https://github.com/huggingface/trl" },
    { category: "fine-tuning", title: "DeepSpeed", provider: "Microsoft", desc: "Extreme-scale training optimization with ZeRO, MoE, and pipeline parallelism — train 100B+ parameter models efficiently.", type: "GitHub", url: "https://github.com/microsoft/DeepSpeed" },

    // ── RAG & Vector Search ──
    { category: "rag", title: "LlamaIndex", provider: "LlamaIndex", desc: "Full-featured RAG framework with advanced indexing, retrieval strategies, and agent tools for building knowledge-grounded AI apps.", type: "GitHub", url: "https://github.com/run-llama/llama_index" },
    { category: "rag", title: "LangChain", provider: "LangChain", desc: "Foundational library for building LLM-powered apps — chains, agents, retrieval, and tool integrations in one framework.", type: "GitHub", url: "https://github.com/langchain-ai/langchain" },
    { category: "rag", title: "Chroma", provider: "Chroma", desc: "Most popular open-source embedding database — simple API for storing, searching, and retrieving vector embeddings.", type: "GitHub", url: "https://github.com/chroma-core/chroma" },
    { category: "rag", title: "Qdrant", provider: "Qdrant", desc: "High-performance vector search engine built in Rust — production-ready with filtering, payloads, and distributed mode.", type: "GitHub", url: "https://github.com/qdrant/qdrant" },
    { category: "rag", title: "GraphRAG", provider: "Microsoft", desc: "Knowledge-graph-based retrieval — builds entity graphs from documents for more structured, context-rich AI answers.", type: "GitHub", url: "https://github.com/microsoft/graphrag" },
    { category: "rag", title: "Haystack", provider: "deepset", desc: "End-to-end NLP and RAG framework — build production search and question-answering pipelines with composable components.", type: "GitHub", url: "https://github.com/deepset-ai/haystack" },

    // ── AI Coding Assistants ──
    { category: "ai-coding", title: "Continue", provider: "Continue", desc: "Open-source coding autopilot for VS Code and JetBrains — autocomplete, chat, and edit with any LLM, local or cloud.", type: "GitHub", url: "https://github.com/continuedev/continue" },
    { category: "ai-coding", title: "Aider", provider: "Paul Gauthier", desc: "Terminal-based AI pair programmer — edit files, run commands, and commit changes with natural language from the command line.", type: "GitHub", url: "https://github.com/paul-gauthier/aider" },
    { category: "ai-coding", title: "OpenHands", provider: "All Hands AI", desc: "Full-featured AI software engineer — autonomously browses, writes code, runs tests, and submits PRs.", type: "GitHub", url: "https://github.com/All-Hands-AI/OpenHands" },
    { category: "ai-coding", title: "Tabby", provider: "TabbyML", desc: "Self-hosted AI coding assistant — run your own Copilot alternative with full control over models and data privacy.", type: "GitHub", url: "https://github.com/TabbyML/tabby" },
    { category: "ai-coding", title: "Cline", provider: "Cline", desc: "Autonomous coding agent that lives in your IDE — plans, writes, debugs, and tests code with human-in-the-loop approval.", type: "GitHub", url: "https://github.com/cline/cline" },
    { category: "ai-coding", title: "Opencode", provider: "different-ai", desc: "Open-source AI coding assistant for the terminal — a privacy-first, model-flexible alternative to proprietary tools with full local-first design and no vendor lock-in.", type: "GitHub", url: "https://github.com/different-ai/opencode" },
    { category: "ai-coding", title: "Opencode Browser", provider: "different-ai", desc: "Browser extension companion to Opencode — brings AI coding assistance into web-based workflows, documentation reading, and online development environments.", type: "GitHub", url: "https://github.com/different-ai/opencode-browser" },

    // ── Recommended Books ──
    { category: "books", title: "Hands-On ML with Scikit-Learn, Keras & TensorFlow", provider: "Aur\u00e9lien G\u00e9ron", desc: "Go-to practical guide for ML engineers covering end-to-end projects with scikit-learn, Keras, TensorFlow.", type: "Book", url: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1098125975" },
    { category: "books", title: "An Introduction to Statistical Learning", provider: "James, Witten, Hastie, Tibshirani", desc: "Widely used textbook for statistical learning methods including regression, classification, and SVMs.", type: "Book", url: "https://www.statlearning.com/" },
    { category: "books", title: "The Hundred-Page Machine Learning Book", provider: "Andriy Burkov", desc: "Concise yet comprehensive overview of machine learning perfect for quick reference and exam preparation.", type: "Book", url: "https://themlbook.com/" },
    { category: "books", title: "Machine Learning Yearning", provider: "Andrew Ng", desc: "Practical guide focused on structuring ML projects, diagnosing errors, and strategic decision-making.", type: "Book", url: "https://info.deeplearning.ai/machine-learning-yearning-book" },
    { category: "books", title: "Pattern Recognition and Machine Learning", provider: "Christopher M. Bishop", desc: "Comprehensive textbook covering probability distributions, linear models, kernel methods, and graphical models.", type: "Book", url: "https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/" },

    // ── AI-Powered Tools & Platforms ──
    { category: "ai-tools", title: "Rocket.new Templates", provider: "Rocket.new", desc: "Production-ready app templates designed for AI-era projects — launch full-stack applications fast with pre-built patterns for common product use cases so you spend time on features, not scaffolding.", type: "Website", url: "https://www.rocket.new/templates" },
    { category: "ai-tools", title: "Verdent AI", provider: "Verdent", desc: "AI-powered development environment combining agentic coding, multi-model planning, and intelligent code review in one tool — think of it as Claude Code with a full IDE experience built around it.", type: "Website", url: "https://www.verdent.ai/" },
    { category: "ai-tools", title: "Compyle AI", provider: "Compyle", desc: "AI-powered code compilation and analysis platform — get instant intelligent insights into your codebase, spot issues early, and get refactoring suggestions without manual review.", type: "Website", url: "https://www.compyle.ai/" },
    { category: "ai-tools", title: "CTO.new", provider: "CTO.new", desc: "AI CTO assistant for technical decision-making — get architecture advice, technology stack recommendations, and engineering strategy guidance when you don't have a senior engineer to ask.", type: "Website", url: "https://cto.new/" },
    { category: "ai-tools", title: "Lovart AI", provider: "Lovart", desc: "AI-powered design and creative generation platform — create professional visuals, UI mockups, and assets with natural language prompts, ideal for developers who need design output without a designer.", type: "Website", url: "https://www.lovart.ai/" },

    // ── AI News & Tutorials ──
    { category: "ai-news", title: "The Unwind AI — Tutorial Archive", provider: "The Unwind AI", desc: "Curated archive of hands-on AI tutorials filtered by topic — practical walkthroughs for the latest tools, models, and workflows. Read this when you want to discover what's new and actually build with it.", type: "Blog", url: "https://www.theunwindai.com/archive?tags=AI+Tutorial" },
];

const categoryMeta = {
    "all": {
        icon: "\u2630", label: "All Topics",
        desc: "Browse 150+ curated free resources for AI, ML, Claude Code & Programming",
        summary: "This is your complete learning hub. Every resource here is free or open-source. Start with a topic from the sidebar that matches your current goal — whether you're learning ML basics, building agents, or deploying models to production. Use the search bar to find specific tools or concepts across all categories."
    },
    "cc-awesome": {
        icon: "\u2B50", label: "Awesome Lists",
        desc: "Community-curated collections of Claude Code tools, plugins, agents & workflows",
        summary: "Why: Awesome lists save you hours of research by compiling the best tools, plugins, and workflows in one place. Instead of searching GitHub yourself, start here. How to use: Browse these lists when you need a new tool, want to discover community plugins, or need inspiration for what Claude Code can do. Bookmark the ones relevant to your stack."
    },
    "cc-docs": {
        icon: "\uD83D\uDCCB", label: "Official Documentation",
        desc: "Anthropic's official Claude Code docs — best practices, CLAUDE.md, CLI, sub-agents",
        summary: "Why: Official docs are the single source of truth. Community guides can be outdated, but these are always current. How to use: Read the Overview first, then the Best Practices page. Set up your CLAUDE.md file early — it tells Claude your coding standards and project conventions, saving you from repeating instructions every session."
    },
    "cc-learn": {
        icon: "\uD83C\uDFAF", label: "Tutorials & Courses",
        desc: "Step-by-step courses and guides from beginner to advanced agentic workflows",
        summary: "Why: Structured courses teach you the right mental models, not just commands. You'll learn patterns that work in production. How to use: Start with the Quickstart if you're new. Then take the DeepLearning.AI course for real-world workflows like Git worktrees and sub-agent orchestration. These courses are free and take 2-4 hours each."
    },
    "cc-patterns": {
        icon: "\uD83D\uDEE0", label: "Patterns & Workflows",
        desc: "Real-world prompt patterns, repo structures, and automation configurations",
        summary: "Why: Knowing commands isn't enough — you need patterns. These repos show how experienced developers structure their projects, write prompts, and configure automation. How to use: Clone the best-practices repos and study their CLAUDE.md files, hook configurations, and skill definitions. Copy the patterns that fit your workflow."
    },
    "cc-ecosystem": {
        icon: "\uD83D\uDE80", label: "MCP & Ecosystem",
        desc: "MCP servers, GitHub Actions, integrations — connect Claude Code to everything",
        summary: "Why: MCP (Model Context Protocol) lets Claude Code connect to external tools — databases, APIs, design tools, browsers. This multiplies what Claude can do. How to use: Start with the official MCP guide. Then pick servers relevant to your stack — GitHub MCP for repos, Playwright for browser automation, or database connectors for data work."
    },
    "ai-agents": {
        icon: "\uD83E\uDD16", label: "AI Agents",
        desc: "Frameworks, courses, and tools for building agentic AI systems",
        summary: "Why: AI agents are the next frontier — systems that plan, use tools, and complete multi-step tasks autonomously. Understanding agents is essential for any AI developer in 2026. How to use: Start with the courses (Andrew Ng, Microsoft, HuggingFace) to learn the concepts. Then explore frameworks like LangGraph, CrewAI, or AutoGen to build your own. The blog posts show real production challenges."
    },
    "ml-foundations": {
        icon: "\uD83E\uDDE0", label: "ML Foundations",
        desc: "Core machine learning courses from top universities",
        summary: "Why: Without strong foundations, you'll hit a ceiling. These university courses teach the math and intuition behind algorithms — not just how to call APIs. How to use: Take Stanford CS229 if you want the full picture. Use CS224N for NLP specifically. The DataCamp course is a faster, hands-on alternative if you prefer learning by building."
    },
    "deep-learning": {
        icon: "\uD83D\uDCC8", label: "Deep Learning",
        desc: "Neural networks, CNNs, RNNs, transformers and more",
        summary: "Why: Deep learning powers everything from image recognition to ChatGPT. Understanding architectures helps you pick the right model and debug training issues. How to use: MIT 6.S191 is the best starting point — it's concise and covers all major architectures. Fast.ai teaches you to build working models from day one. Go to DataCamp for PyTorch-specific training."
    },
    "llm": {
        icon: "\uD83D\uDCAC", label: "Large Language Models",
        desc: "Understanding and building with LLMs",
        summary: "Why: LLMs are the core technology behind AI assistants, code generators, and knowledge systems. Understanding how they work helps you use them better and build on top of them. How to use: Start with the DataCamp track for a structured introduction. Watch the Stanford lectures for deeper understanding of transformer architecture and training."
    },
    "rl": {
        icon: "\uD83C\uDFAE", label: "Reinforcement Learning",
        desc: "RL fundamentals, DQN, policy gradients & RLHF",
        summary: "Why: RL is how AI learns from trial and error — it powers game-playing AI, robotics, and the RLHF step that makes LLMs helpful. How to use: Start with the DataCamp track for fundamentals. If you want to understand how ChatGPT-style models are aligned, focus on the RLHF sections."
    },
    "mlops": {
        icon: "\u2699", label: "MLOps & Production",
        desc: "Deploying and maintaining ML systems in production",
        summary: "Why: Building a model is 20% of the work. Deploying, monitoring, and scaling it is the other 80%. MLOps bridges the gap between notebook experiments and reliable production systems. How to use: Start with the MLOps Concepts course for the big picture. Use MLflow for experiment tracking, Langfuse for LLM observability, and BentoML for serving. The Crusoe AI posts cover GPU infrastructure at scale."
    },
    "google-ai": {
        icon: "\u2601", label: "Google AI & Cloud",
        desc: "Google's AI courses and cloud certifications",
        summary: "Why: Google offers some of the best free AI courses with certificates. They're short, practical, and teach you to use production tools like Vertex AI and Gemini. How to use: Take AI Essentials first (under 5 hours). Then explore Vertex AI Studio for hands-on model interaction. The skill badge courses count toward Google Cloud certifications."
    },
    "cs-fundamentals": {
        icon: "\uD83D\uDCBB", label: "CS Fundamentals",
        desc: "Core computer science courses and concepts",
        summary: "Why: Strong CS fundamentals make you a better AI developer. Data structures, algorithms, and computational thinking are prerequisites for understanding how models work under the hood. How to use: CS50 is the gold standard introduction — even experienced developers learn from it. The business professionals variant is great if you're non-technical and transitioning into AI."
    },
    "career": {
        icon: "\uD83D\uDCBC", label: "Career & Development",
        desc: "Guidance for building a career in AI",
        summary: "Why: The AI job market is competitive and fast-moving. Expert guidance helps you focus on the right skills and avoid common mistakes. How to use: Watch the career advice video to understand which AI roles exist, what companies look for, and how to position yourself. Then build a portfolio using projects from the other categories here."
    },
    "free-textbooks": {
        icon: "\uD83D\uDCDA", label: "Free Online Textbooks",
        desc: "Downloadable textbooks covering ML, math & probability",
        summary: "Why: Textbooks give you depth that courses don't. When you need to understand why an algorithm works (not just how to use it), these are your reference. How to use: Don't read cover to cover. Use them as reference material — look up specific topics when you get stuck. Start with Mathematics for Machine Learning for the math prerequisites, or Understanding Machine Learning for theory."
    },
    "mit-books": {
        icon: "\uD83C\uDF93", label: "MIT Free Books",
        desc: "Open access books from MIT Press and top researchers",
        summary: "Why: MIT Press publishes some of the most rigorous and respected AI textbooks, and many are now open access. These are the same books used in top university courses. How to use: Understanding Deep Learning (UDL) is the most modern and comprehensive — start there for a current view. The Sutton & Barto RL book is the definitive reference for reinforcement learning. Use the Goodfellow deep learning book for classical foundations."
    },
    "youtube": {
        icon: "\u25B6", label: "YouTube Channels",
        desc: "Top YouTube channels for learning AI & ML",
        summary: "Why: Video explanations build intuition faster than text for visual topics like neural networks and linear algebra. These creators are the best at making complex topics accessible. How to use: Watch 3Blue1Brown for mathematical intuition, StatQuest for statistics and ML basics, Andrej Karpathy for neural network deep dives, and Sebastian Raschka for research paper walkthroughs. Subscribe and watch regularly."
    },
    "books": {
        icon: "\uD83D\uDCD6", label: "Recommended Books",
        desc: "Must-read books for ML practitioners",
        summary: "Why: These are the books that experienced ML engineers recommend most often. Each one fills a different gap — from practical coding to theory to project management. How to use: Start with Hands-On ML (Geron) if you learn by coding. Read The Hundred-Page ML Book for a fast overview. Use Machine Learning Yearning (Andrew Ng) when you're leading a project and need to make strategic decisions."
    },
    "ai-frameworks": {
        icon: "\uD83D\uDD27", label: "AI Frameworks & Libraries",
        desc: "Essential open-source frameworks for building AI — PyTorch, Transformers, scikit-learn & more",
        summary: "Why: These are the building blocks of every AI project. Knowing which framework to use and when saves you weeks of wrong turns. How to use: Learn PyTorch for deep learning (it's the industry standard). Use Hugging Face Transformers for any pretrained model task. Start with scikit-learn for classical ML. Use Polars instead of pandas when your data gets large. Pick XGBoost for tabular/structured data competitions."
    },
    "inference-tools": {
        icon: "\u26A1", label: "Inference & Local AI",
        desc: "Run and serve LLMs locally or at scale — Ollama, vLLM, llama.cpp & more",
        summary: "Why: Running models locally gives you privacy, zero API costs, and full control. For production, high-performance serving is the difference between a demo and a real product. How to use: Start with Ollama for the easiest local setup (one command to run any model). Use llama.cpp for maximum hardware efficiency. When you're ready for production serving, vLLM and TensorRT-LLM handle thousands of requests per second. Use MLX if you're on Apple Silicon."
    },
    "fine-tuning": {
        icon: "\uD83C\uDFAF", label: "Fine-Tuning & Training",
        desc: "Tools for fine-tuning, RLHF, LoRA, and distributed training of large models",
        summary: "Why: Fine-tuning turns a general model into one that's expert at your specific task. With LoRA and QLoRA, you can fine-tune 7B+ models on a single consumer GPU. How to use: Start with Unsloth for the easiest and fastest fine-tuning experience. Use LLaMA-Factory if you want a web UI. PEFT provides the building blocks for parameter-efficient methods. TRL is essential if you're doing RLHF or DPO alignment. Use DeepSpeed when scaling to multiple GPUs."
    },
    "rag": {
        icon: "\uD83D\uDD0D", label: "RAG & Vector Search",
        desc: "Build retrieval-augmented generation systems with vector databases and knowledge graphs",
        summary: "Why: RAG lets your AI answer questions using your own data — documents, databases, knowledge bases — without expensive fine-tuning. It's the most practical way to build useful AI apps. How to use: Start with LangChain or LlamaIndex for the framework. Pick Chroma for prototyping (simplest setup) or Qdrant for production (faster, more features). Use GraphRAG when your data has complex relationships. Haystack is great for search-focused applications."
    },
    "ai-coding": {
        icon: "\uD83D\uDCBB", label: "AI Coding Assistants",
        desc: "Open-source AI-powered coding tools — IDE extensions, terminal agents & pair programmers",
        summary: "Why: AI coding tools multiply your productivity — they write boilerplate, catch bugs, and handle refactoring. Open-source options give you privacy and model choice. How to use: Install Continue in VS Code or JetBrains for inline assistance. Use Aider from the terminal for quick file edits. Try OpenHands when you want an agent that handles entire tasks autonomously. Tabby is perfect if you need a self-hosted Copilot alternative with data privacy."
    },
    "prompt-eng": {
        icon: "\u270D", label: "Prompt Engineering",
        desc: "Master prompt design with official Anthropic tutorials, cookbooks, and courses",
        summary: "Why: Prompt engineering is the most high-leverage skill for working with AI — the same model gives vastly different results depending on how you prompt it. Even a 10% improvement in prompt quality compounds across every task. How to use: Start with the Interactive Tutorial for hands-on exercises that build real intuition. Then explore the Cookbooks for copy-paste patterns. Take the Anthropic Courses for a complete, end-to-end structured curriculum."
    },
    "ai-tools": {
        icon: "\uD83D\uDEE0", label: "AI-Powered Tools",
        desc: "Platforms and tools that use AI to accelerate building, designing, and shipping",
        summary: "Why: AI-native tools compress months of work into hours. These platforms handle scaffolding, design, architecture advice, and code analysis so you can focus on what's unique about your product. How to use: Use Rocket.new templates to bootstrap a new project fast. Use CTO.new when you need architecture guidance on a hard decision. Lovart handles design when you don't have a designer. Verdent and Compyle integrate directly into your development workflow."
    },
    "ai-news": {
        icon: "\uD83D\uDCF0", label: "AI News & Tutorials",
        desc: "Newsletter archives and tutorial blogs to stay current with fast-moving AI developments",
        summary: "Why: The AI field moves faster than any course can track — new tools, models, and workflows appear weekly. Staying current gives you a real advantage. How to use: Bookmark The Unwind AI archive and filter by 'AI Tutorial' to find hands-on walkthroughs of the latest releases. Read regularly to discover new tools before they go mainstream."
    },
};
