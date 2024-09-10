Feature: Login

    Funcionalidade para realizar Login

    Scenario Outline: "<cenario>"
        Given eu acesso a pagina home da aplicação
        When eu inserir meu username "<username>" e minha senha "<password>"
        And clicar no botão entrar
        Then tenho acesso "<mensagem>"

        Examples:
            | cenario           | username             | password  | mensagem    |
            | login com sucesso | admin@phptravels.com | demoadmin | com sucesso |