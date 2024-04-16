const fs = require('fs');
const cheerio = require('cheerio');



function findEmptyButtonsAndEmptyAnchorLink(htmlContent) {

    const $ = cheerio.load(htmlContent);

    const buttonTags = $('button');
    const anchorTags = $('a');

    let emptyButtons = [];
    let emptyAnchors = [];
    let meaningLessTextInButtons = [];
    let meaningLessTextInAnchors = [];

    const altRegexButton = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;
    const altRegexAnchor = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;
    
    // Code for checking the buttons and anchor tags that are empty. Means no text in the button and anchor tags
    buttonTags.each(function () {
        const buttonText = $(this).text().trim();
        if (!buttonText) {
            emptyButtons.push($(this).toString());
        }
        if (altRegexButton.test(buttonText.trim())) {
            meaningLessTextInButtons.push($(this).toString());
        }
    });

    anchorTags.each(function () {
        const anchorText = $(this).text().trim();
        if (!anchorText) {
            emptyAnchors.push($(this).toString());
        }
        if (altRegexAnchor.test(anchorText.trim())) {
            meaningLessTextInAnchors.push($(this).toString());
        }
    });

    if (emptyButtons.length === 0 && emptyAnchors.length === 0 && meaningLessTextInButtons === 0 && meaningLessTextInAnchors === 0) {
        console.log("There is no empty button and no anchor tag that contains no text in the code.");
    } else {
        console.log('\n')
        console.log("Total empty buttons found:", emptyButtons.length);
        emptyButtons.map(singleButton => {
            console.log(singleButton);
        });
        console.log('\n')
        console.log("Total meaning less texts in buttons found:", meaningLessTextInButtons.length);
        meaningLessTextInButtons.map(singleButton => {
            console.log(singleButton);
        });
        console.log('\n')
        console.log("Total number of anchor tags with no text found:", emptyAnchors.length);
        emptyAnchors.map(singleAnchor => {
            console.log(singleAnchor);
        });
        console.log('\n')
        console.log("Total meaning less texts in anchor tag found:", meaningLessTextInAnchors.length);
        meaningLessTextInAnchors.map(singleAnchor => {
            console.log(singleAnchor);
        });
    }






    // Code for checking the form labels that are empty. Means no text in the form label 
    const forms = $('form');
    let totalForms = forms.length;
    console.log('\n')
    console.log("Total forms found in this code:", totalForms);
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


}






// function for checking the issues(Missing alt attribute, Empty alt attribute, Issue less alt attribute) with alt attributes of image tag
function findImagesWithoutAlt(htmlContent) {
    const $ = cheerio.load(htmlContent);
    const imgTags = $('img');
    let undefinedAltCount = 0;
    let emptyAltCount = 0;
    let issueLessImageTagCount = 0;
    let meaningLessTextInAltCount = 0;

    const altRegex = /^[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]+$/;

    imgTags.each(function () {
        console.log('\n')
        const altAttribute = $(this).attr('alt');
        if (altAttribute === undefined) {
            undefinedAltCount++;
            console.log("Missing Alt attribute in image tag found in: \n", $(this).toString(), '\n');
        }
        else if (altAttribute !== undefined && (altAttribute.trim() === "" || altAttribute.trim() === " " || altAttribute.trim() === '' || altAttribute.trim() === ' ')) {
            emptyAltCount++;
            console.log("Empty Alt attribute in image tag found in: \n", $(this).toString(), '\n');
        }
        else if (altRegex.test(altAttribute.trim())) {
            meaningLessTextInAltCount++;
            console.log("Alt attribute contains special characters in image tag found in: \n", $(this).toString(), '\n');
        }
        else {
            issueLessImageTagCount++;
            console.log("Issue less image tag found in: \n", $(this).toString(), '\n');
        }
    });
    return { undefinedAltCount, emptyAltCount, issueLessImageTagCount, meaningLessTextInAltCount };
}




// Read the file that we want to check accessibility issue
fs.readFile('../Components/PracticeForAccessibilityChecking/PracticeForAccessibilityChecking.js', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }


    // *************** coder for showing issues with alt attributes of image tags ***************

    // Extract HTML content from JSX
    const htmlContent = data.match(/<div[^>]*>(.*?)<\/div>/gs);
    let totalUndefinedAltCount = 0;
    let totalEmptyAltCount = 0;
    let totalIssueLessImageTagCount = 0;
    let totalMeaningLessTextInAltCount = 0;
    htmlContent.forEach((content) => {
        const { undefinedAltCount, emptyAltCount, issueLessImageTagCount, meaningLessTextInAltCount } = findImagesWithoutAlt(content);
        totalUndefinedAltCount += undefinedAltCount;
        totalEmptyAltCount += emptyAltCount;
        totalIssueLessImageTagCount += issueLessImageTagCount;
        totalMeaningLessTextInAltCount += meaningLessTextInAltCount;
    });
    if (totalUndefinedAltCount === 0 && totalEmptyAltCount === 0 && totalIssueLessImageTagCount === 0 && totalMeaningLessTextInAltCount === 0) {
        console.log("Total number of image tags that do not have alt attributes:", 0);
        console.log("Total number of image tags with empty alt attributes:", 0);
        console.log("Total number of image tags that are issue free:", 0);
        console.log("Total number of meaning less text in alt attributes:", 0);
    } else {
        console.log("Total number of image tags that do not have alt attributes:", totalUndefinedAltCount);
        console.log("Total number of image tags with empty alt attributes:", totalEmptyAltCount);
        console.log("Total number of image tags that are issue free:", totalIssueLessImageTagCount);
        console.log("Total number of meaning less text in alt attributes:", totalMeaningLessTextInAltCount);
    }

    // call the function for showing issues of buttons, anchor tags, form label 
    findEmptyButtonsAndEmptyAnchorLink(data);
});




























