import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="NimbusKite Cloud Services">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
        <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 30a8 8 0 1 1 2.5-15.6A10 10 0 0 1 35 20h1a7 7 0 0 1 0 14H14Z" stroke="#1E293B" strokeWidth="2" />
          <path d="m26 14 8 8-8 8-8-8 8-8Z" stroke="#1D4ED8" strokeWidth="2" />
        </svg>
      </span>
      <span className="text-sm font-semibold tracking-tight text-ink">NimbusKite Cloud Services</span>
    </Link>
  );
}
