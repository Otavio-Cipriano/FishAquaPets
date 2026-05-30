# 🐟 FishAqua Pets ERP - Front-End Base

Seja bem-vindo ao repositório do front-end do **FishAqua Pets ERP**, um ecossistema completo de gestão comercial voltado para o nicho de aquarismo e pet shop. Este projeto foi estruturado com foco em alta fidelidade visual (Figma-to-Code), usabilidade fluida e uma interface moderna e responsiva.

Este repositório contém toda a estrutura de telas, estilos globais e interações básicas do lado do cliente (Client-Side).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** - Estruturação semântica das páginas.
* **Tailwind CSS (via CDN)** - Framework utilitário para estilização ágil e responsiva.
* **CSS3 Customizado (`style.css`)** - Abstração de estilos complexos, elevações inspiradas no Figma e gerenciamento centralizado do Modo Noturno.
* **JavaScript Vanilla (`sidebar.js` e scripts locais)** - Manipulação da árvore DOM, controle de estados de componentes (modais/dropdowns) e persistência de dados em sessão.
* **Google Fonts** - Tipografia baseada na família *Inter* (pesos do 400 ao 900) para máxima legibilidade.

---

## 🗂️ Estrutura de Páginas Principais

O sistema está modularizado nas seguintes interfaces fundamentais:
1. **`login.html`**: Tela de autenticação centralizada, com suporte a efeito focus responsivo, tratamento visual independente e seletor rápido de tema.
2. **`index.html`** *(Dashboard)*: Painel de controle principal exibindo métricas consolidadas, gráficos comportamentais de vendas e atalhos rápidos.
3. **`estoque.html`**: Listagem inteligente de produtos com tabela de dados, paginação visual, indicadores de status e controle de ações por linha.
4. **`cadastrar-produto.html`**: Formulário de inserção de itens dividido em seções lógicas (Informações Básicas, Precificação e Estoque), incluindo cards de dicas contextuais.
5. **`central-ajuda.html`**: Central de suporte ao usuário baseada em FAQs dinâmicos (estilo SaaS comercial) com accordion puro e barra de pesquisa sutil.

---

## 🎨 Arquitetura Visual e "Pulos do Gato"

Para dar manutenção ou analisar este front-end de forma eficiente, atente-se às seguintes decisões de engenharia de design adotadas:

### 1. Centralização do Modo Noturno (Dark Mode Global)
Em vez de sobrecarregar todas as tags HTML com o prefixo `dark:` do Tailwind, o sistema utiliza uma estratégia híbrida baseada em **injeção de classe raiz**:
* O arquivo `sidebar.js` intercepta o estado do interruptor (toggle) na barra lateral.
* Ao ativar, a classe `.dark-mode` é injetada nas tags `<html>` e `<body>`.
* A escolha do usuário é guardada no navegador através da API **`localStorage`** sob a chave `'fishaqua-theme'`.
* As cores de fundo, textos, inputs e seletores do modo escuro são controladas via **Overrides de Alta Prioridade (`!important`)** localizados exclusivamente ao **final do arquivo `style.css`**.

### 2. Controle de Sombras e Halos no Modo Escuro
Para evitar o efeito de "sombras esbranquiçadas" contra fundos escuros (problema comum ao misturar opacidades claras em temas dark), o arquivo `style.css` intercepta as variáveis de elevação do Tailwind (`--tw-shadow-color`) e reajusta as sombras (`.shadow-blue-100`, `.shadow-emerald-100`, etc.) para agirem como leves brilhos neon translúcidos coloridos, garantindo o realismo e a profundidade da interface.

### 3. Sidebar Retrátil
O menu lateral possui um comportamento colapsável controlado via classes CSS e manipulado pelo script global. Certifique-se de manter os IDs (`#app-sidebar`, `#btn-close-sidebar`, `#btn-open-sidebar`) intactos ao clonar ou estender novas páginas.

---

## 🚀 Como Executar o Projeto Localmente

Devido ao uso da API `localStorage` para persistência do tema entre as páginas, alguns navegadores modernos bloqueiam o compartilhamento de dados se os arquivos forem abertos diretamente clicando duas vezes neles (protocolo `file:///C:/...`).

Para rodar com 100% de fidelidade:
1. Abra a pasta do projeto no **VS Code**.
2. Instale a extensão **Live Server** (desenvolvida por Ritwick Dey).
3. Clique no botão **"Go Live"** na barra inferior do VS Code.
4. O projeto será aberto em um servidor local seguro (`http://127.0.0.1:5500/login.html`), permitindo que a transição de temas e navegação funcionem de forma idêntica ao ambiente de produção.

---

## 📌 Recomendações de Padronização
* **Novas Cores Globais:** Adicione os seletores de classe atrelados ao `body.dark-mode` no final do arquivo `style.css`.
* **Inclusão de Telas:** Lembre-se de importar o `style.css` e o `<script src="sidebar.js"></script>` no fechamento do corpo das novas páginas para herdar automaticamente o comportamento do menu e do tema escuro.