module.exports = ( app, mongoose ) => {
  app.get('/', function( req, res ) {
    var jobSchema = mongoose.Schema( { name: String, job: String } );
    var Job = mongoose.model( 'people', jobSchema );

    Job.find( { 'name': 'Anthony' }, (err, jobs) => {
      res.send( jobs[0].job );
    });
  });
};
