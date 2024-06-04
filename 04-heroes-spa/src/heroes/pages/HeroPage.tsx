import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Hero } from "../data/heroes";
import { getHeroeById } from "../helpers/getHeroeById";
import { HeroCard } from "../components/HeroCard";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const [hero, setHero] = useState<Hero | null>(null);

  const heroResult = useMemo(() => getHeroeById(heroId!),[heroId]);

  useEffect(() => {
    if (heroId) {
      try {
        setHero(heroResult);
      } catch (error) {
        console.error(error);
      }
    }
  }, [heroId]);

  if (!hero) {
    return <div>Hero not found</div>;
    //return <Navigate to="/marvel" />;
  }

  const onReturn = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>Hero Page</h1>
      <hr />
      <HeroCard hero={hero}  />
      <button className="btn btn-primary mt-4" onClick={ onReturn }>
        Regresar
      </button>
    </div>
  );
};
