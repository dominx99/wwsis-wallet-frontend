import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchTransactions } from './transactionAPI';
import { TransactionType } from './TransactionRow';

export interface TransactionState {
  modal: {
    add: {
      opened: boolean,
    },
  }
  loading: {
    fetch: boolean
    add: boolean,
  },
  transactions: TransactionType[],
}

const initialState: TransactionState = {
  modal: {
    add: {
      opened: false,
    },
  },
  loading: {
    fetch: true,
    add: false,
  },
  transactions: [],
};

export const fetchTransactionsAsync = createAsyncThunk(
  'transaction/fetchTransactions',
  async () => {
    const response = await fetchTransactions();

    return response.data;
  }
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TransactionType>) => {
      state.transactions.push(action.payload)
    },
    openAddTransactionModal: (state) => {
      state.modal.add.opened = true;
    },
    closeAddTransactionModal: (state) => {
      state.modal.add.opened = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsAsync.pending, (state) => {
        state.loading.fetch = true;
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.transactions = action.payload;
      });
  },
});

export const {
  add,
  openAddTransactionModal,
  closeAddTransactionModal,
} = transactionSlice.actions;

export const selectTransactions = (state: RootState) => state.transaction.transactions;
export const selectFetchTransactionsLoading = (state: RootState) => state.transaction.loading.fetch;
export const isAddTranscationModalOpened = (state: RootState) => state.transaction.modal.add.opened;

export default transactionSlice.reducer;
