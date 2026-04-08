# Botão para ajuste de constraste
## 📌 Descrição
Foi adicionado um botão na interface do sistema, permitindo ao usuário alterar o constraste da página.

## 🎯 Objetivo
Melhorar a acessibilidade e usabilidade do sistema, permitindo que usuários ajustem o constraste da página conforme sua necessidade.

## 📝 Algoritmo 
**HTML:**
```
<button onclick="changeFont(1)">A+</button>
<button onclick="changeFont(-1)">A-</button>
<button onclick="toggleContrast()">Contraste</button>
```
* A+ → aumenta a fonte
* A- → diminui a fonte
* Contraste → ativa/desativa alto contraste

**CSS (controle da fonte):**
```
:root {
  --base-font: 16px;
}

html {
  font-size: var(--base-font);
}

:root.high-contrast {
  --bg: #000000;
  --text: #ffffff;
  --muted: #dddddd;
  --brand: #ffff00;
}
```
* ```--base-font``` controla o tamanho da fonte
* ```.high-contrast``` muda as cores para alto contraste

**JavaScript (lógica):**
```
let currentSize = 16;

function changeFont(action) {
  currentSize += action;

  if (currentSize < 12) currentSize = 12;
  if (currentSize > 24) currentSize = 24;

  document.documentElement.style.setProperty('--base-font', currentSize + 'px');
}

function toggleContrast() {
  document.documentElement.classList.toggle('high-contrast');
}
```
* ```let currentSize = 16;```
  * → Guarda o tamanho atual da fonte (começa em 16px)
  
* ```changeFont(action)```
  * → Função chamada pelos botões A+ e A-
  * → Recebe um valor (```1``` ou ```-1```)
Dentro dela:
  * Soma o valor ao tamanho atual
  * → aumenta ou diminui a fonte
  * Verifica limites:
  * → mínimo 12 e máximo 24
  *Atualiza a variável CSS --base-font
  * → isso muda o tamanho da fonte da página inteira

* ```toggleContrast()```
* → Alterna o modo de contraste
O que ela faz:
* Adiciona ou remove a classe ```high-contrast``` no HTML
* Quando a classe está ativa → cores mudam
* Quando remove → volta ao normal

## link para o projeto
https://github.com/luisi-dicarlo/fatec-acessibilidade/tree/atividade1

