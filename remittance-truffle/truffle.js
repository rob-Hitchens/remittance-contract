module.exports = {
    build: "./node_modules/.bin/webpack",
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 500000
        }
    }
};
