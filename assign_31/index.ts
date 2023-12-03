// let userName:string[] = ["Admin", "Ahmed", "Ebad", "Akbar", "Asfand"]

let userName:string[] = [" "];


for(let i=0; i<userName.length; i++){
    let user_Name = userName[i]
    if(user_Name == "Admin"){
        console.log(`Hello ${user_Name}, would you like to see a status report?`);}        
    else if(user_Name === " "){
        console.log(`we need to find some users`);
    }
    else{
        console.log(`Hello ${user_Name}, thank you for logging in`);        
    }
}