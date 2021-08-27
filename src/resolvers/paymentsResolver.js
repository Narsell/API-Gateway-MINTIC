const paymentsResolver = {

    Query: {
        getPurchaseInfo: (parent, { purchaseId }, { dataSources }) => {
            return dataSources.paymentsAPI.getPurchaseInfo(purchaseId);
        },
    },
    Mutation: {
        purchaseItems: (parent, { purchaseInput }, { dataSources }) => {
            return dataSources.paymentsAPI.purchaseItems(purchaseInput);
        },
    } 

}

module.exports = paymentsResolver;