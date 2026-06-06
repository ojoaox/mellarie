# Mellarie – Organização de Eventos

## Visão geral
Mellarie é uma agência de **organização de eventos sob medida**. O site está construído como uma página única estática que apresenta a empresa, os seus valores, serviços, galeria de eventos e informações de contacto. Todo o layout utiliza **Tailwind CSS** para estilização responsiva e **SVGs** para garantir boa performance e compatibilidade com o modo escuro.

## Tecnologias
- **HTML5** – estrutura semântica, com seções (`header`, `section`, `footer`).
- **Tailwind CSS** – CDN (`https://cdn.tailwindcss.com`) configurado para usar `darkMode: "media"` e fontes personalizadas (`Playfair Display` e `Inter`).
- **JavaScript** – `script.js` controla o menu móvel e o acordeão de preço.
- **Imagens** – armazenadas na pasta `assets/` (logotipos, fotos de equipe, eventos, QR‑codes).

## Estrutura de diretórios
```
.
├─ assets/          # imagens, logotipos, fotos dos eventos, QR‑code
├─ styles/          # folha de estilo personalizada (style.css)
├─ index.html       # ponto de entrada da aplicação
├─ script.js        # comportamentos interativos (menu, accordion)
└─ README.md       # este documento
```

## Principais componentes da página
| Seção | Descrição |
|------|-----------|
| **Header** | Navegação fixa com links de âncora e botão de menu móvel. | 
| **Hero** | Imagem de fundo com gradiente, título de impacto e chamadas para ação. |
| **About** | Missão, valores e equipa, cada um representado por um ícone SVG. |
| **Services** | Cartões de serviço (Casamentos, Aniversários, Corporativos, Lançamentos) com ícones SVG. |
| **Gallery** | Galeria de imagens de eventos, animação de hover. |
| **Price accordion** | Botão que expande a política de preço usando um ícone de seta SVG. |
| **Contact** | Links para Instagram, WhatsApp e e‑mail, todos com ícones SVG. |
| **Footer** | Navegação adicional, logotipo e direitos autorais. |

## Como executar localmente
1. Clone ou copie o repositório.
2. Abra `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox). Não há necessidade de servidor, pois tudo é estático.

## Personalização
- **Cores / Tipografia** – ajuste o objeto `tailwind.config` dentro da tag `<script>` no `<head>`.
- **Ícones** – substitua os `<svg>` por outros ícones da sua preferência (ex.: Heroicons, Feather). Basta manter a classe `fa-…` ou criar novas classes.
- **Conteúdo** – atualize textos nos blocos de missão, valores, serviços e contacto conforme necessário.

