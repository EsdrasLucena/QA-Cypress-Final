# language: pt

Funcionalidade: Login Biblioteca - DemoQA
  Descrição: Cenários para testar o preenchimento e validação do formulário de texto.

Contexto: Acessar a página da biblioteca
  Dado eu acesso a página de login biblioteca

  
Cenário: Login com username criado anteriormente
  Quando eu preencha o campo username com "kaua"
  E eu preencha o campo password com "Kaua!0910"
  E eu clique Log in


Cenário: Login e Log out na conta
  Quando eu preencha o campo username com "kaua"
   E eu preencha o campo password com "Kaua!0910"
   E eu clique Log in
   E eu clique Log out
  

Cenário: Fazer login acessar a biblioteca e pesquisar um livro
  Quando eu preencha o campo username com "kaua"
  E eu preencha o campo password com "Kaua!0910"
  E eu clique Log in
  E eu acesso a loja
  E eu preencha o campo pesquisar com "javascript"

Cenário: Tentativa de Login com usuário e senha inexistentes
   Quando eu preencha o campo username com "AngeloProf"
   E eu preencha o campo password com "qaTeste@321"
   E eu clique Log in
   Então o acesso seja negado

Cenário: Submissão sem preencher nenhum campo
  Quando acessar a página novo usuário
  E eu clique registrar
  Então o sistema deve solicitar que os campos sejam preenchidos
