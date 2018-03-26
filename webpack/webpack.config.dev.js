var path = require("path");
var webpack = require("webpack");

var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});


module.exports = {
	context: path.resolve(process.cwd(), "src"),
	entry: [
        'react-hot-loader/patch',        
		'../src/index.js'
    ],

	output: {
		filename: "[name].js",
        path: path.resolve(process.cwd(), "dist")
    	},

	resolve: {
		extensions: [".js", ".jsx"]
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		devFlagPlugin
	],
	module: {
		rules: [
			{
                test: /\.html$/,
                use: {
                    loader: "file?name=[name].[ext]",
                }
			},
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            }
		]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
	devServer: {
		inline: true,
		port: 8080,
		hot: true
	}
};