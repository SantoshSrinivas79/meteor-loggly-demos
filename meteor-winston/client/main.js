import { Meteor } from 'meteor/meteor';
import { Winston } from 'meteor/clinical:winston-browser-logging';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(function(){
  Winston.silly("Top of the morning to you!");
  Winston.debug("The current date is " + new Date());
  Winston.info("meteor-winston-client has started on the client!");
  
  render(renderRoutes(), document.getElementById('app'));
});

