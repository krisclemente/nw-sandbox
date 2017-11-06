module.exports = {
  'Page Object Demo test Google' : function (browser) {
      var googleHomePage = browser.page.googleHomePage();
      googleHomePage.navigate()
        .googleSearchFor('Night Watch')
        .verifySearchContains('Night Watch');
      browser.end();
  }
};
