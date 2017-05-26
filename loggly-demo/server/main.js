import '/imports/startup/server';

import loggly from 'loggly';

var client = loggly.createClient({
  "token": "2c887fce-7e90-44b3-accb-79c96d5d3255",
  "subdomain": "meteordemo",
  "auth": {
    "username": "my-username",
    "password": "my-password"
  },
  "tags": ["meteor", "loggly"],
});

Meteor.startup(function() {
  client.log('127.0.0.1 - Theres no place like home.  loggly-demo working.');
});