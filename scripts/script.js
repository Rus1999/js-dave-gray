// Async / Await

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // wait till finish before continue on
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map(user => {
    return user.email;
  })

  postToWebPage(userEmailArray); // didn't need to be aysnc bc data is aready loaded

  return userEmailArray;
};

const postToWebPage = (data) => {
  console.log(data);
}

// const userEmail = await getAllUserEmails();
// console.log(userEmail);

getAllUserEmails();