const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: "blog_service",
            filename: "remoteEntry.js",
            exposes: {
                "./Blog": "./src/Blog.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}