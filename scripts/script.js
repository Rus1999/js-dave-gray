// fetch

// const users = fetch("https://jsonplaceholder.typicode.com/users"); // promise by default

// pending
// console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json();
  })
  .then(json => {
    json.forEach(user => {
      console.log(user);
    })
  })
  .catch(err => {
    console.stack(err);
  });

console.log(users);