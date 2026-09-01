import Link from 'next/link';

type DesignName = 'editorial' | 'cinematic' | 'contemporary';

const designs: Array<{ href: string; name: DesignName; label: string }> = [
  { href: '/editorial', name: 'editorial', label: 'Editorial' },
  { href: '/cinematic', name: 'cinematic', label: 'Cinematic' },
  { href: '/contemporary', name: 'contemporary', label: 'Contemporary' },
];

export function DesignSwitcher({ current }: { current?: DesignName }) {
  return (
    <nav className="design-switcher" aria-label="Switch design direction">
      <Link className="design-switcher__home" href="/">
        Three directions
      </Link>
      <div className="design-switcher__links">
        {designs.map((design) => (
          <Link
            aria-current={current === design.name ? 'page' : undefined}
            className={current === design.name ? 'is-current' : undefined}
            href={design.href}
            key={design.name}
          >
            {design.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function ProjectFooter({ label }: { label: string }) {
  return (
    <footer className="project-footer">
      <p>CS 180 · Project 0</p>
      <p>{label} direction · Anzhe Lyu · 2026</p>
    </footer>
  );
}

export const projectCopy = {
  intro:
    'Three camera experiments exploring how viewpoint and focal length reshape the way depth appears in a photograph.',
  portrait:
    'At close range, the small depth differences across a face are large relative to the camera distance. Features closest to the lens—especially the nose and center of the face—appear disproportionately large. Stepping back reduces that perspective distortion; zooming in restores a similar framing without bringing the distortion back.',
  architecture:
    'From farther away, the building facade and the scene behind it sit at more similar distances relative to the camera, so their apparent sizes converge and the view feels compressed. Moving closer with a wider field of view exaggerates near–far size differences and makes the street feel deeper.',
  dolly:
    'For fourteen frames, I moved the camera backward while zooming in and then aligned Pingu to the first frame. The subject stays nearly fixed while the window, wall, and chair change scale around it. The resulting shift comes from changing the camera position; zoom compensates only for the subject framing.',
};
