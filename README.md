# take-home

This project is an interactive photo gallery built as part of the COA Taskforce Take Home Challenge. The gallery features a responsive design, image thumbnail navigation, full-size image viewing, and hover interactions based on the Figma designs provided.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Coding Challenges](#coding-challenges)
  - [Array Manipulation](#array-manipulation-arraymapjs)
  - [String Transformation](#string-transformation-stringtransformjs)
- [Contributing](#contributing)


## Project Overview

The Interactive Photo Gallery is designed to be visually appealing and user-friendly, following the Figma designs to ensure pixel-perfect accuracy. The gallery is built to be responsive and functional across different devices and screen sizes.

## Features

- **Responsive Design**: Adapts seamlessly to different screen sizes and devices.
- **Hover Interaction**: Displays additional details on photo hover, enhancing user engagement.
- **Cross-Browser Compatibility**: Ensures consistent performance across modern browsers.
- **Image Navigation**: Allows users to navigate through thumbnails to view full-size images.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling and layout, including media queries for responsiveness.
- **JavaScript**: For interactivity and dynamic functionality.
- **Figma**: For design reference.

## Setup Instructions

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/wisecrepin/take-home.git
   cd take-home
Open the Project:
Open index.html in your preferred web browser to view the gallery.
Project Structure
markdown
Copy code
take-home/
│
├── index.html
├── styles -style.js

├── scripts -script.js
│
└── challenge 2/
    ├── array-target.js
    └── stringmanip.js
index.html: The main HTML file that structures the gallery.
styles.css: Contains all the CSS styles, including media queries for responsiveness.
script.js: Contains JavaScript for gallery interactivity and functionality.
challenges/: Directory for coding challenge solutions.
Coding Challenges
Array Manipulation (array-target.js)
Problem Statement: Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target.

Solution: Implemented a function to find such a subarray efficiently.

javascript
Copy code
// array-target.js.js

function arraycheck(arr, target) {
    let start = 0;
    let currentSum = 0;
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

Example usage
console.log(arraycheck([4, 2, 7, 1, 9, 5], 17)); // Output: true
String Transformation (stringTransform.js)
Problem Statement: Given a string, transform it based on the following rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5, perform both operations in order.
Solution: Implemented a function to handle these transformations.

javascript
Copy code strings-manip.js

function strings(input) {
    const length = input.length;

    if (length % 15 === 0) {
        let reversed = input.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 3 === 0) {
        return input.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return input;
}

// Example usage
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.






