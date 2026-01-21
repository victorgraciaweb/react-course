const films = ['Film-1', 'Film-2', 'Film-3']; 

const [,,film3] = films;

console.log({film3});



const useState = (value: string) => {
    return [value, (newValue: string) =>{
        console.log(newValue);
    }] as const;
;}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');