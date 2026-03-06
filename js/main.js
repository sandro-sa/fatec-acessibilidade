'use strict'

// -------------------------------------------------
// AUMENTAR E DIMINUIR FONTE
// -------------------------------------------------

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

// -----------------------------------------------------------------------------
// FIM AUMENTAR E DIMINUIR FONTE
// -------------------------------------------------------------

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





