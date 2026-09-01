import type { Metadata } from 'next';
import {
  DesignSwitcher,
  ProjectFooter,
  projectCopy,
} from '@/components/project-ui';

export const metadata: Metadata = {
  title: 'Contemporary — Becoming Friends with Your Camera',
};

export default function ContemporaryPage() {
  return (
    <main className="contemporary-page">
      <DesignSwitcher current="contemporary" />

      <header className="contemporary-hero">
        <div className="contemporary-blob contemporary-blob--one" />
        <div className="contemporary-blob contemporary-blob--two" />
        <p className="contemporary-kicker">
          <span>●</span> CS 180 · Project 0 · Anzhe Lyu
        </p>
        <h1>
          Perspective,
          <br />
          <em>in three experiments.</em>
        </h1>
        <p>{projectCopy.intro}</p>
        <nav aria-label="Project sections">
          <a href="#faces">01 Faces</a>
          <a href="#spaces">02 Spaces</a>
          <a href="#motion">03 Motion</a>
        </nav>
        <div className="contemporary-hero__tiles" aria-hidden="true">
          <img src="/media/portrait-close.jpg" alt="" />
          <img src="/media/architecture-wide.jpg" alt="" />
          <img src="/media/dolly-frame-09.jpg" alt="" />
        </div>
      </header>

      <article className="contemporary-content">
        <section className="contemporary-section" id="faces">
          <header className="contemporary-heading">
            <span>01</span>
            <div>
              <p>Faces & distance</p>
              <h2>
                Same face.
                <br />
                Different geometry.
              </h2>
            </div>
          </header>
          <div className="contemporary-portrait-bento">
            <figure className="contemporary-photo-card contemporary-photo-card--large">
              <img
                src="/media/portrait-close.jpg"
                alt="Close wide-angle portrait"
              />
              <figcaption>
                <strong>Too close</strong>
                <span>Wide perspective</span>
              </figcaption>
            </figure>
            <div className="contemporary-note contemporary-note--coral">
              <span>What changed?</span>
              <p>The camera moved. Zoom only restored the crop.</p>
            </div>
            <figure className="contemporary-photo-card">
              <img
                src="/media/portrait-medium.jpg"
                alt="Portrait at medium distance"
              />
              <figcaption>
                <strong>Step back</strong>
                <span>Moderate zoom</span>
              </figcaption>
            </figure>
            <figure className="contemporary-photo-card">
              <img
                src="/media/portrait-far.jpg"
                alt="Portrait from farther away with zoom"
              />
              <figcaption>
                <strong>Farther away</strong>
                <span>Natural proportions</span>
              </figcaption>
            </figure>
          </div>
          <p className="contemporary-explainer">{projectCopy.portrait}</p>
        </section>

        <section className="contemporary-section" id="spaces">
          <header className="contemporary-heading contemporary-heading--lime">
            <span>02</span>
            <div>
              <p>Buildings & compression</p>
              <h2>
                Depth is a<br />
                point of view.
              </h2>
            </div>
          </header>
          <div className="contemporary-architecture-grid">
            <figure>
              <img
                src="/media/architecture-telephoto.jpg"
                alt="Compressed telephoto architecture view"
              />
              <figcaption>
                <span>Far + zoom</span>
                <strong>FLATTER</strong>
              </figcaption>
            </figure>
            <div className="contemporary-versus">VS</div>
            <figure>
              <img
                src="/media/architecture-wide.jpg"
                alt="Wide architecture view from closer"
              />
              <figcaption>
                <span>Close + wide</span>
                <strong>DEEPER</strong>
              </figcaption>
            </figure>
          </div>
          <div className="contemporary-note contemporary-note--indigo">
            <span>Perspective ≠ zoom</span>
            <p>{projectCopy.architecture}</p>
          </div>
        </section>

        <section className="contemporary-section" id="motion">
          <header className="contemporary-heading contemporary-heading--pink">
            <span>03</span>
            <div>
              <p>Motion & the dolly zoom</p>
              <h2>
                Hold Pingu.
                <br />
                Move the world.
              </h2>
            </div>
          </header>
          <div className="contemporary-dolly-card">
            <div className="contemporary-dolly-card__media">
              <img
                src="/media/dolly-zoom.gif"
                alt="Pingu dolly zoom animation"
              />
              <span>14 aligned frames</span>
            </div>
            <div className="contemporary-dolly-card__copy">
              <p>{projectCopy.dolly}</p>
              <div className="contemporary-stats">
                <div>
                  <strong>←</strong>
                  <span>Camera back</span>
                </div>
                <div>
                  <strong>＋</strong>
                  <span>Zoom in</span>
                </div>
                <div>
                  <strong>＝</strong>
                  <span>Subject held</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <ProjectFooter label="Contemporary Gallery" />
    </main>
  );
}
