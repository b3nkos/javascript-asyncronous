const fetchData = require('../utils/fetchData');
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
.then(data => {
  console.log(data.info.count);
  return fetchData(`${API}${data.results[0].id}`);
})
.then(character => {
  console.log(character.name);
  return fetchData(character.origin.url);
})
.then(origin => {
  console.log(origin.dimension);
})
.catch(err => console.error(err));