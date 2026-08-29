# Relatório técnico de acessibilidade — Encruzas

**Data da avaliação:** 29 de agosto de 2026

**Referência:** WCAG 2.2, níveis A e AA

**Método:** autoavaliação técnica inspirada na WCAG-EM
**Resultado:** conforme tecnicamente com os critérios WCAG 2.2 A e AA aplicáveis ao escopo descrito abaixo.

## Escopo

- Página institucional (`/`)
- Política de Privacidade (`/politica-de-privacidade`)
- Declaração de Acessibilidade (`/acessibilidade`)
- Estado de página não encontrada (`404`)
- Estado de erro inesperado (`error boundary`)
- Cabeçalhos, navegação, rodapés, links de contato, menu móvel, imagens e animações presentes nessas páginas

Tecnologias avaliadas: HTML, CSS, React, Vinext e JavaScript usado pelo link de salto e pelo estado de erro.

## Procedimentos realizados

- inspeção do HTML semântico, landmarks, títulos, nomes acessíveis e textos alternativos;
- verificação de contraste calculado para textos e controles;
- revisão da operação por teclado dos elementos nativos e da ordem de foco no DOM;
- inspeção de foco visível e prevenção de conteúdo encoberto;
- validação de reflow sem rolagem horizontal em 1366 px, 683 px e 320 px;
- revisão de zoom, espaçamento de texto, orientação e ampliação responsiva;
- revisão de animações, flashes, temporização e preferência por movimento reduzido;
- inspeção das páginas legais, da página 404 e do estado de erro;
- compilação de produção e verificação de erros no navegador.

## Matriz de critérios WCAG 2.2 — A e AA

| Critério | Nível | Resultado | Evidência ou justificativa |
|---|---:|---|---|
| 1.1.1 Conteúdo não textual | A | Aprovado | Imagens relevantes possuem alternativa; grafismos decorativos são CSS ou ignorados; logotipos têm nome acessível. |
| 1.2.1 Apenas áudio e apenas vídeo (pré-gravado) | A | Não aplicável | Não há mídia temporal no site. |
| 1.2.2 Legendas (pré-gravadas) | A | Não aplicável | Não há vídeo com áudio. |
| 1.2.3 Audiodescrição ou alternativa de mídia | A | Não aplicável | Não há vídeo pré-gravado. |
| 1.2.4 Legendas (ao vivo) | AA | Não aplicável | Não há mídia ao vivo. |
| 1.2.5 Audiodescrição (pré-gravada) | AA | Não aplicável | Não há vídeo pré-gravado. |
| 1.3.1 Informações e relações | A | Aprovado | Landmarks, listas, artigos, seções e hierarquia de títulos são semânticos. |
| 1.3.2 Sequência com significado | A | Aprovado | A ordem do DOM preserva a sequência de leitura em todos os breakpoints. |
| 1.3.3 Características sensoriais | A | Aprovado | Instruções e links não dependem apenas de forma, posição, som ou direção. |
| 1.3.4 Orientação | AA | Aprovado | Não há bloqueio de orientação. |
| 1.3.5 Identificar finalidade de entrada | AA | Não aplicável | Não há campos de entrada. |
| 1.4.1 Uso de cor | A | Aprovado | Informação e estados não dependem exclusivamente da cor. |
| 1.4.2 Controle de áudio | A | Não aplicável | Não há áudio automático. |
| 1.4.3 Contraste mínimo | AA | Aprovado | Combinações de texto avaliadas atendem aos limites; rodapés e índices legais foram corrigidos. |
| 1.4.4 Redimensionar texto | AA | Aprovado | Conteúdo permanece utilizável em simulação equivalente a 200% de zoom. |
| 1.4.5 Imagens de texto | AA | Aprovado | Texto de conteúdo é HTML; logotipos usam a exceção de apresentação essencial. |
| 1.4.10 Reflow | AA | Aprovado | Sem rolagem horizontal nas rotas avaliadas até 320 px. |
| 1.4.11 Contraste não textual | AA | Aprovado | Contornos de foco e limites funcionais atingem contraste suficiente; elementos puramente decorativos são dispensados. |
| 1.4.12 Espaçamento de texto | AA | Aprovado | Layouts usam altura automática, quebra de linha e áreas flexíveis, sem perda ou sobreposição de conteúdo. |
| 1.4.13 Conteúdo em foco ou hover | AA | Não aplicável | Não há conteúdo informativo adicional acionado apenas por hover ou foco. |
| 2.1.1 Teclado | A | Aprovado | Links, botão e `details/summary` são controles nativos operáveis por teclado. |
| 2.1.2 Sem armadilha de teclado | A | Aprovado | Não há modal, captura de foco ou componente que prenda a navegação. |
| 2.1.4 Atalhos de tecla de caractere | A | Não aplicável | Não há atalhos de caractere. |
| 2.2.1 Tempo ajustável | A | Não aplicável | Não há limite de tempo. |
| 2.2.2 Pausar, parar, ocultar | A | Aprovado | O único movimento automático termina em até quatro segundos; não há animação contínua. |
| 2.3.1 Três flashes ou abaixo do limite | A | Aprovado | Não há flashes. |
| 2.4.1 Ignorar blocos | A | Aprovado | Páginas com navegação repetida oferecem link para pular ao conteúdo principal. |
| 2.4.2 Página com título | A | Aprovado | Todas as páginas e estados possuem títulos descritivos, incluindo 404 e erro. |
| 2.4.3 Ordem do foco | A | Aprovado | A ordem dos elementos interativos acompanha o DOM e a sequência visual. |
| 2.4.4 Finalidade do link no contexto | A | Aprovado | Textos e nomes acessíveis identificam o destino ou a ação. |
| 2.4.5 Múltiplas formas | AA | Aprovado | Páginas institucionais são alcançadas pela navegação, rodapés e links cruzados. |
| 2.4.6 Títulos e rótulos | AA | Aprovado | Títulos e nomes de controles descrevem tema ou finalidade. |
| 2.4.7 Foco visível | AA | Aprovado | Foco possui contorno de 3 px; fundos escuros e vermelhos recebem contorno branco. |
| 2.4.11 Foco não encoberto (mínimo) | AA | Aprovado | Destinos possuem margem de rolagem para o cabeçalho fixo e controles não ficam totalmente encobertos. |
| 2.5.1 Gestos de ponteiro | A | Não aplicável | Não há gesto multiponto ou baseado em trajetória. |
| 2.5.2 Cancelamento de ponteiro | A | Aprovado | Controles nativos são acionados no evento de conclusão padrão. |
| 2.5.3 Rótulo no nome acessível | A | Aprovado | O texto visual está contido nos nomes acessíveis dos controles. |
| 2.5.4 Atuação por movimento | A | Não aplicável | Não há entrada por movimento do dispositivo ou da pessoa. |
| 2.5.7 Movimentos de arrastar | AA | Não aplicável | Não há interação por arrastar. |
| 2.5.8 Tamanho do alvo (mínimo) | AA | Aprovado | Alvos independentes atingem 24 px; links em texto corrido usam a exceção prevista. |
| 3.1.1 Idioma da página | A | Aprovado | Documento define `lang="pt-BR"`. |
| 3.1.2 Idioma das partes | AA | Aprovado | Não há passagens em outro idioma que exijam marcação; nomes próprios não alteram o idioma. |
| 3.2.1 Em foco | A | Aprovado | Receber foco não inicia mudança de contexto. |
| 3.2.2 Na entrada | A | Não aplicável | Não há campos de entrada. |
| 3.2.3 Navegação consistente | AA | Aprovado | Cabeçalhos, rodapés e links institucionais mantêm posição e ordem coerentes. |
| 3.2.4 Identificação consistente | AA | Aprovado | Componentes com a mesma função usam nomes consistentes. |
| 3.2.6 Ajuda consistente | A | Aprovado | Contato geral e canal de acessibilidade aparecem em ordem consistente nos rodapés. |
| 3.3.1 Identificação de erros | A | Não aplicável | Não há formulário ou entrada sujeita a validação. |
| 3.3.2 Rótulos ou instruções | A | Não aplicável | Não há entrada do usuário. |
| 3.3.3 Sugestão de erro | AA | Não aplicável | Não há validação de entrada. |
| 3.3.4 Prevenção de erros legais, financeiros ou de dados | AA | Não aplicável | Não há transações ou submissão de dados. |
| 3.3.7 Entrada redundante | A | Não aplicável | Não há processo de entrada de dados. |
| 3.3.8 Autenticação acessível (mínimo) | AA | Não aplicável | Não há autenticação. |
| 4.1.2 Nome, função e valor | A | Aprovado | Controles usam HTML nativo, nomes acessíveis e estados expostos pelo navegador. |
| 4.1.3 Mensagens de status | AA | Não aplicável | Não há mensagem dinâmica de status sem mudança de contexto. |

## Correções realizadas durante a avaliação

- alinhamento e reflow dos itens jurídicos;
- contraste dos índices e links nos rodapés;
- foco visível adequado em fundos escuros e vermelhos;
- nomes acessíveis das marcas;
- link de salto e compensação do cabeçalho fixo;
- eliminação de rolagem horizontal em 320 px;
- ampliação dos alvos interativos independentes;
- encerramento da animação automática em até quatro segundos;
- canais de ajuda consistentes em todas as páginas;
- títulos específicos para os estados 404 e erro.

## Limitações e manutenção

Esta autoavaliação não incluiu testes conduzidos por pessoas com deficiência nem certificação por terceira parte. O canal `meinclua@encruzas.com.br` recebe relatos de barreiras, experiências com tecnologias assistivas e sugestões para correções futuras.

A conformidade descrita neste relatório corresponde à versão avaliada em 29 de agosto de 2026. Mudanças de conteúdo, componentes, integrações ou infraestrutura podem exigir nova avaliação.

## Referências

- [WCAG 2.2 — Recomendação W3C](https://www.w3.org/TR/WCAG22/)
- [WCAG-EM — metodologia de avaliação](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)
- [Modelo de relatório de avaliação da W3C](https://www.w3.org/WAI/test-evaluate/report-template/)
