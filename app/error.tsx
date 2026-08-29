'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <title>Erro ao carregar — Encruzas</title>
      <main className="error-page">
      <header className="error-page__header">
        <a href="/" aria-label="Encruzas — página inicial">
          <img
            src="/brand/encruzas-v3-horizontal-transparent.png"
            width="480"
            height="210"
            alt="Encruzas"
          />
        </a>
        <span>Falha inesperada</span>
      </header>

      <section className="error-page__content" aria-labelledby="error-title">
        <p className="error-page__index">O percurso encontrou uma barreira</p>
        <div className="error-page__message">
          <span className="error-page__code" aria-hidden="true">!</span>
          <h1 id="error-title">Algo não cruzou como deveria.</h1>
          <p>
            O conteúdo não pôde ser carregado neste momento. Você pode tentar
            novamente ou retornar ao início do site.
          </p>
          <div className="error-page__actions">
            <button className="error-page__primary" type="button" onClick={reset}>
              Tentar novamente <span aria-hidden="true">↻</span>
            </button>
            <a href="/">Voltar ao início</a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
