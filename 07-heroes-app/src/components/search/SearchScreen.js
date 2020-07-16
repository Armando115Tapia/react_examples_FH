import React from 'react';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForms } from '../../hooks/useForms';

export const SearchScreen = () => {
  const [formValues, handleInputChange] = useForms({ heroSearch: '' });
  const { heroSearch } = formValues;

  const heroesFiltered = heroes;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(heroSearch);
  };
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr></hr>
          <form>
            <input
              type="text"
              name="heroSearch"
              value={heroSearch}
              onChange={handleInputChange}
              placeholder="Find your hero"
              autoComplete="off"
              className="form-control"
            ></input>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-block btn-info mt-2"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr></hr>
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))}
        </div>
      </div>
    </div>
  );
};
