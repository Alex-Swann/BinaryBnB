module.exports = function() {
  express: {
    port: 3000
  }
  switch(process.env.NODE_ENV) {
    case 'dev':
      return {
        host: 'localhost',
      	port: 28015,
      	db: 'BnB_dev'
      };

    default:
      return {
        host: 'localhost',
    	  port: 28015,
    	  db: 'BnB_test'
    };
  }
};
