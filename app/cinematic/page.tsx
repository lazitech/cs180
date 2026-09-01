import type { Metadata } from 'next';
import { CinematicDeck } from '@/components/cinematic-deck';

export const metadata: Metadata = {
  title: 'Cinematic — Becoming Friends with Your Camera',
};

export default function CinematicPage() {
  return <CinematicDeck />;
}
