exports.command = function clickWhenVisible( element ) {
    return this
        .waitForElementVisible( element )
        .click( element );
};
