import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { addTransaction, fetchTransactions, removeTransaction, updateTransaction } from './transactionAPI';
import { TransactionType } from './TransactionRow';

export interface UpdateTransactionForm {
  payload: TransactionType,
}

export interface TransactionState {
  form: TransactionType,
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

export const cleanTransactionForm = (): TransactionType => ({
  id: null,
  type: "income",
  name: '',
  value: "0",
})

const initialState: TransactionState = {
  form: cleanTransactionForm(),
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

export const addTransactionAsync = createAsyncThunk(
  'transaction/add',
  async (transaction: TransactionType) => {
    const response = await addTransaction(transaction);

    return response.data;
  }
);

export const updateTransactionAsync = createAsyncThunk(
  'transaction/update',
  async (transaction: TransactionType) => {
    const response = await updateTransaction(transaction);

    return response.data;
  }
);

export const removeTransactionAsync = createAsyncThunk(
  'transaction/remove',
  async (transactionId: number) => {
    await removeTransaction(transactionId);

    return transactionId;
  }
)

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    openAddTransactionModal: (state) => {
      state.modal.add.opened = true;
    },
    closeAddTransactionModal: (state) => {
      state.modal.add.opened = false;
    },
    updateTransactionForm: (state, { payload }: UpdateTransactionForm) => {
      state.form = payload;
    },
    clearTransactionForm: (state) => {
      state.form = cleanTransactionForm();
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
      })
      .addCase(addTransactionAsync.fulfilled, (state, action) => {
        let transactions = state.transactions;

        transactions.push(action.payload);
      })
      .addCase(updateTransactionAsync.fulfilled, (state, action) => {
        let transactionIndex = state.transactions.findIndex((transaction: TransactionType) => transaction.id === action.payload.id);

        if (transactionIndex === -1) {
          return;
        }

        state.transactions[transactionIndex] = action.payload;
      })
      .addCase(removeTransactionAsync.fulfilled, (state, action) => {
        let transactionIndex = state.transactions.findIndex((transaction: TransactionType) => transaction.id === action.payload);

        if (transactionIndex === -1) {
          return;
        }

        state.transactions.splice(transactionIndex, 1);
      })
    ;
  },
});

export const {
  openAddTransactionModal,
  closeAddTransactionModal,
  updateTransactionForm,
  clearTransactionForm,
} = transactionSlice.actions;

export const selectTransactions = (state: RootState) => state.transaction.transactions;
export const selectFetchTransactionsLoading = (state: RootState) => state.transaction.loading.fetch;
export const isAddTranscationModalOpened = (state: RootState) => state.transaction.modal.add.opened;
export const transactionForm = (state: RootState) => state.transaction.form;

export default transactionSlice.reducer;
