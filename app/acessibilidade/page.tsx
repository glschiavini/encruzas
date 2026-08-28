import type { Metadata } from 'next';
import { LegalShell } from '../legal-shell';

export const metadata: Metadata = {
  title: 'Declaração de Acessibilidade — Encruzas',
  description: 'Compromissos e canais de acessibilidade do site da Encruzas.',
  openGraph: {
    title: 'Declaração de Acessibilidade — Encruzas',
    description: 'Compromissos e canais de acessibilidade do site da Encruzas.',
    images: [],
  },
  twitter: { images: [] },
};

export default function AccessibilityPage() {
  return (
    <LegalShell
      eyebrow="07 · Acessibilidade"
      title="Declaração de Acessibilidade"
      lead="A Encruzas quer que pessoas com diferentes formas de acesso possam compreender e utilizar este site."
      companionHref="/politica-de-privacidade"
      companionLabel="Política de Privacidade"
      footerEmail="meinclua@encruzas.com.br"
    >
        <section>
          <h2>Compromisso</h2>
          <p>
            O desenvolvimento adota as WCAG 2.2, nível AA, como referência técnica. Isso é uma meta de trabalho,
            não uma declaração antecipada de conformidade integral.
          </p>
        </section>
        <section>
          <h2>Medidas consideradas</h2>
          <ul>
            <li>estrutura semântica e hierarquia clara de títulos;</li>
            <li>navegação por teclado e foco visível;</li>
            <li>contraste de texto e controles;</li>
            <li>reflow, zoom e adaptação a diferentes telas;</li>
            <li>alternativas textuais para conteúdo visual relevante;</li>
            <li>redução de movimento conforme a preferência do dispositivo;</li>
            <li>linguagem clara e canais de contato identificados.</li>
          </ul>
        </section>
        <section>
          <h2>Situação da avaliação</h2>
          <p>
            O site está em processo de implementação e validação. Testes automatizados ajudam a localizar
            problemas, mas a avaliação será complementada por navegação com teclado, leitor de tela, zoom e uso real.
          </p>
        </section>
        <section>
          <h2>Encontrou uma barreira?</h2>
          <p>
            Conte qual conteúdo ou função apresentou dificuldade, qual dispositivo ou tecnologia assistiva você
            utilizou e, se possível, a página onde ocorreu o problema.
          </p>
          <p>
            Escreva para <a href="mailto:meinclua@encruzas.com.br">meinclua@encruzas.com.br</a>.
          </p>
        </section>
    </LegalShell>
  );
}
