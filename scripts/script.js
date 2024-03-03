function getUserNameFromEmail(email)
{
  return email.slice(0, email.indexOf("@"));
}

console.log("Input email: Punyarit07@gmail.com");
console.log(getUserNameFromEmail("Punyarit07@gmail.com"));