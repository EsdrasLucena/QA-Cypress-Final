Feature: Login Biblioteca - DemoQA
  Descrição: Cenários para testar o preenchimento e validação do formulário de texto.

Background: Acessar a página da biblioteca
  Given eu acesso a página de login biblioteca

  
Scenario: Login com username criado anteriormente
  When eu preencha o campo username com "kaua"
  And eu preencha o campo password com "Kaua!0910"
  And eu clique Log in


Scenario: Login e Log out na conta
  When eu preencha o campo username com "kaua"
   And eu preencha o campo password com "Kaua!0910"
   And eu clique Log in
   And eu clique Log out
  

Scenario: Fazer login acessar a biblioteca e pesquisar um livro
  When eu preencha o campo username com "kaua"
  And eu preencha o campo password com "Kaua!0910"
  And eu clique Log in
  And eu acesso a loja
  And eu preencha o campo pesquisar com "javascript"

Scenario: Tentativa de Login com usuário e senha inexistentes
   When eu preencha o campo username com "AngeloProf"
   And eu preencha o campo password com "qaTeste@321"
   And eu clique Log in
   Then o acesso seja negado

Scenario: Submissão sem preencher nenhum campo
  When acessar a página novo usuário
  And eu clique registrar
  Then o sistema deve solicitar que os campos sejam preenchidos
