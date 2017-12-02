module.exports = {
    entry: "./dist/index.js",
    output: { 
        filename: "./www/js/sample1.js" 
    },
    devServer: {
        contentBase: "./www",
        compress: true,
        watchContentBase: true,
        hot: true,
        port: 5000
    }
};