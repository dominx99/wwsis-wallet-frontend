import { TransactionType } from './TransactionRow'

export function fetchTransactions() {
  return new Promise<{ data: TransactionType[] }>((resolve) =>
    setTimeout(() => resolve({
      data: [
        {
          id: 'some-id-1',
          name: 'test 1',
          type: 'expense',
          value: 15,
        },
        {
          id: 'some-id-2',
          name: 'test 2',
          type: 'income',
          value: 30,
        },
        {
          id: 'some-id-3',
          name: 'test 3',
          type: 'expense',
          value: 15,
        },
        {
          id: 'some-id-4',
          name: 'test 4',
          type: 'income',
          value: 30,
        },
      ]
    }), 50)
  );
}
