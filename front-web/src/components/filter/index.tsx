import './styles.css';
import { useEffect, useState } from 'react';
import { Store } from 'types/store';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

function Filter() {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/stores'
    };
    requestBackend(config).then((response) => {
      console.log(response.data);
      setStores(response.data);
    });
  }, []);

  return (
    <div className="base-card filter-container">
      <input className="filter-input" value="Araguari"></input>
    </div>
  );
}

export default Filter;
