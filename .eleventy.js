const pluginRss = require('@11ty/eleventy-plugin-rss');
const Image = require('@11ty/eleventy-img');
const embedTwitter = require('eleventy-plugin-embed-twitter');
const embedInstagram = require('eleventy-plugin-embed-instagram');
const embedEverything = require('eleventy-plugin-embed-everything');
const moment = require('moment');

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
	config.addPassthroughCopy('./src/style/style.css.map');
	config.addPassthroughCopy('./src/admin');
	config.addPassthroughCopy('./src/js');
	//config.addPassthroughCopy('./src/img');
	config.addPlugin(pluginRss);
	config.addPlugin(embedTwitter);
	config.addPlugin(embedInstagram);
	config.addPlugin(embedEverything, {
		use: ['instagram', 'spotify', 'twitter', 'youtube']
	});
	config.addNunjucksFilter("toUTCString", (date) => {
		const utc = date.toUTCString();
		return moment.utc(utc).format("MMMM Do YYYY");
		});
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
