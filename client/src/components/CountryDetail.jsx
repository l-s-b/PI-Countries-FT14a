import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, clearDetail } from "../redux/actions";
import { Link, useParams } from 'react-router-dom';
import Error404 from './Error404';

function CountryDetail() {
  const dispatch = useDispatch();
  const c = useSelector((state) => state.country); // Mapping
  const { alpha3Code } = useParams();
  const waitgif = "https://i.pinimg.com/originals/2b/07/f6/2b07f62987e987d4e53e84aa8b963b83.gif";
  useEffect(() => {
    dispatch(getCountry(alpha3Code));
    return () => {dispatch(clearDetail)};
  }, [dispatch, alpha3Code]);

  switch(c) {
  case undefined: return <img src={waitgif} alt=''/>;
  case null: return <Error404 />;
  default: return <div className="country">
  <h2>{`${c.name} [${c.alpha3Code}]`}</h2>
  <img src={c.flag} alt=''/>
  <p>Region: {c.region}</p>
  <p>Subregion: {c.subregion}</p>
  <p>Capital: {c.capital}</p>
  <p>Population: {c.population}</p>
  <p>Area: {c.area + ' [km²]'}</p>
  <p>Density: {Math.round(((Number(c.population) / Number(c.area)) + Number.EPSILON) * 100) / 100 + ' [/km²]'}</p>
  <div><h3>Currencies:</h3> <ul>{c.currencies?.map(cu => <li>{`${cu.name} (${cu.code})`}</li>)}</ul></div>
  <div><h3>Languages: </h3> <ul>{c.languages?.map(l => <li>{`${l.name} (${l.nativeName})`}</li>)}</ul></div>
  <div><h3>Touristic Activities:</h3> <ul><Link to={`/activities/`/*${activities}*/ }>...Yet to be coded.</Link></ul></div>
</div>
}
}

export default CountryDetail;