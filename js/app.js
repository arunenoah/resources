// ── STATE ──
let activeCategory = "all";
let currentView = "resources";
let userState = getUserState();

// ── INIT ──
function init() {
    userState = updateStreak();
    buildSidebar();
    buildHeader();
    renderCurrentView();
    initAnimations();
}

// ── HEADER WITH USER DASHBOARD ──
function buildHeader() {
    const header = document.getElementById("contentHeader");
    header.innerHTML = `
        <div class="header-content">
            <div class="header-left">
                <h2 id="viewTitle">All Topics</h2>
                <p id="viewDesc">Browse curated AI & programming resources</p>
            </div>
            <div class="header-right">
                <div class="streak-badge" id="streakBadge">
                    <span class="streak-icon">🔥</span>
                    <span class="streak-count">${userState.streak.current}</span>
                    <span class="streak-label">day streak</span>
                </div>
                <div class="points-badge">
                    <span class="points-icon">⭐</span>
                    <span class="points-count">${userState.points}</span>
                </div>
                <button class="dashboard-btn" id="dashboardBtn">
                    <span>📊</span> My Dashboard
                </button>
                <button class="paths-btn" id="pathsBtn">
                    <span>🛤️</span> Learning Paths
                </button>
                <button class="quiz-btn" id="quizBtn">
                    <span>❓</span> Quizzes
                </button>
            </div>
        </div>
    `;
    
    document.getElementById("dashboardBtn").onclick = () => showDashboard();
    document.getElementById("pathsBtn").onclick = () => showLearningPaths();
    document.getElementById("quizBtn").onclick = () => showQuizzes();
}

// ── SIDEBAR ──
function buildSidebar() {
    const topicList = document.getElementById("topicList");
    topicList.innerHTML = "";
    
    const navItems = [
        { id: "resources", icon: "🏠", label: "Resources", category: "all" },
        { id: "bookmarks", icon: "🔖", label: "Bookmarks", category: "bookmarks" },
    ];
    
    navItems.forEach(item => {
        const el = document.createElement("div");
        el.className = `nav-item ${item.id === 'resources' && activeCategory === item.category ? 'active' : ''}`;
        el.innerHTML = `<span class="nav-icon">${item.icon}</span><span>${item.label}</span>`;
        el.onclick = () => {
            document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
            el.classList.add("active");
            if (item.id === "resources") {
                showResources();
            } else if (item.id === "bookmarks") {
                showBookmarks();
            }
        };
        topicList.appendChild(el);
    });
    
    // Divider
    const divider = document.createElement("div");
    divider.className = "sidebar-divider";
    divider.textContent = "Categories";
    topicList.appendChild(divider);
    
    // Category items
    const categoryOrder = Object.keys(categoryMeta).filter(k => k !== "all");
    categoryOrder.forEach(cat => {
        const count = resources.filter(r => r.category === cat).length;
        if (count === 0) return;
        
        const meta = categoryMeta[cat];
        const item = document.createElement("div");
        item.className = `topic-item ${activeCategory === cat ? 'active' : ''}`;
        item.dataset.category = cat;
        item.innerHTML = `
            <span class="topic-icon">${meta.icon}</span>
            <span class="topic-name">${meta.label}</span>
            <span class="topic-count">${count}</span>
        `;
        item.onclick = () => {
            document.querySelectorAll(".topic-item").forEach(t => t.classList.remove("active"));
            item.classList.add("active");
            activeCategory = cat;
            showResources();
        };
        topicList.appendChild(item);
    });
    
    document.querySelector(".sidebar-header p").textContent = 
        `${resources.length} Resources • ${userState.points} points`;
}

// ── VIEWS ──
function showResources() {
    currentView = "resources";
    const header = document.getElementById("contentHeader");
    const meta = categoryMeta[activeCategory] || categoryMeta["all"];
    header.querySelector("#viewTitle").textContent = meta.label;
    header.querySelector("#viewDesc").textContent = meta.desc;
    filterAndRender();
}

function showDashboard() {
    currentView = "dashboard";
    const grid = document.getElementById("resourceGrid");
    const header = document.getElementById("contentHeader");
    header.querySelector("#viewTitle").textContent = "My Dashboard";
    header.querySelector("#viewDesc").textContent = "Track your learning journey";
    
    const earnedBadges = badges.filter(b => userState.badges.includes(b.id));
    const progressPercent = Math.round((userState.completedResources.length / 50) * 100);
    
    grid.innerHTML = `
        <div class="dashboard-view" style="grid-column: 1 / -1;">
            <!-- Stats Cards -->
            <div class="dash-stats">
                <div class="stat-card stat-primary">
                    <div class="stat-icon">⭐</div>
                    <div class="stat-value">${userState.points}</div>
                    <div class="stat-label">Points Earned</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-value">${userState.streak.current}</div>
                    <div class="stat-label">Day Streak</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📚</div>
                    <div class="stat-value">${userState.completedResources.length}</div>
                    <div class="stat-label">Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🔖</div>
                    <div class="stat-value">${userState.bookmarkedResources.length}</div>
                    <div class="stat-label">Bookmarked</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">👀</div>
                    <div class="stat-value">${userState.visitedResources.length}</div>
                    <div class="stat-label">Visited</div>
                </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="progress-section">
                <h3>Learning Progress</h3>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${progressPercent}%"></div>
                </div>
                <p class="progress-text">${progressPercent}% to Knowledge Seeker badge (50 completions)</p>
            </div>
            
            <!-- Badges Section -->
            <div class="badges-section">
                <h3>🏅 Your Badges (${earnedBadges.length}/${badges.length})</h3>
                <div class="badges-grid">
                    ${badges.map(badge => {
                        const earned = userState.badges.includes(badge.id);
                        return `
                            <div class="badge-card ${earned ? 'earned' : 'locked'}">
                                <div class="badge-icon">${earned ? badge.icon : '🔒'}</div>
                                <div class="badge-name">${badge.name}</div>
                                <div class="badge-desc">${badge.desc}</div>
                                ${!earned ? `<div class="badge-progress">Locked</div>` : ''}
                            </div>
                        `;
                    }).join("")}
                </div>
            </div>
            
            <!-- Recent Activity -->
            <div class="activity-section">
                <h3>Recent Activity</h3>
                <div class="activity-list">
                    ${userState.completedResources.slice(-5).reverse().map(id => {
                        const r = resources.find(res => res.id === id || res.title === id);
                        return r ? `
                            <div class="activity-item">
                                <span class="activity-icon">✅</span>
                                <span>Completed: ${r.title}</span>
                                <span class="activity-points">+${POINTS.complete} pts</span>
                            </div>
                        ` : '';
                    }).join("") || '<p class="no-activity">Start exploring resources to see activity!</p>'}
                </div>
            </div>
        </div>
    `;
}

function showLearningPaths() {
    currentView = "paths";
    const grid = document.getElementById("resourceGrid");
    const header = document.getElementById("contentHeader");
    header.querySelector("#viewTitle").textContent = "Learning Paths";
    header.querySelector("#viewDesc").textContent = "Structured journeys to master AI skills";
    
    grid.innerHTML = `
        <div class="paths-view" style="grid-column: 1 / -1;">
            <p class="paths-intro">Follow these curated paths to go from beginner to expert. Each path combines the best resources in a logical order.</p>
            <div class="paths-grid">
                ${learningPaths.map(path => {
                    const progress = userState.pathProgress[path.id] || 0;
                    const started = progress > 0;
                    return `
                        <div class="path-card" style="--path-color: ${path.color}">
                            <div class="path-header">
                                <div class="path-icon">${path.icon}</div>
                                <div class="path-info">
                                    <h3 class="path-title">${path.title}</h3>
                                    <p class="path-desc">${path.description}</p>
                                </div>
                            </div>
                            <div class="path-meta">
                                <span class="path-diff ${path.difficulty.toLowerCase()}">${path.difficulty}</span>
                                <span class="path-duration">⏱️ ${path.duration}</span>
                                <span class="path-points">⭐ ${path.points} pts</span>
                            </div>
                            <div class="path-progress-bar">
                                <div class="path-progress-fill" style="width: ${progress}%"></div>
                            </div>
                            <div class="path-steps">
                                ${path.steps.map((step, i) => {
                                    const stepProgress = userState.pathProgress[path.id + '_step_' + i] || false;
                                    return `
                                        <div class="path-step ${stepProgress ? 'done' : ''}" data-path="${path.id}" data-step="${i}">
                                            <div class="step-checkbox">${stepProgress ? '✓' : (i + 1)}</div>
                                            <span class="step-title">${step.title}</span>
                                        </div>
                                    `;
                                }).join("")}
                            </div>
                            <button class="path-start-btn ${started ? 'continue' : ''}" data-path="${path.id}">
                                ${started ? 'Continue Path' : 'Start Path'}
                            </button>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
    
    // Path step click handlers
    grid.querySelectorAll(".path-step").forEach(stepEl => {
        stepEl.onclick = () => {
            const pathId = stepEl.dataset.path;
            const stepIdx = parseInt(stepEl.dataset.step);
            togglePathStep(pathId, stepIdx);
        };
    });
    
    // Start/Continue button handlers
    grid.querySelectorAll(".path-start-btn").forEach(btn => {
        btn.onclick = () => {
            const pathId = btn.dataset.path;
            const path = learningPaths.find(p => p.id === pathId);
            const firstIncomplete = path.steps.findIndex((s, i) => !userState.pathProgress[pathId + '_step_' + i]);
            if (firstIncomplete !== -1) {
                togglePathStep(pathId, firstIncomplete);
            }
        };
    });
}

function togglePathStep(pathId, stepIdx) {
    const path = learningPaths.find(p => p.id === pathId);
    const stepKey = pathId + '_step_' + stepIdx;
    const step = path.steps[stepIdx];
    const resource = resources.find(r => r.category === step.resource);
    
    if (userState.pathProgress[stepKey]) {
        delete userState.pathProgress[stepKey];
    } else {
        userState.pathProgress[stepKey] = true;
        userState.completedResources.push(step.title);
        userState.points += POINTS.complete * 0.5;
        if (resource) {
            userState.visitedResources.push(resource.title);
        }
    }
    
    // Update path progress percentage
    const completedSteps = path.steps.filter((s, i) => userState.pathProgress[pathId + '_step_' + i]).length;
    userState.pathProgress[pathId] = Math.round((completedSteps / path.steps.length) * 100);
    
    saveUserState(userState);
    checkBadges(userState);
    showLearningPaths();
}

function showQuizzes() {
    currentView = "quizzes";
    const grid = document.getElementById("resourceGrid");
    const header = document.getElementById("contentHeader");
    header.querySelector("#viewTitle").textContent = "Knowledge Quizzes";
    header.querySelector("#viewDesc").textContent = "Test your understanding and earn bonus points";
    
    grid.innerHTML = `
        <div class="quizzes-view" style="grid-column: 1 / -1;">
            <p class="quizzes-intro">Test what you've learned! Complete quizzes to earn bonus points and the Quiz Master badge.</p>
            <div class="quizzes-grid">
                ${quizzes.map(quiz => {
                    const score = userState.quizScores[quiz.id];
                    const completed = score !== undefined;
                    const perfect = score === 100;
                    return `
                        <div class="quiz-card" data-quiz="${quiz.id}">
                            <div class="quiz-icon">${quiz.icon}</div>
                            <h3 class="quiz-title">${quiz.title}</h3>
                            <p class="quiz-meta">${quiz.questions.length} questions</p>
                            ${completed ? `
                                <div class="quiz-score ${perfect ? 'perfect' : ''}">
                                    ${perfect ? '🌟' : '📝'} Score: ${score}%
                                </div>
                            ` : '<div class="quiz-new">New</div>'}
                            <button class="quiz-start-btn" data-quiz="${quiz.id}">
                                ${completed ? 'Retake Quiz' : 'Start Quiz'}
                            </button>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
    
    grid.querySelectorAll(".quiz-start-btn").forEach(btn => {
        btn.onclick = () => startQuiz(btn.dataset.quiz);
    });
}

function startQuiz(quizId) {
    const quiz = quizzes.find(q => q.id === quizId);
    if (!quiz) return;
    
    let currentQ = 0;
    let answers = [];
    
    function renderQuestion() {
        const q = quiz.questions[currentQ];
        const grid = document.getElementById("resourceGrid");
        const header = document.getElementById("contentHeader");
        header.querySelector("#viewTitle").textContent = quiz.title;
        header.querySelector("#viewDesc").textContent = `Question ${currentQ + 1} of ${quiz.questions.length}`;
        
        grid.innerHTML = `
            <div class="quiz-active" style="grid-column: 1 / -1;">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar" style="width: ${((currentQ) / quiz.questions.length) * 100}%"></div>
                </div>
                <div class="quiz-question-card">
                    <div class="quiz-question-num">Question ${currentQ + 1}</div>
                    <h3 class="quiz-question">${q.q}</h3>
                    <div class="quiz-options">
                        ${q.options.map((opt, i) => `
                            <button class="quiz-option" data-idx="${i}">${opt}</button>
                        `).join("")}
                    </div>
                    <div class="quiz-feedback" id="quizFeedback" style="display: none;"></div>
                    <button class="quiz-next-btn" id="quizNextBtn" style="display: none;">
                        ${currentQ < quiz.questions.length - 1 ? 'Next Question →' : 'See Results'}
                    </button>
                </div>
            </div>
        `;
        
        grid.querySelectorAll(".quiz-option").forEach(opt => {
            opt.onclick = () => selectAnswer(parseInt(opt.dataset.idx));
        });
        
        grid.querySelector("#quizNextBtn").onclick = () => {
            currentQ++;
            if (currentQ < quiz.questions.length) {
                renderQuestion();
            } else {
                showQuizResults(quiz, answers);
            }
        };
    }
    
    function selectAnswer(idx) {
        const q = quiz.questions[currentQ];
        const correct = idx === q.correct;
        answers.push({ selected: idx, correct });
        
        document.querySelectorAll(".quiz-option").forEach((opt, i) => {
            opt.disabled = true;
            if (i === q.correct) opt.classList.add("correct");
            else if (i === idx && !correct) opt.classList.add("wrong");
        });
        
        const feedback = document.getElementById("quizFeedback");
        feedback.style.display = "block";
        feedback.innerHTML = correct 
            ? '<span class="correct-text">✅ Correct! +10 points</span>'
            : '<span class="wrong-text">❌ Incorrect. The answer is highlighted above.</span>';
        
        document.getElementById("quizNextBtn").style.display = "block";
    }
    
    renderQuestion();
}

function showQuizResults(quiz, answers) {
    const correct = answers.filter(a => a.correct).length;
    const score = Math.round((correct / quiz.questions.length) * 100);
    const bonusPoints = Math.round(score / 10) * POINTS.quiz_correct;
    
    userState.quizScores[quiz.id] = score;
    userState.points += bonusPoints;
    saveUserState(userState);
    checkBadges(userState);
    
    const grid = document.getElementById("resourceGrid");
    const header = document.getElementById("contentHeader");
    header.querySelector("#viewTitle").textContent = "Quiz Results";
    header.querySelector("#viewDesc").textContent = score === 100 ? "Perfect score! 🏆" : `${score}% correct`;
    
    grid.innerHTML = `
        <div class="quiz-results" style="grid-column: 1 / -1;">
            <div class="results-card ${score === 100 ? 'perfect' : score >= 70 ? 'good' : 'needs-work'}">
                <div class="results-score">${score}%</div>
                <div class="results-label">${score === 100 ? 'Perfect!' : score >= 70 ? 'Well done!' : 'Keep learning!'}</div>
                <div class="results-breakdown">
                    ${correct} of ${quiz.questions.length} correct
                </div>
                <div class="results-points">+${bonusPoints} bonus points earned</div>
            </div>
            <div class="results-actions">
                <button class="btn-secondary" onclick="showQuizzes()">← Back to Quizzes</button>
                <button class="btn-primary" onclick="showLearningPaths()">Explore Learning Paths</button>
            </div>
        </div>
    `;
}

function showBookmarks() {
    currentView = "bookmarks";
    const header = document.getElementById("contentHeader");
    header.querySelector("#viewTitle").textContent = "Bookmarked Resources";
    header.querySelector("#viewDesc").textContent = `${userState.bookmarkedResources.length} saved resources`;
    
    const grid = document.getElementById("resourceGrid");
    const bookmarked = resources.filter(r => userState.bookmarkedResources.includes(r.title));
    
    if (bookmarked.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon">🔖</div>
                <h3>No bookmarks yet</h3>
                <p>Click the bookmark icon on any resource to save it here.</p>
                <button class="btn-primary" onclick="showResources()">Browse Resources</button>
            </div>
        `;
        return;
    }
    
    renderCards(bookmarked, true);
}

// ── RENDER RESOURCE CARDS ──
function renderCards(filtered, isBookmarks = false) {
    const grid = document.getElementById("resourceGrid");
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon">🔍</div>
                <h3>No resources found</h3>
                <p>Try a different search term or category.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map((r, i) => `
        <div class="resource-card" data-id="${r.title}" data-idx="${i}">
            <div class="card-header">
                <div class="card-badges">
                    <span class="card-badge ${badgeClass(r.type)}">${r.type}</span>
                    <span class="card-category">${categoryMeta[r.category]?.label || r.category}</span>
                </div>
                <button class="bookmark-btn ${userState.bookmarkedResources.includes(r.title) ? 'active' : ''}" data-id="${r.title}">
                    ${userState.bookmarkedResources.includes(r.title) ? '★' : '☆'}
                </button>
            </div>
            <h3 class="card-title">${r.title}</h3>
            ${r.provider ? `<div class="card-provider">${r.provider}</div>` : ""}
            <p class="card-desc">${r.desc}</p>
            <div class="card-footer">
                <button class="complete-btn ${userState.completedResources.includes(r.title) ? 'done' : ''}" data-id="${r.title}">
                    ${userState.completedResources.includes(r.title) ? '✓ Completed' : 'Mark Complete'}
                </button>
                <a class="card-link" href="${r.url}" target="_blank" rel="noopener noreferrer">
                    Open →
                </a>
            </div>
        </div>
    `).join("");
    
    // Bookmark handlers
    grid.querySelectorAll(".bookmark-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            userState = toggleBookmark(btn.dataset.id);
            btn.classList.toggle("active");
            btn.textContent = userState.bookmarkedResources.includes(btn.dataset.id) ? '★' : '☆';
            buildSidebar();
        };
    });
    
    // Complete handlers
    grid.querySelectorAll(".complete-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            userState = markComplete(btn.dataset.id);
            btn.classList.add("done");
            btn.textContent = '✓ Completed';
            buildHeader();
            buildSidebar();
        };
    });
    
    // Track visits
    filtered.forEach(r => trackVisit(r.title));
}

// ── FILTER & SEARCH ──
function filterAndRender() {
    const query = document.getElementById("searchBox")?.value?.toLowerCase().trim() || "";
    let filtered = resources;
    
    if (activeCategory !== "all") {
        filtered = filtered.filter(r => r.category === activeCategory);
    }
    
    if (query) {
        filtered = filtered.filter(r =>
            r.title.toLowerCase().includes(query) ||
            r.desc.toLowerCase().includes(query) ||
            r.provider?.toLowerCase().includes(query) ||
            r.type.toLowerCase().includes(query)
        );
    }
    
    renderCards(filtered);
}

// ── SEARCH ──
document.getElementById("searchBox")?.addEventListener("input", (e) => {
    if (currentView === "resources" || currentView === "bookmarks") {
        if (currentView === "bookmarks") {
            const query = e.target.value.toLowerCase();
            const bookmarked = resources.filter(r => 
                userState.bookmarkedResources.includes(r.title) &&
                (r.title.toLowerCase().includes(query) || r.desc.toLowerCase().includes(query))
            );
            const grid = document.getElementById("resourceGrid");
            if (bookmarked.length === 0 && query) {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <div class="empty-icon">🔍</div>
                        <h3>No matches found</h3>
                        <p>No bookmarks match "${query}"</p>
                    </div>
                `;
            } else {
                renderCards(bookmarked, true);
            }
        } else {
            filterAndRender();
        }
    }
});

// ── BADGE CLASS ──
function badgeClass(type) {
    const t = type?.toLowerCase() || "";
    if (t === "course") return "badge-course";
    if (t === "video") return "badge-video";
    if (t === "book") return "badge-book";
    if (t === "whitepaper") return "badge-whitepaper";
    if (t === "channel") return "badge-channel";
    if (t === "github") return "badge-github";
    if (t === "docs") return "badge-docs";
    if (t === "blog") return "badge-blog";
    if (t === "website") return "badge-website";
    if (t === "guide") return "badge-guide";
    return "badge-default";
}

// ── ANIMATIONS ──
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".resource-card, .path-card, .quiz-card, .stat-card").forEach(el => {
        observer.observe(el);
    });
}

// ── START ──
document.addEventListener("DOMContentLoaded", init);
