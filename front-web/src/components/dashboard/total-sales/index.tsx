import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { SalesSummary } from 'types/sales-summary';
import { Store } from 'types/store';
import { formatCurrency } from 'util/formatters';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  store?: Store;
};

function TotalSales({ store }: Props) {
  const [salesSummary, setSalesSummary] = useState<SalesSummary>();
  useEffect(() => {
    const config: AxiosRequestConfig<SalesSummary> = {
      method: 'GET',
      url: '/sales/summary',
      params: { storeId: store?.id }
    };
    requestBackend(config).then((response) => {
      setSalesSummary(response.data);
    });
  }, [store]);

  return (
    <div className="total-sales-container">
      <h1>{formatCurrency(salesSummary ? salesSummary.sum : 0)}</h1>
      <h2>Total sales</h2>
    </div>
  );
}

export default TotalSales;
