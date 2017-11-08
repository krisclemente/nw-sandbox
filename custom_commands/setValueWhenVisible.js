exports.command = function setValueWhenVisible( element , text ) {
    return this
        .waitForElementVisible( element )
        .setValue( element, text );
}
