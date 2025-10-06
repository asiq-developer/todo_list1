import React from 'react';

const CategoryFilter = ({ selectedCategory, setCategory }) => {
  const categories = ['work', 'shopping', 'personal'];

  return (
    <div>
      {categories.map((catee) => (
        <label key={catee}>
          <input type="radio"  checked={selectedCategory === catee} onChange={(e) => setCategory(e.target.value)}/>
          {catee}
        </label>
           ))}
    </div>
  );
};

export default CategoryFilter;
