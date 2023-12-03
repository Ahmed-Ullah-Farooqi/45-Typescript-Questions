let guestList = ["Ebad", "Anas", "Ahmed", "Fahad"];

// console.log(`${guestList[0]}, You are invited to the dinner`)
// console.log(`${guestList[1]}, You are invited to the dinner`)
// console.log(`${guestList[2]}, You are invited to the dinner`)
// console.log(`${guestList[3]}, You are invited to the dinner`)

// console.log(`${guestList[2]}, is not be able to come to the dinner`)

// guestList.splice(2,1 ,"Asfand")

// console.log(`${guestList[0]}, You are invited to the dinner`)
// console.log(`${guestList[1]}, You are invited to the dinner`)
// console.log(`${guestList[2]}, You are invited to the dinner`)
// console.log(`${guestList[3]}, You are invited to the dinner`)

guestList.unshift("Ali")
guestList.splice(2,0, "Wasim")
guestList.push("Alex")

// console.log(guestList);

// console.log(`${guestList[0]}, You are invited to the dinner`)
// console.log(`${guestList[1]}, You are invited to the dinner`)
// console.log(`${guestList[2]}, You are invited to the dinner`)
// console.log(`${guestList[3]}, You are invited to the dinner`)
// console.log(`${guestList[4]}, You are invited to the dinner`)
// console.log(`${guestList[5]}, You are invited to the dinner`)
// console.log(`${guestList[6]}, You are invited to the dinner`)


console.log("We have space for only two People");

console.log(`${guestList.pop()}, letting you know we are sorry can’t invite you to dinner.`);
console.log(`${guestList.pop()}, letting you know we are sorry can’t invite you to dinner.`);
console.log(`${guestList.pop()}, letting you know we are sorry can’t invite you to dinner.`);
console.log(`${guestList.pop()}, letting you know we are sorry can’t invite you to dinner.`);
console.log(`${guestList.pop()}, letting you know we are sorry can’t invite you to dinner.`);

// console.log(guestList)

console.log(`${guestList[0]}, You are still invited`)
console.log(`${guestList[1]}, You are still invited`)

console.log(`${guestList.pop()}`);
console.log(`${guestList.pop()}`);

console.log(guestList)