const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (config) => {
	config.addWatchTarget('/.src/style/style.css');
	config.addPassthroughCopy('./src/style/style.css');
	config.addPassthroughCopy('./src/admin');
	config.addPassthroughCopy('./src/js');
	config.addPassthroughCopy('./src/img');
	config.addPlugin(pluginRss);
	config.addCollection('tagList', require('./src/js/getTagList.js'));
	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	};
};