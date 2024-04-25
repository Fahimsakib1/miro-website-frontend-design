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

            const { missingAltImages, emptyAltImages, specialCharAltImages, issueLessImageTags, emptyButtons, emptyAnchors, meaningLessTextInAnchors, meaningLessTextInButtons, imageCount, buttonCount, anchorCount, issueFreeButtons, issueFreeAnchors, emptyHrefInAnchors, invalidHrefAnchors } = findImagesWithoutAlt(htmlContent);



            // Print images related to each issue type
            console.log('\n');
            console.log(`############## Checked File Name: ${filePath} ############## `);

            console.log('\n');
            console.log('*********************** Image Summary ***********************');

            console.log("Missing Alt attribute in image tag found: ", missingAltImages.length);
            missingAltImages?.length > 0 && missingAltImages.forEach(imgTag => console.log(imgTag));

            console.log('\n');
            console.log("Empty Alt attribute in image tag found: ", emptyAltImages.length);
            emptyAltImages?.length > 0 && emptyAltImages.forEach(imgTag => console.log(imgTag));

            console.log('\n');
            console.log("Alt attribute contains special characters in image tag found: ", specialCharAltImages.length);
            specialCharAltImages?.length > 0 && specialCharAltImages.forEach(imgTag => console.log(imgTag));

            console.log('\n');
            console.log("Issue less image tag found: ", issueLessImageTags.length);
            issueLessImageTags?.length > 0 && issueLessImageTags.forEach(imgTag => console.log(imgTag));



            // Calculate performance percentage of Images
            const totalImages = imageCount;
            // const totalImages = missingAltImages.length + emptyAltImages.length + specialCharAltImages.length + issueLessImageTags.length;
            const issueFreeImages = issueLessImageTags.length;
            const totalIssues = totalImages - issueFreeImages;
            // const performancePercentageImages = ((issueFreeImages / totalImages) * 100).toFixed(2);
            let performancePercentageImages;
            if (totalImages > 0) {
                performancePercentageImages = ((issueLessImageTags.length / totalImages) * 100).toFixed(2) + '%';
            } else {
                performancePercentageImages = "Can't Calculate Performance as there is no Image";
            }
            // Print the total Image count of each issue type
            console.log('\n');
            console.log("Total Images Found: ", imageCount);
            console.log("Total missing alt attributes: ", missingAltImages.length);
            console.log("Total empty alt attributes: ", emptyAltImages.length);
            console.log("Total alt attributes with special characters: ", specialCharAltImages.length);
            console.log("Total issue less image tags: ", issueLessImageTags.length);
            console.log("Total", totalImages + " Images found and among them ", totalIssues + " Images have issues");
            console.log("Image Performance percentage:", performancePercentageImages);



            console.log('\n');
            const nullOrEmptyTextOrMissingAltImage = 'https://webaim.org/standards/wcag/checklist#sc1.1.1'
            const howToSolveThisIssue = 'https://www.w3.org/WAI/WCAG20/quickref/20160105/#text-equiv-all'
            if (missingAltImages.length > 0 || emptyAltImages.length > 0 || specialCharAltImages.length) {
                console.log('---------- WCAG Guidelines For Image Alt Attribute------------')
                console.log('Guidelines for null or empty or suspicious alt text: ', nullOrEmptyTextOrMissingAltImage)
                console.log('Guidelines for how to Meet 1.1.1 (Non-text Content): ', howToSolveThisIssue)
            }



            if (emptyButtons.length === 0 && meaningLessTextInButtons === 0) {
                console.log("There is no empty button and no anchor tag that contains no text in the code.");
            } else {
                console.log('\n');
                console.log('*********************** Button Summary ***********************');
                console.log("Total empty buttons or has no value text found:", emptyButtons.length);
                emptyButtons.map(singleButton => {
                    console.log(singleButton);
                });
                console.log('\n')
                console.log("Total meaning less texts in buttons found:", meaningLessTextInButtons.length);
                meaningLessTextInButtons.map(singleButton => {
                    console.log(singleButton);
                });
                console.log('\n')
                console.log("Total Issue Free Buttons:", issueFreeButtons.length);
                issueFreeButtons.map(singleButton => {
                    console.log(singleButton);
                });
            }

            // Calculate performance percentage of Buttons
            const totalButtons = buttonCount;
            // const totalButtonsWithIssues = emptyButtons.length + meaningLessTextInButtons.length;
            const totalButtonsWithIssues = totalButtons - issueFreeButtons.length;
            let performancePercentageButtons;
            if (totalButtons > 0) {
                performancePercentageButtons = ((issueFreeButtons.length / totalButtons) * 100).toFixed(2) + '%';
            } else {
                performancePercentageButtons = "Can't Calculate Performance as there is no button";
            }
            console.log('\n');
            console.log("Total Buttons Found: ", buttonCount);
            console.log("Total Issue Free Buttons: ", issueFreeButtons.length);
            console.log("Total", buttonCount + " Buttons found and among them ", totalButtonsWithIssues + " Buttons have issues");
            console.log("Buttons Performance percentage:", performancePercentageButtons);




            
            console.log('\n');
            const emptyButton1 = 'https://webaim.org/standards/wcag/checklist#sc2.4.4'
            const emptyButton2 = 'https://webaim.org/standards/wcag/checklist#sc1.1.1'
            const moreGuidelineButton = 'https://www.w3.org/WAI/perspective-videos/controls/'
            if (emptyButtons.length > 0 || meaningLessTextInButtons.length > 0) {
                console.log('---------- WCAG Guidelines For Button Text ------------')
                console.log('Guideline for empty text in button:', emptyButton1);
                console.log('Guideline 2 for button:', emptyButton2);
                console.log('More Guidelines for button:', moreGuidelineButton);
            }




            if (emptyAnchors.length === 0 && meaningLessTextInAnchors === 0) {
                console.log("There is no empty button and no anchor tag that contains no text in the code.");
            } else {
                console.log('\n')
                console.log('*********************** Anchor Summary ***********************');
                console.log("Total number of anchor tags with no text:", emptyAnchors.length);
                emptyAnchors.map(singleAnchor => {
                    console.log(singleAnchor);
                });
                console.log('\n')
                console.log("Total meaning less texts in anchor tag:", meaningLessTextInAnchors.length);
                meaningLessTextInAnchors.map(singleAnchor => {
                    console.log(singleAnchor);
                });
                console.log('\n')
                console.log("Total Anchors with No href or empty href:", emptyHrefInAnchors.length);
                emptyHrefInAnchors.map(singleAnchor => {
                    console.log(singleAnchor);
                });
                console.log('\n')
                console.log("Total Anchors with Invalid href:", invalidHrefAnchors.length);
                invalidHrefAnchors.map(singleAnchor => {
                    console.log(singleAnchor);
                });
                console.log('\n')
                console.log("Total Issue Free Anchor Tags:", issueFreeAnchors.length);
                issueFreeAnchors.map(singleAnchor => {
                    console.log(singleAnchor);
                });
            }


            // Calculate performance percentage of Anchors
            const totalAnchors = anchorCount;
            const totalAnchorsWithIssues = anchorCount - issueFreeAnchors.length;
            let performancePercentageAnchors;
            if (totalAnchors > 0) {
                performancePercentageAnchors = ((issueFreeAnchors.length / totalAnchors) * 100).toFixed(2) + '%';
            } else {
                performancePercentageAnchors = "Can't Calculate Performance as there is no anchor tag";
            }
            console.log('\n');
            console.log("Total Anchors Found: ", anchorCount);
            console.log("Total Issue Free Anchors: ", issueFreeAnchors.length);
            console.log("Total", anchorCount + " Anchors found and among them ", totalAnchorsWithIssues + " Anchors have issues");
            console.log("Anchors Performance percentage:", performancePercentageAnchors);


            console.log('\n');
            const anchorLinkGuideline = 'https://webaim.org/standards/wcag/checklist#sc2.4.4'
            const moreGuidelineLink = 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html'
            if(emptyAnchors.length > 0 || emptyHrefInAnchors.length > 0  || invalidHrefAnchors.length > 0 || meaningLessTextInAnchors.length > 0){
                console.log('---------- WCAG Guidelines For link ------------')
                console.log('Guideline for empty text in Link:', anchorLinkGuideline);
                console.log('More Guidelines for Link:', moreGuidelineLink);
            }
            



        }
    });
}




function findImagesWithoutAlt(htmlContent) {

    const $ = cheerio.load(htmlContent.join('')); // Join HTML content to form a single string
    const imgTags = $('img');

    let imageCount = 0;
    let missingAltImages = [];
    let emptyAltImages = [];
    let specialCharAltImages = [];
    let issueLessImageTags = [];


    const altRegex = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;

    imgTags.each(function () {
        imageCount++;
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
    let issueFreeButtons = []


    let anchorCount = 0;
    let emptyAnchors = [];
    let meaningLessTextInAnchors = [];
    let noHrefInAnchors = [];
    let emptyHrefInAnchors = [];
    let invalidHrefAnchors = [];
    let issueFreeAnchors = [];


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


    // anchorTags.each(function () {
    //     anchorCount++;
    //     const anchorText = $(this).text().trim();
    //     if (!anchorText) {
    //         emptyAnchors.push($(this).toString());
    //     }
    //     if (altRegexAnchor.test(anchorText.trim())) {
    //         meaningLessTextInAnchors.push($(this).toString());
    //     }
    //     if (!anchorText || altRegexAnchor.test(anchorText)) {
    //         // If anchor text is empty or contains meaningless regex text, skip
    //         return;
    //     }
    //     issueFreeAnchors.push($(this).toString());
    // });




    // anchorTags.each(function () {
    //     anchorCount++;
    //     const $anchor = $(this);
    //     const anchorText = $anchor.text().trim();
    //     const hrefAttribute = $anchor.attr('href');

    //     if (!anchorText) {
    //         emptyAnchors.push($anchor.toString());
    //     }
    //     if (altRegexAnchor.test(anchorText.trim())) {
    //         meaningLessTextInAnchors.push($anchor.toString());
    //     }
    //     if (!anchorText || altRegexAnchor.test(anchorText)) {
    //         return;
    //     }
    //     if (!hrefAttribute) {
    //         hrefMissingInAnchors.push($anchor.toString());
    //     }
    //     if (hrefAttribute.trim() === '') {
    //         emptyHrefInAnchors.push($anchor.toString());
    //     }
    //     issueFreeAnchors.push($anchor.toString());
    // });








    // anchorTags.each(function () {
    //     anchorCount++;
    //     const $anchor = $(this);
    //     const anchorText = $anchor.text().trim();
    //     const hrefAttribute = $anchor.attr('href');
    //     const specialCharRegex = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;
    //     if (!anchorText) {
    //         emptyAnchors.push($anchor.toString());
    //         return;
    //     }
    //     if (altRegexAnchor.test(anchorText.trim())) {
    //         meaningLessTextInAnchors.push($anchor.toString());
    //         return;
    //     }
    //     if (!hrefAttribute || hrefAttribute.trim() === '') {
    //         emptyHrefInAnchors.push($anchor.toString());
    //         return;
    //     }
    //     if ((!hrefAttribute || !/^https?:\/\/|^www\./i.test(hrefAttribute) || specialCharRegex.test(hrefAttribute)) || specialCharRegex.test(anchorText)) {
    //         invalidHrefAnchors.push($anchor.toString());
    //         return;
    //     }
    //     issueFreeAnchors.push($anchor.toString());
    // });











 //anchor tag er moddhe # thake check korbe and jodi anchor tag er moddhe image tag thake tahole check korbe with proper alt attribute
    anchorTags.each(function () {
        anchorCount++;
        const $anchor = $(this);
        const anchorText = $anchor.text().trim();
        const hrefAttribute = $anchor.attr('href');
        const specialCharRegex = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;
        const containsImage = $anchor.find('img').length > 0;
        if (hrefAttribute === '#') {
            if (!anchorText) {
                emptyAnchors.push($anchor.toString());
                return;
            }
            if (anchorText && specialCharRegex.test(anchorText)) {
                invalidHrefAnchors.push($anchor.toString());
                return;
            }
            issueFreeAnchors.push($anchor.toString());
            return;
        }
        if (containsImage) {
            const $imgTag = $anchor.find('img');
            const imgSrc = $imgTag.attr('src');
            const imgAlt = $imgTag.attr('alt');
            if (imgSrc && imgSrc.trim() !== '' && imgAlt && imgAlt.trim() !== '') {
                issueFreeAnchors.push($anchor.toString());
                return;
            }
        }
        if (!anchorText) {
            emptyAnchors.push($anchor.toString());
            return;
        }
        if (altRegexAnchor.test(anchorText.trim())) {
            meaningLessTextInAnchors.push($anchor.toString());
            return;
        }
        if (!hrefAttribute || hrefAttribute.trim() === '') {
            emptyHrefInAnchors.push($anchor.toString());
            return;
        }
        if ((!hrefAttribute || !/^https?:\/\/|^www\./i.test(hrefAttribute) || specialCharRegex.test(hrefAttribute)) || specialCharRegex.test(anchorText)) {
            invalidHrefAnchors.push($anchor.toString());
            return;
        }
        issueFreeAnchors.push($anchor.toString());
    });











    // Code for checking the form labels that are empty. Means no text in the form label 
    const forms = $('form');
    let totalForms = forms.length;
    console.log('\n')
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
    console.log("Total forms found:", totalForms.length);
    Object.keys(inputLabels).forEach(inputId => {
        const labelInfo = inputLabels[inputId];
        if (labelInfo.count > 1) {
            console.log(`Input label with ID "${inputId}" has multiple form labels associated with form ${labelInfo.forms.join(', ')}`);
        }
    });


    return { missingAltImages, emptyAltImages, specialCharAltImages, issueLessImageTags, emptyButtons, emptyAnchors, meaningLessTextInAnchors, meaningLessTextInButtons, imageCount, buttonCount, anchorCount, issueFreeButtons, issueFreeAnchors, emptyHrefInAnchors, invalidHrefAnchors }
}







// Start traversing from the root directory of your React app
traverseDirectory('../Components'); // Adjust the path as per your project structure
