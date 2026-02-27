// const person = {
//   fname: "Ajay",
//   lname: "Singh",
//   age: 25,
// };
// for (let x in person) {
//   console.log("person details: " + x + ":" + person[x]);
// }

// const person = {
//   fname: "Ajay",
//   lname: "Singh",
//   age: 25,
// };
// for (let x in person) {
//   console.log("person details: " + x + ":" + person[x]);
// }

// console.log(person.fname);

// var count = 0;
// document.write("Starting Loop ");
// document.write("<br />");
// while (count < 10) {
//   document.write("Current Count:" + count + "<br />");
//   count++;
// }

// document.write("Loop Stopped!");

// var age = 17;

// if (age > 18) {
//   document.write("<b>You are eligible to cast the vote.</b>");
// } else {
//   document.write(
//     "<b>You are <span style='color: red; font-weight: 900'>NOT</span> eligible to cast the vote.",
//   );
// }

// var grade = "A";
// document.write("Entering with switch block <br />");
// switch (grade) {
//   case "A":
//     document.write("Good job <br />");
//     break;
//   case "B":
//     document.write("Pretty Good <br />");
//     break;
//   case "C":
//     document.write("Passed <br />");
//     break;
//   case "D":
//     document.write("Not so good <br />");
//     break;
//   case "F":
//     document.write("Failed <br />");
//     break;
//   default:
//     document.write("Unknown grade <br />");
//     break;
// }
// document.write("Exiting switch block.");

function myFunction() {
  alert("Hello World!");
}
let btn = document.querySelector(".alert");
btn.addEventListener("click", myFunction);

function sayName(name, age) {
  document.write(name + " is " + age + " years old");
}

let btn2 = document.querySelector(".hello");
btn2.addEventListener("click", () => {
  sayName("Zara", 7);
});

//javascript -> undefined

var res = mul(12, 30);
function mul(x, y) {
  return x * y;
}
document.write(res);
