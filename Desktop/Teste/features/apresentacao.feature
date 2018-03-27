# language: pt
Funcionalidade:
  Eu como Usuário
  Quero realizar uma busca no Google
  Para receber um resultado "Pelé"

  Cenário: Buscar um conteúdo no Google
    Dado que eu estou na página do google "https://www.google.com.br/?gws_rd=cr&dcr=0&ei=dWW6WtybGcHAwAS1367YAg"
    E Digito na busca "Rei do Futebol"
    Quando clico no botão
    Então encontro "Pelé"
