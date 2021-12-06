// Soal No 1
const luasPersegiPanjang = (p, l) => {
  let output = p * l;
  console.log(output);
};

const kelilingPersegiPanjang = (p, l) => {
  let output = 2 * (p + l);
  console.log(output);
};
console.log("Soal No 1");
luasPersegiPanjang(3, 5);
kelilingPersegiPanjang(5, 5);
console.log("==========");
// Soal No 2
const literal = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(firstName + " " + lastName);
    },
  };
};
console.log("Soal No 2");
literal("Mustofa", "Robbani").fullName();
console.log("==========");

// Soal No 3
const newObject = {
  firstName: "Mustofa",
  lastName: "Robbani",
  address: "Jalan Petojoyo",
  hobby: "Playing Football",
};
const { firstName, lastName, address, hobby } = newObject;
console.log("Soal No 3");
console.log(firstName, lastName, address, hobby);
console.log("==========");

// Soal No 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
let combined = [...west, ...east];
console.log("Soal No 4");
console.log(combined);
console.log("==========");

// Soal No 5
const planet = "earth";
const view = "glass";
const outputStr = `Lorem ${view} dolor sit amet, consectetur adipiscing elit,${planet}`;
console.log("Soal No 5");
console.log(outputStr);
console.log("=========");
