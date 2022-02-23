import { useEffect,useState } from "react";
import { default as ReactSelect } from "react-select";
import { getGenres } from "../services/genreService";

const GenreDropdown = () => {

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    async function availableGenres() {
      const response = await getGenres();
      setGenres(response);
    }
    availableGenres();
  }, []);

    return ( 
        <ReactSelect
        options={genres.map((item) => ({
          label: item.name,
          value: item.name,
          ...item,
        }))}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={true}
        onChange={(item) => {setSelectedGenres(item.map(item => item.name))}}        allowSelectAll={false}
      />
     );
}
 
export default GenreDropdown;