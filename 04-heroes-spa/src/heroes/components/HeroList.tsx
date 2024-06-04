import { useEffect, useMemo, useState } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Hero } from "../data/heroes";
import { HeroCard } from "./HeroCard";

interface HeroListProps {
  publisher: string;
}

export const HeroList = ({ publisher }: HeroListProps) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);


  const herosResult = useMemo(() => getHeroesByPublisher(publisher),[publisher]);
  useEffect(() => {
    try {
      setHeroes(herosResult);
    } catch (error) {
      console.log(error);
    }
  }, [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} buttonMas  />
      ))}
    </div>
  );
};
