// Create a new mutation observer
const observer = new MutationObserver(function (mutationsList, observer) {
    // Check each mutation that occurred
    for (let mutation of mutationsList) {
        // Check if the mutation added any nodes
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if the added node is a button with the text 'Upgrade'
            const buttons = document.getElementsByTagName('button');
            for (let button of buttons) {
                if (button.textContent.trim() === 'Upgrade') {
                    console.log('Buttons removed');
                    button.style.display = 'none';
                }
            }
        }
    }
});

// Observe changes to the body element. It has to be done this way because the button is 
// dynamically added to the DOM and is not present when the page is loaded.
observer.observe(document.body, { childList: true, subtree: true });
