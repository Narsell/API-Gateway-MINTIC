const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ItemAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.inventory_api_url;    
  }

  async itemById(itemId){
      return await this.get(`/inventory/item/${itemId}`);
  }

  async itemList(){
      return await this.get(`/`);
  }

  async createItem(item){
      item = new Object(JSON.parse(JSON.stringify(item)));
      return await this.post(`/inventory/item`, item);
  }

  async deleteItem(item){
      return await this.delete(`/inventory/item/${item.id}`, JSON.stringify(item), {headers: {'Content-Type': 'application/json'}});
  }
}

module.exports = ItemAPI;