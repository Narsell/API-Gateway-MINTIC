const { gql } = require('apollo-server');

const paymentsTypeDefs = gql `

    type PurchaseData {
        id: ID!
        compraFecha: String!
        compraEstado: String!
    }

    type ShippingData {
        nombre: String!
        ciudad: String! 
        departamento: String! 
        direccion: String! 
        celular: String! 
        email: String! 
    }

    type BillingData {
        tipoDocumento: Int!
        numeroDocumento: String! 
        numeroCelular: String! 
        metodoPago: Int! 
        precioTotal: Float! 
      }

    type CartItemsData {
        productoId: ID!
        productoCantidad: Int!
        productoPrecioUnitario: Float!
        productoPrecioTotal: Float!        
    }

    type PurchaseInput {
        informacionEnvio: ShippingData!
        informacionFacturacion: BillingData!
        informacionCarrito: [CartItemsData!]!
    }

    type PurchaseOutput {
        informacionEnvio: ShippingData!
        informacionFacturacion: BillingData!
        informacionCarrito: [CartItemsData!]!
        informacionCompra: PurchaseData!
    }

    type Mutation {
        purchaseItems(purchaseInput: PurchaseInput!): PurchaseInput
    }

    type Query {
        getPurchaseInfo(purchaseId: String!): PurchaseOutput
    }

`;

module.exports = paymentsTypeDefs;