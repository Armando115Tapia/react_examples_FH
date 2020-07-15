import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DCScreen = () => {
  return (
    <div>
      <h1>DC Screen</h1>
      <hr></hr>
      <HeroList publisher={'DC Comics'}></HeroList>
    </div>
  );
};
