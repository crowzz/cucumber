# language: pt
Funcionalidade: Realizar uma busca no Google
  Eu como administrador
  Quero realizar login no sistema M2Corp na homologação
  Para que eu consiga acesso ao sistema M2Corp homologação como administrador

  Cenario: Fazer login como administrador em homologação
    E que eu estou na pagina de login da M2Corp homologação
    E digito no campo Código da Empresa 119
    E digito no campo Usuário admin
    E digito no campo Senha mdoiscorp17
    Quando clicar em Entrar
    Então devo estar na pagina de empreendimento e encontrar "Moinho de Vento"
