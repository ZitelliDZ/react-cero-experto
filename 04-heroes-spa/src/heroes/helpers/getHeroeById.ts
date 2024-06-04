import { heroes } from "../data/heroes";



export const getHeroeById = (id: string) => {
    
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        throw new Error(`Hero with id ${id} not found`);
    }

    return hero;
}