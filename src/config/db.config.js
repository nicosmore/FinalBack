const envConfig = require('../../env.config');

module.exports = { 
  mongodb: {
    connectTo: (database) => `mongodb+srv://nicosmore:${envConfig.DB_NAME}@coder.3ctyud1.mongodb.net/${database}?retryWrites=true&w=majority`
  }  
  // Change here for your mongo atlas account's URI
}