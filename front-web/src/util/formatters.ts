import { Gender } from 'types/gender';

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Male',
    FEMALE: 'Female',
    OTHER: 'Other'
  };
  return textByGender[gender];
};
