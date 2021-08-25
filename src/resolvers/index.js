const lodash = require('lodash');
const paymentsResolver = require('./paymentsResolver');

const resolvers = lodash.merge(
    paymentsResolver
);

module.exports = resolvers;