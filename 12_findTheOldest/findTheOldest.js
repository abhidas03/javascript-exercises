const findTheOldest = function(persons) {
  // const currYear = new Date().getFullYear();
  // //for each person, calculate their age, and if its older, save
  // let oldestPerson;
  // let oldestPersonAge = 0;
  // let age;
  // persons.forEach((person) => {
  //   if (!('yearOfDeath' in person)) {
  //     age = currYear - person.yearOfBirth;
  //   }
  //   else {
  //     age = person.yearOfDeath - person.yearOfBirth;
  //   }
  //
  //   if (age > oldestPersonAge) {
  //     oldestPersonAge = age;
  //     oldestPerson = person;
  //   }
  // })
  return persons.reduce( (oldestPerson, currPerson) => {
    let age = getAge(currPerson.yearOfBirth, 
                     currPerson.yearOfDeath);
    let oldestAge = getAge(oldestPerson.yearOfBirth,
                           oldestPerson.yearOfDeath);

    return age > oldestAge ? currPerson : oldestPerson;
  });

};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  } 
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
