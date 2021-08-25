const { gql } = require('apollo-server');

const paymentsTypeDefs = gql `

    type PurchaseData {
        id: ID!
        compraFecha: String!
        compraEstado: String!
    }

    input ShippingDataInput {
        nombre: String!
        ciudad: String! 
        departamento: String! 
        direccion: String! 
        celular: String! 
        email: String! 
    }

    type ShippingDataOutput {
        id: ID!
        nombre: String!
        ciudad: String! 
        departamento: String! 
        direccion: String! 
        celular: String! 
        email: String! 
        fechaEntrega: String
        compraId: ID!
    }

    input BillingDataInput {
        tipoDocumento: Int!
        numeroDocumento: String! 
        numeroCelular: String! 
        metodoPago: Int! 
        precioTotal: Float! 
    }

    type BillingDataOutput {
        id: ID!
        tipoDocumento: Int!
        numeroDocumento: String! 
        numeroCelular: String! 
        metodoPago: Int! 
        precioTotal: Float! 
        compraId: ID!
    }

    input CartItemsDataInput {
        productoId: ID!
        productoCantidad: Int!
        productoPrecioUnitario: Float!
        productoPrecioTotal: Float!        
    }

    type CartItemsDataOutput {
        id: ID!
        productoId: ID!
        productoCantidad: Int!
        productoPrecioUnitario: Float!
        productoPrecioTotal: Float!     
        compraId: ID!   
    }

    input PurchaseInput {
        informacionEnvio: ShippingDataInput!
        informacionFacturacion: BillingDataInput!
        informacionCarrito: [CartItemsDataInput!]!
    }

    type PurchaseOutput {
        informacionEnvio: ShippingDataOutput!
        informacionFacturacion: BillingDataOutput!
        informacionCarrito: [CartItemsDataOutput!]!
        informacionCompra: PurchaseData!
    }

    type Mutation {
        purchaseItems(purchaseInput: PurchaseInput!): PurchaseOutput
    }

    type Query {
        getPurchaseInfo(purchaseId: String!): PurchaseOutput
    }

`;

module.exports = paymentsTypeDefs;