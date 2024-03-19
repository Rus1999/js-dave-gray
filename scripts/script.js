// Async / Await
// 2nd parameter of Fetch is a object

// abstract into functions

// maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    lastName: "nathaniel"
  };

  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `https://api.nationalize.io/?name=${requestData.lastName}`;
}

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
}

processJokeRequest();