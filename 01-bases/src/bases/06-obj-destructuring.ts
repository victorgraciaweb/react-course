type AnimalType = 'dog' | 'cat';

interface Animal {
    type: AnimalType,
    name: string,
    age: number
}

const myDog: Animal = {
    type: 'dog',
    name: 'Tobi',
    age: 10
}

const { type: myDogType, name, age } = myDog;

console.log({ myDogType, name, age })




const useContext = ({ type, name, age }: Animal) =>{
    return {
        animal: {
            type,
            name,
            age   
        }
    }
}

const context = useContext(myDog);

console.log(`TYPE: ${ context.animal.type }`);
console.log(`NAME: ${ context.animal.name }`);
console.log(`EDAD: ${ context.animal.age }`);


const { animal } = useContext(myDog);
const { type } = animal;


console.log({ type })