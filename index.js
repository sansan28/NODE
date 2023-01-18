require('dotenv').config()
console.log(
  `My name is ${process.env.NAME}, wilder in ${process.env.CITY}, and I love ${process.env.LANGUAGE}`
);
