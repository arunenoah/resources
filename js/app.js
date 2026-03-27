// ── Badge class mapping ──
function badgeClass(type) {
    const t = type.toLowerCase();
    if (t === "course")     return "badge-course";
    if (t === "video")      return "badge-video";
    if (t === "book")       return "badge-book";
    if (t === "whitepaper") return "badge-whitepaper";
    if (t === "channel")    return "badge-channel";
    if (t === "github")     return "badge-github";
    if (t === "docs")       return "badge-docs";
    if (t === "blog")       return "badge-blog";
    if (t === "website")    return "badge-website";
    if (t === "guide")      return "badge-video";
    return "badge-course";
}

// ── Build sidebar topic list from data ──
function buildSidebar() {
    const topicList = document.getElementById("topicList");
    const totalCount = resources.length;

    // "All Topics" item
    const allItem = document.createElement("div");
    allItem.className = "topic-item all-topics active";
    allItem.dataset.category = "all";
    allItem.innerHTML = `
        <span class="topic-icon">${categoryMeta["all"].icon}</span>
        <span class="topic-name">${categoryMeta["all"].label}</span>
        <span class="topic-count" id="totalCount">${totalCount}</span>
    `;
    topicList.appendChild(allItem);

    // Category items (preserve order from categoryMeta, skip "all")
    const categoryOrder = Object.keys(categoryMeta).filter(k => k !== "all");

    categoryOrder.forEach(cat => {
        const count = resources.filter(r => r.category === cat).length;
        if (count === 0) return;

        const meta = categoryMeta[cat];
        const item = document.createElement("div");
        item.className = "topic-item";
        item.dataset.category = cat;
        item.innerHTML = `
            <span class="topic-icon">${meta.icon}</span>
            <span class="topic-name">${meta.label}</span>
            <span class="topic-count">${count}</span>
        `;
        topicList.appendChild(item);
    });

    // Update subtitle with dynamic count
    document.querySelector(".sidebar-header p").textContent =
        `${totalCount}+ Free AI & ML Resources`;
}

// ── Resource Popup ──
const popup = document.createElement("div");
popup.id = "resourcePopup";
popup.className = "resource-popup";
document.body.appendChild(popup);

let popupTimer = null;

function extractSections(summary) {
    if (!summary) return { why: "", how: "" };
    const whyMatch  = summary.match(/Why:\s*(.*?)(?=How to use:|$)/s);
    const howMatch  = summary.match(/How to use:\s*(.*?)$/s);
    return {
        why: whyMatch ? whyMatch[1].trim() : "",
        how: howMatch ? howMatch[1].trim() : ""
    };
}

function positionPopup(cardEl) {
    const r   = cardEl.getBoundingClientRect();
    const pw  = 340;
    const gap = 14;
    const vw  = window.innerWidth;
    const vh  = window.innerHeight;

    let left = r.right + gap;
    if (left + pw > vw - gap) left = r.left - pw - gap;
    if (left < gap) left = gap;

    let top = r.top;
    const ph = popup.offsetHeight;
    if (top + ph > vh - gap) top = vh - ph - gap;
    if (top < gap) top = gap;

    popup.style.left = left + "px";
    popup.style.top  = top  + "px";
}

function showPopup(resource, cardEl) {
    clearTimeout(popupTimer);
    const meta = categoryMeta[resource.category] || {};
    const catSections = extractSections(meta.summary);
    const why = resource.why || catSections.why;
    const how = resource.how || catSections.how;

    popup.innerHTML = `
        <div class="popup-header">
            <div class="popup-title-row">
                <span class="popup-title">${resource.title}</span>
                <span class="card-badge ${badgeClass(resource.type)}">${resource.type}</span>
            </div>
            ${resource.provider ? `<div class="popup-provider">${resource.provider}</div>` : ""}
        </div>
        <div class="popup-body">
            <div class="popup-section">
                <div class="popup-label">What it is</div>
                <p class="popup-text">${resource.desc}</p>
            </div>
            ${why ? `<div class="popup-section">
                <div class="popup-label">Why it matters</div>
                <p class="popup-text">${why}</p>
            </div>` : ""}
            ${how ? `<div class="popup-section">
                <div class="popup-label">How it helps you</div>
                <p class="popup-text">${how}</p>
            </div>` : ""}
        </div>
        <div class="popup-footer">
            <a class="popup-cta" href="${resource.url}" target="_blank" rel="noopener noreferrer">
                Open Resource
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
        </div>`;

    popup.classList.add("popup-visible");
    positionPopup(cardEl);
}

function schedulePopup(resource, cardEl) {
    clearTimeout(popupTimer);
    popupTimer = setTimeout(() => showPopup(resource, cardEl), 220);
}

function hidePopup() {
    clearTimeout(popupTimer);
    popupTimer = setTimeout(() => popup.classList.remove("popup-visible"), 160);
}

popup.addEventListener("mouseenter", () => clearTimeout(popupTimer));
popup.addEventListener("mouseleave", hidePopup);

// ── Render resource cards ──
function renderCards(filtered) {
    const grid = document.getElementById("resourceGrid");
    if (filtered.length === 0) {
        hidePopup();
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
                <p>No resources found</p>
            </div>`;
        return;
    }
    grid.innerHTML = filtered.map(r => `
        <div class="resource-card">
            <div class="card-top">
                <span class="card-title">${r.title}</span>
                <span class="card-badge ${badgeClass(r.type)}">${r.type}</span>
            </div>
            ${r.provider ? `<div class="card-provider">${r.provider}</div>` : ""}
            <p class="card-desc">${r.desc}</p>
            <a class="card-link" href="${r.url}" target="_blank" rel="noopener noreferrer">
                Open Resource
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
        </div>
    `).join("");

    grid.querySelectorAll(".resource-card").forEach((card, i) => {
        card.addEventListener("mouseenter", () => schedulePopup(filtered[i], card));
        card.addEventListener("mouseleave", hidePopup);
    });
}

// ── Dashboard view (shown when "All Topics" is active and no search query) ──
function renderDashboard() {
    const grid = document.getElementById("resourceGrid");

    const totalCount = resources.length;
    const categories = Object.keys(categoryMeta).filter(k => k !== "all");
    const catCount = categories.filter(cat => resources.some(r => r.category === cat)).length;

    // Count by type
    const typeCounts = {};
    resources.forEach(r => { typeCounts[r.type] = (typeCounts[r.type] || 0) + 1; });
    const typesSorted = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);

    // Highlight stats
    const githubCount = typeCounts["GitHub"] || 0;
    const courseCount = typeCounts["Course"] || 0;
    const bookCount   = (typeCounts["Book"] || 0);

    grid.innerHTML = `
        <div class="dashboard" style="grid-column: 1 / -1;">

            <!-- Stat row -->
            <div class="dash-stats">
                <div class="stat-card stat-card--primary">
                    <div class="stat-value">${totalCount}</div>
                    <div class="stat-label">Total Resources</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${catCount}</div>
                    <div class="stat-label">Topics</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${githubCount}</div>
                    <div class="stat-label">GitHub Repos</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${courseCount}</div>
                    <div class="stat-label">Courses</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${bookCount}</div>
                    <div class="stat-label">Books</div>
                </div>
            </div>

            <!-- Type breakdown -->
            <div class="dash-section">
                <div class="dash-section-title">Resources by type</div>
                <div class="type-pills">
                    ${typesSorted.map(([type, count]) => `
                        <span class="type-pill ${badgeClass(type)}">
                            ${type}&nbsp;<strong>${count}</strong>
                        </span>`).join("")}
                </div>
            </div>

            <!-- Category cards -->
            <div class="dash-section">
                <div class="dash-section-title">Browse by topic</div>
                <div class="category-grid">
                    ${categories.map(cat => {
                        const meta = categoryMeta[cat];
                        const count = resources.filter(r => r.category === cat).length;
                        if (!count) return "";
                        return `
                        <div class="cat-card" data-nav-category="${cat}">
                            <div class="cat-card-header">
                                <div class="cat-card-title">
                                    <span class="cat-card-icon">${meta.icon}</span>
                                    ${meta.label}
                                </div>
                                <span class="cat-card-count">${count}</span>
                            </div>
                            <div class="cat-card-desc">${meta.desc}</div>
                            <div class="cat-card-browse">
                                Browse
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                            </div>
                        </div>`;
                    }).join("")}
                </div>
            </div>

        </div>`;

    // Wire category card clicks
    grid.querySelectorAll(".cat-card[data-nav-category]").forEach(card => {
        card.addEventListener("click", () => {
            const cat = card.dataset.navCategory;
            activeCategory = cat;
            document.querySelectorAll(".topic-item").forEach(el => el.classList.remove("active"));
            document.querySelector(`.topic-item[data-category="${cat}"]`)?.classList.add("active");
            filterAndRender();
            document.getElementById("content").scrollTop = 0;
        });
    });
}

// ── Filter and render ──
let activeCategory = "all";

function filterAndRender() {
    const query = document.getElementById("searchBox").value.toLowerCase().trim();
    let filtered = resources;

    if (activeCategory !== "all") {
        filtered = filtered.filter(r => r.category === activeCategory);
    }

    if (query) {
        filtered = filtered.filter(r =>
            r.title.toLowerCase().includes(query) ||
            r.desc.toLowerCase().includes(query) ||
            r.provider.toLowerCase().includes(query) ||
            r.type.toLowerCase().includes(query)
        );
    }

    const meta = categoryMeta[activeCategory];
    const header = document.getElementById("contentHeader");
    header.querySelector("h2").textContent = meta.label;
    header.querySelector("p").textContent = meta.desc;

    // Summary guide
    const existingSummary = header.querySelector(".topic-summary");
    if (existingSummary) existingSummary.remove();

    if (meta.summary && (activeCategory !== "all" || query)) {
        const summaryEl = document.createElement("div");
        summaryEl.className = "topic-summary";
        summaryEl.innerHTML = meta.summary
            .replace(/Why:/g, '<strong>Why:</strong>')
            .replace(/How to use:/g, '<strong>How to use:</strong>');
        header.appendChild(summaryEl);
    }

    // Show dashboard when on "all" with no active search
    if (activeCategory === "all" && !query) {
        renderDashboard();
    } else {
        renderCards(filtered);
    }
}

// ── Event listeners ──

// Topic click
document.getElementById("topicList").addEventListener("click", (e) => {
    const item = e.target.closest(".topic-item");
    if (!item) return;

    document.querySelectorAll(".topic-item").forEach(el => el.classList.remove("active"));
    item.classList.add("active");
    activeCategory = item.dataset.category;
    filterAndRender();

    // Scroll content to top
    document.getElementById("content").scrollTop = 0;
});

// Search
document.getElementById("searchBox").addEventListener("input", filterAndRender);

// ── Initialize ──
buildSidebar();
filterAndRender();
