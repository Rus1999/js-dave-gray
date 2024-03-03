const getUserNameFromEmail = (email) =>
{
  return email.slice(0, email.indexOf("@"));
}

console.log("Input email: Punyarit07@gmail.com");
console.log(getUserNameFromEmail("Punyarit07@gmail.com"));

console.log("Input email: Punyarit_rus@hotmail.com");
console.log(getUserNameFromEmail("Punyarit_rus@hotmail.com"));

console.log("Input email: PunyaritKlaphachon@github.com");
console.log(getUserNameFromEmail("PunyaritKlaphachon@github.com"));
