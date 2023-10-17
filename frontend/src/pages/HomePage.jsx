import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [values, setValues] = useState("");
  // const [favourite, setFavourite] = useState([]);
  const [movie, setMovie] = useState({ Search: [] }); // Initialize Search as an empty array

  const handleFav = async (m) => {
    try {
      const data = await axios.post(
        "http://localhost:8080/api/v1/favourite/post",
        m
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${values}&apikey=66902864`
      );
      setMovie(data); // Assign the whole data object
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-1 mx-2"
          type="search"
          placeholder="Enter Product"
          aria-label="Search"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button className="btn btn-outline-success my-4 my-sm-0" type="submit">
          Search
        </button>
        <Link className="btn btn-outline-success" to={"/favourite"}>
          Favoruite
        </Link>
      </form>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <div className="d-flex flex-wrap mt-4">
            {movie.Search.map((v) => (
              <div
                className="card m-2"
                style={{ width: "18rem" }}
                key={v.imdbID}
              >
                <img
                  className="card-img-top m-auto"
                  src={v.Poster}
                  alt={v.Title}
                  style={{ width: "49%" }}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{v.Title}</h5>
                    <p className="card-title card-price">Year: {v.Year}</p>
                    <p className="card-text">{v.Type}</p>
                    <button
                      className="btn btn-outline-success my-4 my-sm-0"
                      onClick={() => handleFav(v)}
                    >
                      Add to favourite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
