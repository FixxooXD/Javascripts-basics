await fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((Data) => {
    console.log("Data:", Data);
    var joke = Data.value;
    console.log(joke);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });
