import './styles.css';
import TotalSales from './total-sales';
import PieChart from './pie-chart';
import { FilterData } from 'types/filter-data';

type Props = {
  filterData?: FilterData;
};

function Dashboard({ filterData }: Props) {
  return (
    <div className="base-card dashboard-container">
      <div className="dashboard-total-sales">
        <TotalSales store={filterData?.store} />
      </div>
      <div className="dashboard-pie-chart">
        <PieChart store={filterData?.store} />
      </div>
    </div>
  );
}

export default Dashboard;
