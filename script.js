// Doer function (not a maker function)

function applyGoatMode(){
    // Select the body element
    const bodyElement = document.querySelector("body");
    console.log("this should be the body element", bodyElement);
    // Apply a class of ".goat-mode" to the body element
    bodyElement.classList.add("goat-mode");

    // Select ALL of the list items
    const listItems = document.querySelectorAll(".list-item")
    console.log("this should be ALL the list items", listItems);

    // Turn their background colors orange

    for(let i = 0; i < listItems.length; i++){
        listItems[i].classList.add("orange-background");
    }
}

applyGoatMode();