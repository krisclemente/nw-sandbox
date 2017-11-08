exports.assertion = function() {
    //The message which will be used in the test output and
    //inside the XML reports
    //type {string}
    this.message;
    //A value to perform the assertion on. If a function is
    //defined, its results will be used.
    //type {fucntion}
    this.expected;
    //The method which performs the action assertion. It is
    //called with the results of the value method as the argument.
    //type {fucntion}
    this.pass = function(value) {
    };
    //The method which returns the value to be used on the
    //assertion. It is called with the results of the command's
    //callback as argument.
    //type {fucntion}
    this.value = function(result) {
    };
    //Performs a protocol command/action and its result is
    //passed to the value method via the callback argument
    //type {fucntion}
    this.command = function(callback) {
      return this;
    };
};
