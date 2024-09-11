const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "app",
            remotes: {
                blog: "blog_service@http://localhost:8001/remoteEntry.js",
                products: "product_service@http://localhost:8002/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}