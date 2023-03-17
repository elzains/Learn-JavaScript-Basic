// Spread Array
let prodi = ['IT', 'IK', 'SI', 'ARS'];
let faculty = ['Sainstek', 'FEBI', 'TARBIYAH', 'FAKDA'];
let compare = [...prodi, ...faculty];

console.log(compare);

// 
let prodie = {name:'IT'};
let facultye = {names:'Sainstek'};
let compares = {...prodie, ...facultye};

console.log(compares);