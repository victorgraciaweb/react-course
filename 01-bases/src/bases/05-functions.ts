function getFullName(name: string, lastName: string): string {
    return `Name: ${name}, ${lastName}`;
}

const name = getFullName('Víctor', 'Gracia Magallón');

console.log(name);




const getAddress = (address: string): string => {
    return address;
}

const address = getAddress('Mi Address');

console.log(`Mi address is: ${address}`)




interface Person {
    id: number,
    name: string
}

const getUser = (id: number, name: string): Person  => {
    return {
        id,
        name
    }
}

console.log(getUser(45, 'Victor'));



const getOtherUser = (id: number, name: string): Person => ({
    id,
    name
});

console.log(getOtherUser(32, 'Carlos'));