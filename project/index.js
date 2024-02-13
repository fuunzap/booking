const express = require('express');
const app = express();
const roomRoutes = require('./routes/roomRoutes');
const guestRoutes = require('./routes/guestRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const bookingServiceRoutes = require('./routes/bookingServiceRoutes');

const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

app.use(express.json());
app.use('/api', roomRoutes);
app.use('/api', guestRoutes);
app.use('/api', serviceRoutes);
app.use('/api', bookingRoutes);
app.use('/api', bookingServiceRoutes);

const options={
  definition:{
    openapi: "3.0.0",
    info:{
      title: "Library Example Express API with Swagger",
      version:"0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers:[
      {
        url: "http://localhost:3000/",
        description: 'Development server',
      },
    ],
  },
  apis:["./routes/*"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
