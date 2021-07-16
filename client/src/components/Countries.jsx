import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions";
import { Link } from 'react-router-dom';

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries); // Mapping
  const waitgif = "https://i.pinimg.com/originals/2b/07/f6/2b07f62987e987d4e53e84aa8b963b83.gif";
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

    return (
      <div className="countries">
      <h1>Henry Countries</h1>
        {!countries ? (
          <img src={waitgif} />
        ) : (
          countries.map((c) => (
            <Link to={`/countries/${c.alpha3Code}`}>
              <h2>{c.name}</h2>
              <img src={c.flag} />
              <p>Region: {c.region}</p>
            </Link>
          ))
        )}
      </div>
    )
}

export default Countries;
