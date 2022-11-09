const User = require("./classObj.js");

let Raj = new User("Raj Palmal", "fiwdnwidnwd", "rakjj@fefhe", "cse");

Raj.enrollCourse("Cse");
Raj.enrollCourse("Digital Systems");
console.log(Raj.getCourseList());

console.log(Raj.getInfo());
Raj.getCourseList().forEach((c) => {
  console.log(c);
});
