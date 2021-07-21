import axios from 'axios';
import React from 'react';
import OtherError from '../components/OtherError';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ALPHA = "GET_COUNTRY_BY_ALPHA";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_CUSTOM_COUNTRY = "POST_CUSTOM_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";

const baseURL = process.env.REACT_APP_API || "http://localhost:3001";

// Country list Action (Promise style)
export function getCountries() {
    return (dispatch) => {
        axios.get(`${baseURL}/countries`)
            .then(response => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data
                })
            })
    }
};

// Country detail action (Promise style)
export function getCountry(alpha3Code) {
    return (dispatch) => {
        axios.get(`${baseURL}/countries/${alpha3Code}`)
            .then(response => {
                dispatch({
                    type: GET_COUNTRY_BY_ALPHA,
                    payload: response.data
                })
            }).catch(error => {
                if(error.response?.status !== '404') {< OtherError /> }
            dispatch({
                type: GET_COUNTRY_BY_ALPHA,
                payload: null
            })
        })
    }
};

// Activity list Action (Promise style)
export function getActivities() {
    return (dispatch) => {
        axios.get(`${baseURL}/activities`)
            .then(response => {
                dispatch({
                    type: GET_ACTIVITIES,
                    payload: response.data
                })
            })
    }
};

// Clear country detail action (Promise style)
export function clearDetail() {
    return {
           type: GET_COUNTRY_BY_ALPHA,
           payload: undefined
   }
};


