module.exports = (config) => {
    config.addWatchTarget("/.src/style");
    config.addPassthroughCopy('./src/style/');
    config.addPassthroughCopy('')
	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	};
};
