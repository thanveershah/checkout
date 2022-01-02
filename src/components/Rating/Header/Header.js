import React from 'react';
import './Header.scss';

const Header = () => {
   const toggleTheme = event => {
      const body = document.body;
      if (body.classList.contains('dark')) {
         event.target.textContent = 'Dark Mode';
         document.body.classList.remove('dark');
         return;
      }
      event.target.textContent = 'Light Mode';
      document.body.classList.add('dark');
   };

   return (
      <header>
         <div className="container">
            <button onClick={toggleTheme}>Dark Mode</button>
         </div>
      </header>
   );
};

export default Header;
