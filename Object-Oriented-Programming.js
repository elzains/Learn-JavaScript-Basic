var laptop = {
    // Properties (Specification)
    merk: 'Acer',
    color: 'Red',
    harga: '10000',
    ram: 8,
    // Method (Kemampuan)
    gaming: () =>{
        console.log('Game Room');
    },
    'video-editor': () =>{
        console.log('Video Room');
    } 
}

console.log(laptop.merk)
console.log(laptop.color)
console.log(laptop.harga)
console.log(laptop.ram)

laptop.gaming()
laptop['video-editor']()