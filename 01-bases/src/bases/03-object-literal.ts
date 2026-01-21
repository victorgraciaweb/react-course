interface Person {
  name: string;
  lastName: string;
  id: Id
}

interface Id {
    city: string,
    number: number
}

const person: Person = {
    name: 'Victor',
    lastName: 'Gracia',
    id: {
      city: 'Zaragoza',
      number: 24322
    }
}

const personDos = structuredClone(person);

personDos.name = 'Test Name';
personDos.lastName = 'Test Lastname';
personDos.id.city = 'Barcelona';
personDos.id.number = 4555;

console.log(person, personDos);