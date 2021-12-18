import { TransactionType } from './TransactionRow'

export function fetchTransactions() {
  return new Promise<{ data: TransactionType[] }>((resolve) =>
    setTimeout(() => resolve({
      data: [
        {
          id: 'some-id-1',
          name: 'Wyjście do kina',
          type: 'expense',
          value: 4150,
        },
        {
          id: 'some-id-2',
          name: 'Wypłata',
          type: 'income',
          value: 373000,
        },
        {
          id: 'some-id-3',
          name: 'Zakupy',
          type: 'expense',
          value: 15248,
        },
        {
          id: 'some-id-4',
          name: 'Zwrot',
          type: 'income',
          value: 300,
        },
      ]
    }), 50)
  );
}
