const method = [
  ['01', 'Compreender', 'Ler o contexto, as necessidades, as pessoas e as condições reais.'],
  ['02', 'Reconhecer', 'Identificar capacidades, conhecimentos, experiências e recursos existentes.'],
  ['03', 'Articular', 'Aproximar pessoas, instituições e competências em uma rede coerente.'],
  ['04', 'Estruturar', 'Transformar possibilidades em objetivos, responsabilidades e planos executáveis.'],
  ['05', 'Produzir', 'Participar da implantação, do acompanhamento e da documentação.'],
] as const;

const fronts = [
  {
    number: '01',
    title: 'Infraestruturas culturais territoriais',
    label: 'Frente principal',
    text: 'Implantação e ativação de Mapas Culturais. Plataformas que organizam agentes, espaços, eventos, oportunidades e políticas públicas — ativadas para funcionar no território.',
    action: 'Conversar sobre uma implantação',
  },
  {
    number: '02',
    title: 'Projetos culturais e territoriais',
    label: 'Da possibilidade à realização',
    text: 'Articulação e produção quando uma ideia ou demanda precisa de leitura de contexto, planejamento, mobilização, acompanhamento e continuidade.',
    action: 'Estruturar um projeto',
  },
  {
    number: '03',
    title: 'Sites institucionais',
    label: 'Comunicação organizada para evoluir',
    text: 'Arquitetura de informação, conteúdo, design e desenvolvimento de presenças digitais claras, responsivas, acessíveis e preparadas para crescer.',
    action: 'Organizar uma presença digital',
  },
] as const;

function BrandMark({ negative = false }: { negative?: boolean }) {
  return (
    <span className="brand" aria-label="Encruzas">
      <img
        className="brand__signature"
        src={negative
          ? '/brand/encruzas-v3-horizontal-negative-transparent.png'
          : '/brand/encruzas-v3-horizontal-transparent.png'}
        width={negative ? 485 : 480}
        height="210"
        alt=""
      />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo principal
      </a>

      <header className="site-header">
        <a className="site-header__brand" href="#inicio">
          <BrandMark />
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#metodo">Método</a>
          <a href="#atuacao">Atuação</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Navegação móvel">
            <a href="#metodo">Método</a>
            <a href="#atuacao">Atuação</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
        <a className="header-cta" href="#contato">
          Iniciar conversa
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__copy">
            <p className="eyebrow">
              <span>Desenvolvimento cultural territorial</span>
              <span>Itapoá · SC · Brasil</span>
            </p>
            <h1 id="hero-title">
              <span>Ampliar</span>
              <span>o campo do</span>
              <span className="hero__accent">possível.</span>
            </h1>
            <div className="hero__support">
              <p>
                A Encruzas articula pessoas, conhecimentos, instituições e
                tecnologias para estruturar projetos e infraestruturas viáveis.
              </p>
              <a className="text-link" href="#manifesto">
                Entenda como atuamos <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

        </section>

        <section className="manifesto section" id="manifesto" aria-labelledby="manifesto-title">
          <div className="section-index" aria-hidden="true">01 · Posição</div>
          <div className="manifesto__statement">
            <h2 id="manifesto-title">
              Reunimos capacidades culturais para construir caminhos viáveis de ação.
            </h2>
          </div>
          <div className="manifesto__body">
            <p>
              O território muitas vezes já possui pessoas, conhecimentos,
              iniciativas, tecnologias e espaços. O problema é que essas
              capacidades nem sempre conseguem se reconhecer, ganhar estrutura
              ou continuidade.
            </p>
            <p>
              A Encruzas atua justamente nesse intervalo: entre o que já existe
              e o que ainda pode se tornar possível.
            </p>
            <p className="manifesto__result">
              O encontro é o meio. <strong>A realização é o resultado.</strong>
            </p>
          </div>
        </section>

        <section className="method section" id="metodo" aria-labelledby="method-title">
          <div className="method__heading">
            <div className="section-index">02 · Percurso</div>
            <h2 id="method-title">Cinco movimentos que se cruzam.</h2>
            <p>
              Não é uma sequência industrial. Cada movimento pode voltar,
              atravessar outro e receber pesos diferentes conforme o contexto.
            </p>
          </div>
          <ol className="method__list">
            {method.map(([number, title, text]) => (
              <li key={number}>
                <span className="method__number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="fronts section" id="atuacao" aria-labelledby="fronts-title">
          <div className="fronts__intro">
            <div className="section-index section-index--light">03 · Atuação</div>
            <h2 id="fronts-title">Três frentes.<br />Prioridades claras.</h2>
            <p>
              Cultura, território, gestão, comunicação e tecnologia entram na
              combinação certa para cada realização.
            </p>
          </div>
          <div className="fronts__list">
            {fronts.map((front) => (
              <article className="front" key={front.number} data-number={front.number}>
                <div className="front__meta">
                  <span>{front.number}</span>
                  <span>{front.label}</span>
                </div>
                <h3>{front.title}</h3>
                <p>{front.text}</p>
                <a href="#contato">{front.action} <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="foundation section" id="trajetoria" aria-labelledby="foundation-title">
          <figure className="foundation__portrait">
            <img
              src="/brand/giovani-retrato-editorial.png"
              width="1086"
              height="1448"
              alt="Retrato de Giovani Schiavini"
            />
          </figure>
          <div className="foundation__content">
            <div className="section-index section-index--light">04 · Fundamento</div>
            <h2 id="foundation-title">A trajetória oferece fundamento. Os projetos começam agora.</h2>
            <div className="foundation__columns">
              <p>
                A Encruzas é uma iniciativa autoral dirigida por
                Giovani Schiavini — cientista social, educador e produtor cultural.
              </p>
              <p>
                Sua trajetória, iniciada em 2002, atravessa produção cultural,
                cultura popular, articulação comunitária, educação, tecnologias
                digitais, programação web, gestão pública e políticas culturais.
              </p>
              <p>
                A combinação entre olhar analítico, experiência institucional e
                sensibilidade territorial sustenta uma perspectiva transversal e
                situada: decisões partem das condições reais de cada contexto.
              </p>
            </div>
          </div>
        </section>

        <section className="projects section" id="projetos" aria-labelledby="projects-title">
          <div className="projects__heading">
            <div className="section-index">05 · Prática</div>
            <h2 id="projects-title">Em realização.</h2>
            <p>
              Projetos em andamento, apresentados com transparência sobre seu estágio atual.
            </p>
          </div>
          <div className="projects__grid">
            <article className="project project--itapoa">
              <div className="project__meta">
                <span>Infraestrutura cultural territorial</span>
                <span className="project__status">Em execução</span>
              </div>
              <h3>Mapa Cultural de Itapoá</h3>
              <p>
                Implantação de infraestrutura tecnológica territorial para a
                gestão pública municipal, no âmbito da PNAB. Organização de
                dados, governança, acessibilidade e estruturação de políticas de fomento.
              </p>
              <small>Itapoá · Santa Catarina</small>
            </article>
            <article className="project project--seashell">
              <div className="project__meta">
                <span>Site institucional</span>
                <span className="project__status">Em desenvolvimento</span>
              </div>
              <h3>Seashell Logistics Brasil</h3>
              <p>
                Reformulação da presença digital corporativa: arquitetura de
                informação, HTML semântico e uma experiência orientada à clareza
                comercial, à responsividade e à evolução do conteúdo.
              </p>
              <small>Mogi das Cruzes · São Paulo</small>
            </article>
          </div>
        </section>

        <section className="contact section" id="contato" aria-labelledby="contact-title">
          <div className="contact__prompt">
            <div className="section-index section-index--light">06 · Encontro</div>
            <h2 id="contact-title">Que possibilidade precisa encontrar um caminho?</h2>
          </div>
          <div className="contact__actions">
            <p>
              A primeira conversa serve para compreender o contexto, reconhecer
              necessidades iniciais e avaliar como a Encruzas pode contribuir.
            </p>
            <a className="contact__primary" href="mailto:contato@encruzas.com.br">
              contato@encruzas.com.br <span aria-hidden="true">↗</span>
            </a>
            <a href="https://wa.me/5547992383338">WhatsApp · +55 47 99238-3338</a>
            <a href="mailto:meinclua@encruzas.com.br">Acessibilidade · meinclua@encruzas.com.br</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <BrandMark negative />
          <p>Desenvolvimento cultural territorial</p>
        </div>
        <div>
          <strong>Institucional</strong>
          <p>Iniciativa autoral dirigida por Giovani Schiavini.</p>
          <p>Itapoá, Santa Catarina — Brasil.</p>
        </div>
        <nav aria-label="Links institucionais">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/acessibilidade">Declaração de Acessibilidade</a>
        </nav>
        <div className="site-footer__bottom">
          <span>© 2026 Encruzas.</span>
          <span>Capacidades existem. Relações tornam caminhos possíveis.</span>
        </div>
      </footer>
    </>
  );
}
