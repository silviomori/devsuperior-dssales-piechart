import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/navbar';
import Filter from 'components/filter';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Filter />
      </div>
    </>
  );
}

export default App;
