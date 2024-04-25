const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');


// Function to recursively traverse through directories
function traverseDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            traverseDirectory(filePath);
        } else {
            processFile(filePath);
        }
    });
}

// Function to process each file
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        // Extract HTML content from JSX or HTML files
        const htmlContent = data.match(/<div[^>]*>(.*?)<\/div>/gs);
        if (htmlContent) {
            const missingAltImages = findImagesWithoutAlt(htmlContent);
            if (missingAltImages.length > 0) {
                console.log('\n');
                console.log(`File: ${filePath}`);
                console.log("Image tags without alt attributes found:");
                missingAltImages.forEach((imgTag, index) => {
                    console.log(`${index + 1}. ${imgTag}`);
                });
                console.log("Total image tags without alt attributes found:", missingAltImages.length);
                console.log();
            }
        }
    });
}








// Function to find images without alt attributes
function findImagesWithoutAlt(htmlContent) {
    const $ = cheerio.load(htmlContent.join('')); // Join HTML content to form a single string
    const imgTags = $('img');
    let missingAltImages = [];
    imgTags.each(function () {
        const altAttribute = $(this).attr('alt');
        if (!altAttribute || altAttribute.trim() === '') {
            missingAltImages.push($(this).toString());
        }
    });

    return missingAltImages;
}

// Start traversing from the root directory of your React app
traverseDirectory('../Components'); // Adjust the path as per your project structure
