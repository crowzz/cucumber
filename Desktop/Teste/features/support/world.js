require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

  function CustonWorld(){
    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
  }

  defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
  })

  defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustonWorld);
  })
