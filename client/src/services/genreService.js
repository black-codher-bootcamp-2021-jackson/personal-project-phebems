import axios from "axios";

const getGenres = async () => {
  const response = await axios.get('/api/available-genres');
  return response.data || [] ;
};
export {getGenres}