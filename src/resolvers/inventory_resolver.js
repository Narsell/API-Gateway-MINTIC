const inventoryResolver = {
    Query: {
        itemById: async (_, {id}, {dataSources}) => {
            return dataSources.itemAPI.itemById(id);
        },
        itemList: async (_, __, {dataSources}) => {
            return dataSources.itemAPI.itemList();
        },
        stockByItem: async (_, {id, stock}, {dataSources}) => {
            console.log(id, stock)
            return dataSources.itemAPI.getStockById(id, stock);
        }
    },
    Mutation: {
        createItem: (_, {itemInput}, {dataSources}) => {
            return dataSources.itemAPI.createItem(itemInput)
        },
        deleteItem: (_, {id}, {dataSources}) => {
            return dataSources.itemAPI.deleteItem(id)
        },
        itemBuyed: (_, {id, stock}, {dataSources}) => {
            return dataSources.itemAPI.updateItem(id, stock)
        }
    }
};

module.exports = inventoryResolver;