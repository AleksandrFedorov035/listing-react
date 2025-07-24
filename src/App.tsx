import Listing from './components/Listing';
import data from './data/etsy.json';
import "./App.css"

const App = () => {
  return (
    <Listing items={data} />
  );
};

export default App;
