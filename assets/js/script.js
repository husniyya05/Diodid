// //var,let,const
// //variable

// //boolean 2 deyer oturu (true,false)

// const nameUniversity = false;

// var maas = 900;

// var name2 = "    Husniyye   ";

// console.log(name2.trim());

// var age = 22;
// var school = false;
// let universtiy = true;
// var maas2 = 950;
// var macbook = "PC";
// var gosterici = "3060suret";
// var totalMaas = maas + maas2;

// console.log(totalMaas);

// let mydata;

// var faiz = (maas * 5) / 100;
// console.log(faiz);

// var galass = true;
// var color = "red";

// var personals = [
//   {
//     name: "Husniyye",
//     age: 22,
//     tall: 170,
//   },
//   {
//     name: "Rahide",
//     age: 22,
//     tall: 160,
//   },
//   {
//     name: "Aqsin",
//     age: 10,
//     tall: 160,
//   },
// ];
// console.log(personals[2].age);

// const work = true;

// var book = [
//   {
//     writer: "Lev Tolstoy",
//     work: "Anna Karenina",
//     year: 1890,
//   },

//   {
//     writer: "Paulo Coelo",
//     work: "Kimyager",
//     year: 1995,
//   },
//   {
//     writer: "Franz Kafka",
//     work: "Cevrilme",
//     year: 1910,
//   },
// ];
// console.log(book);

// const d = new Date("2022-03-25");
// console.log(d);

// const arryData = ["Dostoyevski", "Tolstoy", "Frans Kafka"];

// console.log(arryData);

// arryData.unshift("lIMON");

// console.log(arryData);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const sortMethod = fruits.sort();

// console.log(sortMethod);

const age = 17;
let system;

if (age > 18) {
  system = true;
} else {
  system = false;
}


const name = ["Rahide ", "Husniyye", "Zeka"];
console.log(name);

//push arrayin sonuna yeni data elave edir
name.push("Raziye");
console.table(name);

// pop metodu arrayin sonuncu elementini silir
name.pop("Uzeyir");
console.log(name);

//unshift arrayin evveline data elave edir
name.unshift("Uzeyir")
console.log(name);

//sort metodu elifba sirasi ile duzur
name.sort();
console.log(name);

//concat iki arrayi biribirine birlestirir
const ages = [22, 23, 19];

const concatMethod = name.concat(ages);
console.log(concatMethod);

//inculude arrayin icinde herhansisa bir datani axtarirsan;
const includesMethod = ages.includes(18)
console.log(includesMethod)

//reverse arrayi tersine cevirir
console.log(ages.reverse())




