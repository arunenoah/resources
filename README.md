# Learning Resources Hub

A curated, interactive collection of **87+ free AI, ML, and developer resources** with gamified learning paths, quizzes, and progress tracking — all running client-side with zero backend.

## Features

### Resource Library
- **87+ hand-picked resources** across 23 categories (Claude Code, AI Agents, RAG, MLOps, Fine-Tuning, and more)
- Full-text search across titles, descriptions, providers, and types
- Bookmark and mark-complete tracking
- Color-coded resource types: Course, Video, Book, GitHub, Docs, Blog, Guide

### Learning Paths
Four structured paths from beginner to advanced:

| Path | Level | Duration | Points |
|------|-------|----------|--------|
| Claude Code Mastery | Beginner | 2-3 weeks | 500 |
| AI Engineer Path | Intermediate | 4-6 weeks | 800 |
| ML Foundations | Intermediate | 8-10 weeks | 1000 |
| Autonomous Coding Agent | Advanced | 3-4 weeks | 700 |

### Gamification
- **Points system** — earn points for visiting, bookmarking, completing resources, and acing quizzes
- **10 unlockable badges** — First Explorer, Quiz Master, Streak Warrior, and more
- **Daily streak tracking** with bonus rewards
- **Knowledge quizzes** — Prompt Engineering, AI Agents, ML Fundamentals

### Dashboard
- Personal stats (points, streak, completions, bookmarks)
- Progress bar toward milestones
- Badge collection with lock/unlock states
- Recent activity feed

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Persistence | localStorage |
| Build tools | None — zero dependencies |

## Project Structure

```
resources/
├── index.html          # Main HTML entry point
├── css/
│   └── styles.css      # All styles (~1340 lines)
├── js/
│   ├── app.js          # Application logic — views, rendering, events
│   └── data.js         # Resource data, learning paths, quizzes, badges
├── .gitignore
└── README.md
```

## Getting Started

No build step required. Open `index.html` in any modern browser:

```bash
# Clone and open
git clone <repo-url>
cd resources
open index.html

# Or use a local server
npx serve .
# python3 -m http.server 8000
```

## Resource Categories

**Claude Code** — Awesome Lists, Official Docs, Tutorials, Patterns & Workflows, Ecosystem (MCP)

**AI / ML Core** — Prompt Engineering, AI Agents, AI Coding, ML Foundations, Deep Learning, LLMs, Reinforcement Learning

**Tools & Infrastructure** — MLOps, AI Frameworks, Inference Tools, Fine-Tuning, RAG & Vector Search

**Learning** — Google AI, CS Fundamentals, Free Textbooks, YouTube Channels, Books, AI News & Tutorials

## Adding Resources

Add entries to the `resources` array in `js/data.js`:

```javascript
{
    category: "ai-agents",           // Must match a key in categoryMeta
    title: "Resource Title",
    provider: "Provider Name",
    desc: "Short description of the resource.",
    type: "Guide",                   // Course | Video | Book | GitHub | Docs | Blog | Guide | Channel
    url: "https://example.com"
}
```

To add a new category, also add an entry to the `categoryMeta` object in the same file.

## Data Persistence

All user state is stored in `localStorage` under the key `resources_user_state`:

- Visited / bookmarked / completed resources
- Learning path progress
- Quiz scores
- Points, streak, and earned badges

Clear localStorage to reset all progress.

## License

MIT
