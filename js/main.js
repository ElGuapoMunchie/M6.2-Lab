window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);

    // Listen for submit pushed
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', buttonWasClicked);
    }

}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

function buttonWasClicked() {
    const pressedButton = document.querySelector('input[name="button"]:checked');
    if (pressedButton) {
        if (pressedButton.value == "This is a bucket"){
            alert(pressedButton.value + "... Dear God.");
        } else {
            alert(pressedButton.value + "- No!");
        }
    } else {
        alert("Please select an option.");
    }
}
