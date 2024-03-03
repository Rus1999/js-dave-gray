let name = "Punyarit";
let counter = 0;
let myLetter;
while (counter <= name.length - 1)
{
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1)
  {
    counter += 2;
    continue;
  }
  if (myLetter === "t") break;
  counter++;
}

console.log(counter);