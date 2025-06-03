Integrantes do grupo:
. Esdras Lucena
. Arsidney Martins
. Rodrigo Barbosa
. Kauã Madruga

. Site escolhido -> DemoQA
. Alterações no Package.json (Dependências do cucumber e cypress, caminhos para os steps no step_definitions)
. Alterações no cypress.config (Adição do specPattern: "**/*.feature")
. Instalação das extensões
. Padronização do código


Telas usadas:

. Text box (Rodrigo Barbosa)

	Cenários:
	.Preencher todos os campos com dados válidos e submeter
    .Submissão sem preencher nenhum 
    .Validar campo de e-mail com dado inválido
    .Envio apenas com nome e e-mail
	.Submissão com dados longos

. Radio button (Arsidney Martins)

	Cenários:
	.Selecionar "Yes" e verificar a resposta
	.Selecionar "Impressive" e verificar a resposta
	.Verificar que a opção "No" está desabilitada
	.Tentar clicar em "No" mesmo desabilitado
	.Verificar que nenhuma opção está selecionada inicialmente

. Buttons (Esdras Lucena)

	Cenários:
	.Validação do clique simples
	.Validação do duplo clique
	.Validação do clique com botão direito
	.Validação de múltiplos cliques
	.Validação da ausência de ação sem clique

. Form book store (Kauã Madruga)

	Cenários:
	.Login com username criado anteriormente
	.Login e Log out na conta
	.Fazer login acessar a biblioteca e pesquisar um livro (Javascript)
	.Tentativa de Login com usuário e senha inexistentes
	.Submit sem preencher nenhum campo