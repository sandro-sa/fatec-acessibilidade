# Projeto base para aula de Acessibilidade

Adição da aba de acessibilidade com os botões:

* Botão de aumentar e diminuir fonte;
* Botão de aumentar contraste;
* Mudar o plano de fundo para claro e escuro.

## Código

### HTML

```html
<div class="accessibility-bar">
  <div class="container">
    <div class="accessibility-tools">
      <span class="accessibility-label">Acessibilidade:</span>
      <button id="btn-decrease" class="nav-item" aria-label="Diminuir tamanho da fonte" title="Diminuir fonte">A-</button>
      <button id="btn-increase" class="nav-item" aria-label="Aumentar tamanho da fonte" title="Aumentar fonte">A+</button>
      <button id="btn-contrast" class="nav-item" aria-label="Alternar alto contraste" title="Alto Contraste">◐</button>
      <button id="btn-light" class="nav-item" aria-label="Alternar tema claro" title="Tema Claro">☀️</button>
    </div>
  </div>
</div>
```

### CSS:  Estilização da Aba de Acessibilidade

```css
    .accessibility-bar {
        background: var(--surface2); /* Usa a cor de fundo secundária */
        border-bottom: 1px solid var(--border);
        padding: 6px 0;
    }

    .accessibility-tools {
        display: flex;
        justify-content: flex-end; /* Alinha os botões à direita */
        align-items: center;
        gap: 8px;
    }

    .accessibility-label {
        color: var(--muted);
        font-size: 0.85em;
        margin-right: 8px;
    }

    /* Deixa os botões dessa barra um pouco menores e mais discretos */
    .accessibility-tools .nav-item {
        padding: 4px 10px;
        font-size: 0.85em;
    }

    /* Garante que a barra acompanhe o Tema Claro quando ativado */
    body.light-mode .accessibility-bar {
        background: #e5e7eb; /* Fundo cinza claro no modo light */
    }
    ```

### CSS: Criação do Fundo Claro e Alto Contraste

```css
    /* CONTRASTE */

    body.alto-contraste {
    /* Substitui as variáveis originais por cores de contraste máximo */
        --bg: #000000;
        --surface: #000000;
        --surface2: #000000;
        --text: #ffffff;
        --muted: #cccccc;
        --brand: #ffff00; /* Amarelo para destacar bem os elementos */
        --border: #ffffff;
        --shadow: none; /* Remove as sombras para deixar o layout plano e nítido */
        
        /* Remove o gradiente original e deixa o fundo preto sólido */
        background: var(--bg); 
    }

    /* Garante que os botões e cards não fiquem invisíveis no fundo preto */
    body.alto-contraste .nav-item,
    body.alto-contraste .search,
    body.alto-contraste .news-item {
        background: #000000;
        border: 1px solid #ffffff;
    }

    body.alto-contraste .pill {
        border: 1px solid #ffffff;
    }

    /* =========================================
    TEMA CLARO (LIGHT MODE)
    ========================================= */
    body.light-mode {
        --bg: #f9fafb;         /* Fundo cinza bem claro */
        --text: #1f2937;       /* Texto cinza escuro/quase preto */
        --muted: #4b5563;      /* Textos secundários mais escuros */
        --brand: #16a34a;      /* Verde um pouco mais escuro para dar leitura no branco */
        --border: rgba(0, 0, 0, 0.15); /* Bordas cinzas */
        --shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        
        background: var(--bg); /* Remove aquele gradiente escuro do body */
    }

    /* Como o código original usou cores fixas nesses itens, precisamos forçar a mudança para o tema claro */
    body.light-mode .topbar {
        background: rgba(255, 255, 255, 0.85); /* Topo branco translúcido */
    }

    body.light-mode .card,
    body.light-mode .nav-item,
    body.light-mode .search,
    body.light-mode .news-item {
        background: #ffffff; /* Fundo branco para os elementos */
        color: var(--text);
    }

    body.light-mode .search-input {
        color: var(--text);
    }

    /* Remove a borda branca forte que colocamos no alto contraste, caso as classes se cruzem */
    body.light-mode .pill {
        background: rgba(0, 0, 0, 0.05);
        color: var(--text);
    }
```

### Código no JavaScript
```javascript
    'use strict'

    // -------------------------------------
    // MUDAR BACKGROUND E CONTRASTE


    const btnContrast = document.getElementById('btn-contrast');
    const btnLight = document.getElementById('btn-light');

    // Função do Tema Claro / Escuro
    btnLight.addEventListener('click', () => {
    // Liga/desliga a classe do modo claro
    document.body.classList.toggle('light-mode');
    // Garante que o alto contraste seja desligado
    document.body.classList.remove('alto-contraste');

    // Verifica se o modo claro está ativo para trocar o ícone
    if (document.body.classList.contains('light-mode')) {
        btnLight.textContent = '🌙'; // Muda o ícone para Lua
        btnLight.title = 'Tema Escuro';
    } else {
        btnLight.textContent = '☀️'; // Volta o ícone para Sol
        btnLight.title = 'Tema Claro';
    }
    });

    // Função do Alto Contraste
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
        document.body.classList.remove('light-mode');
        
        // Como saímos do modo claro, garantimos que o botão volte a mostrar o sol
        btnLight.textContent = '☀️';
        btnLight.title = 'Tema Claro';
    });

```
