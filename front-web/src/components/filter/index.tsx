import './styles.css';
import { useEffect, useState } from 'react';
import { Store } from 'types/store';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

type FilterData = {
  store: Store;
};

function Filter() {
  const [stores, setStores] = useState<Store[]>([]);
  const { control } = useForm<FilterData>();

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
      <div className="filter-select-container">
        <Controller
          name="store"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className="filter-select"
              classNamePrefix="filter-select"
              options={stores}
              isClearable
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          )}
        />{' '}
      </div>
    </div>
  );
}

export default Filter;
