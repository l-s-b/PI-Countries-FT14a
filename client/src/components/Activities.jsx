import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../redux/actions";
import { Link } from 'react-router-dom';

function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities); // Mapping
  const waitgif = "https://i.pinimg.com/originals/2b/07/f6/2b07f62987e987d4e53e84aa8b963b83.gif";
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

    return (
      <div className="Activities">
        {!activities ? (
          <img src={waitgif} alt=''/>
        ) : (
          activities.map((a) => (
            <Link to={`/activities/${a.name}`}>
              <h2>{a.name}</h2>
              <p>Time needed: {a.estimated_time} hours (including transportation)</p>
              <p>Difficulty: {a.difficulty}</p>
              <p>Most recommended during: {a.season}</p>
            </Link>
          ))
        )}
      </div>
    )
}

export default Activities;
