---
tags: ['blogpost']
pageTitle: This is my Title 1
date: 2020-12-01T08:00:00-08:00
featuredImage: /img/handlebars.jpg
---

## My first Eleventy Post

{{ pageTitle }}

This is a paragraph of text. I'm editing it right meow!

It's not very exciting, _but that's OK._ this is just a test playground to get a few things up and running. **Hey oh!**

Let's go [somewhere else](http://www.google.com 'Google'). Do this using a link tag in HTML: `<a href="http://www.google.com" title="Google">`.

<pre class="lang-js">
<code>const blurObject = document.querySelector("h1");
function blurOnScroll() {
let fullHeight = document.body.offsetHeight - window.innerHeight;

let blurAmount =
(Math.abs(window.scrollY - fullHeight / 2) / fullHeight) * 10;
blurObject.style.filter = `blur( ${blurAmount}px)`;
}</code>
</pre>

<pre class="lang-css">
<code>body {
	background-color: #f9f9f9;
    color: #555555;
    font-family: portada, serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 1.5;
}</code>
</pre>

![handlebars]( {{ featuredImage }} "handlebars")

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend et nulla in ornare. Ut id nisi ac ipsum consequat ullamcorper lacinia eget mauris. Praesent lacinia urna quis porttitor varius. Aenean congue orci vehicula accumsan placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquam viverra dolor, a tristique turpis consectetur iaculis.

- Test
- Test 2
- Test 3

Vestibulum condimentum, elit sed bibendum molestie, velit metus vehicula lorem, nec finibus nulla sem et enim. Nullam posuere rutrum lectus nec elementum. Sed gravida dictum neque. Integer convallis auctor purus ac auctor.

1. Another Test
2. Hi!
3. Blah blah.

What does a blockquote look like?

> Pellentesque mollis id magna ut maximus. Praesent consequat accumsan odio, ut hendrerit quam iaculis at. Praesent pharetra nec turpis vel lobortis. Sed tristique, tellus sit amet ullamcorper suscipit, risus velit cursus velit, non euismod lectus erat vitae nibh. Duis ultricies urna non dui semper sagittis. Quisque facilisis cursus nibh, in dapibus mi vehicula et. Praesent egestas, lectus ac malesuada accumsan, diam magna tristique ligula, suscipit ultrices sapien erat at felis.
