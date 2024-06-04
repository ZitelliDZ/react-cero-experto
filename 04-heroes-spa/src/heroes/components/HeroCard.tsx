import { Link } from "react-router-dom";
import { Hero } from "../data/heroes";

interface HeroCardProps {
    hero: Hero;
    buttonMas?:boolean;
    }

export const HeroCard = ({hero,buttonMas=false}: HeroCardProps) => {
  return (
    <div className="d-flex w-auto animate__animated animate__fadeInLeft">
        
    <div className="card" style={{width: '18rem'}}>
        <img src={`/assets/heroes/${hero.id}.jpg`} className="card-img-top " alt={hero.superhero}/>
        <div className="card-body">
            <h5 className="card-title">{hero.superhero}</h5>
            <p className="card-text">{hero.alter_ego}</p>
            {
                (hero.alter_ego !== hero.characters)
                && <p className="card-text">{hero.characters}</p>
            }
            <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
            </p>
            {
                buttonMas && 
                <Link to={`/hero/${hero.id}`} className="btn btn-primary">Más...</Link>
            }
        </div>
      
    </div>
    </div>
  )
}
