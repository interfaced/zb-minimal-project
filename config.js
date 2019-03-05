const path = require('path');

module.exports = () => ({
	project: {
		name: 'minimal',
		module: path.resolve(__dirname, 'app'),
		main: path.resolve(__dirname, 'app/application.js')
	}
});
