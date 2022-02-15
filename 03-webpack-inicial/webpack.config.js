const HtmlWebpack = require ('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
module.exports={
    mode:'development',
    output:{
        clean:true
    },
    module : {
        rules:[{
                test:/\.html$/,
                loader: 'html-loader',
                options:{
                    sources: false
                }
            },
            {
                test:/\.css$/,
                exclude: /styles.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, loader]
            }
        ]
    },
    optimization:{},
    plugins: [
         new HtmlWebpack()
    ]
}