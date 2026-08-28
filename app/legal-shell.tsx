import type { ReactNode } from 'react';

type LegalShellProps = {
  eyebrow: string;
  title: string;
  lead: string;
  companionHref: string;
  companionLabel: string;
  children: ReactNode;
  footerEmail?: string;
};

export function LegalShell({
  eyebrow,
  title,
  lead,
  companionHref,
  companionLabel,
  children,
  footerEmail = 'contato@encruzas.com.br',
}: LegalShellProps) {
  return (
    <div className="legal-shell">
      <a className="skip-link" href="#legal-content">Pular para o conteúdo principal</a>

      <header className="legal-site-header">
        <a className="legal-site-header__brand" href="/" aria-label="Encruzas — página inicial">
          <img
            src="/brand/encruzas-v3-horizontal-transparent.png"
            width="480"
            height="210"
            alt="Encruzas"
          />
        </a>
        <nav aria-label="Navegação institucional">
          <a href="/">Site institucional</a>
          <a href={companionHref}>{companionLabel}</a>
        </nav>
      </header>

      <main className="legal-page" id="legal-content">
        <header className="legal-page__hero">
          <p className="section-index">{eyebrow}</p>
          <div>
            <h1>{title}</h1>
            <p className="legal-page__lead">{lead}</p>
          </div>
        </header>

        <div className="legal-page__body">
          <aside className="legal-page__aside">
            <span>Documento institucional</span>
            <a href={companionHref}>{companionLabel} <span aria-hidden="true">↗</span></a>
          </aside>
          <div className="legal-page__content">{children}</div>
        </div>

        <footer className="legal-page__version">Versão de 28 de agosto de 2026.</footer>
      </main>

      <footer className="legal-site-footer">
        <div>
          <a href="/" aria-label="Voltar à página inicial da Encruzas">
            <img
              src="/brand/encruzas-v3-horizontal-transparent.png"
              width="485"
              height="210"
              alt="Encruzas"
            />
          </a>
        </div>
        <div>
          <p>Desenvolvimento cultural territorial.</p>
        </div>
        <div>
          <a href={`mailto:${footerEmail}`}>{footerEmail}</a>
        </div>
      </footer>
    </div>
  );
}
