import { TransactionType } from './TransactionRow'
import axios from 'axios';

export function fetchTransactions() {
  return new Promise<{ data: TransactionType[] }>(async (resolve) => {
    const res = await axios.get('api/transactions')

    resolve(res);
  });
}
