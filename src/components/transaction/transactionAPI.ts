import { TransactionType } from './TransactionRow'

export function fetchTransactions() {
  console.log('test')
  return new Promise<{ data: TransactionType[] }>((resolve) =>
    setTimeout(() => resolve({
      data: [
        {
          id: 'some-id',
          name: 'test 1',
          type: 'expense',
          value: 15,
        }
      ]
    }), 50)
  );
}
