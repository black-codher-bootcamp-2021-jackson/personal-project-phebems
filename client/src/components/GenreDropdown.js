import { useEffect, useState } from "react";
import { default as ReactSelect } from "react-select";
import { getGenres } from "../services/genreService";

const GenreDropdown = ({selectedGenres, setSelectedGenres, genres, setGenres, ...props}) => {

  useEffect(() => {
    async function availableGenres() {
      const response = await getGenres();
      setGenres(response);
    }
    availableGenres();
  }, []);

  useEffect(() => {
    function allGenres() {
        console.log(selectedGenres.join())
    }
    allGenres();
  }, [selectedGenres]);

  const onChange = (item) => {
    setSelectedGenres(item.map(item => item.name))
  }

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
      onChange={onChange}
      allowSelectAll={false}
    />
  );
};

export default GenreDropdown;
