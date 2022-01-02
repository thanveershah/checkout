import { Fragment } from 'react';
import Header from './components/Rating/Header/Header';
import Graph from './pages/Graph/Graph';
import Review from './pages/Review/Review';

function App() {
   return (
      <Fragment>
         <Header />
         <main className="container flex-reverse">
            <Graph />
            <Review />
         </main>
      </Fragment>
   );
}

export default App;
