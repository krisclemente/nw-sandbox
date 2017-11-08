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
                this.setValueWhenVisible( '@searchTextBar', string)
                    .clickWhenVisible( '@searchButton' )
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
