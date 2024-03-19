// Async / Await
// 2nd parameter of Fetch is a object

const requestJoke = async (lastName) => {
  const response = await fetch(`https://api.nationalize.io/?name=${lastName}`);
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

requestJoke('nathaniel');