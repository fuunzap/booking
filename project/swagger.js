const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';

const endpoints = ['./routes/roomRoutes.js', './routes/guestRoutes.js', './routes/serviceRoutes.js', './routes/bookingRoutes.js', './routes/bookingServiceRoutes.js'];

const docSettings = {
  info: {
    title: 'Hotel Booking API',
    description: 'API documentation for hotel booking application',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
};

swaggerAutogen(outputFile, endpoints, docSettings);
