export default function NotFound() {
  return (
    <>
      <title>Página não encontrada — Encruzas</title>
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
        <span>Erro 404</span>
      </header>

      <section className="error-page__content" aria-labelledby="error-title">
        <p className="error-page__index">Caminho interrompido</p>
        <div className="error-page__message">
          <span className="error-page__code" aria-hidden="true">404</span>
          <h1 id="error-title">Este caminho não foi encontrado.</h1>
          <p>
            O endereço pode ter mudado ou ainda não existir. Volte ao início
            para continuar percorrendo as possibilidades da Encruzas.
          </p>
          <div className="error-page__actions">
            <a className="error-page__primary" href="/">Voltar ao início <span aria-hidden="true">↗</span></a>
            <a href="mailto:contato@encruzas.com.br">Informar um problema</a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
