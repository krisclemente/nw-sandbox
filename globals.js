module.exports = {
    beforeEach: function( browser, done ) {
        browser.url( 'about:blank', done );
    },
    afterEach: function( browser, done ) {
        browser.end(done);
    },

}
