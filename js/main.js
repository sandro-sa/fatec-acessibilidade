'use strict'

// Seleciona os botões
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');

// Seleciona o elemento raiz (para acessar as variáveis do :root)
const root = document.documentElement;

// Define o tamanho inicial da fonte (o mesmo que está no CSS)
let currentSize = 16;

// Função para aumentar a fonte
btnIncrease.addEventListener('click', () => {
  if (currentSize < 24) { // Cria um limite máximo para não quebrar o layout
    currentSize += 2;
    root.style.setProperty('--base-font', `${currentSize}px`);
  }
});

// Função para diminuir a fonte
btnDecrease.addEventListener('click', () => {
  if (currentSize > 12) { // Cria um limite mínimo para não ficar ilegível
    currentSize -= 2;
    root.style.setProperty('--base-font', `${currentSize}px`);
  }
});