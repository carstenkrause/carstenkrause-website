"use client";
import React, { useMemo, useState } from "react";

const brand = {
  navy: "#071426",
  navy2: "#0B1E36",
  gold: "#F4A11A",
  text: "#D9E4F2",
  muted: "#9FB0C6",
};

const navItems = [
  ["home", "Home"],
  ["speaking", "Speaking"],
  ["book", "Book"],
  ["advisory", "Advisory"],
  ["media", "Media"],
  ["contact", "Contact"],
];

const keynoteTopics = [
  {
    title: "The AI-Ready Leader",
    audience: "Boards, CIOs, CDOs, CAIOs, digital and transformation leaders",
    result:
      "How executives move from fragmented AI pilots to measurable enterprise impact using the HI + AI = ECI™ framework.",
  },
  {
    title: "From AI Experimentation to Enterprise Impact",
    audience: "Leadership teams, strategy offsites, innovation forums",
    result:
      "A practical roadmap for scaling AI while avoiding governance theatre, duplicated effort, and stalled momentum.",
  },
  {
    title: "AI Governance Without Slowing Innovation",
    audience: "Risk leaders, CIO organizations, architecture and governance councils",
    result:
      "A business-first governance approach that keeps speed, trust, and accountability in balance.",
  },
  {
    title: "The Executive Playbook for HI + AI = ECI™",
    audience: "Executive leadership events and customer conferences",
    result:
      "A keynote built around leadership judgment, organizational readiness, and real-world execution in the age of AI.",
  },
];

const serviceCards = [
  {
    title: "Keynotes",
    body: "High-impact talks for executive audiences, leadership summits, customer events, and strategic offsites.",
    detail: "Designed to create urgency, executive alignment, and a clear view of what happens next.",
    icon: "🎤",
  },
  {
    title: "Executive Workshops",
    body: "Practical sessions to assess readiness, align stakeholders, and convert AI ambition into a focused action plan.",
    detail: "Built for leadership teams that need decisions, not more abstract AI discussion.",
    icon: "👥",
  },
  {
    title: "Strategic Advisory",
    body: "Senior-level guidance for organizations that need strategic AI, digital, data, and enterprise transformation leadership.",
    detail: "For organizations that want senior executive perspective on governance, priorities, and execution.",
    icon: "💼",
  },
];

const proofPoints = [
  "Global enterprise architecture and digital portfolio leadership experience",
  "Author of The AI-Ready Leader and creator of HI + AI = ECI™",
  "Executive speaking, workshop facilitation, and thought leadership across AI, data, architecture, and governance",
  "Founder of CDO TIMES with direct access to senior executive audiences",
];

const audienceList = [
  "Boards and executive leadership teams",
  "CIO, CDO, CAIO, CTO, and CISO communities",
  "Technology, data, architecture, and transformation leaders",
  "Partner, customer, and invite-only executive events",
];

const endorsements = [
  {
    quote:
      "HI + AI = ECI™ isn’t just a formula—it’s the strategic blueprint for leaders who want to harness transformation instead of being swept away by it.",
    author: "Raymond L. Kunik Jr., Chief Data Officer, 3M",
  },
  {
    quote:
      "This is a great handbook for how leaders need to think about deploying AI to generate real results and transformations that stick.",
    author: "Neil Hampshire, Chief Data Officer, Ocean Spray",
  },
  {
    quote:
      "The ECI equation defines leadership in the AI era. Carsten’s storytelling and real-world examples demonstrate how to responsibly unlock AI innovation while building a culture where people and AI thrive together.",
    author: "Grant Ecker, VP Enterprise Architecture, Ecolab",
  },
];

const mediaLinks = [
  {
    title: "CDO TIMES",
    href: "https://cdotimes.com",
    desc: "Executive articles, leadership analysis, and digital transformation insights.",
    symbol: "📰",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
    desc: "Executive-facing posts, commentary, launch content, and thought leadership.",
    symbol: "in",
  },
  {
    title: "The AI-Ready Leader",
    href: "#book",
    desc: "Book, endorsements, keynote alignment, and workshop tie-ins.",
    symbol: "📘",
  },
];

function Icon({ children, className = "w-5 h-5" }) {
  return (
    <span className={`${className} inline-flex items-center justify-center leading-none`} aria-hidden="true">
      {children}
    </span>
  );
}

function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 sm:px-6 md:px-10 lg:px-16 py-14 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {eyebrow && <div className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[var(--gold)] mb-3">{eyebrow}</div>}
        {title && <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight max-w-4xl">{title}</h2>}
        {subtitle && <p className="mt-5 max-w-3xl text-base md:text-lg text-[var(--muted)] leading-8">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-2xl backdrop-blur-sm min-h-[128px] flex flex-col justify-center">
      <div className="text-2xl md:text-4xl font-semibold text-[var(--gold)] break-words">{value}</div>
      <div className="mt-2 text-sm md:text-base text-[var(--muted)] leading-6">{label}</div>
    </div>
  );
}

function CTAButton({ href, children, primary = false, icon = "→" }) {
  const classes = primary
    ? "bg-[var(--gold)] text-black hover:brightness-105"
    : "bg-transparent text-white border border-white/15 hover:bg-white/5";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base transition ${classes}`}
    >
      <span>{children}</span>
      <Icon className="w-4 h-4">{icon}</Icon>
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.04)] shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

function ResponsiveImage({ src, alt, className = "", heightClass = "h-64 md:h-80" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${heightClass} ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover block" />
    </div>
  );
}

export default function CarstenKrauseWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: `radial-gradient(circle at top right, rgba(244,161,26,0.10), transparent 28%), linear-gradient(180deg, ${brand.navy2} 0%, ${brand.navy} 38%, #050C17 100%)`,
        color: brand.text,
        ["--gold"]: brand.gold,
        ["--muted"]: brand.muted,
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px);} to { opacity: 1; transform: translateY(0);} }
        img { max-width: 100%; height: auto; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[rgba(4,12,24,0.72)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 text-white font-semibold tracking-wide min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-[var(--gold)]/15 border border-[var(--gold)]/25 flex items-center justify-center text-[var(--gold)] font-bold flex-none">
              CK
            </div>
            <div className="min-w-0">
              <div className="text-sm md:text-base truncate">Carsten Krause</div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[var(--muted)] truncate">AI-Ready Leadership</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-[var(--muted)]">
            {navItems.map(([href, label]) => (
              <a key={href} href={`#${href}`} className="hover:text-white transition">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <CTAButton href="#contact">Book an Intro Call</CTAButton>
            <CTAButton href="#speaking" primary>
              Request Speaking Info
            </CTAButton>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl border border-white/10 text-white flex-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <Icon className="w-5 h-5">✕</Icon> : <Icon className="w-5 h-5">☰</Icon>}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 px-4 sm:px-6 pb-4 pt-4 bg-[rgba(4,12,24,0.96)]">
            <div className="flex flex-col gap-4 text-[var(--muted)]">
              {navItems.map(([href, label]) => (
                <a key={href} href={`#${href}`} className="hover:text-white" onClick={() => setMobileOpen(false)}>
                  {label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <CTAButton href="#contact">Book an Intro Call</CTAButton>
                <CTAButton href="#speaking" primary>
                  Request Speaking Info
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="px-4 sm:px-6 md:px-10 lg:px-16 pt-12 md:pt-16 pb-12 md:pb-16 scroll-mt-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="animate-[fadeIn_0.55s_ease-out] min-w-0 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-[var(--gold)] max-w-full">
                <Icon className="w-4 h-4">◈</Icon>
                <span className="truncate">Executive Keynotes • Workshops • Advisory</span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold text-white leading-[1.02] max-w-4xl">
                The AI-Ready Leader for the Age of <span className="text-[var(--gold)]">Enterprise Impact</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-[var(--muted)]">
                Carsten Krause helps executive leaders turn AI from isolated experimentation into measurable business performance through the HI + AI = ECI™ framework.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="#contact" primary>
                  Book Carsten to Speak
                </CTAButton>
                <CTAButton href="#book" icon="📘">
                  Explore the Book
                </CTAButton>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
                <Stat value="HI + AI" label="Leadership lens for scaling AI responsibly" />
                <Stat value="ECI™" label="Elevated Collaborative Intelligence™ framework" />
                <Stat value="CDO TIMES" label="Media platform feeding authority and executive reach" />
              </div>
            </div>

            <div className="animate-[fadeIn_0.6s_ease-out] order-1 lg:order-2 min-w-0">
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                <div className="aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5] xl:aspect-[16/14]">
                  <img
                    src="/images/keynote-hero.jpg"
                    alt="Carsten Krause keynote"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C17] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                  <div className="max-w-2xl">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
                      HI + AI = <span className="text-[var(--gold)]">ECI™</span>
                    </div>
                    <div className="mt-3 text-sm sm:text-base md:text-lg text-white/85 max-w-xl leading-7">
                      Elevated Collaborative Intelligence™ for executive leaders scaling AI across the enterprise.
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <CTAButton href="#contact" primary>
                      Book a Keynote
                    </CTAButton>
                    <CTAButton href="#speaking">View Speaking Topics</CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16 pb-6 md:pb-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResponsiveImage src="/images/keynote-1.png" alt="Keynote speaking 1" heightClass="h-60 md:h-72" />
            <ResponsiveImage src="/images/keynote-2.png" alt="Keynote speaking 2" heightClass="h-60 md:h-72" />
            <ResponsiveImage src="/images/keynote-3.jpg" alt="Keynote speaking 3" heightClass="h-60 md:h-72" />
          </div>
        </section>

        <Section
          id="speaking"
          eyebrow="Speaking"
          title="Keynotes That Move Leaders From AI Ambition to Enterprise Impact"
          subtitle="Strategic keynote sessions for executive audiences that want practical guidance on scaling AI, strengthening governance, and turning leadership intent into measurable business results."
        >
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div className="grid gap-5">
              {keynoteTopics.map((topic) => (
                <Card key={topic.title} className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl text-white font-medium">{topic.title}</h3>
                      <p className="mt-3 text-[var(--muted)] leading-7">{topic.result}</p>
                    </div>
                    <Icon className="w-6 h-6 text-[var(--gold)] flex-none mt-1">🎤</Icon>
                  </div>
                  <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
                    <span className="truncate">Best for: {topic.audience}</span>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-7 md:p-8 h-fit xl:sticky xl:top-24">
              <div className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Speaking Engagements</div>
              <h3 className="mt-3 text-2xl md:text-3xl text-white font-medium">
                Speaking Formats for Leadership Teams, Conferences, and Executive Forums
              </h3>
              <div className="mt-5 space-y-4 text-[var(--muted)] leading-7">
                <p>
                  Each session is designed to help leaders cut through AI hype, align stakeholders, and focus on the actions that actually improve performance, trust, and execution.
                </p>
                <p>
                  Formats can be tailored for keynote stages, customer events, executive offsites, leadership dinners, and internal transformation forums.
                </p>
              </div>
              <div className="mt-6 grid gap-3">
                {[
                  "Conference keynotes",
                  "Executive dinners and invite-only forums",
                  "Leadership offsites",
                  "Customer and partner events",
                  "Board and senior leadership sessions",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-white/90">
                    <Icon className="w-5 h-5 text-[var(--gold)] mt-0.5 flex-none">✓</Icon>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href="#contact" primary>
                  Request Speaking Info
                </CTAButton>
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="book"
          eyebrow="Book"
          title="The Book Behind the HI + AI = ECI™ Leadership Framework"
          subtitle="The AI-Ready Leader gives executives a practical framework for leading AI transformation with stronger judgment, better governance, and greater organizational readiness."
          className="bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <Card className="p-6 md:p-8">
              <ResponsiveImage src="/images/book.png" alt="Carsten Krause holding The AI-Ready Leader" heightClass="h-80 sm:h-[28rem]" />
              <div className="mt-5 flex flex-wrap gap-3">
                <CTAButton href="#contact" primary icon="📘">
                  Request Book + Speaking Info
                </CTAButton>
                <CTAButton href="https://cdotimes.com" icon="↗">
                  See Related Articles
                </CTAButton>
              </div>
            </Card>

            <div className="grid gap-5">
              <Card className="p-7 md:p-8">
                <div className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Featured Book</div>
                <h3 className="mt-3 text-3xl text-white font-medium">The AI-Ready Leader</h3>
                <p className="mt-4 text-[var(--muted)] leading-8">
                  HI + AI = ECI™ positions AI transformation as a leadership problem first, not a tooling problem. It gives executives a practical model for scaling AI with stronger judgment, better alignment, and more durable business outcomes.
                </p>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {endorsements.map((item) => (
                  <Card key={item.author} className="p-6">
                    <div className="text-white leading-7">“{item.quote}”</div>
                    <div className="mt-4 text-sm text-[var(--gold)]">— {item.author}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="advisory"
          eyebrow="Services"
          title="Keynotes, Executive Workshops, and Strategic Advisory"
          subtitle="Choose the format that best fits your leadership team, event, or transformation agenda."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ResponsiveImage src="/images/book.png" alt="Book" heightClass="h-60 md:h-72" />
            <ResponsiveImage src="/images/consulting.png" alt="Consulting" heightClass="h-60 md:h-72" />
            <ResponsiveImage src="/images/workshop.png" alt="Workshop" heightClass="h-60 md:h-72" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Card key={card.title} className="p-7 md:p-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--gold)]/12 border border-[var(--gold)]/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[var(--gold)]">{card.icon}</Icon>
                </div>
                <h3 className="mt-6 text-2xl text-white font-medium">{card.title}</h3>
                <p className="mt-4 text-[var(--muted)] leading-8">{card.body}</p>
                <div className="mt-4 text-white/90 leading-7">{card.detail}</div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-7 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">How Clients Engage</div>
                <h3 className="mt-3 text-3xl text-white font-medium">From Executive Insight to Measurable Business Action</h3>
                <div className="mt-5 space-y-4 text-[var(--muted)] leading-8">
                  <p>
                    <span className="text-white">Keynotes</span> help leadership teams frame the challenge, align around priorities, and create urgency for action.
                  </p>
                  <p>
                    <span className="text-white">Workshops</span> turn executive discussion into practical roadmaps, decisions, and next steps tailored to your organization.
                  </p>
                  <p>
                    <span className="text-white">Advisory support</span> provides ongoing senior-level guidance for organizations that need execution, governance, and leadership follow-through.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  ["📘", "The book creates authority and opens the conversation.", "A clear leadership framework that gives executives a reason to engage."],
                  ["🎤", "Keynotes create visibility and executive momentum.", "Designed to shift thinking and move leaders toward action."],
                  ["👥", "Workshops turn strategy into decisions and next steps.", "Structured sessions that align stakeholders and focus the agenda."],
                  ["💼", "Advisory support helps sustain execution.", "Ongoing senior-level guidance for leadership teams navigating transformation."],
                ].map(([symbol, title, body]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/12 border border-[var(--gold)]/20 flex items-center justify-center flex-none">
                      <Icon className="w-6 h-6 text-[var(--gold)]">{symbol}</Icon>
                    </div>
                    <div>
                      <div className="text-white font-medium leading-7">{title}</div>
                      <div className="mt-1 text-[var(--muted)] leading-7">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Section>

        <Section
          id="media"
          eyebrow="Media & Links"
          title="Thought Leadership, Media, and Executive Resources"
          subtitle="Explore articles, commentary, and executive resources across CDO TIMES, LinkedIn, and The AI-Ready Leader."
          className="bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaLinks.map((item) => (
              <Card key={item.title} className="p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-[var(--gold)]">{item.symbol}</Icon>
                  <h3 className="text-2xl text-white font-medium">{item.title}</h3>
                </div>
                <p className="mt-4 text-[var(--muted)] leading-8">{item.desc}</p>
                <a href={item.href} className="mt-6 inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold)]/85 transition">
                  Open <Icon className="w-4 h-4">↗</Icon>
                </a>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-7 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Explore</div>
                <h3 className="mt-3 text-3xl text-white font-medium">Explore the Site</h3>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
                  {["Home", "Speaking", "Book", "Advisory", "Media", "Contact", "Executive Briefs", "Workshop Format", "About Carsten"].map((page) => (
                    <div key={page} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {page}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Who This Is For</div>
                <h3 className="mt-3 text-3xl text-white font-medium">Built for Executive and Transformation Leaders</h3>
                <div className="mt-5 grid gap-3">
                  {audienceList.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                      <Icon className="w-5 h-5 text-[var(--gold)] mt-0.5 flex-none">👥</Icon>
                      <span className="text-[var(--muted)] leading-7">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Start the Conversation"
          subtitle="For keynote inquiries, executive workshops, strategic advisory discussions, or media opportunities, get in touch directly."
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
            <Card className="p-7 md:p-8">
              <div className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Primary contact</div>
              <h3 className="mt-3 text-2xl md:text-3xl text-white font-medium break-words">carsten.krause@ckcdigital.com</h3>
              <div className="mt-6 space-y-4 text-[var(--muted)] leading-8">
                <p>Use this email for keynote requests, workshop inquiries, leadership advisory discussions, and media opportunities.</p>
                <p>Share the audience, event, business challenge, or leadership objective, and we can discuss the best format.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href="mailto:carsten.krause@ckcdigital.com" primary icon="✉">
                  Email Carsten
                </CTAButton>
                <CTAButton href="https://cdotimes.com" icon="◌">
                  Visit cdotimes.com
                </CTAButton>
              </div>
            </Card>

            <Card className="p-7 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-[var(--muted)]">Name</label>
                  <input className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none text-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-[var(--muted)]">Company</label>
                  <input className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none text-white" placeholder="Organization" />
                </div>
                <div>
                  <label className="text-sm text-[var(--muted)]">Email</label>
                  <input className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none text-white" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="text-sm text-[var(--muted)]">Interest</label>
                  <select className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none text-white">
                    <option>Keynote</option>
                    <option>Workshop</option>
                    <option>Advisory</option>
                    <option>Media inquiry</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-[var(--muted)]">What are you looking for?</label>
                  <textarea
                    className="mt-2 w-full min-h-[140px] rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none text-white"
                    placeholder="Tell us about the event, audience, workshop goal, or advisory need."
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 items-center">
                <button className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base transition bg-[var(--gold)] text-black hover:brightness-105">
                  Submit Inquiry <Icon className="w-4 h-4">→</Icon>
                </button>
                <div className="text-sm text-[var(--muted)]">We typically respond with next steps, format options, and availability.</div>
              </div>
            </Card>
          </div>
        </Section>
      </main>

      <footer className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 border-t border-white/10 bg-[rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="text-white font-medium">Carsten Krause</div>
            <div className="mt-2 text-[var(--muted)] max-w-2xl leading-7">
              AI-ready leadership, executive keynotes, workshops, and advisory built around HI + AI = ECI™.
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <a href="https://cdotimes.com" className="hover:text-white">CDO TIMES</a>
            <a href="mailto:carsten.krause@ckcdigital.com" className="hover:text-white">Contact</a>
            <a href="#book" className="hover:text-white">Book</a>
            <a href="#speaking" className="hover:text-white">Speaking</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-sm text-[var(--muted)] flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {year} Carsten Krause. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[var(--gold)]">✓</Icon>
            <span>Executive keynotes, workshops, advisory, and thought leadership for the AI-ready enterprise.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
