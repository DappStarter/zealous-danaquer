require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note muscle column gesture merry flock total'; 
let testAccounts = [
"0x343b75d8fa30cf0b8ba06fc635c2e2622f63f93d577cb26563e0138b1ec35a09",
"0x320dc9271a6bfff1d57a5b31c31a212e5785a4c3754d5809ad7bc0be7c82d3ea",
"0x3967c0a24aa48c6c838a240a17c44787b2266802b7c7666da90ca3953c638034",
"0x6a7e66ae33f4af45a8607f8add020938d6143855def874b0dcfcd129f79be605",
"0x2211a9afa74e7b3a382d819ce044b4f2215af8644d244fced7ece759aeacfc48",
"0xae76f4dd47446a25d4f442ab1408953338a89c335db0b038545a4e03841bb6e3",
"0x90e7764b093ce249bf8dce2619e0d66c479326bd787698b7d015dfe4db86c9a5",
"0x27562259eb35b0c5254aa5d6584fc826b4e0b37da1d4339f9b28d12fc6ad3211",
"0xf70f6a5b9b388799a59de13e7087d6fb2c08281ec324c5341a3ca16f4d7a898b",
"0x4b37a96e1e5655b96bd33b27fa3175021229ad7290f5dead28e4746fd90fe9eb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
