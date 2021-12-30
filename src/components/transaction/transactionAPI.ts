import { TransactionFormType, TransactionType } from './TransactionRow'
import axios from 'axios';

export function fetchTransactions() {
  return new Promise<{ data: TransactionType[] }>(async (resolve) => {
    const res = await axios.get('api/transactions')

    resolve(res);
  });
}

export function addTransaction(transaction: TransactionFormType) {
  return new Promise<{ data: TransactionType }>(async (resolve) => {
    const res = await axios.post('api/transactions', transaction);

    resolve(res);
  })
}
