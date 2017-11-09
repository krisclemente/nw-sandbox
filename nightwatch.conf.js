const SELENIUM_HOST = process.env.SELENIUM_HOST || 'localhost';
const SELENIUM_PORT = process.env.SELENIUM_PORT || 4444;
module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "custom_commands",
  "custom_assertions_path" : "custom_assertions",
  "page_objects_path" : "page_objects",
  "globals_path" : "globals",

  "selenium" : {
    "start_process" : false,
    "server_path" : "bin/selenium-server-standalone-3.7.0.jar",
    "log_path" : false,
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : SELENIUM_PORT,
      "selenium_host"  : SELENIUM_HOST, 
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    }
  }
};
