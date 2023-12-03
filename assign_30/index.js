"use strict";
let userName = ["Admin", "Ahmed", "Ebad", "Akbar", "Asfand"];
for (let i = 0; i < userName.length; i++) {
    let user_Name = userName[i];
    if (user_Name == "Admin") {
        console.log(`Hello ${user_Name}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${user_Name}, thank you for logging in`);
    }
}
