const app = require('./app');
const config = require("./env.config");
const MongoContainer = require('./src/models/container/mongo.container');


const server = app.listen(config.PORT, async () => { 
  if(config.DATA_SOURCE === 'mongo') {
    MongoContainer.connect()
    .then(() => {
      console.log(`Connected to ${config.DATA_SOURCE} DB!`);     
    });
  }    
    console.log('Server is up and running on port: ',config.PORT);
});

server.on('error',(error) => {
  console.log('Error with the Server');
  console.log(error.message);
});