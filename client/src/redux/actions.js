import axios from 'axios';

// getCountries Action (Promise style)
export function getCountries() {
    return(dispatch) => {
        axios.get('http://localhost:3001/countries')
            .then(response => {
                dispatch({
                    type: GET_ALL,
                    payload: response.data,
                })
            })
    }
};

export const GET_ALL = "GET_ALL";
export const GET_COUNTRY_BY_ALPHA = "GET_COUNTRY_BY_ALPHA";
export const POST_CUSTOM_COUNTRY = "POST_CUSTOM_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";