import '/imports/startup/server';

import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  Logger.log("Loggly is loaded.");
});