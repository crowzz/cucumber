var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var chai = require('chai');
var expect = chai.expect;
var By = seleniumWebdriver.By;
var until = seleniumWebdriver.until;

defineSupportCode(function({Given, When, Then}) {
  Given('que eu estou na página do google {string}', function(url){
    return this.driver.get(url);
  });

  Given('Digito na busca {string}', function(valor_parcela) {
    var driver = this.driver;
    var campo = driver.findElement(By.css('input[id="lst-ib"]'));
    campo.click();
    campo.sendKeys(valor_parcela);
    return driver.executeScript('document.getElementById("lst-ib").blur()');
  });

  When('clico no botão', function() {
    var driver = this.driver;
    var btn = driver.findElement(By.css('input[name="btnK"]'));
    return btn.click();
  });

  Then  ('encontro {string}', function(string) {
    var driver = this.driver;
    return driver.getPageSource().then(function(codigofonte){
      codigofonte = codigofonte.replace(/\s/g,'');
        return expect(codigofonte).to.contain("Pelé");
    });
  });

});
