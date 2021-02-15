
let client = require('coincap-api-v2')

export async function getResponse(query:string,params:string[]|[]){
	//Get data based on the query string and Parameters

	//example
	let price = await client.getPrice("BTC")

	return [price]

}
