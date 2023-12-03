"use strict";
function describe_city(city, country = "Pakistan") {
    if (city === "Lahore" || city === "Quetta") {
        return `${city} is in ${country}`;
    }
    else {
        return `${city} is not in ${country}`;
    }
}
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Quetta"));
