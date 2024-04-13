const fs = require('fs');
const cheerio = require('cheerio');




function findImagesWithoutAlt(htmlContent) {
    const $ = cheerio.load(htmlContent);
    const imgTags = $('img');

    let undefinedAltCount = 0;
    let emptyAltCount = 0;
    let issueLessImageTagCount = 0;

    imgTags.each(function () {
        const altAttribute = $(this).attr('alt');
        if (altAttribute === undefined) {
            undefinedAltCount++;
            console.log("Missing Alt attribute in image tag found in: \n", $(this).toString(), '\n');
        }
        else if (altAttribute !== undefined && (altAttribute.trim() === "" || altAttribute.trim() === " " || altAttribute.startsWith(" ") || altAttribute.trim() === '' || altAttribute.trim() === ' ' || altAttribute.startsWith(' '))) {
            emptyAltCount++;
            console.log("Empty Alt attribute in image tag found in: \n", $(this).toString(), '\n');
        }
        else {
            issueLessImageTagCount++;
            console.log("Issue less image tag found in: \n", $(this).toString(), '\n');
        }
    });

    return { undefinedAltCount, emptyAltCount, issueLessImageTagCount };
}

// Read the JSX or React component file
fs.readFile('../Components/ThirdSection/ThirdSection.js', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    // Extract HTML content from JSX
    const htmlContent = data.match(/<div[^>]*>(.*?)<\/div>/gs);
    let totalUndefinedAltCount = 0;
    let totalEmptyAltCount = 0;
    let totalIssueLessImageTagCount = 0;


    htmlContent.forEach((content) => {
        const { undefinedAltCount, emptyAltCount, issueLessImageTagCount } = findImagesWithoutAlt(content);
        totalUndefinedAltCount += undefinedAltCount;
        totalEmptyAltCount += emptyAltCount;
        totalIssueLessImageTagCount += issueLessImageTagCount;
    });

    if (totalUndefinedAltCount === 0 && totalEmptyAltCount === 0) {
        console.log("Total number of image tags that does not have alt attributes:", 0);
        console.log("Total number of image tags with empty alt attributes:", 0);
        console.log("Total number of image tags that are issue free:", 0);
    } else {
        console.log("Total number of image tags that does not have alt attributes:", totalUndefinedAltCount);
        console.log("Total number of image tags with empty alt attributes:", totalEmptyAltCount);
        console.log("Total number of image tags that are issue free:", totalIssueLessImageTagCount);
    }


});
