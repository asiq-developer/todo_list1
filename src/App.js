import React, { useContext } from 'react';
import AddTodoForm from './components/AddTodoForm';
import { ThemeContext } from './context/ThemeContext'; 


const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h2> Todo List</h2>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      <main>
        <AddTodoForm />
       
      </main>
         <footer>
        <p>
          Developed by <strong>Mohammed Asiq</strong> |{' '}
       <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
  GitHub
</a>

        </p>
      </footer>
   
    </div>
  );
};

export default App;
