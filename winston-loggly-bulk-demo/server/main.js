import '/imports/startup/server';

import winston from 'winston';

require('winston-loggly-bulk');

winston.add(winston.transports.Loggly, {
  token: "2c887fce-7e90-44b3-accb-79c96d5d3255",
  subdomain: "meteordemo",
  tags: ["winston-loggly-bulk-demo", "winston", "meteor"],
  json: true
});


Meteor.startup(function(){
  winston.log('info', "winston-loggly-bulk-demo has started!");
});
