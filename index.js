const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
    params: {
        ingr: 'chicken breast',
        'nutrition-type': 'logging'
    },
    headers: {
        'X-RapidAPI-Key': '95cfb9760cmshadff21d90107fe6p182ba8jsnf672248db8b9',
        'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
    }
};

try {
    const response =  await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}