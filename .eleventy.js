module.exports = (config) => {
    config.addWatchTarget("/.src/style");
    config.addPassthroughCopy('./src/style/');
	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	};
};
