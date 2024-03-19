// promises (do multiple tasak at once)
// 3 state : pending, fufilled, rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) { // error == false
    resolve("Yes! resolved the promise!");
  } else { // error != false
    reject("No! reject the promise!");
  }
});

// console.log(myPromise); // reture state of the promise

// myPromise.then(value => { // value = resolve || reject
//   console.log(`1st`); 
//   return `2nd`;
// })
// .then(newValue => {
//   console.log(newValue);
//   return '3rd';
// })
// .then(newValue => {
//   throw new Error('WOWZAA');
//   console.log(newValue);
// })
// .catch(err => {
//   console.error(err);
// });


const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
})
.catch((err) => {
  console.stack(err);
});


myPromise.then((value) => {
  console.log(`This promise source code is below the myNextPromise line`);
  console.log(value);
})
.catch((error) => {
  console.stack(err);
});
