const { gql } = require('apollo-server');

const inventoryTypeDefs = gql`
    type ItemOutput {
        id: Int!
        name: String!
        description: String!
        stock: Int!
        price: Float!
        size: [String]!        
        image: String!
    }

    input ItemInput{
        name: String!
        description: String!
        stock: Int!
        price: Float!
        size: [String]!
        image: String!
    }

    input ItemInputDelete{
        id: Int!
        name: String!
        description: String!
        size: [String]!
        price: Float!
        stock: Int!
    }

    type ItemAll{
        name: String!
        stock: Int!
        size: [String]!
        price: Float!
        image: String!
    }

    input GetStockByItem{
        id: Int!
        stock: Int!
    }

    type Query{
        itemById(id: Int!): ItemOutput!
        itemList: [ItemOutput]
        stockByItem(id: Int!, stock: Int!): Boolean!
    }

    type Mutation{
        itemBuyed(id: Int!, stock: Int!): ItemOutput!

        createItem(itemInput: ItemInput!): ItemOutput!

        deleteItem(id: Int!): Boolean!
    }
`;

module.exports = inventoryTypeDefs;