
const Dotenv = require('dotenv-webpack');

module.exports = {

    plugins: [
    new Dotenv()
  ],


    resolve: {
        fallback: {
            "os": false,
            "crypto": false,
            "path": false,

        },
    },



    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};