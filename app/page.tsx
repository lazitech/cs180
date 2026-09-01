import Link from 'next/link';

const directions = [
  {
    href: '/editorial',
    number: '01',
    name: 'Editorial Field Notes',
    note: 'Warm, quiet, and photo-led. A refined academic presentation with a print-friendly rhythm.',
    className: 'chooser-card--editorial',
    images: ['/media/portrait-close.jpg', '/media/architecture-telephoto.jpg'],
  },
  {
    href: '/cinematic',
    number: '02',
    name: 'Cinematic Contact Sheet',
    note: 'Dark, dramatic, and built around the Vertigo effect. The strongest sense of motion and film.',
    className: 'chooser-card--cinematic',
    images: ['/media/dolly-zoom.gif'],
  },
  {
    href: '/contemporary',
    number: '03',
    name: 'Contemporary Gallery',
    note: 'Bright, expressive, and playful. A modern portfolio with bento grids and generous color.',
    className: 'chooser-card--contemporary',
    images: ['/media/portrait-far.jpg', '/media/dolly-frame-09.jpg'],
  },
];

export default function Home() {
  return (
    <main className="chooser-page">
      <header className="chooser-hero">
        <div>
          <p className="chooser-kicker">CS 180 · Project 0 · Anzhe Lyu</p>
          <h1>
            One project.
            <br />
            Three complete directions.
          </h1>
        </div>
        <p className="chooser-intro">
          Each version contains the same three camera experiments and final
          imagery. Open every direction to compare the complete experience.
        </p>
      </header>

      <section
        className="chooser-grid"
        aria-label="Completed design directions"
      >
        {directions.map((direction) => (
          <Link
            className={`chooser-card ${direction.className}`}
            href={direction.href}
            key={direction.href}
          >
            <div className="chooser-card__media">
              {direction.images.map((image) => (
                <img src={image} alt="" key={image} />
              ))}
            </div>
            <div className="chooser-card__copy">
              <span>{direction.number}</span>
              <h2>{direction.name}</h2>
              <p>{direction.note}</p>
              <strong>
                Open full design <span aria-hidden="true">↗</span>
              </strong>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
