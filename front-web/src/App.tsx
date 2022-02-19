import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/navbar';
import Filter from 'components/filter';
import Dashboard from 'components/dashboard';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Filter />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
