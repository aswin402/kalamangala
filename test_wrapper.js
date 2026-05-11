const html = `<div>
<p>Common Problems Faced by Property Owners in Erode</p>
<p>Many individuals who own land in Erode start construction with excitement but soon face unexpected challenges. One of the most common issues is lack of clear planning. Some contractors begin work without proper drawings or cost estimation, leading to confusion midway through the project.</p>
</div>`;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(html);
const body = dom.window.document.body;

const blocks = Array.from(body.children);
console.log("Blocks length:", blocks.length);
if (blocks.length === 1) {
    console.log("Block tag name:", blocks[0].tagName);
    console.log("Block text length:", blocks[0].textContent.trim().length);
}
