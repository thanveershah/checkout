import React from 'react';
import './Graph.scss';

const products = [
   { name: 'IPhone X', percentage: '20%' },
   { name: 'S21 Ultra', percentage: '80%' },
   { name: 'Vivo Plus', percentage: '50%' },
   { name: 'Sony', percentage: '30%' },
];

const Graph = () => {
   return (
      <aside className="graph-container">
         <div className="container">
            <h2>Current Trends</h2>
            <div className="graph-holder">
               {products.map((data, index) => (
                  <div className="bar" key={index} style={{ height: data.percentage }}>
                     <p className="description">{data.name}</p>
                  </div>
               ))}
            </div>
         </div>
      </aside>
   );
};

export default Graph;
