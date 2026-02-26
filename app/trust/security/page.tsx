import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Policy',
  description: 'Placeholder security policy page for NimbusKite Cloud Services.',
  openGraph: {
    title: 'NimbusKite Cloud Services | Security Policy',
    description: 'Placeholder security policy page for NimbusKite Cloud Services.'
  }
};

export default function SecurityPolicyPage() {
  return (
    <div className="container-wrap py-20">
      <h1 className="text-3xl font-semibold">Security Policy (Placeholder)</h1>
      <p className="mt-4 text-slate-600">Detailed policy content will be published in a future revision.</p>
    </div>
  );
}
