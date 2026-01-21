export interface Heroe {
    id: number,
    name: string,
    owner: Owner
    category: Category
}

export type Owner = 'DC' | 'Marvel';

enum Category {
  WATER = 'WATER',
  EARTH = 'EARTH',     // más general, opuesto a agua
  SOIL = 'SOIL',       // suelo, más técnico
  GROUND = 'GROUND',   // tierra firme
  TERRAIN = 'TERRAIN', // terreno
}

export const heroes: Heroe[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
    category: Category.WATER
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
    category: Category.GROUND
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
    category: Category.SOIL
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
    category: Category.TERRAIN
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
    category: Category.WATER
  },
];