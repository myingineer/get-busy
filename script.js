// Calling the Button
const clickMeBtn = document.querySelector('.btn');

// Calling all the Displays in the HTML
const participantsDisplay = document.querySelector('.js-participants');
const typeDisplay = document.querySelector('.js-type');
const activityDisplay = document.querySelector('.js-activity');
const accessibilityDisplay = document.querySelector('.js-accessibility');
const priceDisplay = document.querySelector('.js-price');
const linkDisplay = document.querySelector('.js-link');

// The Api Url
const apiLink = "https://www.boredapi.com/api/activity";

// The error display
const errorDisplay = document.querySelector('.js-error-display');
// ****************************************************************


// This function uses setTimeout to remove the error after 2 seconds
function removeError() {
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 2000);
};



/*
    This function calls the API and displays it in its respective field
*/

async function generateBoredApi() {
    try {
        const request = await fetch(apiLink);
        let response = await request.json();
        participantsDisplay.innerText = response.participants;
        typeDisplay.innerText = response.type;
        activityDisplay.innerText = response.activity;
        accessibilityDisplay.innerText = response.accessibility;
        priceDisplay.innerText = response.price;
        linkDisplay.innerText = response.link;
    } catch (error) {
        errorDisplay.style.display = 'block';
        removeError();
    };
};


/*
    This button makes the function run and allows all the code to work
*/
clickMeBtn.addEventListener('click', () => {
    generateBoredApi();
});