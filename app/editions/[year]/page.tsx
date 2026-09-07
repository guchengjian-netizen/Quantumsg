/* eslint-disable @next/next/no-html-link-for-pages -- native page loads are intentional for hosted archive navigation */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Logo from "../../components/Logo";
import { getEdition } from "../data";

type Props = { params: Promise<{ year: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const edition = getEdition((await params).year);
  if (!edition) notFound();
  const title = `Quantum Singapore ${edition.year} — Past edition`;
  const description = `${edition.intro} Programme, speaker information and event photographs.`;
  return { title, description, openGraph: { title, description, images: [] }, twitter: { card: "summary", title, description, images: [] } };
}

export default async function EditionPage({ params }: Props) {
  const edition = getEdition((await params).year);
  if (!edition) notFound();
  return (
    <main className={`archive archive-${edition.year}`}>
      <header className="nav-shell archive-header">
        <a className="brand" href="/" aria-label="Quantum Singapore 2027 home"><Logo /></a>
        <a className="archive-home" href="/#past">← All editions</a>
      </header>
      <section className="archive-hero" id="top">
        <div className="eyebrow"><span /> PAST EDITION · SINGAPORE</div>
        <h1>Quantum Singapore <span>{edition.year}</span></h1>
        <div className="archive-intro"><p>{edition.intro}</p><span>{edition.label}</span></div>
        <nav className="archive-years" aria-label="Switch event year">
          <a href="/">2027 <span>Current</span></a>
          <a href="/editions/2026" aria-current={edition.year === "2026" ? "page" : undefined}>2026</a>
          <a href="/editions/2025" aria-current={edition.year === "2025" ? "page" : undefined}>2025</a>
        </nav>
      </section>
      <nav className="archive-sections" aria-label="Edition contents"><a href="#programme">01 / Programme</a><a href="#speakers">02 / Speakers</a><a href="#photos">03 / Event photos</a></nav>
      <section className="archive-section" id="programme">
        <div className="archive-section-heading"><span>01 / THE PROGRAMME</span><h2>The conversations<br />of {edition.year}.</h2></div>
        {edition.programme.length ? <div className="archive-agenda">{edition.programme.map(session => <article key={session.id}>
          <div className="archive-time"><span>{session.day}</span><strong>{session.time}</strong></div>
          <div><span className="archive-format">{session.format}</span><h3>{session.title}</h3><p>{session.description}</p><div className="archive-speaker-links">{session.speakerIds.map(id => { const speaker = edition.speakers.find(s => s.id === id); return speaker ? <a key={id} href={`#speaker-${id}`}>{speaker.name} ↗</a> : null; })}</div></div>
        </article>)}</div> : <div className="archive-empty"><span>Programme archive</span><h3>The {edition.year} agenda is being prepared for this archive.</h3><p>Session times, talk titles and speaker details will appear here when the programme is published.</p></div>}
      </section>
      <section className="archive-section archive-speakers" id="speakers">
        <div className="archive-section-heading"><span>02 / THE PEOPLE</span><h2>Speakers<br />&amp; contributors.</h2></div>
        {edition.speakers.length ? <div className="archive-speaker-grid">{edition.speakers.map(speaker => <article key={speaker.id} id={`speaker-${speaker.id}`}>
          {speaker.portrait && <Image src={speaker.portrait} alt={speaker.name} width={480} height={540} />}
          <h3>{speaker.name}</h3><p className="archive-role">{speaker.role}{speaker.organisation && ` · ${speaker.organisation}`}</p><p>{speaker.biography}</p>
        </article>)}</div> : <div className="archive-empty"><span>Speaker archive</span><h3>The {edition.year} speaker profiles will be available here.</h3><p>Explore each speaker’s role, organisation and biography once the profiles are published.</p></div>}
      </section>
      <section className="archive-section" id="photos">
        <div className="archive-section-heading"><span>03 / IN PICTURES</span><h2>Moments<br />from {edition.year}.</h2></div>
        {edition.photos.length ? <div className="archive-photo-grid">{edition.photos.map(photo => <figure key={photo.src}><a href={photo.src} target="_blank" rel="noreferrer" aria-label={`Open photo: ${photo.alt}`}><Image src={photo.src} alt={photo.alt} width={1200} height={800} /></a><figcaption>{photo.caption}{photo.credit && <small>Photo: {photo.credit}</small>}</figcaption></figure>)}</div> : <div className="archive-empty"><span>Photo archive</span><h3>Photographs from {edition.year} will be added soon.</h3><p>Return to this collection for event photography from this edition.</p></div>}
      </section>
      <div className="archive-next">{edition.year === "2025" ? <a href="/editions/2026"><span>Second edition</span><strong>Quantum Singapore 2026 →</strong></a> : <a href="/"><span>Third edition</span><strong>Quantum Singapore 2027 →</strong></a>}</div>
      <footer><a className="brand" href="/" aria-label="Quantum Singapore home"><Logo /></a><p>QUANTUM SINGAPORE<br />{edition.label.toUpperCase()}</p><div><a href="/#past">All editions</a><a href="#top">Back to top ↑</a></div><span className="copyright">© 2027 QUANTUM SINGAPORE</span></footer>
    </main>
  );
}
