// hooks/useTodos.js
import { useState, useEffect, useCallback, useMemo } from 'react';

export const useTodos = () => {
  const [names, setNames] = useState([]);
  const [filter, setFilter] = useState('all');
 

  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem('names')) ;
    setNames(savedNames);
  }, []);

 

  const addTodo = useCallback((name, category , date) => {
    const trimmed = name.trim();
    if (!trimmed || !category) return;

    const newItem = {
      id: Date.now().toString(),
         name: trimmed,
          category,
       Date: date,
      completed: false,
    };

    const updated = [...names, newItem];
    setNames(updated);
    localStorage.setItem('names', JSON.stringify(updated));
  }, [names]);

  const deleteTodo = useCallback((id) => {
    const updated = names.filter((item) => item.id !== id);
    setNames(updated);
    localStorage.setItem('names', JSON.stringify(updated));
  }, [names]);

  const toggleCheckbox = useCallback((id) => {
    const updated = names.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setNames(updated);
    localStorage.setItem('names', JSON.stringify(updated));
  }, [names]);

  const filteredNames = useMemo(() => {
    return names.filter((item) => {
      if (filter === 'all') return true;
      if (filter === 'active') return !item.completed;
      if (filter === 'completed') return item.completed;
      return true;
    });
  }, [names, filter]);

  return {
    names,
       filteredNames,
    addTodo,
    deleteTodo,  toggleCheckbox,setFilter, filter,
    // todayDate,
    
    
  };
};
