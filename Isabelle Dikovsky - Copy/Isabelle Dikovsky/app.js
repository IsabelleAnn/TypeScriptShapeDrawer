(function main() {
    var height = 0;
    var width = 0;
    var shape = Number(prompt("Please select desired shape:\n        1)Square\n        2)Rectangle\n        3)Triangle"));
    shape = getNewNumIfNot123(shape);
    var content = 0;
    if (shape == 1) {
        height = Number(prompt("Please enter height of square: "));
        height = getNewNumIfNegative(height);
        width = height;
        content = Number(prompt("Please select desired shape content:\n        1)*****\n        2)*   *\n        3)12345\n        4)54321"));
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
        var rectanglePerimeter = calcRectanglePerimeter(height, width);
        var rectangleArea = calcRectangleArea(height, width);
        document.write("Square Perimeter: " + rectanglePerimeter + "<br>");
        document.write("Square Area: " + rectangleArea + "<br>");
    }
    else if (shape == 2) {
        height = Number(prompt("Enter height of rectangle: "));
        height = getNewNumIfNegative(height);
        width = Number(prompt("Enter width of rectangle: "));
        width = getNewNumIfNegative(width);
        content = Number(prompt("Please select desired shape content:\n        1)*****\n        2)*   *\n        3)12345\n        4)54321"));
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
        var rectanglePerimeter = calcRectanglePerimeter(height, width);
        var rectangleArea = calcRectangleArea(height, width);
        document.write("Rectangle Perimeter: " + rectanglePerimeter + "<br>");
        document.write("Rectangle Area: " + rectangleArea + "<br>");
    }
    else if (shape == 3) {
        height = Number(prompt("Enter side of isosceles right triangle: "));
        height = getNewNumIfNegative(height);
        width = height;
        content = Number(prompt("Please select desired shape content:\n        1)*****\n        2)*   *\n        3)12345\n        4)54321"));
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
        var TrianglePerimeter = calcTrianglePerimeter(height, width);
        var TriangleArea = calcTriangleArea(height, width);
        document.write("Triangle Perimeter: " + TrianglePerimeter + "<br>");
        document.write("Triangle Area: " + TriangleArea + "<br>");
    }
})();
//-------------------------- Get a new number from user if -----------------------------------------------------------------
function getNewNumIfNegative(num) {
    while (isNaN(num) || num <= 0) {
        num = Number(prompt("Error. Please enter a positive integer."));
    }
    return num;
}
function getNewNumIfNot123(num) {
    while (num != 1 && num != 2 && num != 3) {
        num = Number(prompt("Error. Please enter 1 for square, 2 for rectangle or 3 for triangle."));
    }
    return num;
}
function getNewNumIfNot1234(num) {
    while (num != 1 && num != 2 && num != 3 && num != 4) {
        num = Number(prompt("Error. Please enter\n1 for: *****\n2 for: *   *\n3 for: 12345\n4 for: 54321"));
    }
    return num;
}
//-------------------------- Rectangle -----------------------------------------------------------------
function printRectangleStars(height, width) {
    for (var i = 1; i <= height; i++) {
        printLineOfStars(width);
        document.write("<br>");
    }
}
function printRectangleBorderOfStars(height, width) {
    for (var i = 1; i <= height; i++) {
        printLineBorderOfStars(height, width, i);
        document.write("<br>");
    }
}
function printRectangleNumbers(height, width) {
    for (var i = 1; i <= height; i++) {
        printLineOfNumbers(width);
        document.write("<br>");
    }
}
function printRectangleNumbersBackwards(height, width) {
    for (var i = 1; i <= height; i++) {
        printLineOfNumbersBackwards(width);
        document.write("<br>");
    }
}
function calcRectanglePerimeter(height, width) {
    return (2 * height) + (2 * width);
}
function calcRectangleArea(height, width) {
    return height * width;
}
//-------------------------- Triangle -----------------------------------------------------------------
function printTriangleStars(height, width) {
    for (var i = 1; i <= height; i++) {
        printLineOfStarsForTriangle(width, i);
        document.write("<br>");
    }
}
function printTriangleBorderOfStars(height, width) {
    for (var i = 1; i <= height; i++) {
        printLineBorderOfStarsForTriangle(width, i);
        document.write("<br>");
    }
}
function printTriangleNumbers(height, width) {
    for (var i = 1; i <= height; i++) {
        printLineOfNumbersForTriangle(width, i);
        document.write("<br>");
    }
}
function printTriangleNumbersBackwards(height, width) {
    for (var i = height; i >= 1; i--) {
        printReverseLineForTriangle(width, i);
        document.write("<br>");
    }
}
function calcTrianglePerimeter(height, width) {
    var hypotenuse = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
    return hypotenuse + height + width;
}
function calcTriangleArea(height, width) {
    return (height * width) / 2;
}
//------------------------------ Print Stars -------------------------------------------------------------
function printLineOfStars(width) {
    for (var i = 1; i <= width; i++) {
        document.write("* ");
    }
}
function printLineOfStarsForTriangle(width, index) {
    for (var i = 1; i <= index; i++) {
        document.write("* ");
    }
}
//------------------------------ Print Border of Stars -------------------------------------------------------------
function printLineBorderOfStars(height, width, index) {
    if (index == 1 || index == height) {
        printLineOfStars(width);
    }
    else {
        printEdgeOfStars(width);
    }
}
function printLineBorderOfStarsForTriangle(width, index) {
    if (index == width || index == 1) {
        printLineOfStars(index);
    }
    else {
        printEdgeOfStars(index);
    }
}
function printEdgeOfStars(width) {
    for (var i = 1; i <= width; i++) {
        if (i == 1 || i == width) {
            document.write("* ");
        }
        else {
            document.write("&nbsp ");
        }
    }
}
//------------------------------ Print Numbers -------------------------------------------------------------
function printLineOfNumbers(width) {
    for (var i = 1; i <= width; i++) {
        document.write(i + " ");
    }
}
function printLineOfNumbersForTriangle(width, index) {
    for (var i = 1; i <= index; i++) {
        document.write(i + " ");
    }
}
//------------------------------ Print Numbers Backwards -------------------------------------------------------------
function printLineOfNumbersBackwards(width) {
    for (var i = width; i >= 1; i--) {
        document.write(i + " ");
    }
}
function printReverseLineForTriangle(width, index) {
    for (var i = width; i >= index; i--) {
        document.write(i + " ");
    }
}
//# sourceMappingURL=app.js.map