const { gql } = require('apollo-server');

const inventoryTypeDefs = gql`
    type Item {
        itemId: ID!
        itemName: String!
        itemDescription: String!
        itemSizes: [String]!
        itemPrice: Float!
        itemStock: Int!
        itemImage: String
    }

    input ItemInput{
        itemName: String!
        itemDescription: String!
        itemSizes: [String]!
        itemPrice: Float!
        itemStock: Int!
    }

    input ItemInputDelete{
        itemId: ID!
        itemName: String!
        itemDescription: String!
        itemSizes: [String]!
        itemPrice: Float!
        itemStock: Int!
    }

    extend type Query{
        itemById(itemId: String!): Item
        itemList(): [Item]
    }

    type Mutation{
        itemBuyed(itemStock: Int!): Item
        createItem(item: ItemInput!): Item
        deleteItem(item: ItemInputDelete!): Item
    }
`;

module.exports = inventoryTypeDefs;