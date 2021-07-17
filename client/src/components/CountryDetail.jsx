import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../redux/actions";
import { useParams } from 'react-router-dom';

function CountryDetail() {
  const dispatch = useDispatch();
  const c = useSelector((state) => state.country); // Mapping
  const { alpha3Code } = useParams();
  const waitgif = "https://i.pinimg.com/originals/2b/07/f6/2b07f62987e987d4e53e84aa8b963b83.gif";
  useEffect(() => {
    dispatch(getCountry(alpha3Code));
  }, [dispatch, alpha3Code]);

    return (
      <div className="country">
      <h1>Country Detail</h1>
        {!c ? (
          <img src={waitgif} alt=''/>
        ) : (
            <>
              <h2>{`${c.name} [${c.alpha3Code}]`}</h2>
              <img src={c.flag} alt=''/>
              <p>Region: {c.region}</p>
              <p>Subregion: {c.subregion}</p>
              <p>Capital: {c.capital}</p>
              <p>Population: {c.population}</p>
              <p>Area: {c.area + ' [km²]'}</p>
              <p>Density: {Math.round(((Number(c.population) / Number(c.area)) + Number.EPSILON) * 100) / 100 + ' [/km²]'}</p>
              <p>Currencies: <ul>{c.currencies?.map(cu => <li>{`${cu.name} (${cu.code})`}</li>)}</ul></p>
              <p>Languages: <ul>{c.languages?.map(l => <li>{`${l.name} (${l.nativeName})`}</li>)}</ul></p>
            </>
          )
        }
      </div>
    )
}

export default CountryDetail;