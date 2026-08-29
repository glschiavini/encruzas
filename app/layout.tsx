import type { Metadata } from 'next';
import '@fontsource/staatliches/400.css';
import '@fontsource/roboto-condensed/300.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/600.css';
import '@fontsource/roboto-condensed/700.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://encruzas.com.br'),
  title: 'Encruzas — Desenvolvimento cultural territorial',
  description:
    'A Encruzas articula pessoas, conhecimentos, instituições e tecnologias para estruturar projetos e infraestruturas viáveis.',
  icons: {
    icon: '/brand/encruzas-v3-icon.png',
  },
  openGraph: {
    title: 'Ampliar o campo do possível — Encruzas',
    description: 'Desenvolvimento cultural territorial para estruturar projetos e infraestruturas viáveis.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ampliar o campo do possível — Encruzas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ampliar o campo do possível — Encruzas',
    description: 'Desenvolvimento cultural territorial para estruturar projetos e infraestruturas viáveis.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
