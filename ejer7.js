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
  
  function obtainByGender(gender) {
    return people.filter(person => person.gender === gender);
  }
  

  const woman = obtainByGender('Female');
  const men = obtainByGender('Male');
  
  console.log('Mujeres:', woman);
  console.log('Hombres:', men);
  