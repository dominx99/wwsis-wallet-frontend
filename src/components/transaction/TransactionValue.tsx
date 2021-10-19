import { FC } from "react";
import styled, { css } from "styled-components";
import Money from "../money/Money";

interface Props {
  type: string,
  value: number,
};

const Value = styled.span`
`;

const TransactionValue: FC<Props> = ({ type, value }) => {
  const isExpenseType = (type: string) => type === 'expense';

  return <Value>
    <span>{isExpenseType(type) ? '-' : '+'} </span>
    <Money value={value}></Money>
  </Value>
};

export default TransactionValue;
