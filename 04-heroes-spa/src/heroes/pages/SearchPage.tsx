import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { Hero } from "../data/heroes";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [heros, setHeros] = useState<Hero[] | null>(null);

  const { q = "" } = queryString.parse(location.search);

  const { formState, onInputChange } = useForm({
    search: q,
  });

  useEffect(() => { 
      try {
        const heroResult = getHeroByName(q);
        setHeros(heroResult);
      } catch (error) {
        setHeros(null);
        console.error(error);
      } 
  }, [q ]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`?q=${formState.search}`);
  };

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="search"
              value={formState.search}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn m-1 mt-3 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {!heros &&
            (!q ? (
              <div className="alert alert-info">Search a hero</div>
            ) : (
              <div className="alert alert-danger">Heroe {q} no encontrado</div>
            ))} */}


            <div className="alert alert-info animate__animated animate__fadeIn" aria-label="alerta-info"
            style={{display: q !== '' ? "none" : " "}}>
              Search a hero</div>

            <div className="alert alert-danger animate__animated animate__fadeIn" aria-label="alerta-danger" 
            style={{display: (q !== '' && !heros || heros?.length == 0) ? "" : "none"}}>
              Heroe {q} no encontrado</div>

               

          {heros && (
            <div className="d-flex w-100 flex-row flex-wrap gap-4 animate__animated animate__fadeIn">
              {heros.map((hero) => ( 
                  <HeroCard  hero={hero}  key={hero.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
