const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const checkStock = async ({ req }) => {

    const items = req.body.variables.purchaseItemsPurchaseInput.informacionCarrito;
    const tempMock = 'https://stoplight.io/mocks/narselldev/test/19564420';

    for (const item of items) {

        producto = {
            id: item.productoId,
            quantity: item.productoCantidad
        }

        let requestOptions = {
            method: 'POST', 
            headers: { 
                "Content-Type": "application/json" 
                }, 
            body: JSON.stringify({ producto }), 
            redirect: 'follow' 
        };

        try {

            let response = await fetch(`${tempMock}/stock`, requestOptions);
            if(response.status != 200)
                throw new ApolloError(`INVENTORY ERROR:${response.status}`, response.status); 

            return { stock: (await response.json()).stock };

        } catch (e) {
            throw new ApolloError(`INVENTORY ERROR: ${e}`, 500); 
        }

    }

}

module.exports = checkStock;