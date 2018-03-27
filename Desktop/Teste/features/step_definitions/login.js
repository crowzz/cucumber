var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var chai = require('chai');
var expect = chai.expect;
var By = seleniumWebdriver.By;
var until = seleniumWebdriver.until;

defineSupportCode(function({Given, When, Then}) {
  Given('que eu estou na pagina de login da M2Corp homologação' , function() {
    return this.driver.get('http://homologacao.m2corp.com.br/');
  });

  Given('digito no campo Código da Empresa {string}', function(valor_empresa) {
    var driver = this.driver;
    var empresa = driver.findElement(By.css('input#enterprise_code'));
    empresa.click();
    empresa.sendKeys(valor_empresa);
    return driver.executeScript('document.getElementById("enterprise_code").blur()');
  });

  Given('digito no campo Usuário {string}', function(valor_email) {
    var driver = this.driver;
    var email = driver.findElement(By.css('input#email'));
    email.click();
    email.sendKeys(valor_email);
    return driver.executeScript('document.getElementById("email").blur()');
  });

  Given('digito no campo Senha {string}', function(valor_password) {
    var driver = this.driver;
    var password = driver.findElement(By.css('input#password'));
    password.click();
    password.sendKeys(valor_password);
    return driver.executeScript('document.getElementById("password").blur()');
  });

  When('clicar em Entrar', function() {
    var driver = this.driver;
    var entrar = driver.findElement(By.css('div[class="boxitem thumbnail"]'));
    return entrar.click();
  });

  Then  ('devo estar na pagina de empreendimento e encontrar {string}', function(string) {
    var driver = this.driver;
    return driver.getPageSource().then(function(codigofonte){
      codigofonte = codigofonte.replace(/\s/g,'');
      return expect(codigofonte).to.contain("MoinhodeVento");
    });
  });
});
