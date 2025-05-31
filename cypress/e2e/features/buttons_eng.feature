Feature: Validação dos botões interativos - DemoQA
    Descrição: Cenários voltados para validar o comportamento dos botões com diferentes tipos de clique

Background: Acessar a página dos botões
    Given eu acesso a página de botões

Scenario: Validação do clique simples
    When eu clico no botão de clique simples
    Then o sistema deverá exibir a mensagem de sucesso do clique simples

Scenario: Validação do duplo clique
    When eu realizo um duplo clique no botão correspondente
    Then o sistema deverá exibir a mensagem de sucesso do duplo clique

Scenario: Validação do clique com botão direito
    When eu realizo um clique com o botão direito no botão correspondente
    Then o sistema deverá exibir a mensagem de sucesso do clique com botão direito

Scenario Outline: Validação de múltiplos cliques
    When eu realizo o tipo de clique <tipo>
    Then o sistema deverá exibir a mensagem <mensagem>

    Examples:
        | tipo            | mensagem                          |
        | "duplo clique"  | "You have done a double click"    |
        | "clique direito"| "You have done a right click"     |
        | "clique"        | "You have done a dynamic click"   |

Scenario: Validação da ausência de ação sem clique
    When eu acesso a página e não realizo nenhuma ação nos botões
    Then o sistema não deverá exibir nenhuma mensagem de sucesso

