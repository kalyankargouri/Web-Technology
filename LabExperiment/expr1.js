// Activity no:1 let & const
document.write("<h3>Activity 1: let & const</h3>");

let marks = 20;
marks = 30;
document.write("Marks: " + marks + "<br>");
console.log("Marks:", marks);

const collegename = "DKTE";
document.write("College Name: " + collegename + "<br><br>");
console.log("College Name:", collegename);


// Activity no:2 let, const, var – Block Scope
document.write("<h3>Activity 2: Block Scope Check</h3>");

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;

  document.write("Inside block:<br>");
  document.write("a = " + a + "<br>");
  document.write("b = " + b + "<br>");
  document.write("c = " + c + "<br><br>");

  console.log("Inside block:", a, b, c);
}

document.write("Outside block:<br>");
document.write("a = " + a + "<br><br>");
console.log("Outside block: a =", a);


// Example of var
document.write("<h3>Example of var</h3>");

if (true) {
  var x = 10;
  document.write("Inside block: " + x + "<br>");
  console.log("Inside block x =", x);
}

document.write("Outside block: " + x + "<br><br>");
console.log("Outside block x =", x);


// Activity no:3 Display student information
document.write("<h3>Activity 3: Student Information</h3>");

let name = "Gouri Sandesh Kalyankar";
let age = 21;
let course = "Computer Engineering";
let pointer = 8.5;

document.write("Name: " + name + "<br>");
document.write("Age: " + age + "<br>");
document.write("Course: " + course + "<br>");
document.write("Pointer: " + pointer + "<br><br>");

console.log("Student Info:", name, age, course, pointer);


// Activity no:4 Even/Odd & Pass/Fail
document.write("<h3>Activity 4: Even/Odd & Pass/Fail</h3>");

let num = 10;
document.write("Number: " + num + "<br>");
console.log("Number:", num);

if (num % 2 === 0) {
  document.write(num + " is Even<br>");
  console.log(num + " is Even");
} else {
  document.write(num + " is Odd<br>");
  console.log(num + " is Odd");
}

let mark = 80;
if (mark >= 35) {
  document.write("Result: PASS<br><br>");
  console.log("Result: PASS");
} else {
  document.write("Result: FAIL<br><br>");
  console.log("Result: FAIL");
}


// Activity no:5 Print numbers from 1 to 10
document.write("<h3>Activity 5: Numbers from 1 to 10</h3>");

for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
  console.log(i);
}
