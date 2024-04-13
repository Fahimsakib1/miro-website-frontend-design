const fs = require('fs');
const cheerio = require('cheerio');

function findEmptyElements(htmlContent) {
    const $ = cheerio.load(htmlContent);
    const buttonTags = $('button');
    const anchorTags = $('a');
    const labelTags = $('label');

    let emptyButtons = [];
    let emptyAnchors = [];
    let emptyLabels = [];

    buttonTags.each(function() {
        const buttonText = $(this).text().trim();
        if (!buttonText) {
            emptyButtons.push($(this).toString());
        }
    });

    anchorTags.each(function() {
        const anchorText = $(this).text().trim();
        if (!anchorText) {
            emptyAnchors.push($(this).toString());
        }
    });

    labelTags.each(function() {
        const labelText = $(this).text().trim();
        if (!labelText) {
            emptyLabels.push($(this).toString());
        }
    });

    console.log("Empty buttons found:");
    console.log(emptyButtons);
    console.log("Total empty buttons found:", emptyButtons.length);

    console.log("Empty anchors found:");
    console.log(emptyAnchors);
    console.log("Total empty anchors found:", emptyAnchors.length);

    console.log("Empty labels found:");
    console.log(emptyLabels);
    console.log("Total empty labels found:", emptyLabels.length);
}

// Read the HTML file
fs.readFile('YourHTMLFile.html', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    findEmptyElements(data);
});
