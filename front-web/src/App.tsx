import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/navbar';
import Filter from 'components/filter';
import { FilterData } from 'types/filter-data';
import Dashboard from 'components/dashboard';
import { useState } from 'react';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Filter onFilterChange={onFilterChange} />
        <Dashboard filterData={filterData} />
      </div>
    </>
  );
}

export default App;
