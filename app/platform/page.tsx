import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Explore NimbusKite Cloud Services capabilities for enterprise baseline governance and multi-cloud consistency.',
  openGraph: {
    title: 'NimbusKite Cloud Services | Platform',
    description: 'Explore NimbusKite Cloud Services capabilities for enterprise baseline governance and multi-cloud consistency.'
  }
};

const sections = [
  {
    title: 'Environment Baselines',
    text: 'Codify foundational runtime and networking expectations for development, staging, and production lanes.'
  },
  {
    title: 'Posture Templates',
    text: 'Apply approved operating models as reusable templates so every domain inherits a known-good control profile.'
  },
  {
    title: 'Drift Reconciliation',
    text: 'Surface divergence from intended state and route reconciliation activities through standardized governance workflows.'
  },
  {
    title: 'Multi-cloud Alignment',
    text: 'Translate organizational intent into cloud-native implementations while preserving consistent policy semantics.'
  },
  {
    title: 'Change Windows and Release Guardrails',
    text: 'Coordinate release cadence across teams with policy-driven windows, readiness checks, and promotion conditions.'
  },
  {
    title: 'Standardized Runtime Profiles',
    text: 'Publish curated runtime profiles for common workloads so teams can launch compliant services with less variance.'
  }
];

export default function PlatformPage() {
  return (
    <div className="container-wrap py-20">
      <SectionHeading
        eyebrow="Platform Overview"
        title="Enterprise controls, delivered through consistent cloud pathways"
        description="NimbusKite helps platform teams define standards once and propagate them across distributed environments."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-xl border border-slate-200 bg-white p-7 shadow-panel">
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.text}</p>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-2xl border border-slate-200 bg-white p-8 shadow-panel">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Architecture alignment view</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          NimbusKite sits above environment stages and cloud providers, enforcing baseline intent and release consistency.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-900">NimbusKite Control Plane</div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">Dev Environment</div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">Stage Environment</div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">Prod Environment</div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-4 text-sm text-slate-700">AWS estates</div>
          <div className="rounded-lg border border-slate-200 p-4 text-sm text-slate-700">Azure estates</div>
          <div className="rounded-lg border border-slate-200 p-4 text-sm text-slate-700">Google Cloud estates</div>
        </div>
      </section>
    </div>
  );
}
