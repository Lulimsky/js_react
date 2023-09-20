function takeNames() {
    const namesArray = people.map(person => person.name);
    const displayOutput = document.getElementById("output");

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
          favoriteColor: 'Gree',
          gender: 'Female',
        },
      ];
      
      
    displayOutput.textContent = namesArray.join(", ");
}