//Se llama al typedef (esquema) de cada submodulo
const inventoryTypeDefs = require('./inventory_type_def');

//Se unen
const schemasArrays = [inventoryTypeDefs];

//Se exportan
module.exports = schemasArrays; 