let guestList = ["Ebad", "Anas", "Ahmed", "Fahad"];

console.log(`${guestList[0]}, You are invited to the dinner`)
console.log(`${guestList[1]}, You are invited to the dinner`)
console.log(`${guestList[2]}, You are invited to the dinner`)
console.log(`${guestList[3]}, You are invited to the dinner`)

console.log(`${guestList[2]}, is not be able to come to the dinner`)

guestList.splice(2,1, "Asfand")

console.log(`${guestList[0]}, You are invited to the dinner`)
console.log(`${guestList[1]}, You are invited to the dinner`)
console.log(`${guestList[2]}, You are invited to the dinner`)
console.log(`${guestList[3]}, You are invited to the dinner`)

console.log(guestList)