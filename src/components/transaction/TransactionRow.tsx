import { TableCell } from "@mui/material";
import { FC } from "react";
import { TransactionTableRow } from "./Transaction.styles";
import TransactionValue from "./TransactionValue";

export type TransactionFormType = {
  name: String,
  type: "income" | "expense",
  value: number,
}

export type TransactionType = TransactionFormType & {
  id: String,
};

interface Props {
  transaction: TransactionType,
}

export const isExpense = (transaction: TransactionType) => transaction.type === 'expense';

const TransactionRow: FC<Props> = ({ transaction }) => {
  return (
    <TransactionTableRow>
      <TableCell>{transaction.name}</TableCell>
      <TableCell>
        <TransactionValue
          type={transaction.type}
          value={transaction.value}
        ></TransactionValue>
      </TableCell>
    </TransactionTableRow>
  );
};

export default TransactionRow;
