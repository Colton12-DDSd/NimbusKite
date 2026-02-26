import Link from 'next/link';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Consistency at scale. NimbusKite Cloud Services aligns runtime baselines and deployment posture for enterprise multi-cloud teams.',
  openGraph: {
    title: 'NimbusKite Cloud Services | Home',
    description:
      'Consistency at scale. NimbusKite Cloud Services aligns runtime baselines and deployment posture for enterprise multi-cloud teams.'
  }
};

const features = [
  {
    title: 'Cloud alignment',
    text: 'Map intent into standardized, policy-aligned patterns that travel across AWS, Azure, and Google Cloud with less interpretation overhead.'
  },
  {
    title: 'Posture baselines',
    text: 'Define baseline controls once and apply them consistently to teams, regions, and environments with auditable traceability.'
  },
  {
    title: 'Deployment consistency',
    text: 'Establish release guardrails that reduce runtime drift while keeping delivery velocity predictable and measurable.'
  }
];

const testimonials = [
  ['Aria Mendes', 'VP of Platform Engineering', 'Northward Retail Systems'],
  ['Jonathan Pike', 'Director of Cloud Reliability', 'Atlas Meridian Logistics'],
  ['Irene Chao', 'Head of Enterprise Architecture', 'LumenArc Holdings']
];

export default function HomePage() {
  return (
    <div>
      <section className="container-wrap py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Consistency at scale.</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          NimbusKite Cloud Services
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          NimbusKite Cloud Services standardizes runtime baselines, environment posture, and deployment consistency across multi-cloud footprints.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/platform" className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white shadow-panel transition hover:bg-slate-800">
            Explore the platform
          </Link>
          <Link href="/contact" className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-ink">
            Request an executive briefing
          </Link>
        </div>
      </section>

      <section className="container-wrap py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-panel">
              <h2 className="text-xl font-semibold text-ink">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-wrap py-16">
        <SectionHeading
          eyebrow="How it works"
          title="Operational standards encoded as repeatable cloud pathways"
          description="NimbusKite captures enterprise intent, maps it to baseline templates, and enforces release guardrails through every environment stage."
        />
      </section>

      <section className="container-wrap py-16">
        <SectionHeading eyebrow="Customer perspective" title="What enterprise teams say" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map(([name, role, company]) => (
            <article key={name} className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm leading-relaxed text-slate-600">
                “NimbusKite gave us a practical way to keep platform standards consistent without slowing delivery.”
              </p>
              <p className="mt-5 text-sm font-semibold text-ink">{name}</p>
              <p className="text-xs text-slate-500">
                {role}, {company}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
