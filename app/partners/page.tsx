import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { partners } from '@/data/partners';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Integration partners aligned with NimbusKite Cloud Services deployment consistency standards.',
  openGraph: {
    title: 'NimbusKite Cloud Services | Partners',
    description: 'Integration partners aligned with NimbusKite Cloud Services deployment consistency standards.'
  }
};

export default function PartnersPage() {
  return (
    <div className="container-wrap py-20">
      <SectionHeading
        eyebrow="Integration Partners"
        title="Ecosystem participants aligned to consistency outcomes"
        description="NimbusKite collaborates with integration partners to extend standardized workflows across adjacent operational domains."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {partners.map((partner) => (
          <a key={partner.name} href={partner.href} className="rounded-xl border border-slate-200 bg-white p-7 shadow-panel transition hover:-translate-y-0.5 hover:border-slate-300">
            <h2 className="text-xl font-semibold text-ink">{partner.name}</h2>
            <p className="mt-3 text-sm text-slate-600">{partner.tagline}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
