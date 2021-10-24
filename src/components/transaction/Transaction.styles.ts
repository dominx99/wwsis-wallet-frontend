import { TableRow } from '@mui/material'
import styled from 'styled-components'

export const TransactionSection = styled.section`
  padding-top: 3rem;
`

export const TransactionTableRow = styled(TableRow)`
  background-color: ${props => props.theme.dark};

  &:last-child td, &:last-child th {
    border: 0;
  }
`
