// Async / Await
// 2nd parameter of Fetch is a object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

  if (response.status === 200) {
    const jsonJokeData = await response.json();
    console.log(jsonJokeData.joke);
  } else {
    console.log("Error!!!");
  }

  // const textJokeData = await response.text();
  // console.log(textJokeData);
};

getDadJoke();
