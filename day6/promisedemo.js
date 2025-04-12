// let myPromise = new Promise((resolve, reject) => {
//   let a = 11;
//   if (a % 2 == 0) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = { firstName: "Aasaithambi", lastName: "Jay" };
      resolve(user);
    }, 2000);
  });
}

// async function displayUser() {
//   let user = await getUser();
//   console.log("Current User : " + JSON.stringify(user));
//   console.log("This is testing");
// }
// displayUser();

// let user = getUser();
// console.log(JSON.stringify(user));

getUser()
  .then((user) => {
    console.log("Current User : " + JSON.stringify(user));
  })
  .catch((error) => {
    console.log(error);
  });
