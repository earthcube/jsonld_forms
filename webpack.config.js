// webpack.config.js
const { VuetifyPlugin } = require('webpack-plugin-vuetify')
const webpack = require("webpack");

module.exports = {
    plugins: [
        new VuetifyPlugin({ autoImport: true }), // Enabled by default
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser",
        }),
    ],
    resolve: {
        alias: {
            vue: '@vue/compat'
        },
        fallback: {
            http:  false ,
            https:  false ,
            crypto:  false ,
            stream:  false ,
            os:  false ,
            url:  false ,
            assert:  false ,
            "path": false,
            "timers": false,
        },
    },
    module: {

        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        compatConfig: {
                            MODE: 2
                        }
                    }
                }
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            indentedSyntax: true // optional
                        },

                    },
                ],
            },
            { test: /\.csv$/, loader: 'dsv-loader' }
//             {
//                       test: /\.csv$/,
//                       loader: 'csv-loader',
//                       options: {
//                       //  dynamicTyping: true,
//                         header: true,
//                         skipEmptyLines: true
//                       }
//                     },
//             {
//                     test: /\.csv$/,
//                     use: : [
//                         { loader: 'csv-loader',
//                             options: {
//                               //dynamicTyping: true,
//                               header: true,
//                               skipEmptyLines: true
//                             }
//                         }
//                     ]
//                   }
        ],
    }
}
