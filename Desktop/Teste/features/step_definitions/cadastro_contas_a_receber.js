var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var chai = require('chai');
var expect = chai.expect;
var By = seleniumWebdriver.By;
var until = seleniumWebdriver.until;

defineSupportCode(function({Given, When, Then}) {
  Given('que estou na página da m2corp {string}', function(url){
    return this.driver.get(url);
  });

  Given('no campo Código da Empresa {string}', function(valor_empresa){
    var driver = this.driver;
    var empresa = driver.findElement(By.css('input#enterprise_code'));
    empresa.click();
    empresa.sendKeys(valor_empresa);
    return driver.executeScript('document.getElementById("enterprise_code").blur()');
  });

  Given('no campo Usuário {string}', function(valor_email){
    var driver = this.driver;
    var email = driver.findElement(By.css('input#email'));
    email.click();
    email.sendKeys(valor_email);
    return driver.executeScript('document.getElementById("email").blur()');
  });

  Given('no campo Senha {string}', function(valor_password) {
    var driver = this.driver;
    var password = driver.findElement(By.css('input#password'));
    password.click();
    password.sendKeys(valor_password);
    return driver.executeScript('document.getElementById("password").blur()');
  });

  Given('acionar o botao Entrar', function() {
    var driver = this.driver;
    var entrar = driver.findElement(By.css('button[class="bt-login btn btn-default"]'));
    return entrar.click();
  });

  Given('seleciono o Empreendimento', function(){
    var driver = this.driver;
    var empreendimento = driver.findElement(By.css('div[class="boxitem thumbnail"]'));
    return empreendimento.click();
  });


  Given('estou na tela de Cadastro de Contas a Receber' , function() {
    return this.driver.get('http://homologacao.m2corp.com.br/panel/bills-to-receives/new');
  });


  Given('digito no campo Número de Documento {string}', function(valor_num_doc) {
    var driver = this.driver;
    var num_doc = driver.findElement(By.css('input#num_doc.form'));
    num_doc.click();
    num_doc.sendKeys(valor_num_doc);
    return driver.executeScript('document.getElementById("num_doc").blur()');
  });

  Given('digito no campo Data de Emissão {string}', function(valor_data_emissao) {
    var driver = this.driver;
    var data_emissao = driver.findElement(By.css('input#date_issue'));
    data_emissao.click();
    data_emissao.sendKeys(valor_data_emissao);
    return driver.executeScript('document.getElementById("date_issue").blur()');
  });

  Given('digito no campo Histórico {string}', function(valor_historico) {
    var driver = this.driver;
    var historico = driver.findElement(By.css('textarea#history'));
    historico.click();
    historico.sendKeys(valor_historico);
    return driver.executeScript('document.getElementById("history").blur()');
  });

  Given('clico no botão Cliente', function() {
    var driver = this.driver;
    var btn_cliente = driver.findElement(By.css('input[class="IconCliente btnSelPro trocaDiv"]'));
    return btn_cliente.click();
  });


  Given('digito AA no campo de busca {string}', function (valor_cliente) {
    var driver = this.driver;
    var cliente = driver.findElement(By.css('input#provider_search'));
    cliente.click();
    cliente.sendKeys(valor_cliente);
    return driver.executeScript('document.getElementById("provider_search").blur()');
  });

  Given('clico no Cliente Hadassa Marina Bárbara Barbosa' , function () {

    var driver = this.driver;
    var cliente = driver.findElement(By.css('a[class="btnSelecionar"]'));
    return cliente.click();
  });

  Given('clico no plano de contas', function() {
    var driver = this.driver;
    var btn_plan_cont = driver.findElement(By.css('input[class="IconCifrao btnSelPlan trocaDiv"]'));
    return btn_plan_cont.click();
  });

  Given('digito A no campo de busca por nome de plano de contas', function(valor_nome_plan_cont) {
    var driver = this.driver;
    var nome_plan_cont = driver.findElement(By.css('input#account_plan_search'));
    nome_plan_cont.click();
    nome_plan_cont.sendKeys(valor_nome_plan_cont);
    return driver.executeScript('document.getElementById("account_plan_search").blur()');
  });

  Given('clico no primeiro plano de contas disponível', function() {
    var driver = this.driver;
    var link_plan_cont = driver.findElement(By.css('a[class="btn btnSelecionar "]'));
    return link_plan_cont.click();
  });

  Given('clico no botão de parcelas', function() {
    var driver = this.driver;
    var btn_parc = driver.findElement(By.css('a[id="habilitar"]'));
    return btn_parc.click();
  });

  Given('digito no campo Data de Vencimento {string}', function(valor_data_venc) {
    var driver = this.driver;
    var data_venc = driver.findElement(By.css('input#dateVenc'));
    data_venc.click();
    data_venc.sendKeys(valor_data_venc);
    return driver.executeScript('document.getElementById("dateVenc").blur()');
  });

  Given('digito no campo Valor da Parcela {string}', function(valor_parcela) {
    var driver = this.driver;
    var parcela = driver.findElement(By.css('input#valueV'));
    parcela.click();
    parcela.sendKeys(valor_parcela);
    return driver.executeScript('document.getElementById("valueV").blur()');
  });

  Given('digito no campo Número de Parcela {string}', function(valor_num_parcela) {
    var driver = this.driver;
    var num_parcela = driver.findElement(By.css('input#numPlots'));
    num_parcela.click();
    num_parcela.sendKeys(valor_num_parcela);
    return driver.executeScript('document.getElementById("numPlots").blur()');
  });

  Given('clico no botão confirmar parcelas', function(){
    var driver = this.driver;
    var btn_confirmar_parcela = driver.findElement(By.css('button[class="submit_confirm input_search submit_autorizar pull-right savePlotsRecs"].blur()'));
    return btn_confirmar_parcela.click();
  });

  When('clicar em Salvar', function() {
    var driver = this.driver;
    var salvar = driver.findElement(By.css('input[class="submit_confirm salvarr"]'));
    return salvar.click();
  });

  Then  ('devo estar na pagina de listagem de contas a receber e encontrar {string}', function(string) {
    var driver = this.driver;
    return driver.getPageSource().then(function(codigofonte){
      codigofonte = codigofonte.replace(/\s/g,'');
        return expect(codigofonte).to.contain("25000");
    });
  });
});
