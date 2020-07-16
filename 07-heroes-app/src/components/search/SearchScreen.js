import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForms } from '../../hooks/useForms';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForms({ heroSearch: q });
  const { heroSearch } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${heroSearch}`);
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
          {q === '' && <div className="alert alert-info">Search a hero </div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is not a hero with {q}{' '}
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))}
        </div>
      </div>
    </div>
  );
};
