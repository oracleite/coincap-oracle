

export const Config = {
    "title": "coin-gecko-basic",
    "public_key": process.env['ORACLE_PUBKEY'],
    "NODE_URL": "wss://"+process.env['ETH_NETWORK']+".infura.io/ws/v3/"+process.env['INFURA_API_KEY'],
    "mnemonic": process.env['ORACLE_SEED'],
    "STATUS_URL": "",
    "EndpointSchema": {
        "name": "(Oracles.cc) CoinGecko USDprice",
        "curve": [
            3,
            0,
            0,
            100000000,
            1000000000
        ],
        "broker": "",
        "md": "Provide asset price quoted in USD (resp in (INT) pennies)",
        "queryList": [
            {
                "query": "USD",
                "params": ['BTC'],
                "dynamic": false,
                "responseType": "[int]"
            }
        ]
    }
}
