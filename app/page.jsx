"use client";
import React, { useMemo, useState } from "react";

const navItems = [
  ["home", "Home"],
  ["speaking", "Speaking"],
  ["book", "Book"],
  ["advisory", "Advisory"],
  ["media", "Media"],
  ["contact", "Contact"],
];

const keynoteTopics = [
  ["The AI-Ready Leader", "How executives move from fragmented AI pilots to measurable enterprise impact using the HI + AI = ECI™ framework."],
  ["From AI Experimentation to Enterprise Impact", "A practical roadmap for scaling AI while avoiding governance theatre, duplicated effort, and stalled momentum."],
  ["AI Governance Without Slowing Innovation", "A business-first governance approach that keeps speed, trust, and accountability in balance."],
  ["The Executive Playbook for HI + AI = ECI™", "A keynote built around leadership judgment, organizational readiness, and real-world execution in the age of AI."],
];

const services = [
  ["Keynotes", "High-impact talks for executive audiences, leadership summits, customer events, and strategic offsites."],
  ["Executive Workshops", "Practical sessions to assess readiness, align stakeholders, and convert AI ambition into a focused action plan."],
  ["Strategic Advisory", "Senior-level guidance for organizations that need strategic AI, digital, data, and transformation leadership."],
];

const endorsements = [
  ["HI + AI = ECI™ isn’t just a formula—it’s the strategic blueprint for leaders who want to harness transformation instead of being swept away by it.", "Raymond L. Kunik Jr., Chief Data Officer, 3M"],
  ["This is a great handbook for how leaders need to think about deploying AI to generate real results and transformations that stick.", "Neil Hampshire, Chief Data Officer, Ocean Spray"],
  ["The ECI equation defines leadership in the AI era. Carsten’s storytelling and real-world examples demonstrate how to responsibly unlock AI innovation while building a culture where people and AI thrive together.", "Grant Ecker, VP Enterprise Architecture, Ecolab"],
];

function Button({ href, children, primary = false }) {
  return <a className={primary ? "btn btnPrimary" : "btn btnSecondary"} href={href}>{children}</a>;
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2>{title}</h2>}
        {subtitle && <p className="sectionLead">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function ImageCard({ src, alt }) {
  return (
    <div className="imageCard">
      <img src={src} alt={alt} />
    </div>
  );
}

export default function CarstenKrauseWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        :root {
          --navy: #071426;
          --navy2: #0B1E36;
          --gold: #F4A11A;
          --text: #D9E4F2;
          --muted: #9FB0C6;
          --line: rgba(255,255,255,0.12);
        }
        .page {
          min-height: 100vh;
          overflow-x: hidden;
          padding-top: 72px;
          background: radial-gradient(circle at top right, rgba(244,161,26,.12), transparent 26%), linear-gradient(180deg, var(--navy2), var(--navy) 38%, #050C17);
          color: var(--text);
          font-family: Arial, Helvetica, sans-serif;
        }
        .container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }
        .header { position: fixed; top: 0; left: 0; right: 0; width: 100%; z-index: 999; background: rgba(4,12,24,.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--line); }
        .navWrap { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .brand { text-decoration: none; color: #fff; display: flex; align-items: center; gap: 12px; min-width: 0; }
        .logo { width: 42px; height: 42px; border-radius: 14px; border: 1px solid rgba(244,161,26,.35); display: grid; place-items: center; color: var(--gold); font-weight: 800; background: rgba(244,161,26,.12); }
        .brandName { font-weight: 800; white-space: nowrap; }
        .brandSub { font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }
        .nav { display: flex; gap: 26px; align-items: center; }
        .nav a { color: var(--muted); text-decoration: none; font-size: 14px; }
        .nav a:hover { color: #fff; }
        .navCtas { display: flex; gap: 12px; }
        .menuBtn { display: none; border: 1px solid var(--line); color: #fff; background: transparent; border-radius: 12px; padding: 10px 12px; }
        .mobileMenu { display: none; padding: 0 16px 18px; }
        .mobileMenu a { display: block; color: var(--text); text-decoration: none; padding: 10px 0; }
        .btn { display: inline-flex; align-items: center; justify-content: center; text-decoration: none; border-radius: 16px; padding: 12px 18px; font-weight: 700; font-size: 14px; line-height: 1; min-height: 44px; }
        .btnPrimary { background: var(--gold); color: #06111f; }
        .btnSecondary { border: 1px solid var(--line); color: #fff; background: rgba(255,255,255,.03); }
        .hero { padding: 56px 0 42px; }
        .heroGrid { display: grid; grid-template-columns: minmax(0,1fr) minmax(360px,520px); gap: 42px; align-items: center; }
        .pill { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid rgba(244,161,26,.28); background: rgba(244,161,26,.10); color: var(--gold); border-radius: 999px; text-transform: uppercase; letter-spacing: .14em; font-size: 12px; font-weight: 800; }
        h1 { margin: 22px 0 0; color: #fff; font-size: clamp(40px, 6vw, 76px); line-height: 1.02; letter-spacing: -.04em; }
        h2 { margin: 0; color: #fff; font-size: clamp(30px, 4vw, 52px); line-height: 1.08; letter-spacing: -.03em; max-width: 880px; }
        h3 { margin: 0; color: #fff; font-size: 24px; line-height: 1.22; }
        .gold { color: var(--gold); }
        .lead { margin: 24px 0 0; color: var(--muted); font-size: 20px; line-height: 1.65; max-width: 720px; }
        .heroBtns { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px; }
        .stats { margin-top: 36px; display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; }
        .stat { min-height: 132px; padding: 22px; border: 1px solid var(--line); background: rgba(255,255,255,.05); border-radius: 24px; }
        .stat strong { display: block; color: var(--gold); font-size: 30px; margin-bottom: 8px; }
        .stat span { color: var(--muted); line-height: 1.45; }
        .heroImage { position: relative; overflow: hidden; border-radius: 30px; border: 1px solid var(--line); background: rgba(255,255,255,.04); box-shadow: 0 24px 80px rgba(0,0,0,.35); }
        .heroImage img { width: 100%; height: 620px; object-fit: cover; display: block; }
        .heroOverlay { position: absolute; inset: auto 0 0; padding: 28px; background: linear-gradient(0deg, rgba(5,12,23,.95), rgba(5,12,23,.72), transparent); }
        .heroOverlayTitle { color: #fff; font-size: clamp(28px, 3vw, 48px); font-weight: 800; line-height: 1; }
        .heroOverlay p { color: rgba(255,255,255,.86); line-height: 1.55; max-width: 540px; }
        .imageStrip { padding: 20px 0 36px; }
        .imageGrid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 16px; }
        .imageCard { overflow: hidden; border-radius: 22px; border: 1px solid var(--line); background: rgba(255,255,255,.04); }
        .imageCard img { width: 100%; height: 260px; object-fit: cover; display: block; }
        .section { padding: 72px 0; }
        .eyebrow { color: var(--gold); font-weight: 800; text-transform: uppercase; letter-spacing: .2em; font-size: 13px; margin-bottom: 14px; }
        .sectionLead { color: var(--muted); font-size: 18px; line-height: 1.7; max-width: 780px; margin: 22px 0 0; }
        .twoCol { margin-top: 36px; display: grid; grid-template-columns: minmax(0,1.2fr) minmax(320px,.8fr); gap: 28px; align-items: start; }
        .cardGrid { display: grid; gap: 18px; }
        .card { border: 1px solid var(--line); background: rgba(255,255,255,.05); border-radius: 28px; padding: 26px; box-shadow: 0 22px 60px rgba(0,0,0,.22); }
        .card p { color: var(--muted); line-height: 1.65; }
        .sticky { position: sticky; top: 96px; }
        .tag { display: inline-block; margin-top: 16px; color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .12em; border: 1px solid var(--line); border-radius: 999px; padding: 9px 12px; }
        .bookGrid { margin-top: 36px; display: grid; grid-template-columns: minmax(280px, .75fr) minmax(0, 1.25fr); gap: 28px; align-items: start; }
        .bookImage img { height: 520px; object-fit: cover; }
        .endorsements { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; margin-top: 18px; }
        .quote { color: #fff; line-height: 1.6; }
        .quoteBy { color: var(--gold); margin-top: 16px; font-size: 14px; line-height: 1.5; }
        .servicesImages { margin-top: 36px; display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 16px; }
        .services { margin-top: 28px; display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
        .icon { width: 54px; height: 54px; border-radius: 18px; border: 1px solid rgba(244,161,26,.25); background: rgba(244,161,26,.10); display: grid; place-items: center; font-size: 25px; margin-bottom: 20px; }
        .engageGrid { margin-top: 28px; display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 28px; }
        .engageList { display: grid; gap: 14px; }
        .engageItem { display: flex; gap: 14px; align-items: flex-start; padding: 18px; border: 1px solid var(--line); border-radius: 22px; background: rgba(255,255,255,.04); }
        .engageItem b { color: #fff; display: block; margin-bottom: 6px; }
        .mediaGrid { margin-top: 36px; display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
        .contactGrid { margin-top: 36px; display: grid; grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); gap: 28px; }
        .formGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        label { color: var(--muted); font-size: 14px; display: block; margin-bottom: 8px; }
        input, select, textarea { width: 100%; border: 1px solid var(--line); background: rgba(255,255,255,.06); color: #fff; border-radius: 16px; padding: 13px 14px; font: inherit; }
        textarea { min-height: 140px; resize: vertical; }
        .span2 { grid-column: span 2; }
        .footer { border-top: 1px solid var(--line); padding: 34px 0; background: rgba(255,255,255,.02); }
        .footerInner { display: flex; justify-content: space-between; gap: 24px; align-items: flex-start; }
        .footerLinks { display: flex; gap: 22px; flex-wrap: wrap; }
        .footerLinks a { color: var(--muted); text-decoration: none; }

        @media (max-width: 1024px) {
          .nav, .navCtas { display: none; }
          .menuBtn { display: block; }
          .mobileMenu { display: block; }
          .heroGrid { grid-template-columns: 1fr; }
          .heroText { order: 2; }
          .heroVisual { order: 1; }
          .heroImage img { height: 560px; }
          .twoCol, .bookGrid, .engageGrid, .contactGrid { grid-template-columns: 1fr; }
          .sticky { position: static; }
        }
        @media (max-width: 760px) {
          .container { width: min(100% - 28px, 1180px); }
          .hero { padding-top: 34px; }
          h1 { font-size: 38px; }
          .lead { font-size: 17px; }
          .stats, .imageGrid, .servicesImages, .services, .endorsements, .mediaGrid { grid-template-columns: 1fr; }
          .heroImage img { height: 460px; }
          .imageCard img { height: 240px; }
          .bookImage img { height: 430px; }
          .formGrid { grid-template-columns: 1fr; }
          .span2 { grid-column: auto; }
          .footerInner { flex-direction: column; }
          .brandSub { display: none; }
        }
      `}</style>

      <div className="page">
        <header className="header">
          <div className="container navWrap">
            <a href="#home" className="brand">
              <div className="logo">CK</div>
              <div>
                <div className="brandName">Carsten Krause</div>
                <div className="brandSub">AI-Ready Leadership</div>
              </div>
            </a>

            <nav className="nav">
              {navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
            </nav>

            <div className="navCtas">
              <Button href="#contact">Book an Intro Call</Button>
              <Button href="#speaking" primary>Request Speaking Info</Button>
            </div>

            <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
          {menuOpen && (
            <div className="mobileMenu">
              {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            </div>
          )}
        </header>

        <main>
          <section id="home" className="hero">
            <div className="container heroGrid">
              <div className="heroText">
                <div className="pill">Executive Keynotes • Workshops • Advisory</div>
                <h1>The AI-Ready Leader for the Age of <span className="gold">Enterprise Impact</span></h1>
                <p className="lead">Carsten Krause helps executive leaders turn AI from isolated experimentation into measurable business performance through the HI + AI = ECI™ framework.</p>
                <div className="heroBtns">
                  <Button href="#contact" primary>Book Carsten to Speak</Button>
                  <Button href="#book">Explore the Book</Button>
                </div>
                <div className="stats">
                  <div className="stat"><strong>HI + AI</strong><span>Leadership lens for scaling AI responsibly</span></div>
                  <div className="stat"><strong>ECI™</strong><span>Elevated Collaborative Intelligence™ framework</span></div>
                  <div className="stat"><strong>CDO TIMES</strong><span>Media platform feeding authority and executive reach</span></div>
                </div>
              </div>

              <div className="heroVisual">
                <div className="heroImage">
                  <img src="/images/keynote-hero.png" alt="Carsten Krause keynote" />
                  <div className="heroOverlay">
                    <div className="heroOverlayTitle">HI + AI = <span className="gold">ECI™</span></div>
                    <p>Elevated Collaborative Intelligence™ for executive leaders scaling AI across the enterprise.</p>
                    <div className="heroBtns">
                      <Button href="#contact" primary>Book a Keynote</Button>
                      <Button href="#speaking">View Speaking Topics</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="imageStrip">
            <div className="container imageGrid">
              <ImageCard src="/images/keynote-1.png" alt="Keynote speaking" />
              <ImageCard src="/images/keynote-2.png" alt="Executive audience keynote" />
              <ImageCard src="/images/keynote-3.jpg" alt="Conference speaking" />
            </div>
          </section>

          <Section id="speaking" eyebrow="Speaking" title="Keynotes That Move Leaders From AI Ambition to Enterprise Impact" subtitle="Strategic keynote sessions for executive audiences that want practical guidance on scaling AI, strengthening governance, and turning leadership intent into measurable business results.">
            <div className="twoCol">
              <div className="cardGrid">
                {keynoteTopics.map(([title, text]) => (
                  <Card key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <div className="tag">Executive leadership • AI transformation • Enterprise impact</div>
                  </Card>
                ))}
              </div>
              <Card>
                <div className="eyebrow">Speaking Engagements</div>
                <h3>Speaking Formats for Leadership Teams, Conferences, and Executive Forums</h3>
                <p>Each session is designed to help leaders cut through AI hype, align stakeholders, and focus on the actions that actually improve performance, trust, and execution.</p>
                <p>Formats can be tailored for keynote stages, customer events, executive offsites, leadership dinners, and internal transformation forums.</p>
                <Button href="#contact" primary>Request Speaking Info</Button>
              </Card>
            </div>
          </Section>

          <Section id="book" eyebrow="Book" title="The Book Behind the HI + AI = ECI™ Leadership Framework" subtitle="The AI-Ready Leader gives executives a practical framework for leading AI transformation with stronger judgment, better governance, and greater organizational readiness.">
            <div className="bookGrid">
              <Card>
                <div className="imageCard bookImage"><img src="/images/book.png" alt="The AI-Ready Leader book" /></div>
                <div style={{ marginTop: 18 }}><Button href="#contact" primary>Request Book + Speaking Info</Button></div>
              </Card>
              <div>
                <Card>
                  <div className="eyebrow">Featured Book</div>
                  <h3>The AI-Ready Leader</h3>
                  <p>HI + AI = ECI™ positions AI transformation as a leadership problem first, not a tooling problem. It gives executives a practical model for scaling AI with stronger judgment, better alignment, and more durable business outcomes.</p>
                </Card>
                <div className="endorsements">
                  {endorsements.map(([quote, by]) => <Card key={by}><div className="quote">“{quote}”</div><div className="quoteBy">— {by}</div></Card>)}
                </div>
              </div>
            </div>
          </Section>

          <Section id="advisory" eyebrow="Services" title="Keynotes, Executive Workshops, and Strategic Advisory" subtitle="Choose the format that best fits your leadership team, event, or transformation agenda.">
            <div className="servicesImages">
              <ImageCard src="/images/book.png" alt="Book" />
              <ImageCard src="/images/consulting.png" alt="Consulting" />
              <ImageCard src="/images/workshop.png" alt="Workshop" />
            </div>
            <div className="services">
              {services.map(([title, text]) => <Card key={title}><div className="icon">✓</div><h3>{title}</h3><p>{text}</p></Card>)}
            </div>
            <div className="engageGrid">
              <Card>
                <div className="eyebrow">How Clients Engage</div>
                <h3>From Executive Insight to Measurable Business Action</h3>
                <p><b style={{color:'#fff'}}>Keynotes</b> help leadership teams frame the challenge, align around priorities, and create urgency for action.</p>
                <p><b style={{color:'#fff'}}>Workshops</b> turn executive discussion into practical roadmaps, decisions, and next steps tailored to your organization.</p>
                <p><b style={{color:'#fff'}}>Advisory support</b> provides ongoing senior-level guidance for organizations that need execution, governance, and leadership follow-through.</p>
              </Card>
              <div className="engageList">
                {[
                  ["📘", "The book creates authority and opens the conversation."],
                  ["🎤", "Keynotes create visibility and executive momentum."],
                  ["👥", "Workshops turn strategy into decisions and next steps."],
                  ["💼", "Advisory support helps sustain execution."],
                ].map(([icon, text]) => <div className="engageItem" key={text}><span>{icon}</span><div><b>{text}</b><span style={{color:'var(--muted)'}}>Structured support for leaders scaling AI across the enterprise.</span></div></div>)}
              </div>
            </div>
          </Section>

          <Section id="media" eyebrow="Media & Links" title="Thought Leadership, Media, and Executive Resources" subtitle="Explore articles, commentary, and executive resources across CDO TIMES, LinkedIn, and The AI-Ready Leader.">
            <div className="mediaGrid">
              <Card><h3>CDO TIMES</h3><p>Executive articles, leadership analysis, and digital transformation insights.</p><Button href="https://cdotimes.com">Visit CDO TIMES</Button></Card>
              <Card><h3>LinkedIn</h3><p>Executive-facing posts, commentary, launch content, and thought leadership.</p><Button href="https://www.linkedin.com">Open LinkedIn</Button></Card>
              <Card><h3>The AI-Ready Leader</h3><p>Book, endorsements, keynote alignment, and workshop tie-ins.</p><Button href="#book">View Book</Button></Card>
            </div>
          </Section>

          <Section id="contact" eyebrow="Contact" title="Start the Conversation" subtitle="For keynote inquiries, executive workshops, strategic advisory discussions, or media opportunities, get in touch directly.">
            <div className="contactGrid">
              <Card>
                <div className="eyebrow">Primary Contact</div>
                <h3 style={{wordBreak:'break-word'}}>carsten.krause@ckcdigital.com</h3>
                <p>Use this email for keynote requests, workshop inquiries, leadership advisory discussions, and media opportunities.</p>
                <Button href="mailto:carsten.krause@ckcdigital.com" primary>Email Carsten</Button>
              </Card>
              <Card>
                <div className="formGrid">
                  <div><label>Name</label><input placeholder="Your name" /></div>
                  <div><label>Company</label><input placeholder="Organization" /></div>
                  <div><label>Email</label><input placeholder="name@company.com" /></div>
                  <div><label>Interest</label><select><option>Keynote</option><option>Workshop</option><option>Advisory</option><option>Media inquiry</option></select></div>
                  <div className="span2"><label>What are you looking for?</label><textarea placeholder="Tell us about the event, audience, workshop goal, or advisory need." /></div>
                </div>
                <div style={{marginTop: 18}}><Button href="mailto:carsten.krause@ckcdigital.com" primary>Submit Inquiry</Button></div>
              </Card>
            </div>
          </Section>
        </main>

        <footer className="footer">
          <div className="container footerInner">
            <div>
              <b style={{color:'#fff'}}>Carsten Krause</b>
              <p style={{color:'var(--muted)', margin: '8px 0 0'}}>AI-ready leadership, executive keynotes, workshops, and advisory built around HI + AI = ECI™.</p>
            </div>
            <div className="footerLinks">
              <a href="https://cdotimes.com">CDO TIMES</a>
              <a href="mailto:carsten.krause@ckcdigital.com">Contact</a>
              <a href="#book">Book</a>
              <a href="#speaking">Speaking</a>
            </div>
          </div>
          <div className="container" style={{marginTop: 24, color: 'var(--muted)', fontSize: 14}}>© {year} Carsten Krause. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
