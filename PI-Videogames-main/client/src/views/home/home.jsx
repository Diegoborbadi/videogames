import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, orderAlfabeticamente, orderAlfabeticamenteZA, page } from "../../redux/actions/actions";
import Cards from "../../components/cards/cards";
import "./home.style.css";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Estado local para el estado de carga
  const allVideoGames = useSelector((state) => state.allVideoGames);

  useEffect(() => {
    dispatch(getVideoGames()).then(() => setLoading(false));
  }, [dispatch]);

  const filterAscend = () => {
    dispatch(orderAlfabeticamente("ascendente"));
  };
  const filterDescen = () => {
    dispatch(orderAlfabeticamenteZA("descendente"));
  };

  const pagination = (event) => {
    dispatch(page(event.target.name));
  };


  const filterByGenreHandler = (genre) => {
    dispatch(filterByGenre(genre));
  };


  return (
    <div className="home-page">
      {loading ? ( 
        <div className="loading-container">
          <div className="loading-text">Loading...</div>
        </div>
      ) : (
        <>
          <div>
            <label>Paginado</label>
            <button name="prev" onClick={pagination}>
              Prev
            </button>
            <button name="next" onClick={pagination}>
              Next
            </button>
          </div>
          <button onClick={filterAscend}>Alfabeticamente A-Z</button>
          <button onClick={filterDescen}>Alfabeticamente Z-A</button>
          <Cards allVideoGames={allVideoGames} />
        </>
      )}
    </div>
  );
};

export default Home;
