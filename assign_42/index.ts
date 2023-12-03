let magician:string[] = ["Adam", "David", "Akshay", "K-Laal"]
function show_magician(a:any){
        make_great(a)
}

function make_great(a:any){
    for(let i=0; i<a.length; i++){
        console.log(`${a[i]} the Great`)
       }  
}

console.log(show_magician(magician));