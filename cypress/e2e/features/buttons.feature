# language: pt

Funcionalidade: Validação dos botões interativos - DemoQA
    Descrição: Cenários voltados para validar o comportamento dos botões com diferentes tipos de clique

Contexto: Acessar a página dos botões
    Dado eu acesso a página de botões

Cenário: Validação do clique simples
    Quando eu clico no botão de clique simples
    Então o sistema deverá exibir a mensagem de sucesso do clique simples

Cenário: Validação do duplo clique
    Quando eu realizo um duplo clique no botão correspondente
    Então o sistema deverá exibir a mensagem de sucesso do duplo clique

Cenário: Validação do clique com botão direito
    Quando eu realizo um clique com o botão direito no botão correspondente
    Então o sistema deverá exibir a mensagem de sucesso do clique com botão direito

Esquema do Cenário: Validação de múltiplos cliques
    Quando eu realizo o tipo de clique <tipo>
    Então o sistema deverá exibir a mensagem <mensagem>

    Exemplos:
        | tipo            | mensagem                          |
        | "duplo clique"  | "You have done a double click"    |
        | "clique direito"| "You have done a right click"     |
        | "clique"        | "You have done a dynamic click"   |

Cenário: Validação da ausência de ação sem clique
    Quando eu acesso a página e não realizo nenhuma ação nos botões
    Então o sistema não deverá exibir nenhuma mensagem de sucesso
