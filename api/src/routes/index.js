const { Router } = require('express');
const axios = require('axios').default;
const cors = require('cors');
// WHEN IT'S ALL SET, CREATE ROUTES AND IMPORT THEM HERE
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get(cors());


// CREATE AN ACTIVITY AND REMOVE THIS:
const activities = [{
    'id': 2,
    'name': 'Dummy Activity',
    'difficulty': '🥵🥵⚫⚫⚫',
    'estimated-time': 30,
    'season': 'All',
  }];

  const customCountries = [
    {
    "name": "Liberland",
      "topLevelDomain": [
        ".ll"
      ],
      "alpha2Code": "LL",
      "alpha3Code": "LIB",
      "callingCodes": [
        "422"
      ],
      "capital": "Liberland",
      "altSpellings": [
        "LL",
        "Free Republic of Liberland"
      ],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 0,
      "latlng": [
        45.75,
        18.9,
      ],
      "demonym": "Liberlandian",
      "area": 7.0,
      "gini": 27.8,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "HRV",
        "SRB",
      ],
      "nativeName": "Liberland",
      "numericCode": "004",
      "currencies": [
        {
          "code": "LLM",
          "name": "Liberland Merit",
          "symbol": "LLM"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {},
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Liberland.svg/1024px-Flag_of_Liberland.svg.png",
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union",
          "otherAcronyms": [],
          "otherNames": []
        }
      ],
      "cioc": "LIB"
    },
    ]

// Main route (Promise style)
router.get('/countries', (req, res) => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {res.json([...response.data, ...customCountries])})
      .catch(error => res.status(500).json({error: 'Error 500: Cannot fetch API.'}));
})

/* THIS IS NOT WORKING:
router.get('/activities', (req, res) => {
    axios.get('https://localhost:3001/activities')
      .then(response => { res.json([...activities])})
      .catch(error => res.status(500).json({error: 'Error 500: Cannot fetch API.'}))
})
 */

//Country Detail (Async function)
router.get('/countries/:alpha3Code', async (req, res) => {
try {
    const country = await axios.get(`https://restcountries.eu/rest/v2/alpha/${req.params.alpha3Code}`);
    res.json(country.data);
} catch(error) {
    if(error.response?.status === 404) {
      // Country.findByPk(req.params.alpha3Code).then(country => if(country) return res.json(country);
      // return res.status(404).json({error: 'Error 404: There is no country for the specified alpha3Code.'});)
        const country = customCountries.find(c => c.alpha3Code === req.params.alpha3Code);
        if(country) return res.json(country); // Alas, does not work using ternary operator.
        return res.sendStatus(404);
    };
    res.status(500).json({error: 'Error 500: Cannot fetch API.'});
}
})

module.exports = router;
