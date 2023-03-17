class Laptop {
    constructor (brand, color, ram, harga){
        this.brand = brand;
        this.color = color;
        this.ram = ram;
        this.harga = harga;
    }
    gaming(){
        console.log(`Laptop ${this.brand} ${this.color} ${this.ram} ${this.harga} adalah Laptop Gaming`)
    }
}

const laptop1 = new Laptop('Acer', 'Red', 8, 12000);
// console.log(laptop1);
laptop1.gaming();