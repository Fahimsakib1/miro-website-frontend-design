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
    // Read the file content
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        // Extract HTML content from JSX or HTML files
        const htmlContent = data.match(/<div[^>]*>(.*?)<\/div>/gs);
        if (htmlContent) {

            const { missingAltImages, emptyAltImages, specialCharAltImages, issueLessImageTags, emptyButtons, emptyAnchors, meaningLessTextInAnchors, meaningLessTextInButtons, buttonCount, anchorCount, issueFreeButtons } = findImagesWithoutAlt(htmlContent);



            // Print images related to each issue type
            console.log('\n');
            console.log(`Checked File Name: ${filePath}`);

            console.log("Missing Alt attribute in image tag found: ", missingAltImages.length);
            missingAltImages?.length > 0 && missingAltImages.forEach(imgTag => console.log(imgTag));

            console.log("Empty Alt attribute in image tag found: ", emptyAltImages.length);
            emptyAltImages?.length > 0 && emptyAltImages.forEach(imgTag => console.log(imgTag));

            console.log("Alt attribute contains special characters in image tag found: ", specialCharAltImages.length);
            specialCharAltImages?.length > 0 && specialCharAltImages.forEach(imgTag => console.log(imgTag));

            console.log("Issue less image tag found: ", issueLessImageTags.length);
            issueLessImageTags?.length > 0 && issueLessImageTags.forEach(imgTag => console.log(imgTag));



            // Calculate performance percentage of Images
            const totalImages = missingAltImages.length + emptyAltImages.length + specialCharAltImages.length + issueLessImageTags.length;
            const issueFreeImages = issueLessImageTags.length;
            const totalIssues = totalImages - issueFreeImages;
            const performancePercentageImages = ((issueFreeImages / totalImages) * 100).toFixed(2);

            // Print the total Image count of each issue type
            console.log('\n');
            console.log("Total missing alt attributes: ", missingAltImages.length);
            console.log("Total empty alt attributes: ", emptyAltImages.length);
            console.log("Total alt attributes with special characters: ", specialCharAltImages.length);
            console.log("Total issue less image tags: ", issueLessImageTags.length);
            console.log("Total", totalImages + " Images found and among them ", totalIssues + " Images have issues");
            console.log("Image Performance percentage:", performancePercentageImages + "%");








            if (emptyButtons.length === 0 &&  meaningLessTextInButtons === 0 ) {
                console.log("There is no empty button and no anchor tag that contains no text in the code.");
            } else {
                console.log('\n')
                console.log("Total empty buttons found:", emptyButtons.length);
                emptyButtons.map(singleButton => {
                    console.log(singleButton);
                });
                console.log("Total meaning less texts in buttons found:", meaningLessTextInButtons.length);
                meaningLessTextInButtons.map(singleButton => {
                    console.log(singleButton);
                });
                console.log("Total Issue Free Buttons:", issueFreeButtons.length);
                issueFreeButtons.map(singleButton => {
                    console.log(singleButton);
                });
            }

            // Calculate performance percentage of Buttons
            const totalButtons = buttonCount;
            const totalButtonsWithIssues = emptyButtons.length + meaningLessTextInButtons.length;
            const totalIssueFreeButtons = buttonCount - totalButtonsWithIssues;
            const performancePercentageButtons = ((totalIssueFreeButtons / totalButtons) * 100).toFixed(2);
            console.log("Total Buttons Found: ", buttonCount);
            console.log("Total Issue Free Buttons: ", issueFreeButtons.length);
            console.log("Total", buttonCount + " Buttons found and among them ", totalButtonsWithIssues + " Buttons have issues");
            console.log("Buttons Performance percentage:", performancePercentageButtons + "%");





            if (emptyAnchors.length === 0 && meaningLessTextInAnchors === 0) {
                console.log("There is no empty button and no anchor tag that contains no text in the code.");
            } else {
                console.log('\n')
                console.log("Total number of anchor tags with no text found:", emptyAnchors.length);
                emptyAnchors.map(singleAnchor => {
                    console.log(singleAnchor);
                });
                console.log("Total meaning less texts in anchor tag found:", meaningLessTextInAnchors.length);
                meaningLessTextInAnchors.map(singleAnchor => {
                    console.log(singleAnchor);
                });
            }


            // Calculate performance percentage of Anchors
            const totalAnchors = anchorCount;
            const totalAnchorsWithIssues = emptyAnchors.length + meaningLessTextInAnchors.length;
            const totalIssueFreeAnchors = anchorCount - totalAnchorsWithIssues;
            const performancePercentageAnchors = ((totalIssueFreeAnchors / totalAnchors) * 100).toFixed(2);
            console.log("Total Anchors Found: ", anchorCount);
            console.log("Total", anchorCount + " Anchors found and among them ", totalAnchorsWithIssues + " Anchors have issues");
            console.log("Anchors Performance percentage:", performancePercentageAnchors + "%");



        }
    });
}




function findImagesWithoutAlt(htmlContent) {

    const $ = cheerio.load(htmlContent.join('')); // Join HTML content to form a single string
    const imgTags = $('img');

    let missingAltImages = [];
    let emptyAltImages = [];
    let specialCharAltImages = [];
    let issueLessImageTags = [];

    const altRegex = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;

    imgTags.each(function () {
        const altAttribute = $(this).attr('alt');
        if (altAttribute === undefined) {
            missingAltImages.push($(this).toString());
        } else if (!altAttribute.trim()) {
            emptyAltImages.push($(this).toString());
        } else if (altRegex.test(altAttribute.trim())) {
            specialCharAltImages.push($(this).toString());
        } else {
            issueLessImageTags.push($(this).toString());
        }
    });




    //For Button and Anchors
    const buttonTags = $('button');
    const anchorTags = $('a');

    let emptyButtons = [];
    let buttonCount = 0;
    let meaningLessTextInButtons = [];
    let issueFreeButtons = [];

    let emptyAnchors = [];
    let meaningLessTextInAnchors = [];
    let anchorCount = 0;


    const altRegexButton = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;
    const altRegexAnchor = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;




    // Code for checking the buttons and anchor tags that are empty. Means no text in the button and anchor tags
    buttonTags.each(function () {
        buttonCount++;
        const buttonText = $(this).text().trim();
        if (!buttonText) {
            emptyButtons.push($(this).toString());
        }
        if (altRegexButton.test(buttonText.trim())) {
            meaningLessTextInButtons.push($(this).toString());
        }
        if (!buttonText || altRegexButton.test(buttonText)) {
            // If button text is empty or contains meaningless regex text, skip
            return;
        }
        issueFreeButtons.push($(this).toString());
    });


    anchorTags.each(function () {
        anchorCount++;
        const anchorText = $(this).text().trim();
        if (!anchorText) {
            emptyAnchors.push($(this).toString());
        }
        if (altRegexAnchor.test(anchorText.trim())) {
            meaningLessTextInAnchors.push($(this).toString());
        }
    });






    // Code for checking the form labels that are empty. Means no text in the form label 
    const forms = $('form');
    let totalForms = forms.length;
    console.log('\n')
    console.log("Total forms found after checking:", totalForms);
    forms.each(function (index) {
        const form = $(this);
        const formLabels = form.find('label');
        let emptyLabels = [];
        formLabels.each(function () {
            const labelText = $(this).text().trim();
            if (!labelText) {
                emptyLabels.push($(this).toString());
            }
        });
        console.log('\n')
        console.log("************** Form " + (index + 1) + "  **************");
        if (emptyLabels.length === 0) {
            console.log("No empty labels found in this form.");
        } else {
            console.log("Total number of empty labels in this form found:", emptyLabels.length);
            emptyLabels.map(singleLabel => {
                console.log(singleLabel);
            });
        }
    });








    // Code for checking the multiple form labels.
    let inputLabels = {}; // Object to store input labels and associated form labels
    forms.each(function (index) {
        const form = $(this);
        const formLabels = form.find('label');
        const formInputs = form.find('input, select, textarea, option, fieldset');

        // Iterate through each form label
        formLabels.each(function () {
            const labelText = $(this).text().trim();
            if (!labelText) {
                // If label is empty, add it to the emptyLabels array
                const inputId = $(this).attr('for');
                if (inputId) {
                    // If input ID is present
                    if (!inputLabels[inputId]) {
                        // If input label is encountered for the first time
                        inputLabels[inputId] = {
                            count: 1,
                            forms: [index + 1]
                        };
                    } else {
                        // If input label is already encountered
                        inputLabels[inputId].count++;
                        if (!inputLabels[inputId].forms.includes(index + 1)) {
                            inputLabels[inputId].forms.push(index + 1);
                        }
                    }
                }
            }
        });
    });


    // console the results
    console.log('\n')
    console.log("Total forms found:", totalForms);
    Object.keys(inputLabels).forEach(inputId => {
        const labelInfo = inputLabels[inputId];
        if (labelInfo.count > 1) {
            console.log(`Input label with ID "${inputId}" has multiple form labels associated with form ${labelInfo.forms.join(', ')}`);
        }
    });




    // return { undefinedAltCount, emptyAltCount, issueLessImageTagCount, meaningLessTextInAltCount };
    return { missingAltImages, emptyAltImages, specialCharAltImages, issueLessImageTags, emptyButtons, emptyAnchors, meaningLessTextInAnchors, meaningLessTextInButtons, buttonCount, anchorCount, issueFreeButtons }
}







// Start traversing from the root directory of your React app
traverseDirectory('../Components'); // Adjust the path as per your project structure
