function car(manufacturer:string, model:string, art?:{}) {
    let obj = { 
        manufacturerName : manufacturer,
        modelName:model,
        attributesModel: art
    }

    return obj
}
console.log(car("Audi", "2023", {version:"auto", colors:"black"}));