import './styles.css';
import PieChartImg from 'assets/images/pie-chart.png';

function PieChart() {
  return (
    <div className="pie-chart-container">
      <img src={PieChartImg} alt={'pie-chart'} />
    </div>
  );
}

export default PieChart;
