import { FC } from "react";
import TransactionList from "../../components/transaction/TransactionList";

interface Props {};

const DashboardPage: FC<Props> = () => (
  <TransactionList />
);

export default DashboardPage;
