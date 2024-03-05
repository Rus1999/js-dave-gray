const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));
band.drums = "John Bonham";

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}`);
}

// const { guitar: myVariable, bass: myBass } = band; // get value from key
// console.log(myVariable);
// console.log(myBass);

// {
  const { bass } = band; // get value from key
  console.log(bass);
// }

function sings({ vocals, guitar, bass, drums }) {
  return `${vocals} sings! \n${guitar} lead! \n${bass} pick!\n${drums} fucking hit!`;
};
console.log(sings(band)); // pass the whole object then use what to use inside the object