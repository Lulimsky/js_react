const people = [
    {
      name: 'Jhon',
      age: 33,
      favoriteColor: 'Blue',
      gender: 'Male',
    },
    {
      name: 'Mary',
      age: 21,
      favoriteColor: 'Red',
      gender: 'Female',
    },
    {
      name: 'Peter',
      age: 27,
      favoriteColor: 'Purple',
      gender: 'Male',
    },
    {
      name: 'Allison',
      age: 33,
      favoriteColor: 'Green',
      gender: 'Female',
    },
  ];
  
function obtainGender(gender) {
  return people.filter(person => person.gender === gender);
}

function displayResults(gender) {
  const filteredPeople = obtainGender(gender);
  const outputElement = document.getElementById('output');
  outputElement.textContent = JSON.stringify(filteredPeople, null, 2);
}
