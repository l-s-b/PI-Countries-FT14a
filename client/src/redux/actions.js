import axios from 'axios';
import Countries from '../components/Countries';
import CountryDetail from '../components/CountryDetail';

export const GET_ALL = "GET_ALL";
export const GET_COUNTRY_BY_ALPHA = "GET_COUNTRY_BY_ALPHA";
export const POST_CUSTOM_COUNTRY = "POST_CUSTOM_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";

// getCountries Action (Promise style)
export function getCountries() {
    return (dispatch) => {
        axios.get('http://localhost:3001/countries')
            .then(response => {
                dispatch({
                    type: GET_ALL,
                    payload: response.data
                })
            })
    }
};

export function getCountry(alpha3Code) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries/${alpha3Code}`)
            .then(response => {
                dispatch({
                    type: GET_COUNTRY_BY_ALPHA,
                    payload: response.data
                })
            })
    }
};

