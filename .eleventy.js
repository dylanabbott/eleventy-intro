module.exports = (config) => {
	config.addWatchTarget('/.src/style');
	config.addPassthroughCopy('./src/style/');
	config.addPassthroughCopy('./src/admin');
	config.addPassthroughCopy('./src/js');
	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	};
};
