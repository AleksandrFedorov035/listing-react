import Listing from './components/Listing';
import data from './data/etsy.json';

const App = () => {
  return (
    <div>
      <Listing items={data} />
    </div>
  );
};

export default App;
