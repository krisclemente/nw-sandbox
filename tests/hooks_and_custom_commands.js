module.exports = {
    'Loot Crate - Hooks and Custom Comands' : function (browser) {
        browser.page.googleHomePage().navigate()
            .googleSearchFor('Night Watch')
            .verifySearchContains('Night Watch');
    }
};
