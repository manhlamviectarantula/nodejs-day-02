function reverseString(str) {
    return str.split("").reverse().join("");
}

var originalString = "manh";
var reversedString = reverseString(originalString);
console.log("Original string: " + originalString);
console.log("Reversed string: " + reversedString);
