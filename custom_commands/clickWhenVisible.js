exports.command = function clickWhenVisible( element , timeout ) {
    timeout = timeout || this.globals.waitForConditionTimeout;
    return this
        .waitForElementVisible( element, timeout )
        .click( element );
};
