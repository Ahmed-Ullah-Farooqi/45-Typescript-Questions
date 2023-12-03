let magicians:string[] = ["Adam", "David", "Akshay", "K-Laal"]
function show_magician(a:any){
    for(let i=0; i<a.length; i++){
        console.log(a[i])
    }  
}

function make_great(a:string[]){
    let great_magician = a.map(b => `the Great ${b}`)
    return great_magician;
}

let greatMagician = make_great([...magicians])

console.log(show_magician(magicians));
console.log(show_magician(greatMagician));

