// The first value is for PRODUCTION, the alternative for DEVELOPMENT

module.exports = {
  IP         			: process.env.HOST  			 || '0.0.0.0',
  PORT       			: process.env.PORT  			 || 1400,
  MONGODB_ADDON_URI     : process.env.MONGODB_ADDON_URI  || 'mongodb://localhost:27017/dbname'
};