// Async / Await

const myUsers = {
  userList: []
}

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // wait till finish before continue on
  const jsonUserData = await response.json();
  // console.log(jsonUserData);
  return jsonUserData;
};

myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction(); // wait for this async function to finish
  // console.log(data);
  myUsers.userList = data;
  console.log(`UserList inside asyncFunc: `);
  console.log(myUsers.userList);
}

anotherFunc();
console.log(`UserList outside asyncFunc: ${myUsers.userList}`);