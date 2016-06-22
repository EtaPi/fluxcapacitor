var express = require('express');
var mongoose = require('mongoose');

new Promise( ( resolve, reject ) => {
  mongoose.connect('mongodb://192.168.99.100:27017');

  db = mongoose.connection;
  db.on( 'error', () => {
    console.log( "error connecting to db" );
    console.error.bind( console, 'Connection failed.' ) ;
  });
  db.once( 'open', () => {
    console.log( "Connected to database." );
    resolve( mongoose );
  });
}).then( ( mongoose ) => {
  return new Promise( ( resolve, reject ) => {
    var app = express();

    require('./app.js')( app, mongoose );

    var server = app.listen( 8080, () => {
      console.log( "Server started." );
      resolve( server );
    });
  });
}).then( ( server ) => {
  server.on( 'close', () => {
    mongoose.disconnect();
  });
  server.on( 'error', () => {
    console.log( 'Error' );
  });
});
