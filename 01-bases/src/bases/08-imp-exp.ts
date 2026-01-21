import { heroes, type Heroe } from '../data/heroes.data';

const getHeroeById = (id: number): Heroe => {
    const heroe = heroes.find((heroe) => {
        return heroe.id === id;
    });

    if(!heroe){
        throw new Error(`No exist ID: ${id}`);
    }

    return heroe;
}

console.log(getHeroeById(2));