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

// ── Render resource cards ──
function renderCards(filtered) {
    const grid = document.getElementById("resourceGrid");
    if (filtered.length === 0) {
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

    // Render summary guide if available
    const existingSummary = header.querySelector(".topic-summary");
    if (existingSummary) existingSummary.remove();

    if (meta.summary) {
        const summaryEl = document.createElement("div");
        summaryEl.className = "topic-summary";
        summaryEl.innerHTML = meta.summary
            .replace(/Why:/g, '<strong>Why:</strong>')
            .replace(/How to use:/g, '<strong>How to use:</strong>');
        header.appendChild(summaryEl);
    }

    renderCards(filtered);
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
