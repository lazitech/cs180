import type { Metadata } from 'next';
import { ProjectFooter, projectCopy } from '@/components/project-ui';

export const metadata: Metadata = {
  title: 'Cinematic — Becoming Friends with Your Camera',
};

export default function CinematicPage() {
  return (
    <main className="cinematic-page">
      <header className="cinematic-hero">
        <img src="/media/dolly-zoom.gif" alt="Pingu dolly zoom animation" />
        <div className="cinematic-hero__shade" />
        <div className="cinematic-hero__topline">
          <span>CS180 / PROJECT 0</span>
          <span>ANZHE LYU / 2026</span>
        </div>
        <div className="cinematic-hero__copy">
          <p>Camera study in three movements</p>
          <h1>
            Perspective
            <br />
            in Motion
          </h1>
          <a href="#sequence">
            Enter the sequence <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="cinematic-hero__counter">
          00:14 <span>frames</span>
        </div>
      </header>

      <article className="cinematic-content" id="sequence">
        <section className="cinematic-section cinematic-portrait">
          <header className="cinematic-heading">
            <span>Sequence 01 / Portrait</span>
            <h2>
              Distance
              <br />
              corrects the face.
            </h2>
            <p>{projectCopy.portrait}</p>
          </header>
          <div className="cinematic-contact-sheet">
            {[
              ['/media/portrait-close.jpg', 'SHOT 01', 'CLOSE / WIDE'],
              ['/media/portrait-medium.jpg', 'SHOT 02', 'STEP BACK'],
              ['/media/portrait-far.jpg', 'SHOT 03', 'FAR / ZOOM'],
            ].map(([src, shot, note]) => (
              <figure key={src}>
                <div className="cinematic-frame">
                  <img src={src} alt={`${note} portrait`} />
                </div>
                <figcaption>
                  <span>{shot}</span>
                  <span>{note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cinematic-section cinematic-architecture">
          <header className="cinematic-heading cinematic-heading--compact">
            <span>Sequence 02 / Architecture</span>
            <h2>
              Space can
              <br />
              collapse.
            </h2>
          </header>
          <div className="cinematic-architecture__frames">
            <figure>
              <img
                src="/media/architecture-telephoto.jpg"
                alt="Telephoto building view from farther away"
              />
              <figcaption>
                <strong>A</strong>
                <span>FARTHER / TELEPHOTO</span>
                <em>Compression</em>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/media/architecture-wide.jpg"
                alt="Wide building view from closer"
              />
              <figcaption>
                <strong>B</strong>
                <span>CLOSER / WIDE</span>
                <em>Depth</em>
              </figcaption>
            </figure>
          </div>
          <p className="cinematic-architecture__copy">
            {projectCopy.architecture}
          </p>
        </section>

        <section className="cinematic-section cinematic-dolly">
          <div className="cinematic-dolly__title">
            <span>Sequence 03 / The Vertigo Shot</span>
            <h2>
              Move back.
              <br />
              <i>Zoom in.</i>
            </h2>
          </div>
          <div className="cinematic-dolly__main">
            <img src="/media/dolly-zoom.gif" alt="Looping Pingu dolly zoom" />
            <div className="cinematic-rec">
              <span /> REC
            </div>
            <div className="cinematic-timecode">00:00:03:14</div>
          </div>
          <div
            className="cinematic-filmstrip"
            aria-label="Four representative dolly zoom frames"
          >
            {['01', '05', '09', '14'].map((number) => (
              <figure key={number}>
                <img
                  src={`/media/dolly-frame-${number}.jpg`}
                  alt={`Dolly zoom frame ${number}`}
                />
                <figcaption>{number}</figcaption>
              </figure>
            ))}
          </div>
          <div className="cinematic-dolly__note">
            <span>Director&apos;s note</span>
            <p>{projectCopy.dolly}</p>
          </div>
        </section>
      </article>

      <ProjectFooter label="Cinematic Contact Sheet" />
    </main>
  );
}
