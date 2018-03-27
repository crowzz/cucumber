# language: pt
Funcionalidade: Gerar boletos em grupo
  Eu como administrador
  Quero realizar login no sistema M2Corp na prudução
  Para que eu consiga imprimir boletos de uma remessa

  Cenario: Imprimir boletos em lote
    Dado que eu estou na tela de login https://web.m2corp.com.br/
    E clico no campo Código da Empresa e digito 129
    E clico no campo Usuário e digito admin
    E clico no campo Senha e digito mdoiscorp17
    E clico no Entrar
    E seleciono o empreendimento "COMERCIAL"
    E direciono para a tela de transferência de arquivos
    E clico no botão visualizar remessa
    Quando clicar no botão visualizar todos
    Então devo visualizar o PDF
