const first = () => {
  return "I'm One";
};

// const second = () => {
//   setTimeout(() => {
//    return"I'm Two" ;
//   }, 3000);
// };

const second = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I'm Two");
    }, 3000);
  });
};

const third = () => {
  return "I'm Three";
};
const calls = async () => {
  let valOne = first();
  console.log(valOne);

  let valTwo = await second();
  console.log(valTwo);

  let valThree = third();
  console.log(valThree);
};

calls();
