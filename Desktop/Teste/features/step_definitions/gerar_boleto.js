var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var chai = require('chai');
var expect = chai.expect;
var By = seleniumWebdriver.By;
var until = seleniumWebdriver.until;

defineSupportCode(function({Given, When, Then}) {
  Given('que eu estou na tela de login https://web.m2corp.com.br/' , function() {
    return this.driver.get('https://web.m2corp.com.br/');
  });

  Given('clico no campo Código da Empresa e digito {string}', function(valor_empresa) {
    var driver = this.driver;
    var empresa = driver.findElement(By.css('input#enterprise_code'));
    empresa.click();
    empresa.sendKeys(valor_empresa);
    return driver.executeScript('document.getElementById("enterprise_code").blur()');
  });

  Given('clico no campo Usuário e digito {string}', function(valor_email) {
    var driver = this.driver;
    var email = driver.findElement(By.css('input#email'));
    email.click();
    email.sendKeys(valor_email);
    return driver.executeScript('document.getElementById("email").blur()');
  });

  Given('clico no campo Senha e digito {string}', function(valor_password) {
    var driver = this.driver;
    var password = driver.findElement(By.css('input#password'));
    password.click();
    password.sendKeys(valor_password);
    return driver.executeScript('document.getElementById("password").blur()');
  });

  Given('clico no Entrar', function() {
    var driver = this.driver;
    var entrar = driver.findElement(By.css('button[class="bt-login btn btn-default"]'));
    return entrar.click();
  });

  Given('seleciono o empreendimento {string}', function(string) {
    var driver = this.driver;
    var empreendimento = driver.findElement(By.css('div[class="boxitem thumbnail"]'));
    return empreendimento.click();
  });

  Given('direciono para a tela de transferência de arquivos', function(){
    var driver = this.driver;
    return this.driver.get('https://web.m2corp.com.br/panel/log-levys/remessa');
  });

  Given('clico no botão visualizar remessa', function(){
    var driver = this.driver;
    var visualizar_remessa = driver.findElement(By.css('a[href="/panel/log-levys-plots/remessa/9"]'));
    return visualizar_remessa.click();
  });

  When('clicar no botão visualizar todos', function(){
    var driver = this.driver;
    var visualiar_todos = driver.findElement(By.css('span[class="glyphicon glyphicon-print"]'));
    return visualiar_todos.click();
  });

  Then('devo visualizar o PDF', function()  {
    var driver = this.driver;
    setTimeout(function(){
    return driver.getPageSource().then(function(codigofonte){
      codigofonte = codigofonte.replace(/\s/g,'');
        return expect(codigofonte).to.contain("pdf");
    });
  }, 30000);
  });
});
