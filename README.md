# Projeto base para aula de Acessibilidade

## Desafio 1 — Aumentar/Diminuir Fonte

Definir um tamanho inicial de fonte 

Criar dois botões:

A+ para aumentar a fonte:

A- para diminuir a fonte:

Ao clicar em A+:

Aumentar o valor do tamanho da fonte

Aplicar o novo tamanho ao body

Ao clicar em A-:

Diminuir o valor do tamanho da fonte

Aplicar o novo tamanho ao body

Definir limites mínimo e máximo para evitar fontes muito pequenas ou grandes.





## Objetivo
Melhorar a usabilidade para pessoas com baixa visão.

- [x] Escreva em um papel um algoritmo que permita aumentar ou diminuir o tamanho da letra conforme a preferência do usuário

### Requisitos
- Botão A+
- Botão A-
- Não quebrar layout
- Usar unidades relativas 


```javascript
 // ========= Fonte (baixa visão): persistência =========
   // Define uma chave constante que será usada no localStorage
// para salvar o estado do modo de alto contraste
const CONTRAST_KEY = "portal_contrast_v1"; 

// Pega o botão com id="contrast" no HTML
// Esse botão será usado para ativar/desativar o alto contraste
const contrastBtn = document.getElementById('contrast');

// Verifica no localStorage se o modo alto contraste estava ativado ("1")
// Se estiver, a variável high será true, senão false
let high = localStorage.getItem(CONTRAST_KEY) === "1";

// Função responsável por aplicar visualmente o contraste
function applyContrast(){

  // Adiciona ou remove a classe "high-contrast" do <html>
  // dependendo do valor booleano de high
  document.documentElement.classList.toggle('high-contrast', high);

  // Atualiza o atributo aria-pressed do botão
  // Isso melhora a acessibilidade (leitores de tela)
  // Se high for true, define como "true", senão "false"
  contrastBtn.setAttribute('aria-pressed', high ? 'true' : 'false');

  // Salva o estado atual no localStorage
  // "1" se estiver ativado, "0" se estiver desativado
  localStorage.setItem(CONTRAST_KEY, high ? "1" : "0");
}

// Executa a função assim que a página carrega
// Isso garante que o contraste salvo anteriormente seja aplicado
applyContrast();

// Adiciona um evento de clique no botão
// Quando clicar:
// 1. Inverte o valor de high (true vira false e vice-versa)
// 2. Aplica novamente o contraste
contrastBtn.addEventListener('click', () => { 
  high = !high; 
  applyContrast(); 
});

```
