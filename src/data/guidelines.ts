/* =============================================================================
   BWCI — UI Direction & Visual Guidelines v1.2.1
   Structured content model powering the interactive navigator.
   ============================================================================= */

export type NavItem = {
  id: string;
  num: string;
  title: string;
  short: string;
  group: "Foundation" | "Systems" | "Application" | "Governance";
  children?: { id: string; title: string }[];
};

export const NAV: NavItem[] = [
  {
    id: "overview",
    num: "00",
    title: "Executive Summary & Mandate",
    short: "Overview",
    group: "Foundation",
    children: [
      { id: "overview-mandate", title: "Design Mandate" },
      { id: "overview-locked", title: "Locked Decisions Matrix" },
      { id: "overview-research", title: "Research Foundation" },
    ],
  },
  {
    id: "visual-direction",
    num: "01",
    title: "Visual Direction",
    short: "Visual Direction",
    group: "Foundation",
    children: [
      { id: "vd-character", title: "1.1 Brand Character" },
      { id: "vd-principles", title: "1.2 Core Design Principles" },
      { id: "vd-anti", title: "1.3 Anti-Personas" },
    ],
  },
  {
    id: "color",
    num: "02",
    title: "Color System",
    short: "Color",
    group: "Systems",
    children: [
      { id: "color-core", title: "2.1 Core Palette" },
      { id: "color-surface", title: "2.2 Surface & Neutrals" },
      { id: "color-status", title: "2.3 Two-Axis Status" },
      { id: "color-a11y", title: "2.4 Contrast Guidelines" },
    ],
  },
  {
    id: "typography",
    num: "03",
    title: "Typography System",
    short: "Typography",
    group: "Systems",
    children: [
      { id: "type-faces", title: "3.1 Typeface Selection" },
      { id: "type-scale", title: "3.2 Hierarchy & Scale" },
      { id: "type-numbers", title: "3.3 Numbers & Dates" },
    ],
  },
  {
    id: "layout",
    num: "04",
    title: "Layout & Spacing",
    short: "Layout",
    group: "Systems",
    children: [
      { id: "layout-containers", title: "4.1 Containers & Breakpoints" },
      { id: "layout-spacing", title: "4.2 Spacing & Rhythm" },
    ],
  },
  {
    id: "components",
    num: "05",
    title: "UI Components",
    short: "Components",
    group: "Systems",
    children: [
      { id: "cmp-nav", title: "5.1 Navigation & Header" },
      { id: "cmp-buttons", title: "5.2 Buttons & CTA" },
      { id: "cmp-platform", title: "5.3 Platform Cards" },
      { id: "cmp-audience", title: "5.4 Audience Pathways" },
      { id: "cmp-metric", title: "5.5 Evidence Metric Cards" },
      { id: "cmp-forms", title: "5.6 Forms & Qualification" },
      { id: "cmp-tables", title: "5.7 Tables & Entity Lists" },
    ],
  },
  {
    id: "graphic",
    num: "06",
    title: "Graphic Language",
    short: "Graphic Language",
    group: "Application",
    children: [
      { id: "gl-strokes", title: "6.0 Line & Stroke Grammar" },
      { id: "gl-abstract", title: "6.1 Abstract Concepts" },
      { id: "gl-prohibited", title: "6.2 Prohibited Tropes" },
    ],
  },
  {
    id: "engine",
    num: "07",
    title: "Financial Engine",
    short: "Financial Engine",
    group: "Application",
    children: [
      { id: "eng-levels", title: "7.0 Progressive Disclosure" },
      { id: "eng-loops", title: "7.1 Return Loops" },
      { id: "eng-worked", title: "7.2 Worked Example Mode" },
    ],
  },
  {
    id: "ecosystem",
    num: "08",
    title: "Better World Ecosystem",
    short: "Ecosystem",
    group: "Application",
    children: [{ id: "eco-encoding", title: "8.1 Visual Encoding Rules" }],
  },
  {
    id: "photography",
    num: "09",
    title: "Photography Direction",
    short: "Photography",
    group: "Application",
    children: [{ id: "photo-style", title: "9.1 Style & Grading" }],
  },
  { id: "iconography", num: "10", title: "Iconography", short: "Iconography", group: "Application" },
  {
    id: "dataviz",
    num: "11",
    title: "Data Visualization",
    short: "Data Viz",
    group: "Application",
  },
  {
    id: "motion",
    num: "12",
    title: "Motion & Interaction",
    short: "Motion",
    group: "Application",
    children: [
      { id: "motion-tokens", title: "12.1 Timing & Easing" },
      { id: "motion-guardrails", title: "12.2 Guardrails" },
    ],
  },
  {
    id: "accessibility",
    num: "13",
    title: "Accessibility Baseline",
    short: "Accessibility",
    group: "Governance",
  },
  {
    id: "responsive",
    num: "14",
    title: "Responsive Design",
    short: "Responsive",
    group: "Governance",
  },
  {
    id: "dodont",
    num: "15",
    title: "Do / Don't Matrix",
    short: "Do / Don't",
    group: "Governance",
  },
  {
    id: "tokens",
    num: "16",
    title: "Core Design Tokens",
    short: "Design Tokens",
    group: "Governance",
  },
  {
    id: "benchmarks",
    num: "17",
    title: "Benchmarks & Dependencies",
    short: "Benchmarks",
    group: "Governance",
    children: [
      { id: "bm-observations", title: "17.1 Benchmark Observations" },
      { id: "bm-dependencies", title: "17.2 Content & Compliance" },
    ],
  },
];

/* ----------------------------------------------------------------- LOCKED */

export const LOCKED_DECISIONS: {
  area: string;
  decision: string;
  spec: string;
  swatch?: string;
  cat: "Color" | "Type" | "Layout" | "Style" | "System";
}[] = [
  {
    area: "Primary Brand Color",
    decision: "Deep Engine Ink",
    spec: "#123039 · AAA contrast 12.8:1",
    swatch: "#123039",
    cat: "Color",
  },
  {
    area: "Primary Accent Color",
    decision: "Real Economy Emerald",
    spec: "#12836B · Productive capital flows & outcomes",
    swatch: "#12836B",
    cat: "Color",
  },
  {
    area: "Secondary Accent Color",
    decision: "Ambition Ochre Gold",
    spec: "#B98F2D (dark canvas / large strokes) · #9E7720 (light canvas text)",
    swatch: "#B98F2D",
    cat: "Color",
  },
  {
    area: "Wholesale Capital Layer",
    decision: "Capital Slate Blue",
    spec: "#3D5A80 · Institutional investors & DFI pods",
    swatch: "#3D5A80",
    cat: "Color",
  },
  {
    area: "Primary Interface Font",
    decision: "Plus Jakarta Sans",
    spec: "All headings, body, buttons and UI components",
    cat: "Type",
  },
  {
    area: "Data & System Font",
    decision: "JetBrains Mono",
    spec: 'Metrics, timestamps, stage codes · font-feature-settings: "tnum" 1',
    cat: "Type",
  },
  {
    area: "Editorial Accent Font",
    decision: "Newsreader (Serif)",
    spec: "Restricted exclusively to Chairman's Letter & Perspectives essays",
    cat: "Type",
  },
  {
    area: "Standard Container",
    decision: "1280px Max Width",
    spec: "Centered on desktop; fluid with 32px–48px outer margins",
    cat: "Layout",
  },
  {
    area: "Diagram Canvas",
    decision: "1440px Max Width",
    spec: "Dedicated to horizontal Engine & Ecosystem system maps",
    cat: "Layout",
  },
  {
    area: "Grid Architecture",
    decision: "12 / 8 / 4 Columns",
    spec: "12-col desktop (24/32px gutter), 8-col tablet, 4-col mobile (16px)",
    cat: "Layout",
  },
  {
    area: "Spatial Scale",
    decision: "8pt System",
    spec: "4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px",
    cat: "Layout",
  },
  {
    area: "Visual Character",
    decision: "Institutional & Architectural",
    spec: "Crisp 1px borders, generous whitespace, zero decorative shadows",
    cat: "Style",
  },
  {
    area: "Card System",
    decision: "Border-led Structural",
    spec: "1px solid #D5E0DC, subtle #F7F9F8 tint, minimal/no shadow",
    cat: "Style",
  },
  {
    area: "Diagrammatic Style",
    decision: "Semantic & Schematic",
    spec: "2-way arrows (⇄), dashed non-owned pods, active circulation loops",
    cat: "Style",
  },
  {
    area: "Photography",
    decision: "Real-Economy Activity",
    spec: "Unstaged documentary photos of active processes & human operators",
    cat: "Style",
  },
  {
    area: "Motion Principles",
    decision: "Calm & Functional",
    spec: "150ms–700ms timing, smooth easing; never required for comprehension",
    cat: "System",
  },
  {
    area: "Status Architecture",
    decision: "Two-Axis Taxonomy",
    spec: "Axis 1 Maturity (Operating/Dev/Proposed) + Axis 2 Relation (Group/Partner/Node)",
    cat: "System",
  },
  {
    area: "Accessibility Baseline",
    decision: "WCAG 2.2 AA Target",
    spec: "44×44px touch, multi-channel status cues, 400% zoom reflow",
    cat: "System",
  },
];

/* ------------------------------------------------------------------ COLOR */

export type ColorToken = {
  token: string;
  hex: string;
  name: string;
  role: string;
  usage: string;
  ratio: string;
  pass: "AAA" | "AA" | "LARGE";
};

export const CORE_PALETTE: ColorToken[] = [
  {
    token: "color-brand-ink",
    hex: "#123039",
    name: "Deep Engine Ink",
    role: "Primary Brand / Holding Anchor",
    usage: "Headers, deep hero sections, Financial Engine chassis, primary buttons.",
    ratio: "12.8:1",
    pass: "AAA",
  },
  {
    token: "color-brand-slate",
    hex: "#16323B",
    name: "Engine Slate",
    role: "Structural Text / Dark Surfaces",
    usage: "High-contrast body text, dark card backgrounds, top navigation bar.",
    ratio: "11.9:1",
    pass: "AAA",
  },
  {
    token: "color-brand-teal",
    hex: "#1D4A54",
    name: "Infrastructure Teal",
    role: "Interactive Infrastructure",
    usage: "Card hover borders, secondary engine blocks, active interactive states.",
    ratio: "8.4:1",
    pass: "AAA",
  },
  {
    token: "color-accent-emerald",
    hex: "#12836B",
    name: "Real Economy Emerald",
    role: "Real Economy / Productive Use",
    usage: "Productive capital flows, outcomes, circulation loop, positive data points.",
    ratio: "4.6:1",
    pass: "AA",
  },
  {
    token: "color-accent-emerald-dark",
    hex: "#0D6E59",
    name: "Deep Emerald",
    role: "High-Contrast Accent Text",
    usage: "Text links, small operating status badges, button active states.",
    ratio: "5.9:1",
    pass: "AA",
  },
  {
    token: "color-accent-gold",
    hex: "#B98F2D",
    name: "Ambition Ochre Gold",
    role: "Real-World Need & Scale",
    usage: 'Financing bottleneck indicator ("The Need"), scale loops, highlight metrics.',
    ratio: "3.2:1",
    pass: "LARGE",
  },
  {
    token: "color-accent-gold-dark",
    hex: "#9E7720",
    name: "Dark Ochre",
    role: "High-Contrast Gold Text",
    usage: "Gold text on white canvas, small tag labels.",
    ratio: "4.8:1",
    pass: "AA",
  },
  {
    token: "color-accent-blue",
    hex: "#3D5A80",
    name: "Capital Slate Blue",
    role: "Institutional Capital Layer",
    usage: "Institutional investor pods, wholesale capital flows, DFI pathways.",
    ratio: "5.2:1",
    pass: "AA",
  },
];

export const SURFACE_TOKENS: { token: string; hex: string; usage: string }[] = [
  { token: "color-surface-canvas", hex: "#FFFFFF", usage: "Primary page background, card surfaces." },
  {
    token: "color-surface-subtle",
    hex: "#F7F9F8",
    usage: "Alternating section backgrounds, table headers, inactive card containers.",
  },
  {
    token: "color-surface-cloud",
    hex: "#EFF3F1",
    usage: "Capability plate backgrounds, diagram bounding containers, pill filter tracks.",
  },
  {
    token: "color-surface-dark",
    hex: "#123039",
    usage: "Inverted section backgrounds (Financial Engine canvas, institutional footer).",
  },
  {
    token: "color-border-subtle",
    hex: "#E2E9E6",
    usage: "Card outlines, table row dividers, subtle card separations (1px solid).",
  },
  {
    token: "color-border-default",
    hex: "#D5E0DC",
    usage: "Form inputs, structural dividers, default diagram node outlines (1px solid).",
  },
  {
    token: "color-border-strong",
    hex: "#8A9E99",
    usage: "Focused states, active tabs, participant pod outlines (1.5px / 2px solid).",
  },
  {
    token: "color-border-dashed",
    hex: "#8A9E99",
    usage: "Non-owned participant pods, independent ecosystem relationships (1.5px dashed).",
  },
];

export type StatusToken = {
  id: string;
  label: string;
  axis: 1 | 2;
  axisName: string;
  glyph: string;
  glyphDesc: string;
  dot: string;
  text: string;
  border: string;
  bg: string;
  meaning: string;
};

export const STATUS_TOKENS: StatusToken[] = [
  {
    id: "status-operating",
    label: "OPERATING",
    axis: 1,
    axisName: "Maturity",
    glyph: "●",
    glyphDesc: "Filled Dot",
    dot: "#12836B",
    text: "#0D6E59",
    border: "#A3D9C9",
    bg: "#E8F5F1",
    meaning: "Fully established, active, and operating under authorized permissions.",
  },
  {
    id: "status-in-development",
    label: "IN DEVELOPMENT",
    axis: 1,
    axisName: "Maturity",
    glyph: "●",
    glyphDesc: "Filled Dot",
    dot: "#B98F2D",
    text: "#7D5B0F",
    border: "#E8C46B",
    bg: "#FDF8EB",
    meaning: "Approved initiative under active structuring; no commercial services yet.",
  },
  {
    id: "status-proposed",
    label: "PROPOSED / FUTURE",
    axis: 1,
    axisName: "Maturity",
    glyph: "○",
    glyphDesc: "Hollow Ring",
    dot: "#6C8085",
    text: "#384C51",
    border: "#BDCCD0",
    bg: "#F0F4F5",
    meaning: "Strategic ambition; no entity or active activity currently exists.",
  },
  {
    id: "status-group-company",
    label: "GROUP COMPANY",
    axis: 2,
    axisName: "Relation",
    glyph: "◈",
    glyphDesc: "Diamond Glyph",
    dot: "#0D6E59",
    text: "#0A4F40",
    border: "#85CEBA",
    bg: "#E0F3ED",
    meaning: "Direct holding / subsidiary ownership by BWCI PLC.",
  },
  {
    id: "status-partner-capability",
    label: "PARTNER CAPABILITY",
    axis: 2,
    axisName: "Relation",
    glyph: "⬡",
    glyphDesc: "Dashed Chip",
    dot: "#3D5A80",
    text: "#253B57",
    border: "#A8BDD7",
    bg: "#EFF4FA",
    meaning: "Delivered by an external partner; connected to ecosystem, not owned by BWCI.",
  },
  {
    id: "status-ecosystem-node",
    label: "ECOSYSTEM NODE",
    axis: 2,
    axisName: "Relation",
    glyph: "☵",
    glyphDesc: "Open Node Chip",
    dot: "#6C8085",
    text: "#384C51",
    border: "#BDCCD0",
    bg: "#F7F9F8",
    meaning: "Independent participant connected through the ecosystem interface layer.",
  },
];

/* ------------------------------------------------------------- TYPOGRAPHY */

export type TypeScale = {
  token: string;
  family: "sans" | "mono" | "serif";
  familyName: string;
  weight: number;
  weightName: string;
  desktop: number;
  mobile: number;
  lineHeight: string;
  tracking: string;
  usage: string;
  upper?: boolean;
  sample: string;
};

export const TYPE_SCALE: TypeScale[] = [
  {
    token: "font-display",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 700,
    weightName: "Bold",
    desktop: 52,
    mobile: 34,
    lineHeight: "1.15 (60px)",
    tracking: "-0.03em",
    usage: "Homepage Hero H1",
    sample: "Reconnecting capital with the real economy",
  },
  {
    token: "font-h1",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 700,
    weightName: "Bold",
    desktop: 40,
    mobile: 28,
    lineHeight: "1.20 (48px)",
    tracking: "-0.025em",
    usage: "Major Page H1 (Engine, Ecosystem, Platforms)",
    sample: "The Financial Engine",
  },
  {
    token: "font-h2",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 600,
    weightName: "SemiBold",
    desktop: 30,
    mobile: 24,
    lineHeight: "1.25 (38px)",
    tracking: "-0.02em",
    usage: "Section Headers, Act Titles",
    sample: "How capital reaches productive use",
  },
  {
    token: "font-h3",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 600,
    weightName: "SemiBold",
    desktop: 22,
    mobile: 18,
    lineHeight: "1.30 (29px)",
    tracking: "-0.015em",
    usage: "Card Titles, Pod Headers, Module Titles",
    sample: "Institutional Capital Layer",
  },
  {
    token: "font-h4",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 600,
    weightName: "SemiBold",
    desktop: 17,
    mobile: 16,
    lineHeight: "1.40 (24px)",
    tracking: "-0.01em",
    usage: "Platform Card Names, Accordion Titles",
    sample: "Providence Asset Management",
  },
  {
    token: "font-body-large",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 400,
    weightName: "Regular",
    desktop: 18,
    mobile: 16,
    lineHeight: "1.60 (29px)",
    tracking: "-0.005em",
    usage: "Hero lead-in paragraphs, section introductions",
    sample:
      "BWCI identifies financing bottlenecks and engineers the capital structures that resolve them.",
  },
  {
    token: "font-body",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 400,
    weightName: "Regular",
    desktop: 15,
    mobile: 15,
    lineHeight: "1.65 (25px)",
    tracking: "0.0em",
    usage: "Primary body text, card descriptions",
    sample:
      "Institutional asset management platform originating and managing productive real-economy investment strategies.",
  },
  {
    token: "font-body-small",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 400,
    weightName: "Regular",
    desktop: 13,
    mobile: 13,
    lineHeight: "1.55 (20px)",
    tracking: "0.0em",
    usage: "Form helper text, table cells, secondary metadata",
    sample: "Delivering entity subject to verification by legal and compliance teams.",
  },
  {
    token: "font-caption",
    family: "sans",
    familyName: "Plus Jakarta Sans",
    weight: 500,
    weightName: "Medium",
    desktop: 12,
    mobile: 12,
    lineHeight: "1.45 (17px)",
    tracking: "+0.01em",
    usage: "Footnotes, citations, photo credits, copyright",
    sample: "Source: IFC / World Bank SME Finance Forum (illustrative placeholder).",
  },
  {
    token: "font-eyebrow",
    family: "mono",
    familyName: "JetBrains Mono",
    weight: 600,
    weightName: "SemiBold",
    desktop: 12,
    mobile: 11,
    lineHeight: "1.30 (16px)",
    tracking: "+0.08em",
    usage: "Eyebrow kicker above H1/H2 (UPPERCASE)",
    upper: true,
    sample: "02 — Capital Architecture",
  },
  {
    token: "font-status-label",
    family: "mono",
    familyName: "JetBrains Mono",
    weight: 700,
    weightName: "Bold",
    desktop: 11,
    mobile: 11,
    lineHeight: "1.20 (13px)",
    tracking: "+0.06em",
    usage: "Status badges (OPERATING, IN DEVELOPMENT)",
    upper: true,
    sample: "Operating · as at september 2026",
  },
  {
    token: "font-metric-num",
    family: "mono",
    familyName: "JetBrains Mono",
    weight: 700,
    weightName: "Bold",
    desktop: 44,
    mobile: 32,
    lineHeight: "1.10 (48px)",
    tracking: "-0.02em",
    usage: "Sourced gap numbers, headline metrics",
    sample: "$5.7 TRILLION",
  },
];

/* ----------------------------------------------------------------- LAYOUT */

export const BREAKPOINTS = [
  {
    name: "Desktop XL",
    range: "≥ 1440px",
    cols: 12,
    gutter: "32px",
    margins: "Auto / 64px",
    behavior: "Fixed 1280px / 1440px container, centered",
  },
  {
    name: "Desktop LG",
    range: "1024px – 1439px",
    cols: 12,
    gutter: "24px",
    margins: "32px – 48px",
    behavior: "12-column grid intact, fluid column widths",
  },
  {
    name: "Tablet MD",
    range: "768px – 1023px",
    cols: 8,
    gutter: "20px",
    margins: "24px",
    behavior: "2-column card reflow; diagrams switch to responsive views",
  },
  {
    name: "Mobile SM",
    range: "< 768px",
    cols: 4,
    gutter: "16px",
    margins: "16px",
    behavior: "1-column stack; tables enable horizontal scroll",
  },
];

export const SPACING_SCALE = [
  { token: "space-xs", value: 4, usage: "Micro-spacing: status dot to label, icon to badge edge" },
  { token: "space-sm", value: 8, usage: "Tight spacing: tag padding, list item gaps" },
  { token: "space-md", value: 16, usage: "Standard padding: form inputs, card internal edge padding" },
  { token: "space-lg", value: 24, usage: "Card internal padding, grid column gaps" },
  { token: "space-xl", value: 32, usage: "Spacing between headings and content blocks" },
  { token: "space-2xl", value: 48, usage: "Subsection breaks, card grid row gaps" },
  { token: "space-3xl", value: 64, usage: "Section vertical padding (Mobile)" },
  { token: "space-4xl", value: 96, usage: "Section vertical padding (Desktop)" },
  { token: "space-5xl", value: 128, usage: "Major Hero & Act vertical rhythm padding" },
];

/* --------------------------------------------------------------- PERSONAS */

export const ANTI_PERSONAS = [
  {
    n: 1,
    name: "Retail Bank",
    icon: "🏦",
    tropes:
      "Cheerful pastel buttons, smiling stock families with tablets, consumer loan comparison tables, “Apply Now” badges.",
    why:
      "BWCI does not provide consumer banking; retail activities sit solely with licensed subsidiaries.",
    benchmark:
      "Brookfield / Temasek: benchmark holding-company sites generally separate parent-level narrative from operating businesses and regulated product delivery.",
  },
  {
    n: 2,
    name: "FinTech Startup",
    icon: "🚀",
    tropes:
      "Neon purples/magentas, dark-mode 3D glowing gradients, floating isometric glass cubes, animated hype counters.",
    why: "Suggests early-stage volatility rather than permanent institutional infrastructure.",
    benchmark: "Banking Circle Benchmark: avoid marketing superlatives and startup aesthetics.",
  },
  {
    n: 3,
    name: "Crypto / Web3 Project",
    icon: "⛓️",
    tropes:
      "Cyberpunk lasers, floating coins, cosmic particle nets, “decentralized revolution” tropes.",
    why:
      "Destroys credibility with institutional allocators and DFIs; tokenisation is an enabling technology, not the brand.",
    benchmark: "BWCI Strategy Brief §17: technology is an enabling tool, never the identity.",
  },
  {
    n: 4,
    name: "Generic Private Equity",
    icon: "🏙️",
    tropes:
      "Monochromatic grey/navy monotony, generic glass skyscrapers, stock ticker screens, faceless boardroom suits.",
    why: "Reads as purely extractive capital allocation rather than productive real-economy building.",
    benchmark: "Partners Group Benchmark: focus on “Main Street not Wall Street.”",
  },
  {
    n: 5,
    name: "Corporate Consultancy",
    icon: "🧩",
    tropes:
      "PowerPoint puzzle pieces, intersecting light trails, corporate handshakes, generic “digital transformation” arrows.",
    why:
      "Looks like an advisory firm selling slide decks rather than a holding company building operating vehicles.",
    benchmark: "EXOR Benchmark: present the parent as a builder of tangible companies.",
  },
];

export const PRINCIPLES = [
  {
    n: 1,
    title: "Institutional, not traditional",
    body:
      "Establish credibility and regulatory seriousness without outdated visual baggage — no ornamental crests, faux-marble textures, or heavy serifs on UI elements.",
  },
  {
    n: 2,
    title: "Structured, not complicated",
    body:
      "Make complex multi-entity holding architecture easy to navigate through modular cards, clear grouping, and progressive disclosure.",
  },
  {
    n: 3,
    title: "System-oriented, not product-oriented",
    body:
      "Present BWCI as an operating holding engine and institutional architect, not a retail product shelf.",
  },
  {
    n: 4,
    title: "Real economy over financial abstraction",
    body:
      "Anchor every capital conversation to tangible enterprises, supply chains, and physical production.",
  },
  {
    n: 5,
    title: "Restrained visual language",
    body:
      "Avoid decorative gradients, excessive shadows, and cosmetic animations. Semantic visual elements carry meaning, not decoration.",
  },
  {
    n: 6,
    title: "Clear hierarchy — the Two-Register Discipline",
    body:
      "Visually distinguish what exists and operates today from what is in active development or planned for the future.",
  },
  {
    n: 7,
    title: "Scalable system",
    body:
      "Ensure components, cards, and diagrams can expand as new platforms, partnerships, and regional nodes join the ecosystem.",
  },
];

/* ----------------------------------------------------------------- ENGINE */

export const ENGINE_L1 = [
  {
    code: "01",
    title: "The Need",
    sub: "Financing Friction",
    body:
      "Sourced, evidenced bottlenecks where productive enterprises cannot access appropriate capital.",
    color: "#B98F2D",
  },
  {
    code: "02",
    title: "Architecture",
    sub: "Holding Engineering",
    body: "Capital structures engineered at holding level to resolve the identified bottleneck.",
    color: "#1D4A54",
  },
  {
    code: "03",
    title: "Capability",
    sub: "Modular Platforms",
    body: "Institutions built, acquired, or partnered with to deliver the structure.",
    color: "#123039",
  },
  {
    code: "04",
    title: "Capital",
    sub: "Mobilised Wholesale",
    body: "Institutional allocators, banks and DFIs mobilised into governed pipelines.",
    color: "#3D5A80",
  },
  {
    code: "05",
    title: "Productive Use",
    sub: "Tangible Real Economy",
    body: "Capital reaches SMEs, regional businesses and impact projects that build real output.",
    color: "#12836B",
  },
];

export const ENGINE_L2 = [
  { code: "01", title: "Identify", body: "Evidence the financing bottleneck with sourced market data." },
  { code: "02", title: "Engineer", body: "Design the appropriate capital structure and risk architecture." },
  { code: "03", title: "Build / Partner", body: "Build, acquire, or partner with the delivering institution." },
  { code: "04", title: "Mobilise", body: "Connect wholesale and institutional capital into the structure." },
  { code: "05", title: "Productive Use", body: "Capital is deployed into real-economy enterprise activity." },
  { code: "06", title: "Scale", body: "Validated structures become repeatable templates across sectors." },
];

export const ENGINE_L3 = [
  { title: "Financial Engineering", body: "Structuring, risk layering, and capital design capability." },
  { title: "Group Institutions", body: "Owned and authorised delivery vehicles within the holding." },
  { title: "Capital Architecture", body: "Wholesale pathways, syndication routes and DFI interfaces." },
  { title: "Technology (Enabler)", body: "Data, rails and governance tooling — never the identity." },
];

/* -------------------------------------------------------------- ECOSYSTEM */

export type Pod = {
  id: string;
  title: string;
  detail: string;
  flow: string;
  kind: "pod" | "ring" | "hub";
  color: string;
  lenses: string[];
};

export const ECOSYSTEM_PODS: Pod[] = [
  {
    id: "investors",
    title: "Investors & Capital Pod",
    detail: "Institutional allocators, banks, DFIs, funds",
    flow: "Capital ⇄ Outcomes",
    kind: "pod",
    color: "#3D5A80",
    lenses: ["full", "investor"],
  },
  {
    id: "partners",
    title: "Strategic Partners Pod",
    detail: "Tech enablers, knowledge, advisory & research",
    flow: "Capability ⇄ Access",
    kind: "pod",
    color: "#1D4A54",
    lenses: ["full", "partner"],
  },
  {
    id: "interface",
    title: "The Interface Ring",
    detail: "Platforms & delivery vehicles",
    flow: "Primary connective layer",
    kind: "ring",
    color: "#123039",
    lenses: ["full", "investor", "partner", "sme"],
  },
  {
    id: "hub",
    title: "BWCI PLC Hub",
    detail: "Financial Engine · architect, not counterparty",
    flow: "Architecture",
    kind: "hub",
    color: "#123039",
    lenses: ["full", "investor", "partner", "sme"],
  },
  {
    id: "real",
    title: "Real Economy Pod",
    detail: "SMEs, regional enterprises, sustainable impact projects",
    flow: "Enterprise Needs ⇄ Capital Pathways",
    kind: "pod",
    color: "#12836B",
    lenses: ["full", "sme"],
  },
];

export const INTERFACE_NODES = [
  { name: "Providence Asset Mgmt", status: "OPERATING" as const },
  { name: "Private Capital", status: "IN DEVELOPMENT" as const },
  { name: "FinTech Infrastructure", status: "OPERATING" as const },
  { name: "Trade Finance", status: "IN DEVELOPMENT" as const },
];

export const LENSES = [
  { id: "sme", label: "View as SME / Project" },
  { id: "investor", label: "View as Institutional Investor" },
  { id: "partner", label: "View as Partner" },
  { id: "full", label: "Full System View" },
];

/* ---------------------------------------------------------------- STROKES */

export const STROKE_GRAMMAR = [
  { glyph: "→", name: "Solid Arrow", meaning: "One-way input/output flow (e.g. Need entering Engine)" },
  { glyph: "⇄", name: "Double-Headed", meaning: "Two-way exchange between independent participants" },
  { glyph: "---", name: "Dashed Stroke", meaning: "Non-owned relationship / independent participant boundary" },
  { glyph: "⤹", name: "Dashed Arc", meaning: "Return loops: circulation & scale feedback arcs" },
  { glyph: "▢", name: "Spanning Frame", meaning: "Technology, data, governance & risk boundary envelope" },
];

export const PROHIBITED_GRAPHICS = [
  "Handshake stock photos",
  "Generic glass skyscrapers looking up at the sky",
  "Floating crypto tokens or blockchain webs",
  "Stock market ticker overlays",
  "Puzzle pieces, gears, or mechanical engine clip-art",
];

/* ------------------------------------------------------------ PHOTOGRAPHY */

export const PHOTO_APPROVED = [
  "Advanced manufacturing & workshops",
  "Agriculture & sustainable food hubs",
  "Multimodal logistics & freight rails",
  "Clean tech & local energy grids",
  "Real economic activity & processes",
];

export const PHOTO_PROHIBITED = [
  "Generic glass skyscrapers looking up",
  "Business handshakes in suits",
  "Stock market ticker screens & green charts",
  "Posed corporate boardroom meetings",
  "Cryptocurrency coins & digital matrices",
];

/* ----------------------------------------------------------------- MOTION */

export const MOTION_TOKENS = [
  {
    token: "motion-micro",
    duration: "150ms – 200ms",
    ms: 180,
    easing: "ease-out",
    curve: "cubic-bezier(0.0, 0.0, 0.2, 1)",
    usage: "Button hovers, status tag highlights, tooltip fades",
  },
  {
    token: "motion-component",
    duration: "200ms – 300ms",
    ms: 250,
    easing: "ease-in-out",
    curve: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    usage: "Accordion expand/collapse, tab switching, card hover state",
  },
  {
    token: "motion-diagram",
    duration: "400ms – 700ms",
    ms: 500,
    easing: "ease-out",
    curve: "cubic-bezier(0.16, 1, 0.3, 1)",
    usage: "Engine stage sequencing, ecosystem flow pulse",
  },
  {
    token: "motion-system",
    duration: "700ms – 1000ms",
    ms: 800,
    easing: "ease-in-out",
    curve: "cubic-bezier(0.16, 1, 0.3, 1)",
    usage: "Return loop path drawing on scroll completion",
  },
];

/* --------------------------------------------------------------- DO/DON'T */

export const DO_DONT = [
  {
    cat: "Color",
    icon: "◧",
    do: "Use Deep Spruce Ink (#123039) for institutional authority, paired with Real Economy Emerald (#12836B) for value flows.",
    dont: "Don't use neon gradients, saturated retail blues, or flat uninspiring greys.",
  },
  {
    cat: "Status",
    icon: "●",
    do: 'Always pair a dot/glyph with explicit text and an "as at" date (● IN DEVELOPMENT · AS AT SEP 2026).',
    dont: "Don't rely on color alone, and never present a pipeline ambition as operating.",
  },
  {
    cat: "Typography",
    icon: "Aa",
    do: "Use clean geometric sans with tabular lining figures (tnum) for numbers and dates.",
    dont: "Don't use decorative script fonts, sci-fi techno fonts, or illegible ultra-condensed typefaces.",
  },
  {
    cat: "Components",
    icon: "▤",
    do: "Provide two balanced front doors for SMEs and Investors with clear legal attribution on platform cards.",
    dont: "Don't create product shopping carts, instant loan application forms, or promotional popups.",
  },
  {
    cat: "Diagrams",
    icon: "⇄",
    do: "Draw two-way arrows (⇄) between independent pods and draw the return loops on the Financial Engine.",
    dont: "Don't draw one-way funnels, solar hub-and-spoke empires, or literal mechanical engine clipart.",
  },
  {
    cat: "Photography",
    icon: "◉",
    do: "Feature documentary photography of factories, farms, freight, workshops, and real builders at work.",
    dont: "Don't use stock photos of generic business suits shaking hands, glass skyscrapers, or trading tickers.",
  },
  {
    cat: "Motion",
    icon: "⟳",
    do: "Use calm, subtle transitions that guide attention and respect prefers-reduced-motion.",
    dont: "Don't use continuous looping motion, bouncing UI elements, or startup-style particle effects.",
  },
];

/* ------------------------------------------------------------- BENCHMARKS */

export const BENCHMARKS = [
  {
    inst: "Brookfield Corporation",
    ref: "§3.1",
    obs: "Structural separation between corporate parent holding narrative and operating business platforms.",
    app: "Dual-zone navigation (Brand vs Corporate/IR) and platform cards with holding-level mandate summaries.",
  },
  {
    inst: "Temasek Holdings",
    ref: "§3.3",
    obs: "Disciplined entity classification and dated reporting conventions across portfolio disclosures.",
    app: "Two-axis status badge system and dated timestamps on all regulatory/operational entity references.",
  },
  {
    inst: "Mubadala Investment Co.",
    ref: "§3.2",
    obs: "Presentation of diversified assets through tailored portfolio lenses and strategic mandate cards.",
    app: "Platform card structure and interactive lens filter controls on the ecosystem diagram.",
  },
  {
    inst: "Partners Group",
    ref: "§3.5",
    obs: 'Authentic "Main Street not Wall Street" tone and visual focus on real-economy builders.',
    app: "Documentary photography guidelines capturing active manufacturing, logistics, and human operators.",
  },
  {
    inst: "EXOR",
    ref: "§3.4",
    obs: "Strong builder identity and document-led shareholder letters conveying long-term compounding.",
    app: "Restrained typographic hierarchy with an optional editorial serif for the Chairman's Letter.",
  },
  {
    inst: "Better Society Capital",
    ref: "§3.6",
    obs: "Prominent use of sourced macroeconomic gap statistics on the homepage rather than self-promotion.",
    app: "Disconnect evidence strip (Act 2) and metric card citation standards.",
  },
  {
    inst: "Triodos Bank",
    ref: "§3.7",
    obs: "High transparency in publishing financed sectors and clear multi-entity boundaries.",
    app: "Separation between BWCI holding and regulated subsidiary delivery vehicles.",
  },
  {
    inst: "Banking Circle",
    ref: "§3.8",
    obs: "Concrete technical framing of clearing rails and APIs, paired with a warning against marketing hype.",
    app: "Sub-systems capability plate and strict prohibition of startup buzzwords.",
  },
  {
    inst: "SC Ventures",
    ref: "§3.9",
    obs: "Explicit distinction between internal ventures (build) and external investments (partner).",
    app: "Distinction between proprietary platform builds and partner capabilities in the Group Architecture.",
  },
  {
    inst: "Berkshire Hathaway",
    ref: "§3.10",
    obs: "Unadorned document-led corporate governance portal.",
    app: "Subdued Corporate/IR zone focused on governance, filings, and shareholder materials.",
  },
];

export const DEPENDENCIES = [
  {
    title: "Delivering Entities & PAM Case Study",
    body:
      'Providence Asset Management (PAM), its regulatory status, permissions, equity ownership, and "first operational case study" phrasing are illustrative placeholders subject to formal verification by BWCI legal and compliance teams prior to public publishing.',
  },
  {
    title: "Quantitative Market Evidence & Statistics",
    body:
      "Specific macroeconomic figures (e.g. SME financing gap figures) and source citations in UI templates are placeholders subject to verification by the research workstream before public release.",
  },
  {
    title: "Holding Architecture & Non-Intermediation",
    body:
      "Visual models must never depict BWCI PLC as the central counterparty to financial transactions; participants maintain independent legal relationships.",
  },
  {
    title: "Regulated Activities",
    body:
      "Regulated services (asset management, credit syndication, deposit-taking) are conducted exclusively by appropriately authorised and licensed subsidiary entities, never directly by BWCI PLC.",
  },
  {
    title: "Impact Measurement & Verification Claims",
    body:
      'All "verified impact" metrics and evaluation frameworks must be backed by audited, third-party source documentation before live deployment.',
  },
];

/* ------------------------------------------------------- RESPONSIVE FLOWS */

export const REFLOW = [
  {
    desktop: "Horizontal 6-stage operating chassis with dual return arcs (05→01 and 06→01)",
    mobile: "Vertical stack with gold progress rail and vertical return connector",
  },
  {
    desktop: "360° radial ecosystem network map with 3 outer floating participant pods",
    mobile: "Layered 4-tier stack: Capital → Engine → Platforms → Real Economy (2-way flows)",
  },
  {
    desktop: "Dual-register group architecture chart (Group Today vs Architecture in Build)",
    mobile: "Tabbed register switcher: [The Group Today] | [Pipelines]",
  },
];

/* ---------------------------------------------------------- RAW CSS BLOCK */

export const TOKEN_GROUPS: { group: string; note: string; vars: [string, string][] }[] = [
  {
    group: "Color Tokens",
    note: "Brand, accent, surface, text and border primitives.",
    vars: [
      ["--bwci-color-brand-ink", "#123039"],
      ["--bwci-color-brand-slate", "#16323B"],
      ["--bwci-color-brand-teal", "#1D4A54"],
      ["--bwci-color-accent-emerald", "#12836B"],
      ["--bwci-color-accent-emerald-dark", "#0D6E59"],
      ["--bwci-color-accent-gold", "#B98F2D"],
      ["--bwci-color-accent-gold-dark", "#9E7720"],
      ["--bwci-color-accent-blue", "#3D5A80"],
      ["--bwci-color-surface-canvas", "#FFFFFF"],
      ["--bwci-color-surface-subtle", "#F7F9F8"],
      ["--bwci-color-surface-cloud", "#EFF3F1"],
      ["--bwci-color-surface-dark", "#123039"],
      ["--bwci-color-text-primary", "#123039"],
      ["--bwci-color-text-secondary", "#42585E"],
      ["--bwci-color-text-muted", "#6C8085"],
      ["--bwci-color-text-inverse", "#FFFFFF"],
      ["--bwci-color-border-subtle", "#E2E9E6"],
      ["--bwci-color-border-default", "#D5E0DC"],
      ["--bwci-color-border-strong", "#8A9E99"],
      ["--bwci-color-border-dashed", "#8A9E99"],
    ],
  },
  {
    group: "Status Badge Tokens",
    note: "Axis 1 maturity & Axis 2 relationship encoding.",
    vars: [
      ["--bwci-status-operating-dot", "#12836B"],
      ["--bwci-status-operating-text", "#0D6E59"],
      ["--bwci-status-operating-border", "#A3D9C9"],
      ["--bwci-status-operating-bg", "#E8F5F1"],
      ["--bwci-status-dev-dot", "#B98F2D"],
      ["--bwci-status-dev-text", "#7D5B0F"],
      ["--bwci-status-dev-border", "#E8C46B"],
      ["--bwci-status-dev-bg", "#FDF8EB"],
      ["--bwci-status-proposed-dot", "#6C8085"],
      ["--bwci-status-proposed-text", "#384C51"],
      ["--bwci-status-proposed-border", "#BDCCD0"],
      ["--bwci-status-proposed-bg", "#F0F4F5"],
      ["--bwci-status-group-company", "#0D6E59"],
      ["--bwci-status-partner-capability", "#3D5A80"],
      ["--bwci-status-ecosystem-node", "#6C8085"],
    ],
  },
  {
    group: "Focus & Accessibility",
    note: "WCAG 2.2 AA enforcement primitives.",
    vars: [
      ["--bwci-focus-color", "#12836B"],
      ["--bwci-focus-width", "2px"],
      ["--bwci-focus-offset", "2px"],
      ["--bwci-touch-target", "44px"],
    ],
  },
  {
    group: "Typography",
    note: "Font stacks with documented fallbacks.",
    vars: [
      ["--bwci-font-sans", "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"],
      ["--bwci-font-mono", "'JetBrains Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace"],
      ["--bwci-font-serif", "'Newsreader', Georgia, serif"],
    ],
  },
  {
    group: "Layout & Spacing",
    note: "Containers, 8pt scale, gutters and radii.",
    vars: [
      ["--bwci-container-max", "1280px"],
      ["--bwci-container-diagram", "1440px"],
      ["--bwci-container-narrow", "768px"],
      ["--bwci-space-xs", "4px"],
      ["--bwci-space-sm", "8px"],
      ["--bwci-space-md", "16px"],
      ["--bwci-space-lg", "24px"],
      ["--bwci-space-xl", "32px"],
      ["--bwci-space-2xl", "48px"],
      ["--bwci-space-3xl", "64px"],
      ["--bwci-space-4xl", "96px"],
      ["--bwci-space-5xl", "128px"],
      ["--bwci-grid-gutter-desktop", "32px"],
      ["--bwci-grid-gutter-tablet", "20px"],
      ["--bwci-grid-gutter-mobile", "16px"],
      ["--bwci-radius-sm", "4px"],
      ["--bwci-radius-md", "8px"],
      ["--bwci-radius-full", "9999px"],
    ],
  },
  {
    group: "Breakpoints",
    note: "Responsive thresholds.",
    vars: [
      ["--bwci-breakpoint-sm", "640px"],
      ["--bwci-breakpoint-md", "768px"],
      ["--bwci-breakpoint-lg", "1024px"],
      ["--bwci-breakpoint-xl", "1280px"],
      ["--bwci-breakpoint-2xl", "1440px"],
    ],
  },
  {
    group: "Typography Scale",
    note: "Locked desktop size / line-height pairs.",
    vars: [
      ["--bwci-text-display", "52px"],
      ["--bwci-text-display-lh", "60px"],
      ["--bwci-text-h1", "40px"],
      ["--bwci-text-h1-lh", "48px"],
      ["--bwci-text-h2", "30px"],
      ["--bwci-text-h2-lh", "38px"],
      ["--bwci-text-h3", "22px"],
      ["--bwci-text-h3-lh", "29px"],
      ["--bwci-text-h4", "17px"],
      ["--bwci-text-h4-lh", "24px"],
      ["--bwci-text-body-lg", "18px"],
      ["--bwci-text-body-lg-lh", "29px"],
      ["--bwci-text-body", "15px"],
      ["--bwci-text-body-lh", "25px"],
      ["--bwci-text-body-sm", "13px"],
      ["--bwci-text-body-sm-lh", "20px"],
      ["--bwci-text-caption", "12px"],
      ["--bwci-text-caption-lh", "17px"],
      ["--bwci-text-eyebrow", "12px"],
      ["--bwci-text-eyebrow-lh", "16px"],
      ["--bwci-text-status", "11px"],
      ["--bwci-text-status-lh", "13px"],
      ["--bwci-text-metric", "44px"],
      ["--bwci-text-metric-lh", "48px"],
    ],
  },
  {
    group: "Motion",
    note: "Duration + easing pairs for calm functional motion.",
    vars: [
      ["--bwci-motion-micro", "180ms cubic-bezier(0.0, 0.0, 0.2, 1)"],
      ["--bwci-motion-component", "250ms cubic-bezier(0.4, 0.0, 0.2, 1)"],
      ["--bwci-motion-diagram", "500ms cubic-bezier(0.16, 1, 0.3, 1)"],
      ["--bwci-motion-system", "800ms cubic-bezier(0.16, 1, 0.3, 1)"],
    ],
  },
];
