const {merge} = require('webpack-merge')
const webpackConfig = require('@mirohq-internal/config/webpack/packages')

module.exports = () => {
	return merge(webpackConfig(__dirname), {})
}
