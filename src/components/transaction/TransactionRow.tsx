import { Delete } from "@mui/icons-material";
import { IconButton, TableCell } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { TransactionTableRow } from "./Transaction.styles";
import { removeTransactionAsync } from "./transactionSlice";
import TransactionValue from "./TransactionValue";

export type TransactionFormType = {
  name: String,
  type: "income" | "expense",
  value: number,
}

export type TransactionType = TransactionFormType & {
  id: number,
};

interface Props {
  transaction: TransactionType,
}

export const isExpense = (transaction: TransactionType) => transaction.type === 'expense';

const TransactionRow: FC<Props> = ({ transaction }) => {
  const dispatch = useAppDispatch();

  const handleDeleteTransaction = (transactionId: number) => {
    dispatch(removeTransactionAsync(transactionId));
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
        <IconButton onClick={() => handleDeleteTransaction(transaction.id)} aria-label="delete">
          <Delete color="error" />
        </IconButton>
      </TableCell>
    </TransactionTableRow>
  );
};

export default TransactionRow;
