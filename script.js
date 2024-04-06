// // Make the Spotify iframe draggable
// dragElement(document.querySelector('.spotify-wrapper'));

// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementById(elmnt.id + "-header")) {
//         // if present, the header is where you move the DIV from:
//         document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
//     } else {
//         // otherwise, move the DIV from anywhere inside the DIV:
//         elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }

//     function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }
window.onload = function() {
    // Get the image container
    const imageContainer = document.querySelector('.image-container');

    // Get the images and videos separately
    const images = Array.from(imageContainer.querySelectorAll('.gallery-image'));
    const videos = Array.from(imageContainer.querySelectorAll('.gallery-video'));

    // Shuffle images and videos separately
    const shuffledImages = shuffleArray(images);
    const shuffledVideos = shuffleArray(videos);

    // Merge shuffled images and videos alternately
    const shuffledItems = mergeArraysAlternately(shuffledImages, shuffledVideos);

    // Append shuffled items back to the container
    shuffledItems.forEach(item => imageContainer.appendChild(item));
};

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to merge arrays alternately
function mergeArraysAlternately(arr1, arr2) {
    const mergedArray = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        if (arr1[i]) mergedArray.push(arr1[i]);
        if (arr2[i]) mergedArray.push(arr2[i]);
    }
    return mergedArray;
}
