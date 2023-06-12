const axios = require('axios');
require('dotenv').config();

const options = {
    method: 'GET',
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
    params: {
        ingr: 'chicken breast',
        'nutrition-type': 'logging'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RapidAPIKey,
        'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
    }
};

try {
    const response =  await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}