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
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  // if useCapture is false then it will propagate from inside out
  // if it's true then it will outside in
  view.addEventListener("click", (e) => {
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  }, false);

  div.addEventListener("click", (e) => {
    div.classList.toggle("blue");
    div.classList.toggle("black");
  }, false);

  h2.addEventListener("click", (e) => {
    const myText = e.target.textContent;
    myText === "My 2nd View"
      ? e.target.textContent = "Clicked"
      : e.target.textContent = "My 2nd View";
  }, false);


  // the event will propaget back up to the parent
  // e.target is the element that we click
  // view.addEventListener("click", (e) => {
  //   e.target.style.backgroundColor = "purple";
  // }, false);

  // div.addEventListener("click", (e) => {
  //   e.target.style.backgroundColor = "blue";
  // }, false);

  // h2.addEventListener("click", (e) => {
  //   e.target.textContent = "clicked";
  // }, false);

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (e) => {
    e.target.classList.add("height100");
  }, false);
  nav.addEventListener("mouseout", (e) => {
    e.target.classList.remove("height100");
  }, false);
};