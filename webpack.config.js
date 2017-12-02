const path = require("path")

module.exports = {
    entry: {
        sample1: "./dist/index.js"
    },
    output: { 
        filename: "[name].js",
        path: path.resolve("./www/js"),
        publicPath: "/js"
    },
    devServer: {
        contentBase: path.resolve("./www"),
        compress: true,
        hot: true,
        port: 5000
    }
};