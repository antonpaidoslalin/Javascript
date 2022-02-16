const HtmlWebpack = require ('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports={
    mode:'production',
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
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|tiff)$/,
                loader:'file-loader'
                
            }
        ]
    },
    optimization:{},
    plugins: [
         new HtmlWebpack({
             title:'O meu primeiro Webpack',
             template: './src/index.html'
         }),
         new MiniCssExtract({
             filename:'[name]-[fullhash].css',
             ignoreOrder:false
         }),
         new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            ],
          }),
    ]
}