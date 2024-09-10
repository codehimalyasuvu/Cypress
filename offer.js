// let gender = ["Male", "Female"];
// let items = ["T-shirt", "Pant"];

// if (gender == "Male" && items == "Pant")
//      {
//   console.log("We have 20% off");
// } else {
//   console.log("We have no offer");
// }

function shop(name, gender, items) {
  if (gender == "Male" && items == "Pant") {
    console.log(`${name} We have 20% off`);
  } else if (gender == "Female" && items == "Pajama") {
    console.log(`${name} We have 20% off`);
  } else {
    console.log(`${name} Sadly, We have no offer`);
  }
}
shop("Ram", "Male", "Pant");
shop("Sita", "Female", "Geans");
shop("Rita", "Female", "Pajama");

abc = () => {};
