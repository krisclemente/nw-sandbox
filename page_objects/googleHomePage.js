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
                this.waitForElementVisible( '@searchTextBar', 1000 )
                    .setValue( '@searchTextBar', string )
                    .waitForElementVisible( '@searchButton', 1000 )
                    .click( '@searchButton' )
                    .api.pause( 3000 );
            },
            verifySearchContains: function(string) {
                this.assert.containsText( '@searchResults', string );
            }
        }
    ]

};
