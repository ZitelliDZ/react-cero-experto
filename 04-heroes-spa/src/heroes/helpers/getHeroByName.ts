import { heroes } from "../data/heroes"



export const getHeroByName = (name: string) => {

        if (!name || name.trim().length === 0) {
            throw new Error('Name is required');
        }
        name = name.trim().toLowerCase();
        const heros = heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
    
        if (!heros || heros.length === 0 ) {
            throw new Error(`Hero with name ${name} not found`);
        }
    
        return heros;
    }
