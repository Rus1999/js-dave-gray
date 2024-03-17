// web storage API

// window.alert("Window API");
// console.log(window.location);

const myArr = ['eat', 'sleep', 'code'];
const myObj = {
  name: "Rus",
  hobbies: ['eat', 'sleep', 'code'],
  logName: function() {
    console.log(this.name);
  }
};


myObj.logName();

sessionStorage.setItem("mySessionStore", JSON.stringify(myArr));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myObj));
const localStorageKey = localStorage.key(0);
const localStorageLength = localStorage.length;
localStorage.removeItem("myLocalStore");
localStorage.clear();
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(localStorageLength);