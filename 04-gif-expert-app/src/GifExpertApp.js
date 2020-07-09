import React, { useState } from 'react';
import { AddCategry } from './components/AddCategry';
import GifGrid from './components/GifGrid';

const GifExpertApp = (props) => {
  // const categories = ['One Punch', 'Samuaray X', 'Drangon Ball'];
  const [categories, setCategories] = useState(['One Punch']);

  /*const handleAdd = () => {
    setCategories((cats) => [...cats, 'Hunter']);
  };*/

  return (
    <>
      <h2> GifExpertApp</h2>
      <hr />
      <AddCategry setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
