const Username = 'Zainal';
const Password = 07072002;

if(Username && Password){
    console.log('Dashboard Success');
}else{
    console.log('Try Again. Check Your Account');
}

// Operator ==
let candidate1;
let candidate2;
let Compare;

candidate1 = '101';
candidate2 = 101;
Compare = candidate1 == candidate2; // ==> Lebih spesifik ke Nilainya saja, sama atau tidak
// Compare = candidate1 === candidate2; ==> IDENTIK(Lebih spesifik ke Tipe Datanya, sama atau tidak)
console.log(Compare);