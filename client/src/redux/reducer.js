import { GET_COUNTRIES, GET_ACTIVITIES, GET_COUNTRY_BY_ALPHA, POST_ACTIVITY, POST_CUSTOM_COUNTRY } from './actions';
const initialState = {
    countries: undefined,
    country: undefined,
    activities: undefined,
    activity: undefined };

function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_COUNTRIES:  {
            return {
                ...state,
                countries: action.payload
            }
        }
        case GET_COUNTRY_BY_ALPHA: {
            return {
                ...state,
                country: action.payload
            }
        }
        case GET_ACTIVITIES: {
            return {
                ...state,
                activities: action.payload
            }
        }
        case POST_CUSTOM_COUNTRY: {
            return state;
        }
        case POST_ACTIVITY: {
            return state;
        }
        default: { return state; }
    }
}

export default reducer;