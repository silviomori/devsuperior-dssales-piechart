import './styles.css';
import { Store } from 'types/store';
import { useEffect, useState } from 'react';
import { SalesByGender } from 'types/sales-by-gender';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig, buildSalesByGenderChartData } from './helpers';
import { SalesByGenderChartData } from 'types/sales-by-gender-chart-data';

type Props = {
  store?: Store;
};

const initialPieChartData: SalesByGenderChartData = {
  labels: [],
  series: []
};

function PieChart({ store }: Props) {
  const [salesByGenderChartData, setSalesByGenderChartData] =
    useState<SalesByGenderChartData>(initialPieChartData);

  useEffect(() => {
    const config: AxiosRequestConfig<SalesByGender[]> = {
      method: 'GET',
      url: '/sales/by-gender',
      params: { storeId: store?.id }
    };
    requestBackend(config).then((response) => {
      setSalesByGenderChartData(buildSalesByGenderChartData(response.data));
    });
  }, [store]);

  return (
    <div className="pie-chart-container">
      <ReactApexChart
        options={buildPieChartConfig(salesByGenderChartData?.labels)}
        type="donut"
        width="400"
        series={salesByGenderChartData?.series}
      />
    </div>
  );
}

export default PieChart;
