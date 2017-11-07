module.exports = {
    beforeEach: function( browser ) {
        browser.url('about:blank')
            .maximizeWindow();
    },
    afterEach: function( browser, done ) {
        browser.end();
        done();
    },
    'Loot Crate - Hooks and Custom Comands' : function (browser) {
        var googleHomePage = browser.page.googleHomePage();
        googleHomePage.navigate()
            .googleSearchFor('Night Watch')
            .verifySearchContains('Night Watch');
    }
};
