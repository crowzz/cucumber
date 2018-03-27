# language: pt
Funcionalidade: Realizar uma busca no Google
  Eu como usuário
  Quero realizar um cadastro de uma conta a receber
  Para que eu consiga cadastrar uma conta a receber

  Cenario: Cadastrar uma conta a receber
    Dado que estou na página da m2corp http://homologacao.m2corp.com.br/
    E no campo Código da Empresa 119
    E no campo Usuário admin
    E no campo Senha mdoiscorp17
    E acionar o botao Entrar
    E seleciono o Empreendimento
    E estou na tela de Cadastro de Contas a Receber
    E digito no campo Data de Emissão 08/11/2017
    E digito no campo Histórico "TESTE AUTOMATICO VERSÃO NUMERO 01 - Conta a Receber de forma automatizada utilizando o cucumber"
    E clico no botão Cliente
    E digito AA no campo de busca A
    E clico no Cliente Hadassa Marina Bárbara Barbosa
    E clico no plano de contas
    E digito A no campo de busca por nome de plano de contas
    E clico no primeiro plano de contas disponível
    E clico no botão de parcelas
    E digito no campo Data de Vencimento 30/11/2017
    E digito no campo Valor da Parcela 25000
    E digito no campo Número de Parcela 5
    E clico no botão confirmar parcelas
    Quando clicar em Salvar
    Então devo estar na pagina de listagem de contas a receber e encontrar "250,00"
