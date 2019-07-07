// Debug printout
//module.exports = async ({ config }) =>
//	console.dir(config.module.rules, { depth: null }) || config;
const webpackConfig = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
	const cssModuleRule = webpackConfig.module.rules
		.find(rule => rule.test.test('test.module.css'));

	config.module.rules.push(cssModuleRule);

	return config;
};
