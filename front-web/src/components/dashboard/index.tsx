import './styles.css';
import TotalSales from './total-sales';
import PieChart from './pie-chart';

function Dashboard() {
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
