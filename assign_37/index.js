"use strict";
function make_shirt(size, message = " I love Typescript") {
    if (size == "large" || size == "medium") {
        return size + message;
    }
    else {
        return size + " This size is for kids.";
    }
}
console.log(make_shirt("small"));
