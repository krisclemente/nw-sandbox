module.exports = {
  'Page Object Demo test Google' : function (browser) {
      var googleHomePage = browser.page.googleHomePage();
      googleHomePage.navigate();
      googleHomePage.googleSearchFor('Night Watch');
      googleHomePage.verifySearchContains('Night Watch');
      browser.end();
  }
};
