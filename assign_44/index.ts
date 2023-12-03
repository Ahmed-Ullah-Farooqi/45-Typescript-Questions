function sandwiches(...item:string[]):void{
    if (item.length === 0){
        console.log("You have not selected any item");
    } else{
        console.log("Sandwich Summary:");
        console.log(`Bread + ${item.join(" + ")} + Bread`);
    }

}

console.log(sandwiches("Onion", "Swiss", "Ham", "Tomato"));
console.log(sandwiches("Ham", "Tomato"));
console.log(sandwiches());



