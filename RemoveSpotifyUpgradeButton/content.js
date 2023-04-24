// Create a new mutation observer
const observer = new MutationObserver(function (mutationsList, observer) {
    // Search via class name so that the script will work in other languages
    const upgradeButtonClasses = ["Button-sc-y0gtbx-0", "iVrvaH", "Upqw01TOXETOmR5Td7Dj"]
    // Check each mutation that occurred
    for (let mutation of mutationsList) {
        // Check if the mutation added any nodes
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if the added node is a button with the text 'Upgrade'
            const buttons = document.getElementsByTagName('button');
            for (let button of buttons) {
                if (button.textContent.trim() === 'Upgrade') {
                    // Cant delete the button directly because it will cause an error
                    button.style.display = 'none';
                }
                // if any of the upgrade button classes are in the button's class list, hide it
                for (let upgradeButtonClass of upgradeButtonClasses) {
                    if (button.classList.contains(upgradeButtonClass)) {
                        button.style.display = 'none';
                        break;
                    }
                }
            }
        }
    }
});

// Observe changes to the body element. It has to be done this way because the button is 
// dynamically added to the DOM and is not present when the page is loaded.
observer.observe(document.body, { childList: true, subtree: true });
