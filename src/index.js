const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const PaymentsAPI = require('./dataSources/paymentsApi');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        paymentsAPI: new PaymentsAPI()
    }),
    introspection: true,
    playground: true

});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});