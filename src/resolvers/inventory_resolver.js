const inventoryResolver = {
    Query: {
        itemById: (parent, {itemId}, {dataSources, id}) => {
            if(itemId == id)
                return dataSources.itemAPI.itemById(id)
            else
                return null
        },
        itemList: (parent) =>{
            return dataSources.itemAPI.itemList()
        }
    },
    Mutation: {
        createItem: (parent, {item}, {dataSources}) => {
            
            return dataSources.itemAPI.createItem(item)
        },
        deleteItem: (parent, {item}, {dataSources}) => {
            if(item == dataSources.item)
                return dataSources.itemAPI.deleteItem(item)
            else
                return null
        }
    }
};

module.exports = inventoryResolver;