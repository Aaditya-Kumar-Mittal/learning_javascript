const RomanReigns = {
  weight: 265,
  height: 185,
  quote: () => console.log("Head of the Table"),
}

const SethRollins = {
  weight: 225,
  height: 185,
  quote: () => console.log("Burn It Down"),
}


//Instead create a template class for the person

//Factory Functions

function wweSuperStars(a, b, quote) {
  return {
    weight: a,

    height: b,

    quote: () => console.log(quote),

  };
}

const romanReigns = wweSuperStars(265, 185, "Head of the Table");

const sethRollins = wweSuperStars(225, 185, "Burn It Down");

console.log(romanReigns);
console.log(sethRollins);

