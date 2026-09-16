# Duna Arquitetura

Landing page em Angular 20, standalone, TypeScript e SCSS, com rota carregada sob demanda, pré-renderização e estado de interface com Signals.

## Executar

- `npm install`
- `npm start` — prévia local em http://localhost:4200
- `npm run build` — saída em `dist/duna-arquitetura-landing-page`; a página inicial é pré-renderizada em `browser/index.html`.
- `npm run test:ci` — testes Angular.
- `npm run test:e2e` — testes de navegação e galeria, após o build. Usa Chrome instalado e Python para servir a saída na porta 4203. Capturas em `tmp/qa/`. Ajustar o caminho do navegador em `playwright.config.ts` em outro ambiente.

## Organização

- `src/app/core/config/site.config.ts`: marca, WhatsApp, telefones, e-mail e Instagram.
- `src/app/features/home/data/home-content.ts`: projetos e áreas de atuação.
- `src/app/features/home/components/hero`: abertura.
- `src/app/features/home/components/portfolio`: filtros e galeria nativa em dialog; setas, Escape, toque e restauração de foco.
- `src/app/layout`: cabeçalho e rodapé.
- `src/app/shared`: modelo de projeto e ícones SVG.
- `src/styles.scss`: paleta, fonte, espaçamentos e estilos compartilhados.
- `public/brand`, `public/images`, `public/fonts`: arquivos otimizados e hospedados localmente.

## Materiais e decisões de conteúdo

Referência principal: materiais fornecidos na pasta pai. Os originais permanecem intactos. PDFs legais, certificados e dados pessoais dos documentos não integram os arquivos públicos.

- Paleta: `07. Informações Técnicas/PALETA DE CORES DUNA.pdf`: oliva #46483A, verde #47593E, terracota #AD6952, rosado #B79887 e claro #F4F7F9.
- Tipografia: o manual indica Amonos Display modificada no logotipo e ABeeZee Regular no slogan. A marca original foi preservada em PNG transparente; não foi recriada com fontes. ABeeZee é usada na interface e hospedada localmente, obtida de https://github.com/google/fonts/tree/main/ofl/abeezee, com licença OFL em `public/fonts/OFL-ABeeZee.txt`. Georgia é apenas uma alternativa de sistema no destaque editorial em itálico.
- Identidade visual original: Jaqueline Santos de Almeida, conforme certificado de autoria fornecido.
- Logo e símbolos: `02. Marca d_agua/01. Colorido`, recortados à área visível e reduzidos para web.
- Portfólio: `TAIS FRANCO - Portfolio.pdf`, 40 páginas, inspecionado visualmente. Imagens extraídas e convertidas em WebP; não são imagens de banco ou geradas para este site.
- Seleção: Cozinha Atlântica (14–16), Casa Zahy Herdades (17–20), Estúdio Sampa (21–22; Sampa Studio no original) e quarto contemporâneo (11–13). O último título é descritivo. Origem indicada na galeria e junto à seleção.
- Retrato e trajetória: página 2. Formação pelo Centro Universitário Christus e atuação em arquitetura residencial, interiores e visualização arquitetônica são informadas no material.
- Os contatos seguem exclusivamente o cartão da Duna, conforme confirmação do usuário: (85) 99717-3960 e (85) 99806-9699, contato.dunaarq@gmail.com e @duna.arqui. O primeiro número recebe as chamadas principais; ambos estão no contato. As mensagens mencionam Duna Arquitetura.
- Taís Franco é apresentada como a arquiteta por trás da marca, conforme instrução do projeto. A grafia Taís foi confirmada pelo usuário. O material também menciona Vanessa Queiroz; não se presumiu composição atual da equipe ou cargos.
- Estrutura técnica analisada nos projetos Mavi, Ilka Advocacia e GabrielCastro.Portfolio: separação de layout, conteúdo tipado, rota lazy, pré-renderização, estado e acessibilidade. Nenhuma configuração de publicação ou identidade dessas marcas foi reutilizada.

## Pendências editoriais antes da publicação

1. Confirmar créditos específicos, colaboração/autoria e situação de cada projeto. As imagens são apresentadas como visualizações do portfólio, sem afirmar que são fotografias de obras concluídas ou que a Duna detém autoria integral. Confirmar também localização, área e ano antes de adicionar esses dados.
2. Validar a redação institucional e eventual apresentação de Vanessa. Não há cargos de fundadora/responsável técnica ou registro profissional inventados.
3. Confirmar região de atendimento, atendimento online, etapas reais do processo e entregas/limites comerciais. Não há promessas de prazos, modalidades ou preços. A seção de contato orienta como iniciar a conversa; não apresenta um processo de contratação não confirmado.
4. Depoimentos não foram fornecidos e, por isso, não há avaliações artificiais nem uma seção vazia publicada.
5. Confirmar disponibilidade e uso dos contatos comerciais antes de publicar; os links são aberturas de aplicativos/rascunhos e não envio automático. A validação automatizada confere destinos e mensagens, sem enviar comunicações.
6. Definir domínio e hospedagem. Após isso, adicionar canonical, og:url e URL absoluta em og:image. O metadado de imagem atual é relativo e precisa dessa configuração para compartilhamento social em produção.

Não há formulário, rastreamento, credenciais, integrações de envio ou serviços externos em tempo de execução. Não houve publicação.

## Validação realizada

Build de produção com pré-renderização; dois testes Angular e três testes Playwright aprovados. Verificados filtros, navegação por setas, fechamento por Escape, restauração de foco, menu móvel, gesto de toque simulado e conteúdo sem JavaScript. Imagens, fonte, favicon e destinos dos contatos conferidos. Sem rolagem horizontal em 320, 390, 768, 1024 e 1440 px. Capturas desktop, mobile e galerias revisadas visualmente. O tom derivado #945640 complementa a terracota original para contraste de textos pequenos. A checagem de contatos valida o endereço configurado; não confirma recebimento de mensagens ou disponibilidade das contas.

A seção Pra quem é aparece antes dos projetos e reutiliza a apresentação em três colunas de Possibilidades. Os públicos e textos foram fornecidos pelo usuário em 14/09/2026 e ficam em AUDIENCES, em src/app/features/home/data/home-content.ts.

Em 16/09/2026, a seleção de projetos foi atualizada com oito imagens fornecidas em `../images`: Estúdio Sampa, Quarto Contemporâneo, Estúdio Nectar, Casa Zahy Herdades, Cozinha Atlântica, Frame Office, Base Lounge e Boteco Faustino. Os filtros são Todos, Estúdios, Residencial, Corporativo e Comercial. O arquivo `Curso 01.png`, descrito como “Lounge Âmbar” no print de associação, usa o nome final “Base Lounge” indicado pelo usuário. Os arquivos públicos otimizados ficam em `public/images/projetos`; `tools/prepare_project_images.py` documenta a associação com os originais.

A seção 03, Áreas de atuação, usa o título “O que eu faço” e apresenta os quatro serviços fornecidos pelo usuário: projeto completo para studios, otimização de espaço e marcenaria, acompanhamento de execução e consultoria para incorporadoras.
