import './styles.css';
import PieChartImg from 'assets/images/pie-chart.png';
import { Store } from 'types/store';
import { useEffect, useState } from 'react';
import { SalesByGender } from 'types/sales-by-gender';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

type Props = {
  store?: Store;
};

function PieChart({ store }: Props) {
  const [salesByGender, setSalesByGender] = useState<SalesByGender>();
  useEffect(() => {
    const config: AxiosRequestConfig<SalesByGender> = {
      method: 'GET',
      url: '/sales/by-gender',
      params: { storeId: store?.id }
    };
    requestBackend(config).then((response) => {
      const sales = response.data;
      console.log(sales);
      setSalesByGender(sales);
    });
  }, [store]);

  return (
    <div className="pie-chart-container">
      <img src={PieChartImg} alt={'pie-chart'} />
    </div>
  );
}

export default PieChart;
