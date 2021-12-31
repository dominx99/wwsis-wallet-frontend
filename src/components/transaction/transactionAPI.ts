import { TransactionType } from './TransactionRow'
import axios from 'axios';

export function fetchTransactions() {
  return new Promise<{ data: TransactionType[] }>(async (resolve) => {
    const res = await axios.get('api/transactions')

    resolve(res);
  });
}

export function addTransaction(transaction: TransactionType) {
  return new Promise<{ data: TransactionType }>(async (resolve) => {
    const res = await axios.post('api/transactions', transaction);

    resolve(res);
  })
}

export function updateTransaction(transaction: TransactionType) {
  return new Promise<{ data: TransactionType }>(async (resolve) => {
    const res = await axios.put(`api/transactions/${transaction.id}`, transaction);

    resolve(res);
  })
}

export function removeTransaction(transactionId: number) {
  return new Promise<{ data: TransactionType }>(async (resolve) => {
    const res = await axios.delete(`api/transactions/${transactionId}`);

    resolve(res);
  })
}
