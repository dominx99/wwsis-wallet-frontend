import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TransactionRow from "./TransactionRow";
import { fetchTransactionsAsync, selectFetchTransactionsLoading, selectTransactions } from "./transactionSlice";

interface Props { }

const TransactionList: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);
  const fetchTransactionsLoading = useAppSelector(selectFetchTransactionsLoading);

  useEffect(() => {
    if (fetchTransactionsLoading) {
      dispatch(fetchTransactionsAsync());
    }
  })

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, key) => (
            <TransactionRow key={key} transaction={transaction}></TransactionRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;
