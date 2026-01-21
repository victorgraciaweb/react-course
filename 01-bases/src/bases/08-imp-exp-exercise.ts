import { heroes, type Heroe, type Owner } from "../data/heroes.data";

export const getHeroesByOwner = (owner: Owner): Heroe[] => {
    const validHeroes = heroes.filter((heroe) => heroe.owner === owner);

    return validHeroes;
}