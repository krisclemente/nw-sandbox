"use strict"
module.exports = {
    url: 'http:/www.google.com',
    elements: {
        searchTextBar: '#lst-ib',
        searchButton: 'input[value="Google Search"]',
        searchResults: '#main'
    },
    commands: [
        {
            googleSearchFor: function(string) {
                this.waitForElementVisible( '@searchTextBar' )
                    .setValue( '@searchTextBar', string )
                    .waitForElementVisible( '@searchButton' )
                    .click( '@searchButton' )
                    .api.pause( 3000 );
                return this;
            },
            verifySearchContains: function(string) {
                this.assert.containsText( '@searchResults', string );
                return this;
            }
        }
    ]

};
