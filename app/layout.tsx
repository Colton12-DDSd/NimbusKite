import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://nimbuskite.example'),
  title: {
    default: 'NimbusKite Cloud Services',
    template: '%s | NimbusKite Cloud Services'
  },
  description:
    'NimbusKite Cloud Services standardizes runtime baselines, environment posture, and deployment consistency across multi-cloud footprints.',
  openGraph: {
    title: 'NimbusKite Cloud Services',
    description:
      'NimbusKite Cloud Services standardizes runtime baselines, environment posture, and deployment consistency across multi-cloud footprints.',
    siteName: 'NimbusKite Cloud Services',
    type: 'website',
    url: 'https://nimbuskite.example'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
