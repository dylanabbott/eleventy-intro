module.exports = (config) => {
	config.addWatchTarget('/.src/style/style.css');
	config.addPassthroughCopy('./src/style/style.css');
	config.addPassthroughCopy('./src/admin');
	config.addPassthroughCopy('./src/js');
	config.addPassthroughCopy('./src/img');
	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	};
};
