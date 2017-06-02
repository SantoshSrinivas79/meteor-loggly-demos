# meteor-loggly-demos  

The following represents a survey of the state of logging packages in the Meteor ecosystem (June, 2017)


#### miktam-loggly  

```sh
# atmosphere packages
miktam:loggly  
```

_pros_  
Simplest library to use to get Loggly support on both client/server.  Configuration is done via Meteor.settings file. Isomorphic API.  Echos logs to server/browser console.

_cons_  
Requires Meteor/Atmosphere package infrastructure.  


#### meteor-winston  

```sh
# atmosphere packages
clinical:winston-browser-logging
infinitedg:winston-loggly
infinitedg:winston
```

_pros_  
The oldest Winston/Loggly integration, with support for isomorphic APIs, browser side logging, and a complete Winston infrastructure.  

_cons_  
Nonstandard capitalization and naming conventions.  Requires multiple packages. Has overhead of Winston transport infrastructure. Requires Meteor/Atmosphere package infrastructure & bundling.  Wrapped NPM packages cause delays in upgrades.  Uses globals.  


#### winston-loggly-bulk-demo  

```sh
# npm packages
"winston": "^2.3.1"
"winston-loggly-bulk": "^1.4.2"

# atmosphere packages
clinical:winston-browser-logging
```

_pros_  
Loggly recommended implementation for Node.js apps.  Echos to server console.  Bulk logging.  Isomorphic API.  

_cons_  
Doesn't support browser side logging.  


#### loggly-demo  

```sh
# npm packages
"loggly": "^1.1.1"
```

_pros_  
Cleanest NPM integration with the best ES2015 support.  

_cons_  
No support for logging from the client. Logging doesn't echo to the server console.  Doesn't use globals.  Very secure.  The default loggly npm package is very quiet; and basically acts as a background process to securely get server events from your app to the Loggly servers.  






