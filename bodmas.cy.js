function add(a) {
  ad = 30 + a;
  console.log(ad);
  return ad;
}

function subtract(b) {
  sub = 80 - b;
  console.log(sub);
  return sub;
}

mul = add(30) * subtract(60);
console.log(mul);

let array = ["apple", "ball", "123"];
let Personal = {
  name: "Suvu",
  address: "Mid Baneshwor",
  phone: [9, 8, 6, 1, 7, 8, 8, 5, 0, 1],
  family: {
    father: "Ram",
    mother: "Sita",
  },
};
console.log(Personal);
console.log(Personal.family.father);
