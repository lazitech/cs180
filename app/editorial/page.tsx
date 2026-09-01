import type { Metadata } from 'next';
import {
  DesignSwitcher,
  ProjectFooter,
  projectCopy,
} from '@/components/project-ui';

export const metadata: Metadata = {
  title: 'Editorial — Becoming Friends with Your Camera',
};

export default function EditorialPage() {
  return (
    <main className="editorial-page">
      <DesignSwitcher current="editorial" />

      <header className="editorial-hero">
        <div className="editorial-hero__title">
          <p className="editorial-eyebrow">CS 180 · Project 0 · Fall 2026</p>
          <h1>
            Becoming Friends
            <br />
            with Your Camera
          </h1>
          <div className="editorial-byline">
            <span>Camera studies by</span>
            <strong>Anzhe Lyu</strong>
          </div>
        </div>
        <figure className="editorial-hero__image">
          <img
            src="/media/portrait-far.jpg"
            alt="Portrait made from a farther camera position"
          />
          <figcaption>
            <span>Study 01</span> Distance changes perspective.
          </figcaption>
        </figure>
        <p className="editorial-hero__intro">{projectCopy.intro}</p>
      </header>

      <article className="editorial-content">
        <section className="editorial-section" id="portrait">
          <header className="editorial-section__header">
            <p>Experiment 01</p>
            <h2>
              The wrong way
              <br />
              <em>vs.</em> the right way
            </h2>
          </header>
          <div className="editorial-portrait-grid">
            {[
              [
                '/media/portrait-close.jpg',
                '01',
                'Close',
                'Wide perspective · strongest distortion',
              ],
              [
                '/media/portrait-medium.jpg',
                '02',
                'Medium',
                'Stepped back · moderate zoom',
              ],
              [
                '/media/portrait-far.jpg',
                '03',
                'Far',
                'Farthest position · tighter zoom',
              ],
            ].map(([src, number, title, caption]) => (
              <figure key={src}>
                <div className="editorial-photo-number">{number}</div>
                <img src={src} alt={`${title} portrait of Anzhe Lyu`} />
                <figcaption>
                  <strong>{title}</strong>
                  <span>{caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="editorial-observation">
            <p className="editorial-observation__label">Observation</p>
            <p>{projectCopy.portrait}</p>
          </div>
        </section>

        <section className="editorial-section" id="architecture">
          <header className="editorial-section__header editorial-section__header--right">
            <p>Experiment 02</p>
            <h2>
              Architectural
              <br />
              perspective compression
            </h2>
          </header>
          <div className="editorial-architecture-grid">
            <figure>
              <img
                src="/media/architecture-telephoto.jpg"
                alt="Building photographed from farther away with zoom"
              />
              <figcaption>
                <span>Farther away + zoom</span>
                <strong>Compressed</strong>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/media/architecture-wide.jpg"
                alt="Building photographed from closer with a wide field of view"
              />
              <figcaption>
                <span>Closer + wide view</span>
                <strong>Expanded</strong>
              </figcaption>
            </figure>
          </div>
          <div className="editorial-observation editorial-observation--wide">
            <p className="editorial-observation__label">Why it changes</p>
            <p>{projectCopy.architecture}</p>
          </div>
        </section>

        <section className="editorial-section editorial-dolly" id="dolly">
          <header className="editorial-section__header">
            <p>Experiment 03</p>
            <h2>The Dolly Zoom</h2>
          </header>
          <div className="editorial-dolly__layout">
            <figure className="editorial-dolly__animation">
              <img
                src="/media/dolly-zoom.gif"
                alt="Animated dolly zoom with Pingu remaining centered as the background changes"
              />
              <figcaption>
                14 aligned stills · backward camera movement · increasing zoom
              </figcaption>
            </figure>
            <div className="editorial-dolly__copy">
              <p className="editorial-dropcap">{projectCopy.dolly}</p>
              <dl>
                <div>
                  <dt>Subject</dt>
                  <dd>Pingu</dd>
                </div>
                <div>
                  <dt>Frames</dt>
                  <dd>14</dd>
                </div>
                <div>
                  <dt>Motion</dt>
                  <dd>Backward</dd>
                </div>
                <div>
                  <dt>Framing</dt>
                  <dd>Scale-matched</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </article>

      <ProjectFooter label="Editorial Field Notes" />
    </main>
  );
}
