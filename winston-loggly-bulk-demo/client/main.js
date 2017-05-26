import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

//import { Winston } from 'meteor/awatson1978:winston-client';



Meteor.startup(function(){
  Winston.info("winston-client has started on the client!");
  render(renderRoutes(), document.getElementById('app'));
})

