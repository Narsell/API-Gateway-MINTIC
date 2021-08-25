const inventoryResolver = require('./inventory_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(inventoryResolver);

module.exports = resolvers;