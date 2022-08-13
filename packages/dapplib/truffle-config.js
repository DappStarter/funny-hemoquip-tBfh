require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture story crawl remember until install entire army gesture'; 
let testAccounts = [
"0x7fd83e6b2eb63d8d9121f9b20db0df13e98b802f4d32bff64d22df4271a7fd2b",
"0x4f83b1a1b5a1e5813dae2924dd6b5c8a5ad72fe9fc9711bdb23bed16ff1ac4a3",
"0x3b00a70b9faef407d88da58809413694117d67e9250c37918972fe4cd82262e0",
"0x7ce3daab04754bf1fc74e25e7cdb4995f5beff077f1f719f58bd867ab39ebd65",
"0x41ec94a4c2ce9b0c9cbc648e08554af9fc6e4ec1d083e44256d16e21ffd24571",
"0x87b7177728806f38c20ad511f7aba777c668c379236cd975a3b7607238c202af",
"0x9c474485004717456aa770bc962c5843b5ffbabaa5f6d7791cf4c4abc6e5ded4",
"0x14367de4ae2e265aff48d48cf42db6207c51e07ed18d6e9c8398d94879762c52",
"0x848f9c5fb676ec9bae2c1b58367d94772aef0d9a24d956020c29cb9975842227",
"0xab64372db8f76997d6a0d03e62bf17453ac7b9e7714bf9320119b8e2914967b9"
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
            version: '^0.8.0'
        }
    }
};

