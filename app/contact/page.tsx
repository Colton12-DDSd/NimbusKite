import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact NimbusKite Cloud Services for enterprise cloud standardization discussions.',
  openGraph: {
    title: 'NimbusKite Cloud Services | Contact',
    description: 'Contact NimbusKite Cloud Services for enterprise cloud standardization discussions.'
  }
};

export default function ContactPage() {
  return (
    <div className="container-wrap py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Connect with NimbusKite Cloud Services"
        description="Share your current multi-cloud operating model and we will align an executive briefing around baseline consistency outcomes."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <form className="rounded-xl border border-slate-200 bg-white p-7 shadow-panel lg:col-span-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-700">
              Name
              <input type="text" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </label>
            <label className="text-sm text-slate-700">
              Email
              <input type="email" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </label>
          </div>
          <label className="mt-5 block text-sm text-slate-700">
            Company
            <input type="text" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <label className="mt-5 block text-sm text-slate-700">
            Message
            <textarea rows={5} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <button
            type="button"
            className="mt-6 rounded-lg bg-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Submit request
          </button>
        </form>

        <aside className="rounded-xl border border-slate-200 bg-white p-7">
          <h2 className="text-lg font-semibold text-ink">Direct contact</h2>
          <p className="mt-3 text-sm text-slate-600">
            For immediate coordination, email our team at{' '}
            <a href="mailto:contact@nimbuskite.example" className="text-accent hover:underline">
              contact@nimbuskite.example
            </a>
            .
          </p>
        </aside>
      </div>
    </div>
  );
}
