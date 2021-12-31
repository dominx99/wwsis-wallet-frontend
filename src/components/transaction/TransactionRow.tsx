import { Delete, Edit } from "@mui/icons-material";
import { IconButton, TableCell } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { TransactionTableRow } from "./Transaction.styles";
import { openAddTransactionModal, removeTransactionAsync, updateTransactionForm } from "./transactionSlice";
import TransactionValue from "./TransactionValue";

export type TransactionType = {
  id: number | null,
  name: String,
  type: "income" | "expense",
  value: string,
}

interface Props {
  transaction: TransactionType,
}

export const isExpense = (transaction: TransactionType) => transaction.type === 'expense';

const TransactionRow: FC<Props> = ({ transaction }) => {
  const dispatch = useAppDispatch();

  const handleDeleteTransaction = (transactionId: number | null) => {
    if (transactionId === null) {
      return;
    }

    dispatch(removeTransactionAsync(transactionId));
  }

  const handleEditTransaction = (transaction: TransactionType) => {
    let transactionForm = Object.assign({}, transaction);
    transactionForm.value = (parseInt(transactionForm.value) / 100).toString().replace('.', ',');

    dispatch(updateTransactionForm(transactionForm));
    dispatch(openAddTransactionModal());
  }

  return (
    <TransactionTableRow>
      <TableCell>{transaction.name}</TableCell>
      <TableCell>
        <TransactionValue
          type={transaction.type}
          value={transaction.value}
        ></TransactionValue>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={() => handleEditTransaction(transaction)} aria-label="edit">
          <Edit color="primary" />
        </IconButton>
        <IconButton onClick={() => handleDeleteTransaction(transaction.id)} aria-label="delete">
          <Delete color="error" />
        </IconButton>
      </TableCell>
    </TransactionTableRow>
  );
};

export default TransactionRow;
