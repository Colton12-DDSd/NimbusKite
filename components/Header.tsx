import Link from 'next/link';
import { Logo } from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/partners', label: 'Partners' },
  { href: '/trust', label: 'Trust Center' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-wrap flex min-h-20 items-center justify-between gap-8">
        <Logo />
        <nav aria-label="Main" className="flex items-center gap-6 text-sm text-slate-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
