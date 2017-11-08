exports.command = function setValueWhenVisible( element , text, timeout ) {
    timeout = timeout || this.globals.waitForConditionTimeout;
    return this
        .waitForElementVisible( element, timeout )
        .setValue( element, text );
}
