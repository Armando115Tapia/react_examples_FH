import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategry = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => {
        console.log('cats: ', cats);
        return [inputValue,   ...cats];
      });
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategry.propTypes = { setCategories: PropTypes.func.isRequired };
