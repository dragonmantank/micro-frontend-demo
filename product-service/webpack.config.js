const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "product_service",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductList": "./src/ProductList.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}