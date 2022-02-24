import { ApexOptions } from 'apexcharts';
import { SalesByGender } from 'types/sales-by-gender';
import { formatGender } from 'util/formatters';

export const buildSalesByGenderChartData = (salesByGender: SalesByGender[]) => {
  const labels = salesByGender.map((item) => formatGender(item.gender));
  const series = salesByGender.map((item) => item.sum);
  return { labels, series };
};

export const buildPieChartConfig = (labels: string[] = [], name = '') => {
  return {
    labels,
    noData: {
      text: 'No data',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif'
      }
    },
    //colors: ['#3e82f7', '#04d182', '#ffc107', '#ff6b72'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 0,
      labels: {
        colors: ['#b4bed2']
      },
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 10
      }
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '55%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '24px',
              color: '#ABB1C0',
              fontFamily: 'Roboto, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};
