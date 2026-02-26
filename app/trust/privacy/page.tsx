import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Placeholder privacy policy page for NimbusKite Cloud Services.',
  openGraph: {
    title: 'NimbusKite Cloud Services | Privacy Policy',
    description: 'Placeholder privacy policy page for NimbusKite Cloud Services.'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-wrap py-20">
      <h1 className="text-3xl font-semibold">Privacy Policy (Placeholder)</h1>
      <p className="mt-4 text-slate-600">Detailed policy content will be published in a future revision.</p>
    </div>
  );
}
