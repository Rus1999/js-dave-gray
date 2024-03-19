// Async / Await
// 2nd parameter of Fetch is a object

const jokeObj = {
  id: "3EYLeVS7Me", 
  joke: "I once lost a banana at court but then I appealed."
}

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jokeObj)
    });

  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postData(jokeObj);
