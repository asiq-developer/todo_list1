 
  import React, { memo } from 'react';

  const TodoItem = ({ item, onToggle, onDelete }) => {
    return (
      <li>
        {item.name} ({item.category}) - {item.Date}
        <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)} />
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </li>
);
  };


  export default memo(TodoItem);
