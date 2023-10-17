import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Favourite = () => {
  const [favourite, setFavourite] = useState([]);

  const getFavoruite = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/v1/favourite/get`
    );
    setFavourite(data);
  };
  useEffect(() => {
    getFavoruite();
  }, []);
  return (
    <>
      <div>
        <Link className="btn btn-outline-success" to={"/"}>
          Home
        </Link>
      </div>

      <div className="container">
        <div className="text-center">
          <div className="d-flex flex-wrap mt-4">
            {favourite.map((v) => (
              <div
                className="card m-2"
                style={{ width: "18rem" }}
                key={v.poster}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourite;
