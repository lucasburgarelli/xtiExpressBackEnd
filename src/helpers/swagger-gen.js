const swaggergen = require('swagger-autogen')()

const outputFile = "../docs/swagger-doc.json"
const endpointsFiles = ['../app.js'];

swaggergen(outputFile, endpointsFiles)