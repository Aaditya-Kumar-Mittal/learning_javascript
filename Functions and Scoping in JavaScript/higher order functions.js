// Higher order Functions are functions whuch accept a function as a parameter or return a function as result


function abcd() { } // Not a HOF

abcd(function () {
  //This is a HOF

})

// This is used when are trying to make closures
//Aisa function jo accept kare ek pur function ya fir return kare ek aur function
//foreeach always takes a function as a parameter and is a higher order function