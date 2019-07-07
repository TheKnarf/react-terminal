const postcssNormalize = require('postcss-normalize'),
		HtmlWebpackPlugin = require('html-webpack-plugin');

const cssModuleRule  = {
	test: /\.module\.css$/i,
	exclude: /node_modules/,
	use: [
		'style-loader',
		{ loader: 'css-loader', options: { modules: true } },
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: () => [
					require('postcss-flexbugs-fixes'),
					require('postcss-preset-env')({
						autoprefixer: {
							flexbox: 'no-2009',
						},
						stage: 3,
					}),
					postcssNormalize(),
				],
				sourceMap: true,
			}
		}
	]
};

module.exports = {
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			cssModuleRule
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};
