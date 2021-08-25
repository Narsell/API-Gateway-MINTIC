const lodash = require('lodash');
const inventoryResolver = require('./inventory_resolver');
const paymentsResolver = require('./paymentsResolver');

const resolvers = lodash.merge(
    paymentsResolver,
    inventoryResolver,
);

module.exports = resolvers;