var city = new Map([
    ['Jakarta', 'Semarang'],
    ['Situbondo', 'Banyuwangi'],
    ['Bondowoso', 'Probolinggo']
]);
console.log(city.size);
console.log(city.get('Situbondo'));
console.log(city.set('Situbondo', 'Washington'));
console.log(city.size);