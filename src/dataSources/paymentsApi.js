const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('.../server');

class PaymentsAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.payments_api_url;
    }

    async getPurchaseInfo(){
        return await this.get(`/purchase/id/${purchaseId}`);
    }

    async purchaseItems(){
        return await this.post('/purchase', { ... purchaseInput} );
    }

}

module.exports = PaymentsAPI;
