/* eslint-disable import/no-unresolved */
import Food from './Food';

interface Receipt {
  id: string;
  menu: Food[];
  totalPrice: number;
}

export default Receipt;
