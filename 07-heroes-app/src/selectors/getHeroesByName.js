import { heroes } from '../data/heroes';
export const getHeroesByName = (textSearch = '') => {
  if (textSearch === '') {
    return [];
  }
  textSearch = textSearch.toLocaleLowerCase();
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(textSearch)
  );
};
