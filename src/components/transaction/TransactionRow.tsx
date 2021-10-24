import { TableRow, TableCell } from "@mui/material";
import { FC } from "react";
import TransactionValue from "./TransactionValue";

export type TransactionType = {
  id: String,
  name: String,
  type: "income" | "expense",
  value: number,
};

interface Props {
  transaction: TransactionType,
}

export const isExpense = (transaction: TransactionType) => transaction.type === 'expense';

const TransactionRow: FC<Props> = ({ transaction }) => {
  return (
    <TableRow>
      <TableCell>{transaction.name}</TableCell>
      <TableCell>
        <TransactionValue
          type={transaction.type}
          value={transaction.value}
        ></TransactionValue>
      </TableCell>
    </TableRow>
  );
};

export default TransactionRow;
