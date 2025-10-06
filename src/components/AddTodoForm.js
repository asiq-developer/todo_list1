// AddTodoForm.js
import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';

const AddTodoForm = () => {
  const [addName, setAddName] = useState('');
  const [category, setCategory] = useState('');
  const [searchName, setSearchName] = useState('');
   const [date , setDate] = useState('')

  const {
    names, filteredNames, addTodo,
    deleteTodo,toggleCheckbox,
    setFilter,
      filter
   
  } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addName.trim() || !category) {
      alert('Please enter both name and category');
      return;
    }
    addTodo(addName, category , date);
    setAddName('');
    setCategory('');
  };

  const filteredSearch = names.filter((item) =>
    item.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      
      <input type="text" placeholder="Search"   onChange={(e) => setSearchName(e.target.value)} />
      {searchName.trim() !== '' && (
        <ul>
          {filteredSearch.length > 0 ? (
            filteredSearch.map(item => (
        <li key={item.id}>
                {item.name} {item.Date}{' '}
                <button onClick={() => deleteTodo(item.id)}>Delete</button>
              </li>
            ))
          ) : (
            <li>No matches found.</li>
          )}
        </ul>
      )}    
    
      <div className='filter-btn'>
        <button onClick={() => setFilter('all')}  style={{ backgroundColor: filter === 'all' ? 'lightgrey' : 'white' }}>All</button>
        <button onClick={() => setFilter('active')} style={{ backgroundColor: filter === 'active' ? 'lightgrey' : 'white' }}>Active</button>
        <button onClick={() => setFilter('completed')} style={{ backgroundColor: filter === 'completed' ? 'lightgrey' : 'white' }}>Completed</button>
      </div>

      <ul>
        {filteredNames.map((item) => (
          <li key={item.id}>
            {item.name}
            <input type="checkbox" checked={item.completed} onChange={() => toggleCheckbox(item.id)} />
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>




      <form className='form-main' onSubmit={handleSubmit}>
        <h2>Add Todo</h2>
        <div>
        <input type="text" value={addName} onChange={(e) => setAddName(e.target.value)} placeholder="Enter name"/>
        <div className='radio-btn'>
          <label>
            <input type="radio" value="work" checked={category === 'work'} onChange={(e) => setCategory(e.target.value)}/>
            Work
          </label>
          <label>
            <input type="radio"  value="shopping" checked={category === 'shopping'} onChange={(e) => setCategory(e.target.value)} />
            Shopping
          </label>
          <label>
            <input type="radio" value="personal" checked={category === 'personal'} onChange={(e) => setCategory(e.target.value)} />
            Personal
          </label>
          </div>
        </div>
        <input type="date"  onChange={(e)=>setDate(e.target.value)}   />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTodoForm;

