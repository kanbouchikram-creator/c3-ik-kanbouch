<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TP CSS — Maîtriser les Fondamentaux</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=Lora:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0c0c0f;
    --surface: #13131a;
    --surface2: #1a1a24;
    --border: #2a2a3a;
    --accent: #6ee7b7;
    --accent2: #818cf8;
    --accent3: #fb923c;
    --text: #e2e8f0;
    --muted: #64748b;
    --danger: #f87171;
    --success: #6ee7b7;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Lora', Georgia, serif;
    line-height: 1.7;
    min-height: 100vh;
  }

  /* ─── SCROLLBAR ─── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

  /* ─── HEADER ─── */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(12,12,15,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .site-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: -0.03em;
    color: var(--accent);
  }

  .site-logo span { color: var(--accent2); }

  .header-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--muted);
    padding: 4px 10px;
    border-radius: 20px;
  }

  /* ─── HERO ─── */
  .hero {
    padding: 6rem 2rem 4rem;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 300px;
    background: radial-gradient(ellipse at center, rgba(110,231,183,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(110,231,183,0.3);
    padding: 5px 12px;
    border-radius: 20px;
    background: rgba(110,231,183,0.05);
  }

  .hero-tag::before { content: '◉'; font-size: 0.6rem; animation: pulse 2s ease-in-out infinite; }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  .hero h1 em {
    font-style: normal;
    -webkit-text-stroke: 1.5px var(--accent);
    color: transparent;
  }

  .hero-desc {
    font-size: 1.1rem;
    color: var(--muted);
    max-width: 560px;
    margin-bottom: 2.5rem;
  }

  .objectives {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 2rem;
  }

  .obj-item {
    background: var(--surface);
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    transition: background 0.2s;
  }

  .obj-item:hover { background: var(--surface2); }

  .obj-icon {
    font-size: 1.2rem;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .obj-text {
    font-family: 'Syne', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
    line-height: 1.4;
  }

  /* ─── MAIN LAYOUT ─── */
  .layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 0;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 60vh;
  }

  /* ─── SIDEBAR ─── */
  .sidebar {
    position: sticky;
    top: 60px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    padding: 2rem 1rem 2rem 2rem;
    border-right: 1px solid var(--border);
  }

  .sidebar-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1rem;
    padding-left: 4px;
  }

  .nav-list { list-style: none; display: flex; flex-direction: column; gap: 2px; }

  .nav-list a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--muted);
    font-family: 'Syne', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.2s;
    border: 1px solid transparent;
  }

  .nav-list a:hover {
    color: var(--text);
    background: var(--surface2);
    border-color: var(--border);
  }

  .nav-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--accent);
    min-width: 18px;
  }

  /* ─── CONTENT ─── */
  .content { padding: 3rem 3rem 6rem; }

  /* ─── EXERCISE SECTION ─── */
  .exercise {
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.5s ease forwards;
  }

  .exercise:nth-child(1) { animation-delay: 0.1s; }
  .exercise:nth-child(2) { animation-delay: 0.15s; }
  .exercise:nth-child(3) { animation-delay: 0.2s; }
  .exercise:nth-child(4) { animation-delay: 0.25s; }
  .exercise:nth-child(5) { animation-delay: 0.3s; }
  .exercise:nth-child(6) { animation-delay: 0.35s; }
  .exercise:nth-child(7) { animation-delay: 0.4s; }
  .exercise:nth-child(8) { animation-delay: 0.45s; }

  @keyframes fadeIn {
    to { opacity: 1; transform: translateY(0); }
  }

  .exercise-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .exercise-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    font-weight: 500;
    color: var(--bg);
    background: var(--accent);
    padding: 4px 10px;
    border-radius: 4px;
    letter-spacing: 0.05em;
    flex-shrink: 0;
  }

  .exercise-num.purple { background: var(--accent2); }
  .exercise-num.orange { background: var(--accent3); }

  .exercise h2 {
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #fff;
  }

  .exercise-time {
    margin-left: auto;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--muted);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 20px;
    flex-shrink: 0;
  }

  /* ─── SUB SECTION ─── */
  .sub-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .sub-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border);
    background: var(--surface2);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sub-header h3 {
    font-family: 'Syne', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--accent2);
  }

  .sub-body { padding: 1.5rem; }

  /* ─── CODE BLOCK ─── */
  .code-block {
    background: #0a0a0e;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    margin: 1rem 0;
  }

  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;
    background: #111118;
    border-bottom: 1px solid var(--border);
  }

  .code-dots { display: flex; gap: 5px; }
  .code-dots span {
    width: 10px; height: 10px;
    border-radius: 50%;
  }
  .code-dots span:nth-child(1) { background: #ff5f57; }
  .code-dots span:nth-child(2) { background: #febc2e; }
  .code-dots span:nth-child(3) { background: #28c840; }

  .code-lang {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .code-block pre {
    padding: 1.25rem 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    line-height: 1.7;
    color: #a8b4c8;
    overflow-x: auto;
    white-space: pre;
  }

  .kw { color: #818cf8; }
  .sel { color: #6ee7b7; }
  .prop { color: #fb923c; }
  .val { color: #f472b6; }
  .cmt { color: #475569; font-style: italic; }
  .tag { color: #818cf8; }
  .attr { color: #fb923c; }
  .str { color: #6ee7b7; }

  /* ─── QUESTIONS LIST ─── */
  .questions {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 1rem;
  }

  .questions li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.92rem;
    color: var(--text);
    padding: 12px 14px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: border-color 0.2s;
  }

  .questions li:hover { border-color: var(--accent2); }

  .q-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--accent);
    min-width: 22px;
    padding-top: 2px;
    font-weight: 500;
  }

  /* ─── QUIZ ─── */
  .quiz-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .quiz-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 0.2s;
  }

  .quiz-card:hover { border-color: var(--accent2); }

  .quiz-q {
    padding: 1rem 1.5rem;
    font-family: 'Syne', sans-serif;
    font-size: 0.92rem;
    font-weight: 600;
    background: var(--surface2);
    border-bottom: 1px solid var(--border);
    color: #fff;
    display: flex;
    gap: 10px;
  }

  .quiz-qnum {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--accent3);
    font-weight: 400;
    flex-shrink: 0;
    padding-top: 2px;
  }

  .quiz-options { padding: 1rem 1.5rem; display: flex; flex-direction: column; gap: 8px; }

  .quiz-option {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.2s;
    font-size: 0.88rem;
    color: var(--muted);
    font-family: 'JetBrains Mono', monospace;
    user-select: none;
  }

  .quiz-option:hover {
    background: var(--surface2);
    border-color: var(--border);
    color: var(--text);
  }

  .quiz-option.correct {
    background: rgba(110,231,183,0.1);
    border-color: var(--accent);
    color: var(--accent);
  }

  .quiz-option.wrong {
    background: rgba(248,113,113,0.1);
    border-color: var(--danger);
    color: var(--danger);
  }

  .quiz-option input[type="radio"] { display: none; }

  .opt-circle {
    width: 18px; height: 18px;
    border: 1.5px solid var(--border);
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    transition: all 0.2s;
  }

  .quiz-option:hover .opt-circle { border-color: var(--accent2); }
  .quiz-option.correct .opt-circle { background: var(--accent); border-color: var(--accent); color: var(--bg); }
  .quiz-option.wrong .opt-circle { background: var(--danger); border-color: var(--danger); color: var(--bg); }

  /* ─── DIVIDER ─── */
  .divider {
    height: 1px;
    background: linear-gradient(to right, transparent, var(--border), transparent);
    margin: 3rem 0;
  }

  /* ─── SPECIFICITY TABLE ─── */
  .spec-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    margin-top: 1rem;
  }

  .spec-table th {
    text-align: left;
    padding: 10px 14px;
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--muted);
    font-weight: 500;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .spec-table td {
    padding: 10px 14px;
    border: 1px solid var(--border);
    color: var(--text);
  }

  .spec-table tr:hover td { background: var(--surface2); }

  .spec-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 500;
  }

  .spec-low { background: rgba(100,116,139,0.2); color: var(--muted); }
  .spec-med { background: rgba(129,140,248,0.2); color: var(--accent2); }
  .spec-high { background: rgba(251,146,60,0.2); color: var(--accent3); }
  .spec-max { background: rgba(248,113,113,0.2); color: var(--danger); }

  /* ─── CALLOUT ─── */
  .callout {
    border-left: 3px solid var(--accent);
    padding: 1rem 1.25rem;
    background: rgba(110,231,183,0.04);
    border-radius: 0 8px 8px 0;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: var(--text);
  }

  .callout.warn {
    border-left-color: var(--accent3);
    background: rgba(251,146,60,0.04);
  }

  .callout.info {
    border-left-color: var(--accent2);
    background: rgba(129,140,248,0.04);
  }

  .callout strong {
    font-family: 'Syne', sans-serif;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 4px;
    color: var(--accent);
  }

  .callout.warn strong { color: var(--accent3); }
  .callout.info strong { color: var(--accent2); }

  /* ─── PROGRESS ─── */
  .progress-bar {
    height: 3px;
    background: var(--border);
    border-radius: 2px;
    margin-top: 8px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(to right, var(--accent), var(--accent2));
    border-radius: 2px;
    transition: width 0.5s ease;
  }

  /* ─── FOOTER ─── */
  .site-footer {
    border-top: 1px solid var(--border);
    padding: 2rem;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--muted);
  }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 768px) {
    .layout { grid-template-columns: 1fr; }
    .sidebar { display: none; }
    .content { padding: 1.5rem; }
    .hero { padding: 3rem 1.5rem 2rem; }
  }

  /* ─── INLINE CODE ─── */
  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82em;
    background: var(--surface2);
    border: 1px solid var(--border);
    padding: 2px 6px;
    border-radius: 4px;
    color: var(--accent2);
  }

  p { margin-bottom: 0.75rem; color: var(--muted); font-size: 0.9rem; }
  p:last-child { margin-bottom: 0; }

  .text-sm { font-size: 0.85rem; }
</style>
</head>
<body>

<!-- HEADER -->
<header class="site-header">
  <div class="site-logo">TP<span>·</span>CSS</div>
  <div class="header-badge">8 exercices</div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="hero-tag">Travaux Pratiques</div>
  <h1>Maîtriser les <em>Fondamentaux</em> du CSS</h1>
  <p class="hero-desc">De la spécificité des sélecteurs aux animations, en passant par Flexbox, Grid et le Responsive Design.</p>

  <div class="objectives">
    <div class="obj-item">
      <span class="obj-icon">🎯</span>
      <span class="obj-text">Sélecteurs & Spécificité</span>
    </div>
    <div class="obj-item">
      <span class="obj-icon">📦</span>
      <span class="obj-text">Box Model & Positionnement</span>
    </div>
    <div class="obj-item">
      <span class="obj-icon">⬛</span>
      <span class="obj-text">Flexbox & Grid</span>
    </div>
    <div class="obj-item">
      <span class="obj-icon">📱</span>
      <span class="obj-text">Responsive Design</span>
    </div>
    <div class="obj-item">
      <span class="obj-icon">🎨</span>
      <span class="obj-text">Variables & Thèmes</span>
    </div>
    <div class="obj-item">
      <span class="obj-icon">✨</span>
      <span class="obj-text">Transitions & Animations</span>
    </div>
  </div>
</section>

<!-- LAYOUT -->
<div class="layout">

  <!-- SIDEBAR NAV -->
  <aside class="sidebar">
    <p class="sidebar-title">Exercices</p>
    <ul class="nav-list">
      <li><a href="#ex1"><span class="nav-num">01</span>Sélecteurs & Spécificité</a></li>
      <li><a href="#ex2"><span class="nav-num">02</span>Box Model</a></li>
      <li><a href="#ex3"><span class="nav-num">03</span>Flexbox</a></li>
      <li><a href="#ex4"><span class="nav-num">04</span>CSS Grid</a></li>
      <li><a href="#ex5"><span class="nav-num">05</span>Responsive Design</a></li>
      <li><a href="#ex6"><span class="nav-num">06</span>Variables CSS</a></li>
      <li><a href="#ex7"><span class="nav-num">07</span>Transitions & Animations</a></li>
      <li><a href="#ex8"><span class="nav-num">08</span>Quiz de révision</a></li>
    </ul>
  </aside>

  <!-- CONTENT -->
  <main class="content">

    <!-- ── EXERCICE 1 ── -->
    <section class="exercise" id="ex1">
      <div class="exercise-header">
        <span class="exercise-num">EX 01</span>
        <h2>Sélecteurs & Spécificité</h2>
      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>1.1 — Sélecteurs CSS</h3></div>
        <div class="sub-body">
          <p>Étant donné le HTML suivant, écrivez les sélecteurs CSS demandés :</p>

          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">HTML</span></div>
            <pre><span class="tag">&lt;nav</span> <span class="attr">class</span>=<span class="str">"main-nav"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;ul&gt;</span>
    <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="str">"/"</span> <span class="attr">class</span>=<span class="str">"active"</span><span class="tag">&gt;</span>Accueil<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="str">"/about"</span><span class="tag">&gt;</span>À propos<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="str">"/contact"</span><span class="tag">&gt;</span>Contact<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;main&gt;</span>
  <span class="tag">&lt;article</span> <span class="attr">class</span>=<span class="str">"post featured"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;h2&gt;</span>Premier article<span class="tag">&lt;/h2&gt;</span>
    <span class="tag">&lt;p&gt;</span>Contenu...<span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;/article&gt;</span>
  <span class="tag">&lt;article</span> <span class="attr">class</span>=<span class="str">"post"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;h2&gt;</span>Deuxième article<span class="tag">&lt;/h2&gt;</span>
    <span class="tag">&lt;p&gt;</span>Contenu...<span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;/article&gt;</span>
<span class="tag">&lt;/main&gt;</span></pre>
          </div>

          <ul class="questions">
            <li><span class="q-num">Q1.</span>Sélectionnez tous les liens dans la navigation → <code>.main-nav a</code></li>
            <li><span class="q-num">Q2.</span>Sélectionnez uniquement le lien actif → <code>.main-nav a.active</code></li>
            <li><span class="q-num">Q3.</span>Sélectionnez l'article avec la classe <code>featured</code> → <code>article.featured</code> ou <code>.post.featured</code></li>
            <li><span class="q-num">Q4.</span>Sélectionnez le premier paragraphe de chaque article → <code>article p:first-of-type</code></li>
            <li><span class="q-num">Q5.</span>Sélectionnez les éléments <code>&lt;li&gt;</code> pairs → <code>li:nth-child(even)</code></li>
          </ul>
        </div>
      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>1.2 — Spécificité</h3></div>
        <div class="sub-body">
          <p>Comprendre comment le navigateur résout les conflits de styles.</p>

          <table class="spec-table">
            <thead>
              <tr>
                <th>Sélecteur</th>
                <th>Score (ID, Class, Élément)</th>
                <th>Niveau</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>p</code></td>
                <td>(0, 0, 1)</td>
                <td><span class="spec-badge spec-low">Le plus bas</span></td>
              </tr>
              <tr>
                <td><code>.text</code></td>
                <td>(0, 1, 0)</td>
                <td><span class="spec-badge spec-low">Bas</span></td>
              </tr>
              <tr>
                <td><code>p.text</code></td>
                <td>(0, 1, 1)</td>
                <td><span class="spec-badge spec-med">Moyen</span></td>
              </tr>
              <tr>
                <td><code>#main .text p</code></td>
                <td>(1, 1, 1)</td>
                <td><span class="spec-badge spec-high">Élevé</span></td>
              </tr>
              <tr>
                <td><code>#main</code></td>
                <td>(1, 0, 0)</td>
                <td><span class="spec-badge spec-max">Le plus haut</span></td>
              </tr>
            </tbody>
          </table>

          <div class="callout warn" style="margin-top:1rem;">
            <strong>⚠ À propos de !important</strong>
            À éviter car il casse la cascade CSS, rend le débogage très difficile et crée une dette technique. Préférez une architecture de sélecteurs bien pensée.
          </div>

          <div class="callout info" style="margin-top:0.75rem;">
            <strong>ℹ Règle de départage</strong>
            Si deux règles ont la même spécificité, c'est la dernière déclarée dans la feuille de style qui gagne (ordre de la cascade).
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ── EXERCICE 2 ── -->
    <section class="exercise" id="ex2">
      <div class="exercise-header">
        <span class="exercise-num purple">EX 02</span>
        <h2>Box Model</h2>

      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>2.1 — Comprendre le Box Model</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="sel">.box</span> {
  <span class="prop">width</span>: <span class="val">300px</span>;
  <span class="prop">padding</span>: <span class="val">20px</span>;
  <span class="prop">border</span>: <span class="val">5px solid #333</span>;
  <span class="prop">margin</span>: <span class="val">15px</span>;
}</pre>
          </div>

          <ul class="questions">
            <li><span class="q-num">Q1.</span><strong>content-box</strong> (défaut) : largeur totale visible = 300 + 20×2 + 5×2 = <strong>350px</strong></li>
            <li><span class="q-num">Q2.</span><strong>border-box</strong> : largeur totale visible = <strong>300px</strong> (padding et border inclus)</li>
            <li><span class="q-num">Q3.</span>Reset CSS universel ↓</li>
          </ul>

          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS — Reset</span></div>
            <pre><span class="sel">*, *::before, *::after</span> {
  <span class="prop">box-sizing</span>: <span class="val">border-box</span>;
}</pre>
          </div>
        </div>
      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>2.2 — Centrer un élément</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="cmt">/* Centrage horizontal uniquement */</span>
<span class="sel">.box</span> {
  <span class="prop">width</span>: <span class="val">600px</span>;
  <span class="prop">margin</span>: <span class="val">0 auto</span>;
}

<span class="cmt">/* Centrage horizontal + vertical (Flexbox) */</span>
<span class="sel">body</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">justify-content</span>: <span class="val">center</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">min-height</span>: <span class="val">100vh</span>;
}

<span class="cmt">/* Centrage horizontal + vertical (Grid) */</span>
<span class="sel">body</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">place-items</span>: <span class="val">center</span>;
  <span class="prop">min-height</span>: <span class="val">100vh</span>;
}</pre>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ── EXERCICE 3 ── -->
    <section class="exercise" id="ex3">
      <div class="exercise-header">
        <span class="exercise-num orange">EX 03</span>
        <h2>Flexbox</h2>

      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>3.1 — Barre de navigation</h3></div>
        <div class="sub-body">
          <p>Logo à gauche, liens à droite avec <code>margin-left: auto</code> sur la liste.</p>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="sel">.navbar</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">align-items</span>: <span class="val">center</span>;
  <span class="prop">padding</span>: <span class="val">1rem 2rem</span>;
  <span class="prop">background</span>: <span class="val">#1a1a2e</span>;
}

<span class="sel">.nav-links</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">list-style</span>: <span class="val">none</span>;
  <span class="prop">gap</span>: <span class="val">2rem</span>;
  <span class="prop">margin-left</span>: <span class="val">auto</span>; <span class="cmt">/* pousse les liens à droite */</span>
}</pre>
          </div>
        </div>
      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>3.2 — Cartes de même hauteur</h3></div>
        <div class="sub-body">
          <p>Le footer reste en bas de chaque carte grâce à <code>flex-direction: column</code> et <code>margin-top: auto</code>.</p>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="sel">.cards</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">gap</span>: <span class="val">1.5rem</span>;
  <span class="prop">align-items</span>: <span class="val">stretch</span>; <span class="cmt">/* hauteur égale */</span>
}

<span class="sel">.card</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
  <span class="prop">flex</span>: <span class="val">1</span>;
  <span class="prop">padding</span>: <span class="val">1.5rem</span>;
  <span class="prop">border</span>: <span class="val">1px solid #ccc</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
}

<span class="sel">.card-link</span> {
  <span class="prop">margin-top</span>: <span class="val">auto</span>; <span class="cmt">/* colle le bouton en bas */</span>
}</pre>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ── EXERCICE 4 ── -->
    <section class="exercise" id="ex4">
      <div class="exercise-header">
        <span class="exercise-num">EX 04</span>
        <h2>CSS Grid</h2>

      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>4.1 — Grille responsive automatique</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="sel">.grid-cards</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">repeat(auto-fit, minmax(250px, 1fr))</span>;
  <span class="prop">gap</span>: <span class="val">1.5rem</span>;
}

<span class="sel">.card</span> {
  <span class="prop">padding</span>: <span class="val">1.5rem</span>;
  <span class="prop">background</span>: <span class="val">#f5f5f5</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
}
<span class="cmt">/* auto-fit + minmax = responsive sans media queries ! */</span></pre>
          </div>
        </div>
      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>4.2 — Layout avec Grid Areas</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="sel">.page-layout</span> {
  <span class="prop">display</span>: <span class="val">grid</span>;
  <span class="prop">grid-template-areas</span>:
    <span class="str">"header  header"</span>
    <span class="str">"sidebar main  "</span>
    <span class="str">"footer  footer"</span>;
  <span class="prop">grid-template-columns</span>: <span class="val">250px 1fr</span>;
  <span class="prop">grid-template-rows</span>: <span class="val">auto 1fr auto</span>;
  <span class="prop">min-height</span>: <span class="val">100vh</span>;
}

<span class="sel">.header</span>  { <span class="prop">grid-area</span>: <span class="val">header</span>;  }
<span class="sel">.sidebar</span> { <span class="prop">grid-area</span>: <span class="val">sidebar</span>; }
<span class="sel">.main</span>    { <span class="prop">grid-area</span>: <span class="val">main</span>;    }
<span class="sel">.footer</span>  { <span class="prop">grid-area</span>: <span class="val">footer</span>;  }</pre>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ── EXERCICE 5 ── -->
    <section class="exercise" id="ex5">
      <div class="exercise-header">
        <span class="exercise-num purple">EX 05</span>
        <h2>Responsive Design</h2>

      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>5.1 — Mobile First + Media Queries</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="cmt">/* ── Base mobile (par défaut) ── */</span>
<span class="sel">.container</span> {
  <span class="prop">width</span>: <span class="val">100%</span>;
  <span class="prop">padding</span>: <span class="val">15px</span>;
}
<span class="sel">.nav-menu</span> {
  <span class="prop">display</span>: <span class="val">flex</span>;
  <span class="prop">flex-direction</span>: <span class="val">column</span>;
  <span class="prop">gap</span>: <span class="val">5px</span>;
}
<span class="sel">.sidebar</span> { <span class="prop">display</span>: <span class="val">none</span>; }

<span class="cmt">/* ── Tablette (≥ 768px) ── */</span>
<span class="kw">@media</span> (<span class="prop">min-width</span>: <span class="val">768px</span>) {
  <span class="sel">.container</span>  { <span class="prop">max-width</span>: <span class="val">900px</span>; <span class="prop">margin</span>: <span class="val">0 auto</span>; }
  <span class="sel">.nav-menu</span>   { <span class="prop">flex-direction</span>: <span class="val">row</span>; }
  <span class="sel">.content</span>    { <span class="prop">display</span>: <span class="val">flex</span>; <span class="prop">gap</span>: <span class="val">2rem</span>; }
  <span class="sel">.sidebar</span>    { <span class="prop">display</span>: <span class="val">block</span>; <span class="prop">width</span>: <span class="val">250px</span>; <span class="prop">flex-shrink</span>: <span class="val">0</span>; }
}

<span class="cmt">/* ── Desktop (≥ 1200px) ── */</span>
<span class="kw">@media</span> (<span class="prop">min-width</span>: <span class="val">1200px</span>) {
  <span class="sel">.container</span>  { <span class="prop">max-width</span>: <span class="val">1400px</span>; }
  <span class="sel">.sidebar</span>    { <span class="prop">width</span>: <span class="val">300px</span>; }
}</pre>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ── EXERCICE 6 ── -->
    <section class="exercise" id="ex6">
      <div class="exercise-header">
        <span class="exercise-num orange">EX 06</span>
        <h2>Variables CSS & Thèmes</h2>

      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>6.1 — Système de couleurs clair / sombre</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="cmt">/* ── Thème clair (défaut) ── */</span>
<span class="sel">:root</span> {
  <span class="prop">--color-bg</span>:       <span class="val">#ffffff</span>;
  <span class="prop">--color-surface</span>:  <span class="val">#f8f9fa</span>;
  <span class="prop">--color-text</span>:     <span class="val">#1a1a2e</span>;
  <span class="prop">--color-muted</span>:    <span class="val">#64748b</span>;
  <span class="prop">--color-accent</span>:   <span class="val">#4f46e5</span>;
  <span class="prop">--color-border</span>:   <span class="val">#e2e8f0</span>;
}

<span class="cmt">/* ── Thème sombre ── */</span>
<span class="sel">[data-theme="dark"]</span> {
  <span class="prop">--color-bg</span>:       <span class="val">#0c0c0f</span>;
  <span class="prop">--color-surface</span>:  <span class="val">#13131a</span>;
  <span class="prop">--color-text</span>:     <span class="val">#e2e8f0</span>;
  <span class="prop">--color-muted</span>:    <span class="val">#64748b</span>;
  <span class="prop">--color-accent</span>:   <span class="val">#818cf8</span>;
  <span class="prop">--color-border</span>:   <span class="val">#2a2a3a</span>;
}

<span class="cmt">/* Utilisation */</span>
<span class="sel">body</span> {
  <span class="prop">background</span>: <span class="val">var(--color-bg)</span>;
  <span class="prop">color</span>:      <span class="val">var(--color-text)</span>;
}

<span class="cmt">/* Bascule automatique via prefers-color-scheme */</span>
<span class="kw">@media</span> (<span class="prop">prefers-color-scheme</span>: <span class="val">dark</span>) {
  <span class="sel">:root</span> { <span class="cmt">/* même variables que [data-theme="dark"] */</span> }
}</pre>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ── EXERCICE 7 ── -->
    <section class="exercise" id="ex7">
      <div class="exercise-header">
        <span class="exercise-num">EX 07</span>
        <h2>Transitions & Animations</h2>

      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>7.1 — Bouton animé</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="sel">.btn</span> {
  <span class="prop">padding</span>: <span class="val">0.75rem 1.75rem</span>;
  <span class="prop">background</span>: <span class="val">#4f46e5</span>;
  <span class="prop">color</span>: <span class="val">#fff</span>;
  <span class="prop">border</span>: <span class="val">none</span>;
  <span class="prop">border-radius</span>: <span class="val">8px</span>;
  <span class="prop">cursor</span>: <span class="val">pointer</span>;
  <span class="prop">transition</span>: <span class="val">background 0.2s ease,
              transform  0.2s ease,
              box-shadow 0.2s ease</span>;
}

<span class="sel">.btn:hover</span> {
  <span class="prop">background</span>: <span class="val">#4338ca</span>;
  <span class="prop">transform</span>: <span class="val">translateY(-2px)</span>;
  <span class="prop">box-shadow</span>: <span class="val">0 8px 20px rgba(79,70,229,0.4)</span>;
}

<span class="sel">.btn:active</span> {
  <span class="prop">transform</span>: <span class="val">translateY(0)</span>;
  <span class="prop">box-shadow</span>: <span class="val">none</span>;
}</pre>
          </div>
        </div>
      </div>

      <div class="sub-section">
        <div class="sub-header"><h3>7.2 — Spinner de chargement</h3></div>
        <div class="sub-body">
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span class="code-lang">CSS</span></div>
            <pre><span class="sel">.spinner</span> {
  <span class="prop">width</span>: <span class="val">40px</span>;
  <span class="prop">height</span>: <span class="val">40px</span>;
  <span class="prop">border</span>: <span class="val">4px solid rgba(79,70,229,0.2)</span>;
  <span class="prop">border-top-color</span>: <span class="val">#4f46e5</span>;
  <span class="prop">border-radius</span>: <span class="val">50%</span>;
  <span class="prop">animation</span>: <span class="val">spin 0.8s linear infinite</span>;
}

<span class="kw">@keyframes</span> spin {
  <span class="kw">from</span> { <span class="prop">transform</span>: <span class="val">rotate(0deg)</span>;   }
  <span class="kw">to</span>   { <span class="prop">transform</span>: <span class="val">rotate(360deg)</span>; }
}</pre>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- ── EXERCICE 8 — QUIZ ── -->
    <section class="exercise" id="ex8">
      <div class="exercise-header">
        <span class="exercise-num purple">EX 08</span>
        <h2>Quiz de révision</h2>

      </div>

      <div class="quiz-grid" id="quizContainer">

        <div class="quiz-card">
          <div class="quiz-q"><span class="quiz-qnum">Q1.</span>Quel sélecteur a la spécificité la plus haute ?</div>
          <div class="quiz-options">
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q1" value="a">
              <span class="opt-circle"></span> a) .header .nav a
            </label>
            <label class="quiz-option" data-correct="true">
              <input type="radio" name="q1" value="b">
              <span class="opt-circle"></span> b) #header a
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q1" value="c">
              <span class="opt-circle"></span> c) header nav a
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q1" value="d">
              <span class="opt-circle"></span> d) a.active
            </label>
          </div>
        </div>

        <div class="quiz-card">
          <div class="quiz-q"><span class="quiz-qnum">Q2.</span>Avec <code>box-sizing: border-box</code>, un élément avec <code>width: 200px</code> et <code>padding: 20px</code> a une largeur totale de :</div>
          <div class="quiz-options">
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q2" value="a">
              <span class="opt-circle"></span> a) 240px
            </label>
            <label class="quiz-option" data-correct="true">
              <input type="radio" name="q2" value="b">
              <span class="opt-circle"></span> b) 200px
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q2" value="c">
              <span class="opt-circle"></span> c) 220px
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q2" value="d">
              <span class="opt-circle"></span> d) 160px
            </label>
          </div>
        </div>

        <div class="quiz-card">
          <div class="quiz-q"><span class="quiz-qnum">Q3.</span>Pour centrer un élément verticalement et horizontalement avec Flexbox :</div>
          <div class="quiz-options">
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q3" value="a">
              <span class="opt-circle"></span> a) justify-content: center
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q3" value="b">
              <span class="opt-circle"></span> b) align-items: center
            </label>
            <label class="quiz-option" data-correct="true">
              <input type="radio" name="q3" value="c">
              <span class="opt-circle"></span> c) justify-content: center ET align-items: center
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q3" value="d">
              <span class="opt-circle"></span> d) text-align: center
            </label>
          </div>
        </div>

        <div class="quiz-card">
          <div class="quiz-q"><span class="quiz-qnum">Q4.</span>La valeur <code>1fr</code> en CSS Grid signifie :</div>
          <div class="quiz-options">
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q4" value="a">
              <span class="opt-circle"></span> a) 1 pixel
            </label>
            <label class="quiz-option" data-correct="true">
              <input type="radio" name="q4" value="b">
              <span class="opt-circle"></span> b) 1 fraction de l'espace disponible
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q4" value="c">
              <span class="opt-circle"></span> c) 1 pourcentage
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q4" value="d">
              <span class="opt-circle"></span> d) 1 rem
            </label>
          </div>
        </div>

        <div class="quiz-card">
          <div class="quiz-q"><span class="quiz-qnum">Q5.</span>L'approche "Mobile First" utilise :</div>
          <div class="quiz-options">
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q5" value="a">
              <span class="opt-circle"></span> a) max-width dans les media queries
            </label>
            <label class="quiz-option" data-correct="true">
              <input type="radio" name="q5" value="b">
              <span class="opt-circle"></span> b) min-width dans les media queries
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q5" value="c">
              <span class="opt-circle"></span> c) device-width
            </label>
            <label class="quiz-option" data-correct="false">
              <input type="radio" name="q5" value="d">
              <span class="opt-circle"></span> d) orientation
            </label>
          </div>
        </div>

      </div>

      <!-- Score -->
      <div id="scoreBox" style="display:none; margin-top:1.5rem;">
        <div class="callout" id="scoreMsg"></div>
      </div>

    </section>

  </main>
</div>

<!-- FOOTER -->
<footer class="site-footer">
  TP CSS · Fondamentaux du Web · Tous droits réservés
</footer>

<script>
  // ── Quiz interactif ──
  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function () {
      const name = this.querySelector('input').name;
      const card = this.closest('.quiz-card');

      // Si déjà répondu
      if (card.querySelector('.correct, .wrong')) return;

      const isCorrect = this.dataset.correct === 'true';

      // Marquer toutes les options
      card.querySelectorAll('.quiz-option').forEach(opt => {
        if (opt.dataset.correct === 'true') opt.classList.add('correct');
      });

      if (!isCorrect) this.classList.add('wrong');

      // Mettre à jour les cercles
      card.querySelectorAll('.quiz-option').forEach(opt => {
        const circle = opt.querySelector('.opt-circle');
        if (opt.classList.contains('correct')) circle.textContent = '✓';
        else if (opt.classList.contains('wrong')) circle.textContent = '✗';
      });

      // Calculer score si toutes questions répondues
      checkAllAnswered();
    });
  });

  function checkAllAnswered() {
    const cards = document.querySelectorAll('.quiz-card');
    let answered = 0, correct = 0;

    cards.forEach(card => {
      const hasAnswer = card.querySelector('.correct, .wrong');
      if (hasAnswer) {
        answered++;
        if (!card.querySelector('.wrong')) correct++;
      }
    });

    if (answered === cards.length) {
      const box = document.getElementById('scoreBox');
      const msg = document.getElementById('scoreMsg');
      const pct = Math.round(correct / cards.length * 100);

      box.style.display = 'block';
      msg.innerHTML = `<strong>${pct >= 80 ? '🎉 Excellent !' : pct >= 60 ? '👍 Bien !' : '📚 À revoir'}</strong>
        Score : ${correct}/${cards.length} (${pct}%) — ${pct >= 80 ? 'Vous maîtrisez les fondamentaux CSS !' : 'Relisez les sections correspondantes.'}`;

      if (pct < 80) {
        msg.parentElement.classList.add('warn');
      }
    }
  }
</script>

</body>
</html>
