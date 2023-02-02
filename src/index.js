const { config } = require('dotenv');
const server = require('./server');

config();
server.listen(process.env.PORT || EC2_SERVER);