const pluginRss = require('@11ty/eleventy-plugin-rss');
const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt, sizes) {
	let metadata = await Image(src, {
		widths: [300, 600],
		formats: ['jpeg'],
		outputDir: './_site/img/'
	});

	let imageAttributes = {
		alt,
		sizes,
		loading: 'lazy',
		decoding: 'async',
	};

	return Image.generateHTML(metadata, imageAttributes);
}

module.exports = (config) => {
	//markdownTemplateEngine: 'njk';
	config.addWatchTarget('./src/style/style.css');
	config.addPassthroughCopy('./src/style/style.css');
	config.addPassthroughCopy('./src/admin');
	config.addPassthroughCopy('./src/js');
	//config.addPassthroughCopy('./src/img');
	config.addPlugin(pluginRss);
	config.addNunjucksAsyncShortcode('image', imageShortcode);
	config.addLiquidShortcode('image', imageShortcode);
	config.addJavaScriptFunction('image', imageShortcode);
	config.addCollection('tagList', require('./src/js/getTagList.js'));
	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	};
};
