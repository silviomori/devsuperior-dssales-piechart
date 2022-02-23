import './styles.css';
import TotalSales from './total-sales';
import PieChart from './pie-chart';
import { FilterData } from 'types/filter-data';
import { useEffect } from 'react';

type Props = {
  filterData?: FilterData;
};

function Dashboard({ filterData }: Props) {
  useEffect(() => {
    console.log('Dashboard:', filterData);
  }, [filterData]);

  return (
    <div className="base-card dashboard-container">
      <div className="dashboard-total-sales">
        <TotalSales />
      </div>
      <div className="dashboard-pie-chart">
        <PieChart />
      </div>
    </div>
  );
}

export default Dashboard;
