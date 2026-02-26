import Link from 'next/link';
import { partners } from '@/data/partners';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-wrap grid gap-10 py-12 md:grid-cols-3">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Partner Network</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a href={partner.href} className="hover:text-ink hover:underline">
                  {partner.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Brand Kit</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>Logo usage: keep icon + wordmark intact with clear space.</li>
            <li>Black/White colors: use high-contrast #111827 and #FFFFFF only.</li>
            <li>Typography: Inter-style sans serif, medium body weight, generous leading.</li>
          </ul>
        </section>
        <section className="text-sm text-slate-600">
          <p className="font-semibold text-ink">NimbusKite Cloud Services</p>
          <p className="mt-3">Consistency at scale.</p>
          <p className="mt-4 text-xs leading-relaxed">
            NimbusKite Cloud Services is a fictional entity for design and storytelling purposes.
          </p>
        </section>
      </div>
    </footer>
  );
}
