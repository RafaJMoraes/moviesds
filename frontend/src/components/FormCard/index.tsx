
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie, MoviePage } from "types/movie";
import './styles.css'
import { BASE_URL } from "utils/request";
import { useNavigate } from "react-router-dom";

type Props = {
  movieId: String;
}

function FormCard({movieId} : Props) {

    const navigate = useNavigate();

    const [movie , setMovie] = useState<Movie>( );

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
            const data = response.data as Movie;
            setMovie(data);
          });
      }, [movieId] );
    

  

 
  return (
      
    <div className="dsmovie-form-container">
      <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form">
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
       
        
      </div>
    </div>
  );
}
export default FormCard;