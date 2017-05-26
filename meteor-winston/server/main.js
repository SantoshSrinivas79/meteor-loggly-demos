import '/imports/startup/server';

import { Winston } from 'meteor/infinitedg:winston'
import { Winston_Loggly } from 'meteor/infinitedg:winston-loggly'

var options = {
  "level": "info",
  "subdomain": "meteordemo",
  "auth": {
   "username": "awatson1978",
   "password": "Dinosaur42"
  },
  "inputToken": "2c887fce-7e90-44b3-accb-79c96d5d3255",
  "json": true,
  "handleExceptions": true
  //"tags": ["infinitedg:winston-loggly", "winston", "meteor", "atmosphere"]
};


Winston.add(Winston_Loggly, options);

Meteor.startup(function(){
  Winston.log('info', "meteor-winston has started!");
});
