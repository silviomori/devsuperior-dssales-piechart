import './styles.css';
import { useEffect, useState } from 'react';
import { Store } from 'types/store';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { FilterData } from 'types/filter-data';

type Props = {
  onFilterChange?: (filterData: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStores] = useState<Store[]>([]);
  const { control, setValue, getValues } = useForm<FilterData>();

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

  const handleChangeStore = (value: Store) => {
    setValue('store', value);
    const obj: FilterData = {
      store: getValues('store')
    };
    onFilterChange?.(obj);
  };

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
              onChange={(value) => handleChangeStore(value as Store)}
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Filter;
