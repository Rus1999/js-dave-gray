// event lisenter
// addEventListener(event, function, useCapture)

const doSomething = () => {
  alert("doing something");
}

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// anonymous function can't be remove
// h2.addEventListener("click", (e) => {
//   console.log(e.target);
//   e.target.textContent = "Clicked";
// }, false);

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
}, false);

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent form to reload by defaul
    console.log("Submit Event.");
  })
};