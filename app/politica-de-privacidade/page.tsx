import type { Metadata } from 'next';
import { LegalShell } from '../legal-shell';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Encruzas',
  description: 'Como a Encruzas trata dados pessoais em seu site institucional.',
  openGraph: {
    title: 'Política de Privacidade — Encruzas',
    description: 'Como a Encruzas trata dados pessoais em seu site institucional.',
    images: [],
  },
  twitter: { images: [] },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="07 · Privacidade"
      title="Política de Privacidade"
      lead="Esta política descreve o tratamento de dados pessoais no site institucional da Encruzas."
      companionHref="/acessibilidade"
      companionLabel="Declaração de Acessibilidade"
    >
        <section>
          <h2>1. Sobre este site</h2>
          <p>
            A Encruzas é uma iniciativa autoral dirigida por Giovani Schiavini.
            O site apresenta sua atuação e disponibiliza canais diretos de contato.
          </p>
        </section>
        <section>
          <h2>2. Dados coletados</h2>
          <p>
            O site não utiliza formulário, newsletter, publicidade, Meta Pixel ou Google Analytics.
            Também não instala cookies não essenciais intencionalmente.
          </p>
          <p>
            A infraestrutura de hospedagem pode manter registros técnicos essenciais, como endereço IP,
            data, horário, navegador e página acessada, para segurança, diagnóstico e funcionamento do serviço.
          </p>
        </section>
        <section>
          <h2>3. Contato por e-mail ou WhatsApp</h2>
          <p>
            Ao escolher um desses canais, os dados enviados são tratados para responder à conversa,
            compreender a demanda e manter os registros necessários da relação iniciada por você.
          </p>
        </section>
        <section>
          <h2>4. Compartilhamento e conservação</h2>
          <p>
            Dados não são vendidos. Eles podem ser processados por fornecedores necessários à comunicação
            e à hospedagem, dentro de suas funções técnicas. As informações são mantidas apenas pelo período
            necessário à finalidade do contato e a obrigações aplicáveis.
          </p>
        </section>
        <section>
          <h2>5. Seus direitos</h2>
          <p>
            Você pode solicitar informações, correção ou exclusão de dados relacionados ao seu contato,
            respeitadas as hipóteses legais de conservação.
          </p>
        </section>
        <section>
          <h2>6. Canal de contato</h2>
          <p>
            Para assuntos de privacidade, escreva para{' '}
            <a href="mailto:contato@encruzas.com.br">contato@encruzas.com.br</a>.
          </p>
        </section>
    </LegalShell>
  );
}
