const fs = require('fs');
const cheerio = require('cheerio');

function findEmptyAlt(htmlContent) {
    const $ = cheerio.load(htmlContent);
    const imgTags = $('img');

    let emptyAltCount = 0;
    imgTags.each(function() {
        const altAttribute = $(this).attr('alt');

        if (!altAttribute || altAttribute.trim() === '') {
            emptyAltCount++;
            console.log("Empty alt attribute found in: \n", $(this).toString(), '\n');
        }
    });

    return emptyAltCount;
}

// Read the JSX or React component file
fs.readFile('../Components/ThirdSection/ThirdSection.js', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    
    // Extract HTML content from JSX
    const htmlContent = data.match(/<div[^>]*>(.*?)<\/div>/gs);
    let totalEmptyAltCount = 0;
    htmlContent.forEach((content) => {
        totalEmptyAltCount += findEmptyAlt(content);
    });

    if (totalEmptyAltCount === 0) {
        console.log("No empty alt attributes found.");
    } else {
        console.log("Total empty alt attributes found:", totalEmptyAltCount);
    }
});
