"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- native page loads are intentional for hosted archive navigation */
import { FormEvent, useState } from "react";
import Logo from "./components/Logo";

const themes = [
  { n:"01", title:"Quantum hardware", text:"The architectures, devices and engineering advances taking quantum systems toward useful scale." },
  { n:"02", title:"Quantum software", text:"Algorithms, error correction and software-hardware co-design for the next generation of applications." },
  { n:"03", title:"Quantum + AI", text:"How quantum science and artificial intelligence can accelerate one another and reshape discovery." },
  { n:"04", title:"Industrial adoption", text:"The real-world use cases, partnerships and investment needed to move from promise to deployment." },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); };

  return <main>
    <header className="nav-shell"><a className="brand" href="#top" aria-label="Quantum Singapore home"><Logo /></a><nav aria-label="Primary navigation"><a href="#about">About 2027</a><a href="#themes">Themes</a><a href="#past">Past editions</a></nav><a className="nav-cta" href="#register">Register interest <span>↗</span></a></header>

    <section className="hero hero-2027" id="top"><div className="hero-grid" aria-hidden="true"/><div className="orbit orbit-one" aria-hidden="true"><i/></div><div className="orbit orbit-two" aria-hidden="true"><i/></div><div className="hero-copy"><div className="eyebrow"><span/> THE THIRD EDITION · SINGAPORE</div><h1 className="event-title"><span>Quantum</span><span>Singapore</span><em>2027</em></h1><p className="hero-dek">Asia’s meeting point for the people turning quantum science into real-world systems, ventures and impact.</p><div className="hero-actions"><a className="button primary" href="#register">Register for updates <span>→</span></a><a className="button secondary" href="#past">Explore past editions</a></div></div><aside className="event-card"><div className="event-card-top"><span>CURRENT EDITION</span><strong>03</strong></div><div className="event-date"><b>2027</b><span>DATE &amp; VENUE<br/>TO BE ANNOUNCED</span></div><div className="event-meta"><span>Researchers</span><span>Builders</span><span>Industry</span></div></aside><div className="hero-foot"><span>EST. 2025</span><span className="scroll-label">SCROLL TO DISCOVER ↓</span><span>1°17′N 103°51′E</span></div></section>

    <section className="manifesto section" id="about"><div className="section-kicker">QUANTUM SINGAPORE 2027</div><div className="manifesto-main"><h2>The next signal<br/>starts here.</h2><p>Quantum Singapore returns for its third edition in 2027, bringing scientists, engineers, founders, investors and industry leaders together in Singapore. Join the interest list to receive the date, venue, programme and registration announcement first.</p></div><div className="edition-sequence" aria-label="Quantum Singapore edition timeline"><div><span>01 · PAST</span><strong>2025</strong><p>The inaugural edition</p></div><div><span>02 · PAST</span><strong>2026</strong><p>The second edition</p></div><div className="is-current"><span>03 · CURRENT</span><strong>2027</strong><p>The third edition</p></div></div></section>

    <section className="tracks section" id="themes"><div className="section-head"><div><div className="section-kicker">THE 2027 CONVERSATION</div><h2>One ecosystem.<br/>Four frontiers.</h2></div></div><div className="track-list">{themes.map(theme=><article className="track" key={theme.n}><span>{theme.n}</span><h3>{theme.title}</h3><p>{theme.text}</p><i>↗</i></article>)}</div></section>

    <section className="past section" id="past"><div className="section-head"><div><div className="section-kicker">PAST EDITIONS</div><h2>Explore the story<br/>so far.</h2></div><p className="past-intro">Browse the programmes, speaker profiles and event photography from the first two editions.</p></div><div className="editions">
      <article><a className="edition-link" href="/editions/2026" aria-label="Explore Quantum Singapore 2026"><div className="edition-art art-26"><b>26</b><span>THE SECOND<br/>EDITION</span></div><div className="edition-info"><span>04—05 FEBRUARY 2026 · SINGAPORE</span><h3>Quantum<br/>Singapore 2026</h3><p>Two days across Sands Expo and Shangri-La Singapore, featuring hardware, software, AI and industrial adoption.</p><div className="edition-action">Explore the 2026 edition <span aria-hidden="true">↗</span></div></div></a></article>
      <article><a className="edition-link" href="/editions/2025" aria-label="Explore Quantum Singapore 2025"><div className="edition-art art-25"><b>25</b><span>THE FIRST<br/>EDITION</span></div><div className="edition-info"><span>26 FEBRUARY 2025 · SINGAPORE</span><h3>Quantum<br/>Singapore 2025</h3><p>The inaugural gathering that brought the quantum research and industry community together.</p><div className="edition-action">Explore the 2025 edition <span aria-hidden="true">↗</span></div></div></a></article>
    </div></section>

    <section className="register section" id="register"><div className="register-copy"><div className="section-kicker">REGISTER YOUR INTEREST</div><h2>Join us in<br/>2027.</h2><p>Sign up for Quantum Singapore 2027 date, venue, speaker and programme announcements, plus early registration access.</p></div><form onSubmit={submit}>{submitted?<div className="success"><span>✓</span><h3>You’re on the list.</h3><p>We’ll send the next Quantum Singapore signal your way.</p></div>:<><label>FULL NAME<input required name="name" placeholder="Your name" autoComplete="name"/></label><label>WORK EMAIL<input required name="email" type="email" placeholder="you@company.com" autoComplete="email"/></label><label>I’M JOINING AS<select name="role" defaultValue=""><option value="" disabled>Select your role</option><option>Researcher / academic</option><option>Founder / builder</option><option>Investor</option><option>Enterprise leader</option><option>Policymaker</option><option>Student</option><option>Other</option></select></label><button type="submit">REGISTER FOR 2027 UPDATES <span>→</span></button><small>By registering, you agree to receive event updates. Unsubscribe anytime.</small></>}</form></section>

    <footer><a className="brand" href="#top"><Logo/></a><p>THE ANNUAL MEETING POINT<br/>FOR ASIA’S QUANTUM ECOSYSTEM.</p><div><a href="#about">About 2027</a><a href="#themes">Themes</a><a href="/editions/2026">2026 archive</a><a href="/editions/2025">2025 archive</a><a href="#register">Register interest</a></div><span className="copyright">© 2027 QUANTUM SINGAPORE</span></footer>
  </main>;
}
