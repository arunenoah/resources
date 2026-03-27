// ── LEARNING PATHS ──
const learningPaths = [
    {
        id: "claude-master",
        title: "Claude Code Mastery",
        icon: "⚡",
        color: "#f59e0b",
        description: "Go from beginner to Claude Code power user",
        difficulty: "Beginner",
        duration: "2-3 weeks",
        points: 500,
        steps: [
            { resource: "cc-learn", title: "Quickstart Guide", done: false },
            { resource: "cc-docs", title: "Read Best Practices", done: false },
            { resource: "cc-docs", title: "Master CLAUDE.md", done: false },
            { resource: "cc-patterns", title: "Learn Patterns", done: false },
            { resource: "cc-ecosystem", title: "Explore MCP Servers", done: false },
            { resource: "cc-awesome", title: "Build Your Toolkit", done: false }
        ]
    },
    {
        id: "ai-engineer",
        title: "AI Engineer Path",
        icon: "🤖",
        color: "#8b5cf6",
        description: "Build production-ready AI applications",
        difficulty: "Intermediate",
        duration: "4-6 weeks",
        points: 800,
        steps: [
            { resource: "prompt-eng", title: "Prompt Engineering", done: false },
            { resource: "ai-agents", title: "AI Agents Fundamentals", done: false },
            { resource: "rag", title: "RAG & Vector Search", done: false },
            { resource: "ai-frameworks", title: "Master PyTorch", done: false },
            { resource: "inference-tools", title: "Local Inference", done: false },
            { resource: "mlops", title: "MLOps Basics", done: false }
        ]
    },
    {
        id: "ml-fundamentals",
        title: "ML Foundations",
        icon: "📊",
        color: "#10b981",
        description: "Core machine learning from scratch",
        difficulty: "Intermediate",
        duration: "8-10 weeks",
        points: 1000,
        steps: [
            { resource: "cs-fundamentals", title: "CS Fundamentals", done: false },
            { resource: "ml-foundations", title: "Stanford CS229", done: false },
            { resource: "deep-learning", title: "MIT Deep Learning", done: false },
            { resource: "llm", title: "LLM Concepts", done: false },
            { resource: "rl", title: "Reinforcement Learning", done: false },
            { resource: "books", title: "Read Hands-On ML", done: false }
        ]
    },
    {
        id: "autonomous-coding",
        title: "Autonomous Coding Agent",
        icon: "🚀",
        color: "#ef4444",
        description: "Build AI agents that code autonomously",
        difficulty: "Advanced",
        duration: "3-4 weeks",
        points: 700,
        steps: [
            { resource: "ai-agents", title: "Agentic AI Course", done: false },
            { resource: "ai-coding", title: "AI Coding Assistants", done: false },
            { resource: "cc-patterns", title: "Multi-Agent Patterns", done: false },
            { resource: "fine-tuning", title: "Fine-tuning Basics", done: false },
            { resource: "ai-agents", title: "Open Hands", done: false }
        ]
    }
];

// ── QUIZZES ──
const quizzes = [
    {
        id: "prompt-basics",
        pathId: "claude-master",
        title: "Prompt Engineering Basics",
        icon: "💡",
        questions: [
            {
                q: "What is few-shot prompting?",
                options: [
                    "Writing prompts with minimal words",
                    "Providing examples in the prompt",
                    "Using multiple AI models at once",
                    "Prompting with limited context"
                ],
                correct: 1
            },
            {
                q: "Chain-of-thought prompting helps AI by:",
                options: [
                    "Being shorter and faster",
                    "Breaking down reasoning steps",
                    "Using more tokens",
                    "Avoiding technical terms"
                ],
                correct: 1
            },
            {
                q: "CLAUDE.md files help by:",
                options: [
                    "Speeding up responses",
                    "Setting project-specific context",
                    "Reducing API costs",
                    "Enabling offline mode"
                ],
                correct: 1
            }
        ]
    },
    {
        id: "agent-concepts",
        pathId: "ai-engineer",
        title: "AI Agent Concepts",
        icon: "🧠",
        questions: [
            {
                q: "What distinguishes an agent from a simple API call?",
                options: [
                    "Agents use more tokens",
                    "Agents can plan and use tools autonomously",
                    "Agents are faster",
                    "Agents are free"
                ],
                correct: 1
            },
            {
                q: "RAG stands for:",
                options: [
                    "Rapid Application Growth",
                    "Retrieval-Augmented Generation",
                    "Resource Allocation Guide",
                    "Runtime Agent Gateway"
                ],
                correct: 1
            },
            {
                q: "Which is NOT a typical agent capability?",
                options: [
                    "Tool use",
                    "Memory persistence",
                    "Writing emails",
                    "Planning multi-step tasks"
                ],
                correct: 2
            }
        ]
    },
    {
        id: "ml-foundations-quiz",
        pathId: "ml-fundamentals",
        title: "ML Fundamentals Check",
        icon: "📈",
        questions: [
            {
                q: "Supervised learning uses:",
                options: [
                    "Random unlabeled data",
                    "Labeled training data",
                    "Only test data",
                    "No data"
                ],
                correct: 1
            },
            {
                q: "Overfitting means:",
                options: [
                    "Model is too simple",
                    "Model memorized training data",
                    "Training is too fast",
                    "Using wrong language"
                ],
                correct: 1
            },
            {
                q: "Gradient descent is used to:",
                options: [
                    "Increase loss",
                    "Optimize model parameters",
                    "Generate data",
                    "Visualize results"
                ],
                correct: 1
            }
        ]
    }
];

// ── BADGES ──
const badges = [
    { id: "first-explorer", icon: "🔍", name: "First Explorer", desc: "Visit 10 resources", threshold: 10, type: "visit" },
    { id: "resource-collector", icon: "📚", name: "Resource Collector", desc: "Bookmark 20 resources", threshold: 20, type: "bookmark" },
    { id: "path-starter", icon: "🎯", name: "Path Starter", desc: "Start your first learning path", threshold: 1, type: "path_start" },
    { id: "path-completer", icon: "🏆", name: "Path Completer", desc: "Complete a learning path", threshold: 1, type: "path_complete" },
    { id: "quiz-master", icon: "🧩", name: "Quiz Master", desc: "Score 100% on 3 quizzes", threshold: 3, type: "quiz_perfect" },
    { id: "streak-warrior", icon: "🔥", name: "Streak Warrior", desc: "7-day learning streak", threshold: 7, type: "streak" },
    { id: "knowledge-seeker", icon: "📖", name: "Knowledge Seeker", desc: "Complete 50 resources", threshold: 50, type: "complete" },
    { id: "dedicated-learner", icon: "⭐", name: "Dedicated Learner", desc: "Earn 1000 points", threshold: 1000, type: "points" },
    { id: "mcp-pioneer", icon: "🔌", name: "MCP Pioneer", desc: "Explore MCP ecosystem", threshold: 1, type: "special" },
    { id: "agent-builder", icon: "🛠️", name: "Agent Builder", desc: "Try 5 AI agent tools", threshold: 5, type: "special" }
];

// ── USER STATE (localStorage) ──
const DEFAULT_STATE = {
    visitedResources: [],
    bookmarkedResources: [],
    completedResources: [],
    pathProgress: {},
    quizScores: {},
    points: 0,
    streak: { current: 0, lastVisit: null },
    badges: [],
    createdAt: new Date().toISOString()
};

function getUserState() {
    try {
        const saved = localStorage.getItem("resources_user_state");
        return saved ? { ...DEFAULT_STATE, ...JSON.parse(saved) } : { ...DEFAULT_STATE };
    } catch {
        return { ...DEFAULT_STATE };
    }
}

function saveUserState(state) {
    localStorage.setItem("resources_user_state", JSON.stringify(state));
}

// ── POINTS CONFIG ──
const POINTS = {
    visit: 5,
    bookmark: 10,
    complete: 25,
    quiz_correct: 10,
    path_complete: 100,
    streak_bonus: 50
};

// ── HELPER: Track resource visit ──
function trackVisit(resourceId) {
    const state = getUserState();
    if (!state.visitedResources.includes(resourceId)) {
        state.visitedResources.push(resourceId);
        state.points += POINTS.visit;
        saveUserState(state);
        checkBadges(state);
    }
    return state;
}

// ── HELPER: Toggle bookmark ──
function toggleBookmark(resourceId) {
    const state = getUserState();
    const idx = state.bookmarkedResources.indexOf(resourceId);
    if (idx === -1) {
        state.bookmarkedResources.push(resourceId);
        state.points += POINTS.bookmark;
    } else {
        state.bookmarkedResources.splice(idx, 1);
        state.points -= POINTS.bookmark;
    }
    saveUserState(state);
    checkBadges(state);
    return state;
}

// ── HELPER: Mark resource complete ──
function markComplete(resourceId) {
    const state = getUserState();
    if (!state.completedResources.includes(resourceId)) {
        state.completedResources.push(resourceId);
        state.points += POINTS.complete;
        saveUserState(state);
        checkBadges(state);
    }
    return state;
}

// ── HELPER: Update streak ──
function updateStreak() {
    const state = getUserState();
    const today = new Date().toDateString();
    const lastVisit = state.streak.lastVisit;
    
    if (lastVisit) {
        const lastDate = new Date(lastVisit).toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (lastDate === today) {
            // Same day, no change
        } else if (lastDate === yesterday) {
            state.streak.current += 1;
            state.streak.lastVisit = today;
            if (state.streak.current % 7 === 0) {
                state.points += POINTS.streak_bonus;
            }
        } else {
            state.streak.current = 1;
            state.streak.lastVisit = today;
        }
    } else {
        state.streak.current = 1;
        state.streak.lastVisit = today;
    }
    
    saveUserState(state);
    checkBadges(state);
    return state;
}

// ── BADGE CHECKING ──
function checkBadges(state) {
    const earned = new Set(state.badges);
    let changed = false;
    
    badges.forEach(badge => {
        if (earned.has(badge.id)) return;
        
        let earned_badge = false;
        switch(badge.type) {
            case "visit":
                earned_badge = state.visitedResources.length >= badge.threshold;
                break;
            case "bookmark":
                earned_badge = state.bookmarkedResources.length >= badge.threshold;
                break;
            case "complete":
                earned_badge = state.completedResources.length >= badge.threshold;
                break;
            case "points":
                earned_badge = state.points >= badge.threshold;
                break;
            case "streak":
                earned_badge = state.streak.current >= badge.threshold;
                break;
            case "path_complete":
                earned_badge = Object.values(state.pathProgress).filter(p => p >= 100).length >= badge.threshold;
                break;
            case "quiz_perfect":
                earned_badge = Object.values(state.quizScores).filter(s => s === 100).length >= badge.threshold;
                break;
            case "path_start":
                earned_badge = Object.keys(state.pathProgress).length >= badge.threshold;
                break;
            case "special":
                earned_badge = false; // Handled separately
                break;
        }
        
        if (earned_badge) {
            state.badges.push(badge.id);
            changed = true;
            showBadgeNotification(badge);
        }
    });
    
    if (changed) {
        saveUserState(state);
    }
}

// ── BADGE NOTIFICATION ──
function showBadgeNotification(badge) {
    const notif = document.createElement("div");
    notif.className = "badge-notification";
    notif.innerHTML = `
        <div class="badge-notif-icon">${badge.icon}</div>
        <div class="badge-notif-content">
            <div class="badge-notif-title">Badge Unlocked!</div>
            <div class="badge-notif-name">${badge.name}</div>
            <div class="badge-notif-desc">${badge.desc}</div>
        </div>
        <button class="badge-notif-close">&times;</button>
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add("show"), 100);
    
    notif.querySelector(".badge-notif-close").onclick = () => {
        notif.classList.remove("show");
        setTimeout(() => notif.remove(), 300);
    };
    
    setTimeout(() => {
        notif.classList.remove("show");
        setTimeout(() => notif.remove(), 300);
    }, 4000);
}

// ── RESOURCE DATA ──
const resources = [
    { category: "cc-awesome", title: "Awesome Claude Code", provider: "Community", desc: "The definitive curated collection (21k+ stars) of Claude Code skills, hooks, slash-commands, agents, plugins, MCP servers, CLI tools, and workflows.", type: "GitHub", url: "https://github.com/hesreallyhim/awesome-claude-code" },
    { category: "cc-awesome", title: "Awesome Claude Code Toolkit", provider: "Community", desc: "Massive collection featuring 135 agents, 35 skills, 42 commands, and 150+ plugins for Claude Code power users.", type: "GitHub", url: "https://github.com/rohitg00/awesome-claude-code-toolkit" },
    { category: "cc-docs", title: "Claude Code Overview", provider: "Anthropic", desc: "Official documentation hub covering everything from quickstart to advanced features.", type: "Docs", url: "https://code.claude.com/docs/en/overview" },
    { category: "cc-docs", title: "Claude Code Best Practices", provider: "Anthropic", desc: "Official best practices covering context management, CLAUDE.md setup, and multi-agent orchestration.", type: "Docs", url: "https://code.claude.com/docs/en/best-practices" },
    { category: "cc-docs", title: "CLAUDE.md & Memory System", provider: "Anthropic", desc: "How to control context with CLAUDE.md files — set coding standards and workflow rules.", type: "Docs", url: "https://code.claude.com/docs/en/memory" },
    { category: "cc-docs", title: "CLI Reference", provider: "Anthropic", desc: "Complete official reference for the Claude Code command-line interface.", type: "Docs", url: "https://code.claude.com/docs/en/cli-reference" },
    { category: "cc-docs", title: "Sub-agents Documentation", provider: "Anthropic", desc: "Official guide to Claude Code sub-agents for parallel tasks.", type: "Docs", url: "https://code.claude.com/docs/en/sub-agents" },
    { category: "cc-learn", title: "Claude Code: Agentic Coding Assistant", provider: "DeepLearning.AI", desc: "Free course by Anthropic & Andrew Ng covering Git worktrees, sub-agent orchestration, and MCP servers.", type: "Course", url: "https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/" },
    { category: "cc-learn", title: "Claude Code Quickstart", provider: "Anthropic", desc: "Official step-by-step getting started guide.", type: "Docs", url: "https://code.claude.com/docs/en/quickstart" },
    { category: "cc-patterns", title: "Claude Code Best Practices Repo", provider: "Community", desc: "Real-world prompt patterns, automation workflows, and configuration examples.", type: "GitHub", url: "https://github.com/awattar/claude-code-best-practices" },
    { category: "cc-patterns", title: "Command-to-Agent-to-Skill Architecture", provider: "Community", desc: "Reference implementation for Claude Code configuration patterns.", type: "GitHub", url: "https://github.com/shanraisshan/claude-code-best-practice" },
    { category: "cc-ecosystem", title: "Official MCP Servers", provider: "Anthropic", desc: "Reference implementations of Model Context Protocol servers.", type: "GitHub", url: "https://github.com/modelcontextprotocol/servers" },
    { category: "cc-ecosystem", title: "Claude Code GitHub Action", provider: "Anthropic", desc: "Official GitHub Action for CI/CD — Claude responds to mentions and reviews PRs.", type: "GitHub", url: "https://github.com/anthropics/claude-code-action" },
    { category: "cc-ecosystem", title: "GitHub MCP Server", provider: "GitHub", desc: "GitHub's official MCP server for repo, issues, and PR access.", type: "GitHub", url: "https://github.com/github/github-mcp-server" },
    { category: "cc-ecosystem", title: "Awesome MCP Servers", provider: "Community", desc: "Curated list of MCP servers — Playwright, Figma, databases, and more.", type: "GitHub", url: "https://github.com/wong2/awesome-mcp-servers" },
    { category: "prompt-eng", title: "Prompt Engineering Interactive Tutorial", provider: "Anthropic", desc: "Hands-on tutorial covering prompt structure, chain-of-thought, and few-shot examples.", type: "GitHub", url: "https://github.com/anthropics/prompt-eng-interactive-tutorial" },
    { category: "prompt-eng", title: "Anthropic Courses", provider: "Anthropic", desc: "Official courses covering Claude API usage, prompt engineering, and tool use.", type: "GitHub", url: "https://github.com/anthropics/courses" },
    { category: "prompt-eng", title: "Claude Cookbooks", provider: "Anthropic", desc: "Ready-to-run Jupyter notebooks demonstrating real-world patterns.", type: "GitHub", url: "https://github.com/anthropics/claude-cookbooks" },
    { category: "ai-agents", title: "Agentic AI with Andrew Ng", provider: "DeepLearning.AI", desc: "Build agentic AI systems with iterative, multi-step workflows.", type: "Course", url: "https://www.deeplearning.ai/courses/agentic-ai" },
    { category: "ai-agents", title: "AI Agents for Beginners", provider: "Microsoft", desc: "Free comprehensive course with 12+ lessons covering AI agent fundamentals.", type: "Course", url: "https://microsoft.github.io/ai-agents-for-beginners/" },
    { category: "ai-agents", title: "Google AI Agents Intensive", provider: "Google / Kaggle", desc: "5-Day AI Agents Intensive Course covering hands-on training.", type: "Video", url: "https://youtube.com/playlist?list=PLqFaTIg4myu9r7uRoNfbJhHUbLp-1t1YE" },
    { category: "ai-agents", title: "LangGraph", provider: "LangChain", desc: "Stateful, controllable agent orchestration with cycles and persistence.", type: "GitHub", url: "https://github.com/langchain-ai/langgraph" },
    { category: "ai-agents", title: "CrewAI", provider: "CrewAI", desc: "Role-based multi-agent framework for collaborative tasks.", type: "GitHub", url: "https://github.com/crewAIInc/crewAI" },
    { category: "ai-agents", title: "AutoGen", provider: "Microsoft", desc: "Flexible multi-agent conversation platform.", type: "GitHub", url: "https://github.com/microsoft/autogen" },
    { category: "ai-agents", title: "Google ADK", provider: "Google", desc: "Google's open-source framework for building AI agents.", type: "GitHub", url: "https://github.com/google/adk-python" },
    { category: "ai-coding", title: "Continue", provider: "Continue", desc: "Open-source coding autopilot for VS Code and JetBrains.", type: "GitHub", url: "https://github.com/continuedev/continue" },
    { category: "ai-coding", title: "Aider", provider: "Paul Gauthier", desc: "Terminal-based AI pair programmer.", type: "GitHub", url: "https://github.com/paul-gauthier/aider" },
    { category: "ai-coding", title: "OpenHands", provider: "All Hands AI", desc: "Full-featured AI software engineer.", type: "GitHub", url: "https://github.com/All-Hands-AI/OpenHands" },
    { category: "ai-coding", title: "Opencode", provider: "different-ai", desc: "Open-source AI coding assistant for the terminal.", type: "GitHub", url: "https://github.com/different-ai/opencode" },
    { category: "ml-foundations", title: "Stanford CS229: Machine Learning", provider: "Stanford University", desc: "Graduate-level course by Andrew Ng covering supervised/unsupervised learning.", type: "Course", url: "https://see.stanford.edu/course/cs229" },
    { category: "ml-foundations", title: "Stanford CS224N: NLP with Deep Learning", provider: "Stanford University", desc: "NLP course covering word embeddings, RNNs, transformers, and LLMs.", type: "Video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D" },
    { category: "deep-learning", title: "MIT 6.S191: Intro to Deep Learning", provider: "MIT", desc: "MIT's introductory deep learning program covering neural networks, CNNs, RNNs, and transformers.", type: "Course", url: "https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI" },
    { category: "deep-learning", title: "Fast.ai Practical Deep Learning", provider: "fast.ai", desc: "Legendary free course teaching deep learning top-down.", type: "Course", url: "https://github.com/fastai/fastai" },
    { category: "llm", title: "Developing Large Language Models", provider: "DataCamp", desc: "16-hour track covering LLM concepts, transformers, and building LLM apps.", type: "Course", url: "https://www.datacamp.com/tracks/developing-large-language-models" },
    { category: "rl", title: "Reinforcement Learning in Python", provider: "DataCamp", desc: "12-hour track covering RL fundamentals, DQN, and RLHF.", type: "Course", url: "https://www.datacamp.com/tracks/reinforcement-learning" },
    { category: "mlops", title: "MLOps Concepts", provider: "DataCamp", desc: "2-hour course on deploying ML models to production.", type: "Course", url: "https://www.datacamp.com/courses/mlops-concepts" },
    { category: "mlops", title: "MLflow", provider: "Databricks", desc: "End-to-end ML lifecycle platform — experiment tracking and model registry.", type: "GitHub", url: "https://github.com/mlflow/mlflow" },
    { category: "mlops", title: "Langfuse", provider: "Langfuse", desc: "Open-source LLM observability — trace and debug LLM apps.", type: "GitHub", url: "https://github.com/langfuse/langfuse" },
    { category: "mlops", title: "BentoML", provider: "BentoML", desc: "Build and ship AI applications as production-ready APIs.", type: "GitHub", url: "https://github.com/bentoml/BentoML" },
    { category: "google-ai", title: "Google AI Essentials", provider: "Google", desc: "Under 5 hours to learn AI fundamentals and prompt engineering.", type: "Course", url: "https://grow.google/ai-essentials/" },
    { category: "google-ai", title: "Introduction to Vertex AI Studio", provider: "Google Cloud", desc: "Free 1.5-hour course on Gemini multimodal applications.", type: "Course", url: "https://www.skills.google/course_templates/552" },
    { category: "cs-fundamentals", title: "CS50 - Harvard", provider: "Harvard University", desc: "Harvard's legendary introduction to computer science.", type: "Course", url: "https://cs50.harvard.edu/" },
    { category: "cs-fundamentals", title: "Transformer Architecture Deep Dive", provider: "Stanford University", desc: "Advanced Stanford lecture on transformer-based models.", type: "Video", url: "https://www.youtube.com/watch?v=yT84Y5zCnaA" },
    { category: "free-textbooks", title: "Understanding Machine Learning", provider: "", desc: "Comprehensive textbook covering theoretical ML foundations.", type: "Book", url: "https://cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf" },
    { category: "free-textbooks", title: "Mathematics for Machine Learning", provider: "", desc: "Essential mathematical foundations for ML.", type: "Book", url: "https://mml-book.github.io/book/mml-book.pdf" },
    { category: "free-textbooks", title: "Deep Learning Principles", provider: "", desc: "Structured approach to understanding deep learning.", type: "Book", url: "https://arxiv.org/pdf/2106.10165" },
    { category: "free-textbooks", title: "Deep Learning", provider: "Goodfellow, Bengio, Courville", desc: "Classic deep learning textbook.", type: "Book", url: "http://deeplearningbook.org" },
    { category: "free-textbooks", title: "Reinforcement Learning: An Introduction", provider: "Sutton & Barto", desc: "Definitive textbook on reinforcement learning.", type: "Book", url: "https://andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf" },
    { category: "free-textbooks", title: "Machine Learning Systems (CS249r)", provider: "Harvard Edge", desc: "Open-access book on TinyML and efficient deep learning.", type: "GitHub", url: "https://github.com/harvard-edge/cs249r_book" },
    { category: "youtube", title: "Andrej Karpathy", provider: "", desc: "Former Tesla AI Director sharing deep dives into neural networks and GPT internals.", type: "Channel", url: "https://www.youtube.com/@AndrejKarpathy" },
    { category: "youtube", title: "StatQuest with Josh Starmer", provider: "", desc: "Statistics and ML concepts explained clearly.", type: "Channel", url: "https://www.youtube.com/@statquest" },
    { category: "youtube", title: "3Blue1Brown", provider: "", desc: "Visual explanations of mathematics and neural networks.", type: "Channel", url: "https://www.youtube.com/@3blue1brown" },
    { category: "ai-frameworks", title: "PyTorch", provider: "Meta", desc: "Dominant deep learning framework with dynamic computation graphs.", type: "GitHub", url: "https://github.com/pytorch/pytorch" },
    { category: "ai-frameworks", title: "Hugging Face Transformers", provider: "Hugging Face", desc: "De facto standard library for pretrained models.", type: "GitHub", url: "https://github.com/huggingface/transformers" },
    { category: "ai-frameworks", title: "scikit-learn", provider: "Community", desc: "Industry-standard library for classical ML.", type: "GitHub", url: "https://github.com/scikit-learn/scikit-learn" },
    { category: "ai-frameworks", title: "JAX", provider: "Google", desc: "High-performance numerical computing with composable transformations.", type: "GitHub", url: "https://github.com/jax-ml/jax" },
    { category: "inference-tools", title: "Ollama", provider: "Ollama", desc: "Run LLMs locally with a single command.", type: "GitHub", url: "https://github.com/ollama/ollama" },
    { category: "inference-tools", title: "vLLM", provider: "vLLM Project", desc: "State-of-the-art LLM serving engine with PagedAttention.", type: "GitHub", url: "https://github.com/vllm-project/vllm" },
    { category: "inference-tools", title: "llama.cpp", provider: "Georgi Gerganov", desc: "Pure C/C++ LLM inference with GGUF quantization.", type: "GitHub", url: "https://github.com/ggerganov/llama.cpp" },
    { category: "inference-tools", title: "Free LLM API Resources", provider: "cheahjs", desc: "Comprehensive list of free-tier LLM APIs.", type: "GitHub", url: "https://github.com/cheahjs/free-llm-api-resources" },
    { category: "fine-tuning", title: "Unsloth", provider: "Unsloth AI", desc: "2x faster fine-tuning with 70% less memory.", type: "GitHub", url: "https://github.com/unslothai/unsloth" },
    { category: "fine-tuning", title: "LLaMA-Factory", provider: "Community", desc: "Unified fine-tuning framework supporting SFT, DPO, ORPO.", type: "GitHub", url: "https://github.com/hiyouga/LLaMA-Factory" },
    { category: "fine-tuning", title: "PEFT", provider: "Hugging Face", desc: "Parameter-efficient fine-tuning library — LoRA, QLoRA.", type: "GitHub", url: "https://github.com/huggingface/peft" },
    { category: "fine-tuning", title: "TRL", provider: "Hugging Face", desc: "Full-stack RLHF, SFT, DPO, and reward modeling.", type: "GitHub", url: "https://github.com/huggingface/trl" },
    { category: "rag", title: "LlamaIndex", provider: "LlamaIndex", desc: "Full-featured RAG framework with advanced indexing.", type: "GitHub", url: "https://github.com/run-llama/llama_index" },
    { category: "rag", title: "LangChain", provider: "LangChain", desc: "Foundational library for building LLM-powered apps.", type: "GitHub", url: "https://github.com/langchain-ai/langchain" },
    { category: "rag", title: "Chroma", provider: "Chroma", desc: "Most popular open-source embedding database.", type: "GitHub", url: "https://github.com/chroma-core/chroma" },
    { category: "rag", title: "Qdrant", provider: "Qdrant", desc: "High-performance vector search engine.", type: "GitHub", url: "https://github.com/qdrant/qdrant" },
    { category: "rag", title: "GraphRAG", provider: "Microsoft", desc: "Knowledge-graph-based retrieval for structured AI answers.", type: "GitHub", url: "https://github.com/microsoft/graphrag" },
    { category: "books", title: "Hands-On ML with Scikit-Learn, Keras & TensorFlow", provider: "Aurélien Géron", desc: "Go-to practical guide for ML engineers.", type: "Book", url: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1098125975" },
    { category: "books", title: "An Introduction to Statistical Learning", provider: "James, Witten, Hastie, Tibshirani", desc: "Widely used textbook for statistical learning methods.", type: "Book", url: "https://www.statlearning.com/" },
    { category: "books", title: "Machine Learning Yearning", provider: "Andrew Ng", desc: "Practical guide focused on structuring ML projects.", type: "Book", url: "https://info.deeplearning.ai/machine-learning-yearning-book" },
    { category: "ai-news", title: "The Unwind AI — Tutorial Archive", provider: "The Unwind AI", desc: "Curated archive of hands-on AI tutorials covering agents, RAG, MCP, fine-tuning, and more — all 100% open source.", type: "Blog", url: "https://www.theunwindai.com/archive?tags=AI+Tutorial" },
    { category: "cc-ecosystem", title: "Build an MCP GitHub Agent in 50 Lines", provider: "The Unwind AI", desc: "Step-by-step tutorial to build a fully functional GitHub agent using MCP in under 50 lines of Python.", type: "Guide", url: "https://www.theunwindai.com/p/build-an-mcp-github-agent-in-less-than-50-lines-of-code" },
    { category: "cc-ecosystem", title: "Build a Notion Agent with MCP", provider: "The Unwind AI", desc: "Build a terminal-based Notion agent using Model Context Protocol — fully open source with step-by-step instructions.", type: "Guide", url: "https://www.theunwindai.com/p/build-a-terminal-based-notion-agent-with-mcp" },
    { category: "ai-agents", title: "Build an Autonomous AI Agent Team (24/7)", provider: "The Unwind AI", desc: "Full tutorial to build an autonomous agent team that runs continuously using OpenClaw — covers orchestration and scheduling.", type: "Guide", url: "https://www.theunwindai.com/p/how-i-built-an-autonomous-ai-agent-team-that-runs-24-7" },
    { category: "ai-agents", title: "Deep Research Agent with OpenAI Agents SDK", provider: "The Unwind AI", desc: "Build a multi-phase deep research agent combining OpenAI Agents SDK and Firecrawl for autonomous web research.", type: "Guide", url: "https://www.theunwindai.com/p/build-a-deep-research-agent-with-openai-agents-sdk-and-firecrawl" },
    { category: "ai-agents", title: "AI Sales Intelligence Agent with Google ADK", provider: "The Unwind AI", desc: "Multi-agent app using Google ADK and Gemini 3 — covers agent coordination, tool use, and data pipelines.", type: "Guide", url: "https://www.theunwindai.com/p/build-an-ai-sales-intelligence-agent-team-with-google-adk-gemini-3" },
    { category: "ai-agents", title: "AI Travel Planning Agent with MCP", provider: "The Unwind AI", desc: "Build a multi-agent travel planner using MCP — demonstrates real-world agent orchestration patterns.", type: "Guide", url: "https://www.theunwindai.com/p/build-an-ai-travel-planning-agent-with-mcp" },
    { category: "ai-coding", title: "Multimodal AI Coding Agent Team", provider: "The Unwind AI", desc: "Build a coding agent team combining o3-mini and Gemini 2.0 for multimodal code generation and review.", type: "Guide", url: "https://www.theunwindai.com/p/build-a-multimodal-ai-coding-agent-team-with-o3-mini-and-gemini-2-0" },
    { category: "rag", title: "Agentic RAG App with Reasoning", provider: "The Unwind AI", desc: "Build a fully functional agentic RAG app that combines retrieval with step-by-step reasoning — 100% open source.", type: "Guide", url: "https://www.theunwindai.com/p/build-an-agentic-rag-app-with-reasoning" },
    { category: "rag", title: "Vision RAG App with Gemini 2.5 Flash", provider: "The Unwind AI", desc: "Multimodal RAG system handling images and text using Gemini 2.5 Flash — step-by-step open-source guide.", type: "Guide", url: "https://www.theunwindai.com/p/build-a-vision-rag-app-with-gemini-2-5-flash" },
    { category: "rag", title: "RAG App with Hybrid Search", provider: "The Unwind AI", desc: "Build RAG with hybrid search using Claude 3.5 Sonnet, OpenAI embeddings, and PostgreSQL for production-grade retrieval.", type: "Guide", url: "https://www.theunwindai.com/p/build-a-rag-app-with-hybrid-search" },
    { category: "rag", title: "Deploy RAG-as-a-Service", provider: "The Unwind AI", desc: "Build and deploy a production RAG service with Claude 3.5 Sonnet in under 50 lines — covers deployment patterns.", type: "Guide", url: "https://www.theunwindai.com/p/build-and-deploy-rag-as-a-service" },
    { category: "fine-tuning", title: "Fine-tune Llama 3.2 in 30 Lines (Free)", provider: "The Unwind AI", desc: "Fine-tune Llama 3.2 for free using Google Colab — covers LoRA setup, dataset prep, and training in 30 lines of Python.", type: "Guide", url: "https://www.theunwindai.com/p/fine-tune-llama-3-2-for-free-in-30-lines-of-python-code" },
    { category: "inference-tools", title: "Local RAG Agent with DeepSeek R1", provider: "The Unwind AI", desc: "Build a local reasoning RAG agent with DeepSeek R1 — runs offline with full retrieval and chain-of-thought.", type: "Guide", url: "https://www.theunwindai.com/p/build-a-local-rag-reasoning-agent-with-deepseek-r1" },
    { category: "inference-tools", title: "Local ChatGPT Clone with Llama 3.1", provider: "The Unwind AI", desc: "Build a local chatbot with memory and vector database — 100% free, no internet required, using Llama 3.1.", type: "Guide", url: "https://www.theunwindai.com/p/build-a-local-chatgpt-clone-with-memory-using-llama-3-1" }
];

const categoryMeta = {
    "all": { icon: "☰", label: "All Topics", desc: "Browse all curated resources", summary: "" },
    "cc-awesome": { icon: "⭐", label: "Awesome Lists", desc: "Community-curated Claude Code collections", summary: "Awesome lists save you hours of research." },
    "cc-docs": { icon: "📚", label: "Official Docs", desc: "Claude Code documentation", summary: "Start here for authoritative information." },
    "cc-learn": { icon: "🎓", label: "Tutorials & Courses", desc: "Learning materials for Claude Code", summary: "Follow these courses for structured learning." },
    "cc-patterns": { icon: "🔧", label: "Patterns & Workflows", desc: "Best practices and patterns", summary: "Learn battle-tested patterns." },
    "cc-ecosystem": { icon: "🌐", label: "Ecosystem", desc: "MCP servers and integrations", summary: "Extend Claude Code with the ecosystem." },
    "prompt-eng": { icon: "💡", label: "Prompt Engineering", desc: "Master the art of prompting", summary: "Good prompts = better results." },
    "ai-agents": { icon: "🤖", label: "AI Agents", desc: "Build autonomous AI agents", summary: "The future of AI is agentic." },
    "ai-coding": { icon: "⌨️", label: "AI Coding", desc: "AI-powered coding tools", summary: "Your AI pair programmer." },
    "ml-foundations": { icon: "📊", label: "ML Foundations", desc: "Core machine learning concepts", summary: "Build strong foundations." },
    "deep-learning": { icon: "🧠", label: "Deep Learning", desc: "Neural networks and deep learning", summary: "Understand the tech behind AI." },
    "llm": { icon: "📝", label: "LLMs", desc: "Large language models", summary: "The engines powering modern AI." },
    "rl": { icon: "🎮", label: "Reinforcement Learning", desc: "Learn from experience", summary: "Train agents through interaction." },
    "mlops": { icon: "🚀", label: "MLOps", desc: "ML deployment and operations", summary: "Ship ML to production." },
    "google-ai": { icon: "🔵", label: "Google AI", desc: "Google's AI tools and courses", summary: "Learn with Google's ecosystem." },
    "cs-fundamentals": { icon: "💻", label: "CS Fundamentals", desc: "Computer science basics", summary: "Essential knowledge for any developer." },
    "free-textbooks": { icon: "📖", label: "Free Textbooks", desc: "Free ML and AI books", summary: "Learn from the best textbooks, free." },
    "youtube": { icon: "▶️", label: "YouTube", desc: "Great AI YouTube channels", summary: "Visual learning from experts." },
    "ai-frameworks": { icon: "🔧", label: "AI Frameworks", desc: "ML libraries and tools", summary: "The building blocks of AI." },
    "inference-tools": { icon: "⚡", label: "Inference Tools", desc: "Run AI models efficiently", summary: "Optimize your AI deployments." },
    "fine-tuning": { icon: "🎛️", label: "Fine-Tuning", desc: "Customize AI models", summary: "Make models your own." },
    "rag": { icon: "🔍", label: "RAG & Vector", desc: "Retrieval and embeddings", summary: "Ground AI in your data." },
    "books": { icon: "📕", label: "Books", desc: "Recommended reading", summary: "Deep dive into concepts." },
    "ai-news": { icon: "📰", label: "AI News", desc: "Latest tutorials and news", summary: "Stay current with AI." }
};
