import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../redux/actions";
import { useParams } from 'react-router-dom';

function CountryDetail() {
  const dispatch = useDispatch();
  const c = useSelector((state) => state.country); // Mapping
  const waitgif = "https://i.pinimg.com/originals/2b/07/f6/2b07f62987e987d4e53e84aa8b963b83.gif";
  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

    return (
      <div className="country">
      <h1>Henry Countries</h1>
        {!c ? (
          <img src={waitgif} />
        ) : (
            <>
              <h2>{c.name}</h2>
              <img src={c.flag} />
              <p>Region: {c.region}</p>
            </>
          )
        }
      </div>
    )
}

export default CountryDetail;