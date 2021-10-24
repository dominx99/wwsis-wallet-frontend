import { Container } from "@mui/material";
import { FC } from "react";
import { Wrapper } from "../../components/app/App.styles";
import { TransactionSection } from "../../components/transaction/Transaction.styles";
import TransactionList from "../../components/transaction/TransactionList";

interface Props {};

const DashboardPage: FC<Props> = () => (
  <Wrapper>
    <TransactionSection>
      <Container>
        <TransactionList />
      </Container>
    </TransactionSection>
  </Wrapper>
);

export default DashboardPage;
