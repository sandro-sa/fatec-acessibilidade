# Projeto base para aula de Acessibilidade
## Atividade 1
### Passo a passo para o Desafio 1 — Aumentar/Diminuir Fonte


- *Faça o fork do projeto em:*
	``` bash 
    https://github.com/sandro-sa/fatec-acessibilidade 
  ```
- *Copiando o projeto para o meu computador:*
  - No seu computador em meus documentos, crie um pasta de nome worksapce #Essa é uma boa pratica de organização de projetos
  - Dentro da pasta workspace cria um nova pasta de nome acessibilidade.
  - C:\Documentos\Workspace\Acessibilidade # Aqui temos o caminho para o diretório acessibilidade
  - Abra o terminal\bash\powershell neste diretório
	- Agora no seu navegador abra o seu GitHub no repositório fatec-acessibilidade **//Atenção aqui precisa ser seu o repositório, de outra pessoa não vai dar certo.**
	- No botão ``<>Code`` selecione ``HTTPS`` em seguida copie o link abaixo **//Não esqueça de selecionar HTTPS antes de copiar**
	- Agora de volta ao seu computador no terminal|bash|powershell na pasta acessibilidade digite.
     ```bash
       git clone COLE_O_LINK_COPIADO
     ````
	- Se você estive no bash ou powershell digite "ls" **//Esse comando lista os diretórios, se tudo estiver certo, deve estar ai o diretório fatec-acessibilidade**
	- Digite ``cd fatec-acessibilidade``  **//Esse comando faz você entra no diretório fatec-acessibilidade**
	- Dentro do diretório digite ``code .`` **//Esse comando abre o vscode no diretório fatec-acessibilidade  (Não esqueça do espaço e o ponto no comando)**
  -
 > Este comando lista todas as branches (Só deve aparecer a branch main) neste momento
  ```bash
    git branch -a
  ```
  - Crie uma branch com o nome atividade-1-fonte-aumentar-diminuir.
> Este comando cria a branch atividade-1-fonte-aumentar-diminuir e entra dentro dela para o desenvolvimento da atividade 1

  ```bash
	git checkout -b atividade-1-fonte-aumentar-diminuir
  ```
- Escreva o algoritmo no arquivo README.md.
- Adicionado as modificações na banch atividade-1-fonte-aumentar-diminuir
- 
> Este comando adiciona as modificações na branch que voce esta.
```bash
	git add .
```
- Vamos comitar o arquivo com o comando abaixo. O comite serve para saber o que foi feito neste alteração
```bash
	git commit -m "Melhorar a usabilidade para quem tem baixa visão"
```
- Agora vamos enviar as modificações para o repositorio on-line (GitHub)
```bash
	git push -u origin atividade-1-fonte-aumentar-diminuir
```
### Abra uma new issue para sugerir a melhoria.
- Copie a URL da sua branch fonte-aumentar-diminuir, vánavegue até o repositorio do professor, no canto direito no sinal de + clique em new issue, um modal va surgir clique em **Sugestão de melhoria** Preecher os campos, depois clique em create/criar
**OPCIONAL**
#### Colocar melhorias em codigo
- Se quiser fique a vontadade para tentar criar o script para implantar as melhorias, depois é so seguir os comandos abaixo para atualizar.
```bash
git add .
git commit -m "Melhorar a usabilidade para quem tem baixa visão codigo"
git push -u origin atividade-1-fonte-aumentar-diminuir
```

## Atividade 2
### Passo a passo para o Desafio  — Contraste
 > Este comando lista todas as branches (Deve aparecer aa branches main e fonte-aumentar-diminuir) neste momento
  ```bash
    git branch -a
  ```
  - Crie uma branch com o nome atividade-2-contraste.
> Este comando cria a branch atividade-2-contraste e entra dentro dela para desenvolver a atividade 1
  ```bash
	git checkout -b atividade-2-contraste
  ```
	- Escreva o algoritmo no arquivo README.md.
  > Escreva abaixo logo abaixo do fianl da atividade 1
  - Adicionado as modificações na banch atividade-2-contraste
> Este comando adiciona as modificações na branch que voce esta.
```bash
	git add .
```
- Vamos comitar o arquivo com o comando abaixo. O comite serve para saber o que foi feito neste atualização
```bash
	git commit -m "Melhorar a usabilidade para solução de contraste na tela"
```
- Agora vamos enviar as modificações para o repositorio on-line (GitHub)
```bash
	git push -u origin atividade-2-contraste
```
### Abra uma new issue para sugerir a melhoria.
- Copie a URL da sua branch atividade-2-contraste, vánavegue até o repositorio do professor, no canto direito no sinal de + clique em new issue, um modal va surgir clique em **Sugestão de melhoria** Preecher os campos, depois clique em create/criar
**OPCIONAL**
#### Colocar melhorias em codigo
- Se quiser fique a vontadade para tentar criar o script para implantar as melhorias, depois é so seguir os comandos abaixo para atualizar.
```bash
git add .
git commit -m "Melhorar a usabilidade para quem tem baixa visão codigo"
git push -u atividade-2-contraste
```


### DICAS EM VIDEO

- Configurar usuário Git e fazer fork no GitHub
 ```bash
https://www.youtube.com/watch?v=XR_-5ina1uo&list=PLEH2qNP53XGR2K2bngLRagsQIq5KlG7h5&index=2
```
- Criando uma copia para um repositorio git local, criar nova branch e enviar para no GitHub.
```bash
https://www.youtube.com/watch?v=2kLGCacycrU&list=PLEH2qNP53XGR2K2bngLRagsQIq5KlG7h5&index=3
```
- Criando uma nova issue
```bash
https://www.youtube.com/watch?v=13WN8wiATRc&list=PLEH2qNP53XGR2K2bngLRagsQIq5KlG7h5&index=4
```
