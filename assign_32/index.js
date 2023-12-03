"use strict";
let cur_user = ["Ahmed", "Ebad", "Fahad", "Asfand", "Akbar"];
let new_user = ["Anas", "Ebad", "Shehroz", "Asfand", "Arsalan"];
function userUnique(userName) {
    return !cur_user.some(cur_user => cur_user.toLowerCase() === userName.toLowerCase());
}
for (let a = 0; a < new_user.length; a++) {
    if (userUnique(new_user[a])) {
        console.log(`User Name is available`);
    }
    else {
        console.log(`User Name is not available`);
    }
}
