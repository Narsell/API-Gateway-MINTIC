const { RESTDataSource } = require('apollo-datasource-rest');
const { orderBy } = require('lodash');
const { type } = require('os');

const serverConfig = require('../server');

class ItemAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = serverConfig.inventory_api_url;
	}

	async itemById(id) {
		return await this.get(`/inventory/item/${id}`);
	}

	async itemList() {
		const response = await this.get(`/inventory/item`);
		return response.results;
	}

	async createItem(itemInput) {
		let item = new Object(JSON.parse(JSON.stringify( { ... itemInput})));
		console.log(type(item));
		return await this.post(`/inventory/item/`, item);
	}

	async updateItem(id, quantity) {
		const item = await this.get(`/inventory/item/${id}`);
		const condition = true ? item.stock >= quantity : false

		if (condition) {
			let newStockValue = item.stock - quantity;
			item.stock = newStockValue;

			let itemUpdated = new Object(JSON.parse(JSON.stringify(item)));

			console.log(type(itemUpdated))
			return await this.put(`/inventory/item/${id}`, itemUpdated)
		} else {
			return item
		}
	}

	async deleteItem(id) {
		await this.delete(`/inventory/item/${id}`);
		try {
			await this.get(`/inventory/item/${id}`);
			return false
		} catch (error) {
			return true
		}
	}

	async getStockById(id, quantity) {
		const item = await this.get(`/inventory/item/${id}`);
		return true
			? item.stock > quantity
			: false
	}

}

module.exports = ItemAPI;