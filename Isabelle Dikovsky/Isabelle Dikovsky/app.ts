
(function main(): void {

    let height: number = 0;
    let width: number = 0;
    let shape: number = Number(prompt(`Please select desired shape:
        1)Square
        2)Rectangle
        3)Triangle`));

    shape = getNewNumIfNot123(shape);
    let content: number = 0;

    if (shape == 1) {
        height = Number(prompt(`Please enter height of square: `));
        height = getNewNumIfNegative(height);
        width = height;
        content = Number(prompt(`Please select desired shape content:
        1)*****
        2)*   *
        3)12345
        4)54321`));
        content = getNewNumIfNot1234(content);
        switch (content) {
            case 1:
                printRectangleStars(height, width);
                break;
            case 2:
                printRectangleBorderOfStars(height, width);
                break;
            case 3:
                printRectangleNumbers(height, width);
                break;
            case 4:
                printRectangleNumbersBackwards(height, width);
                break;
        }
        let rectanglePerimeter: number = calcRectanglePerimeter(height, width);
        let rectangleArea: number = calcRectangleArea(height, width);
        document.write("Square Perimeter: " + rectanglePerimeter + "<br>");
        document.write("Square Area: " + rectangleArea + "<br>");
    }
    else if (shape == 2) {
        height = Number(prompt(`Enter height of rectangle: `));
        height = getNewNumIfNegative(height);
        width = Number(prompt(`Enter width of rectangle: `));
        width = getNewNumIfNegative(width);
        content = Number(prompt(`Please select desired shape content:
        1)*****
        2)*   *
        3)12345
        4)54321`));
        content = getNewNumIfNot1234(content);
        switch (content) {
            case 1:
                printRectangleStars(height, width);
                break;
            case 2:
                printRectangleBorderOfStars(height, width);
                break;
            case 3:
                printRectangleNumbers(height, width);
                break;
            case 4:
                printRectangleNumbersBackwards(height, width);
                break;
        }
        let rectanglePerimeter: number = calcRectanglePerimeter(height, width);
        let rectangleArea: number = calcRectangleArea(height, width);
        document.write("Rectangle Perimeter: " + rectanglePerimeter + "<br>");
        document.write("Rectangle Area: " + rectangleArea + "<br>");
    }
    else if (shape == 3) {
        height = Number(prompt(`Enter side of isosceles right triangle: `));
        height = getNewNumIfNegative(height);
        width = height;
        content = Number(prompt(`Please select desired shape content:
        1)*****
        2)*   *
        3)12345
        4)54321`));
        content = getNewNumIfNot1234(content);
        switch (content) {
            case 1:
                printTriangleStars(height, width);
                break;
            case 2:
                printTriangleBorderOfStars(height, width);
                break;
            case 3:
                printTriangleNumbers(height, width);
                break;
            case 4:
                printTriangleNumbersBackwards(height, width);
                break;
        }
        let TrianglePerimeter: number = calcTrianglePerimeter(height, width);
        let TriangleArea: number = calcTriangleArea(height, width);
        document.write("Triangle Perimeter: " + TrianglePerimeter + "<br>");
        document.write("Triangle Area: " + TriangleArea + "<br>");
    }
})();

//-------------------------- Get a new number from user if -----------------------------------------------------------------

function getNewNumIfNegative(num: number): number {
    while (isNaN(num) || num <= 0) {
        num = Number(prompt(`Error. Please enter a positive integer.`));
    }
    return num;
}

function getNewNumIfNot123(num: number): number {
    while (num != 1 && num != 2 && num != 3) {
        num = Number(prompt(`Error. Please enter 1 for square, 2 for rectangle or 3 for triangle.`));
    }
    return num;
}

function getNewNumIfNot1234(num: number): number {
    while (num != 1 && num != 2 && num != 3 && num != 4) {
        num = Number(prompt(`Error. Please enter 1 for: *****
2 for: *   *
3 for: 12345
or
4 for: 54321`));
    }
    return num;
}

//-------------------------- Rectangle -----------------------------------------------------------------

function printRectangleStars(height: number, width: number): void {
    for (let i: number = 1; i <= height; i++) {
        printLineOfStars(width);
        document.write("<br>");
    }
}

function printRectangleBorderOfStars(height: number, width: number): void {
    for (let i: number = 1; i <= height; i++) {
        printLineBorderOfStars(height, width, i);
        document.write("<br>");
    }
}

function printRectangleNumbers(height: number, width: number): void {
    for (let i: number = 1; i <= height; i++) {
        printLineOfNumbers(width);
        document.write("<br>");
    }
}

function printRectangleNumbersBackwards(height: number, width: number): void {
    for (let i: number = 1; i <= height; i++) {
        printLineOfNumbersBackwards(width);
        document.write("<br>");
    }
}

function calcRectanglePerimeter(height: number, width: number): number {
    return (2 * height) + (2 * width);
}

function calcRectangleArea(height: number, width: number): number {
    return height * width;
}

//-------------------------- Triangle -----------------------------------------------------------------


function printTriangleStars(height: number, width: number): void {
    for (let i: number = 1; i <= height; i++) {
        printLineOfStarsForTriangle(width, i);
        document.write("<br>");
    }
}

function printTriangleBorderOfStars(height: number, width: number): void {
    for (let i: number = 1; i <= height; i++) {
        printLineBorderOfStarsForTriangle(width, i);
        document.write("<br>");
    }
}

function printTriangleNumbers(height: number, width: number): void {
    for (let i: number = 1; i <= height; i++) {
        printLineOfNumbersForTriangle(width, i);
        document.write("<br>");
    }
}

function printTriangleNumbersBackwards(height: number, width: number): void {
    for (let i: number = height; i >= 1; i--) {
        printReverseLineForTriangle(width, i);
        document.write("<br>");
    }
}

function calcTrianglePerimeter(height: number, width: number): number {
    let hypotenuse: number = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
    return hypotenuse + height + width;
}

function calcTriangleArea(height: number, width: number): number {
    return (height * width) / 2;
}

//------------------------------ Print Stars -------------------------------------------------------------


function printLineOfStars(width: number): void {
    for (let i: number = 1; i <= width; i++) {
        document.write("* ");
    }
}

function printLineOfStarsForTriangle(width, index): void {
    for (let i: number = 1; i <= index; i++) {
        document.write("* ");
    }
}

//------------------------------ Print Border of Stars -------------------------------------------------------------

function printLineBorderOfStars(height: number, width: number, index: number): void {

    if (index == 1 || index == height) {
        printLineOfStars(width);
    }
    else {
        printEdgeOfStars(width);
    }
}

function printLineBorderOfStarsForTriangle(width, index): void {
    if (index == width || index == 1) {
        printLineOfStars(index);
    }
    else {
        printEdgeOfStars(index);
    }
}

function printEdgeOfStars(width: number): void {
    for (let i: number = 1; i <= width; i++) {
        if (i == 1 || i == width) {
            document.write("* ");
        }
        else {
            document.write("&nbsp ");
        }
    }
}

//------------------------------ Print Numbers -------------------------------------------------------------

function printLineOfNumbers(width: number): void {
    for (let i: number = 1; i <= width; i++) {
        document.write(i + " ");
    }
}

function printLineOfNumbersForTriangle(width, index): void {
    for (let i: number = 1; i <= index; i++) {
        document.write(i + " ");
    }
}

//------------------------------ Print Numbers Backwards -------------------------------------------------------------

function printLineOfNumbersBackwards(width: number): void {
    for (let i: number = width; i >= 1; i--) {
        document.write(i + " ");
    }
}

function printReverseLineForTriangle(width: number, index: number): void {
    for (let i: number = width; i >= index; i--) {
        document.write(i + " ");
    }
}