import Link from 'next/link';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Trust Center',
  description: 'NimbusKite Cloud Services trust center covering security, compliance, reliability, and data handling principles.',
  openGraph: {
    title: 'NimbusKite Cloud Services | Trust Center',
    description: 'NimbusKite Cloud Services trust center covering security, compliance, reliability, and data handling principles.'
  }
};

const trustAreas = ['Security', 'Compliance', 'Reliability', 'Data Handling', 'Responsible Use'];

export default function TrustPage() {
  return (
    <div className="container-wrap py-20">
      <SectionHeading
        eyebrow="Trust Center"
        title="Operational confidence for enterprise cloud programs"
        description="NimbusKite articulates governance expectations in clear domains so stakeholders can evaluate consistency controls and service posture."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {trustAreas.map((area) => (
          <article key={area} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-ink">{area}</h2>
            <p className="mt-2 text-sm text-slate-600">
              Program-level guidance and practices are documented to support enterprise review and operational alignment.
            </p>
          </article>
        ))}
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-panel">
          <p className="text-sm uppercase tracking-wide text-slate-500">Uptime</p>
          <p className="mt-2 text-3xl font-semibold text-ink">99.99%</p>
          <p className="mt-1 text-xs text-slate-500">Reported quarterly</p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Policy pages</h2>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/trust/security" className="block text-accent hover:underline">
              Security Policy (placeholder)
            </Link>
            <Link href="/trust/privacy" className="block text-accent hover:underline">
              Privacy Policy (placeholder)
            </Link>
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Service Commitments</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Standardized release checks across core service pathways.</li>
            <li>Quarterly control baseline reviews with internal stakeholders.</li>
            <li>Documented incident communication workflows.</li>
          </ul>
        </article>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-ink">Brand Kit</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>Logo usage: do not separate symbol and wordmark in primary layouts.</li>
          <li>Black/white palette: #111827 and #FFFFFF with neutral slate borders.</li>
          <li>Typography guidance: clean sans-serif hierarchy, restrained weight transitions.</li>
        </ul>
      </section>
    </div>
  );
}
