import { useState, useEffect } from 'react';

const POSTS = [
  {
    id: 1,
    featured: true,
    tag: "Design",
    title: "The Grid Never Lies: Designing Systems That Scale",
    excerpt: "Every great design starts with constraints. The grid isn't a cage — it's a launchpad. Here's how I learned to love structure after years of resisting it.",
    date: "APR 12, 2026",
    readTime: "8 min read",
    content: [
      { type: "p", text: "When I started designing, I thought grids were for engineers. Clean, sterile, mathematical — the opposite of creativity. I would deliberately break them, misalign things, create chaos in the name of expression. I was wrong." },
      { type: "quote", text: "Structure is the invisible force that makes freedom possible. Without it, creativity collapses under its own weight." },
      { type: "h2", text: "The Revelation" },
      { type: "p", text: "It happened on a Tuesday. I was three weeks into a dashboard redesign, and nothing was landing. Every iteration looked off — like furniture arranged in a room with the wrong dimensions. On a whim, I overlaid a baseline grid. Everything snapped into place." },
      { type: "p", text: "The grid hadn't constrained me. It had freed me from making thousands of micro-decisions about spacing, alignment, and rhythm. Those decisions were already made. I could focus on the things that actually mattered: color, hierarchy, motion." },
      { type: "h2", text: "Building Systems That Scale" },
      { type: "p", text: "A good design system is like a great programming language. It solves the common case beautifully, makes the uncommon case possible, and makes the impossible case obvious. Start with your 4px or 8px base unit. Everything — margin, padding, component height — is a multiple. No exceptions. This isn't dogma; it's physics." },
      { type: "p", text: "When every spacing decision follows from a single rule, your designs become predictable in the best way. Developers can implement them without asking questions. Designs look consistent across products. New team members onboard in days instead of weeks." },
      { type: "h2", text: "The Counter-Intuition" },
      { type: "p", text: "Here's what surprised me most: working within a strict grid makes my creative decisions more visible, not less. When everything conforms to the same spatial logic, the moments of intentional deviation become powerful. A full-bleed image. An offset headline. A card that bleeds out of the grid. These choices land because they contrast with order." },
    ]
  },
  {
    id: 2,
    tag: "Code",
    title: "Writing CSS That Won't Haunt You in Six Months",
    excerpt: "Naming things is hard. Structuring stylesheets is harder. A few principles I keep coming back to.",
    date: "APR 05, 2026",
    readTime: "5 min read",
    content: [
      { type: "p", text: "Every stylesheet starts clean. Six months later, it's a haunted house. I've been writing CSS professionally for over a decade, and I still find myself doing archaeology on my own code." },
      { type: "quote", text: "CSS is not hard to write. It's hard to write CSS that other people — including future you — can maintain." },
      { type: "h2", text: "The Cascade Is Not Your Enemy" },
      { type: "p", text: "The most common mistake I see is fighting the cascade. Specificity wars, !important everywhere, inline styles that override stylesheets that override other stylesheets. This comes from treating CSS like a component-scoped language, which it isn't." },
      { type: "p", text: "Embrace the cascade. Design your tokens globally, your utilities semi-globally, your component styles locally. Let inheritance do its job. Set your base font-family and color on :root or body and inherit everywhere else." },
      { type: "h2", text: "Name Things by Role, Not Appearance" },
      { type: "p", text: ".red-text breaks when your brand changes. .error-message survives a rebrand, a dark-mode launch, and a design system overhaul. Always name things by what they mean, not what they look like. This single rule will save you hours." },
    ]
  },
  {
    id: 3,
    tag: "Process",
    title: "Why I Write Before I Sketch",
    excerpt: "Words clarify thinking. Sketching before writing often produces beautiful solutions to the wrong problems.",
    date: "MAR 28, 2026",
    readTime: "4 min read",
    content: [
      { type: "p", text: "My design process used to start with a whiteboard. Boxes, arrows, wireframes — the whole ritual. Then I'd write a brief. Then I'd present. This order seemed natural. It wasn't." },
      { type: "quote", text: "If you can't explain it in plain language, you don't understand it well enough to design it." },
      { type: "h2", text: "Words Force Clarity" },
      { type: "p", text: "Writing forces you to confront gaps in your thinking. A fuzzy concept that looks fine as a box with an arrow doesn't survive contact with a sentence. When you try to write 'The user will [verb] [noun] to [outcome]', you discover exactly which verbs, nouns and outcomes you haven't defined yet." },
      { type: "p", text: "Now I write a one-page brief before any design artifact. What problem am I solving? Who experiences this problem? What does success look like? What are the constraints? Only after answering these in full sentences do I open a design tool." },
    ]
  },
  {
    id: 4,
    tag: "Tools",
    title: "The Honest Case for Plain HTML",
    excerpt: "We've abstracted past the point of productivity. Sometimes the right tool is the simplest one.",
    date: "MAR 20, 2026",
    readTime: "6 min read",
    content: [
      { type: "p", text: "I've built production apps in React, Vue, Svelte, Angular, and frameworks that no longer exist. Each abstraction promised to solve the hard problems. Each one eventually introduced new problems of its own." },
      { type: "p", text: "This isn't an anti-framework polemic. Frameworks solve real problems at scale. But we've developed a reflex to reach for them even when plain HTML, CSS, and a sprinkle of vanilla JS would be not just sufficient, but better." },
      { type: "quote", text: "The best tool for a job is the one that does it without introducing problems of its own." },
      { type: "h2", text: "When Plain Wins" },
      { type: "p", text: "Static content sites. Documentation. Landing pages. Marketing pages. Personal portfolios and blogs. These are domains where HTML's native capabilities — semantic structure, built-in accessibility, near-zero load time — are genuinely superior to what a bundled framework can offer." },
      { type: "p", text: "A page that ships as pure HTML loads on the first byte. It works without JavaScript enabled. It's indexable by every crawler, accessible to every assistive technology, and readable by any developer without a build step." },
    ]
  },
  {
    id: 5,
    tag: "Reflection",
    title: "On Shipping Imperfect Work",
    excerpt: "Perfectionism is procrastination in disguise. Here's what changed when I started shipping earlier.",
    date: "MAR 08, 2026",
    readTime: "3 min read",
    content: [
      { type: "p", text: "I held a project back for three months once. I was convinced it needed one more pass. By the time I finally published it, the idea had been executed by two other people, better. I learned something expensive that day." },
      { type: "quote", text: "Done and public teaches you more than perfect and private ever will." },
      { type: "h2", text: "Feedback Requires Exposure" },
      { type: "p", text: "You cannot improve in isolation. The signal that matters — real people, real use, real friction — only arrives after you ship. Every day you wait is a day you're learning from imagination instead of evidence." },
      { type: "p", text: "I now ship with a simple question: 'Is this good enough to be useful?' Not 'Is this done?' — it's never done — but 'Is this useful?'. If yes, it goes out." },
    ]
  },
];

function HeroGrid() {
  const lines = [];
  const W = 1200, H = 420;
  const vanishX = W / 2, vanishY = 260;
  const groundY = H;
  const cols = 14;
  for (let i = 0; i <= cols; i++) {
    const x = (i / cols) * W;
    lines.push(<line key={`v${i}`} x1={vanishX} y1={vanishY} x2={x} y2={groundY} stroke="oklch(58% 0.18 295)" strokeWidth="0.8" opacity="0.18"/>);
  }
  const rows = 10;
  for (let j = 1; j <= rows; j++) {
    const t = Math.pow(j / rows, 1.6);
    const y = vanishY + t * (groundY - vanishY);
    const halfW = (t * W) / 2;
    lines.push(<line key={`h${j}`} x1={vanishX - halfW} y1={y} x2={vanishX + halfW} y2={y} stroke="oklch(62% 0.22 355)" strokeWidth="0.8" opacity="0.144"/>);
  }
  return (
    <svg className="hero-grid" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
      {lines}
      <ellipse cx={vanishX} cy={vanishY} rx="80" ry="10" fill="none" stroke="oklch(68% 0.16 200)" strokeWidth="1" opacity="0.35"/>
      <ellipse cx={vanishX} cy={vanishY} rx="40" ry="5" fill="oklch(68% 0.16 200)" opacity="0.2"/>
    </svg>
  );
}

function SmallGrid() {
  const lines = [];
  const W = 400, H = 240;
  const vx = W / 2, vy = H * 0.55;
  for (let i = 0; i <= 10; i++) {
    const x = (i / 10) * W;
    lines.push(<line key={`v${i}`} x1={vx} y1={vy} x2={x} y2={H} stroke="oklch(58% 0.18 295)" strokeWidth="0.8" opacity="0.3"/>);
  }
  for (let j = 1; j <= 7; j++) {
    const t = Math.pow(j / 7, 1.5);
    const y = vy + t * (H - vy);
    const hw = (t * W) / 2;
    lines.push(<line key={`h${j}`} x1={vx - hw} y1={y} x2={vx + hw} y2={y} stroke="oklch(62% 0.22 355)" strokeWidth="0.7" opacity="0.25"/>);
  }
  return (
    <svg className="post-featured-visual-grid" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
      {lines}
      <ellipse cx={vx} cy={vy} rx="50" ry="8" fill="none" stroke="oklch(68% 0.16 200)" strokeWidth="1" opacity="0.45"/>
      <ellipse cx={vx} cy={vy} rx="18" ry="4" fill="oklch(62% 0.22 355)" opacity="0.35"/>
    </svg>
  );
}

export default function Blog() {
  const [view, setView] = useState('list');
  const [activePost, setActivePost] = useState(null);

  const openPost = (post) => {
    setActivePost(post);
    setView('post');
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    setView('list');
    setActivePost(null);
    window.scrollTo(0, 0);
  };

  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);

  return (
    <>
      <nav>
        <div className="nav-logo" onClick={goBack} style={{ cursor: 'pointer' }}>
          <div className="nav-logo-dot" />
          danielgading
        </div>
        <ul className="nav-links">
          <li><a href="#" onClick={e => { e.preventDefault(); goBack(); }}>Blog</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {view === 'list' && (
        <div className="hero">
          <HeroGrid />
          <div className="hero-content">
            <div className="hero-eyebrow fade-in">thoughts on design &amp; code</div>
            <div className="hero-title fade-in-2">daniel<span>.</span><br />gading</div>
            <div className="hero-sub fade-in-3">// blog.v2026</div>
          </div>
        </div>
      )}

      <main>
        {view === 'list' ? (
          <>
            <div className="section-label fade-in">Latest Posts</div>
            <div className="post-grid">
              <div className="post-featured fade-in-2" onClick={() => openPost(featured)}>
                <div className="post-featured-visual">
                  <SmallGrid />
                </div>
                <div className="post-featured-body">
                  <div>
                    <div className="featured-badge">Featured</div>
                    <div className="post-card-tag">{featured.tag}</div>
                    <div className="post-featured-title">{featured.title}</div>
                    <div className="post-featured-excerpt">{featured.excerpt}</div>
                  </div>
                  <div className="post-card-meta">
                    <span className="post-card-date">{featured.date} · {featured.readTime}</span>
                    <span className="post-card-arrow">→</span>
                  </div>
                </div>
              </div>

              {rest.map((p, i) => (
                <div key={p.id} className={`post-card fade-in-${Math.min(i + 3, 5)}`} onClick={() => openPost(p)}>
                  <div className="post-card-tag">{p.tag}</div>
                  <div className="post-card-title">{p.title}</div>
                  <div className="post-card-excerpt">{p.excerpt}</div>
                  <div className="post-card-meta">
                    <span className="post-card-date">{p.date} · {p.readTime}</span>
                    <span className="post-card-arrow">→</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="fade-in">
            <button className="article-back" onClick={goBack}>← Back to Blog</button>
            <div className="article-header">
              <div className="article-tag">{activePost.tag}</div>
              <h1 className="article-title">{activePost.title}</h1>
              <div className="article-meta">
                <span>{activePost.date}</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>
            <div className="article-body">
              {activePost.content.map((block, i) => {
                if (block.type === 'p') return <p key={i}>{block.text}</p>;
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                if (block.type === 'quote') return <div key={i} className="highlight">{block.text}</div>;
                return null;
              })}
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="footer-logo">danielgading.com</div>
        <div>© 2026 — Made with intent</div>
      </footer>
    </>
  );
}
