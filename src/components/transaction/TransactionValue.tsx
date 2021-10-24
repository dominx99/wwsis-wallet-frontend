import { FC } from "react";
import Money from "../money/Money";
import { Value } from "./TransactionValue.styles";

interface Props {
  type: string,
  value: number,
};

const TransactionValue: FC<Props> = ({ type, value }) => {
  const isExpenseType = (type: string) => type === 'expense';

  return <Value color={type}>
    <span>{isExpenseType(type) ? '-' : '+'} </span>
    <Money value={value}></Money>
  </Value>
};

export default TransactionValue;
