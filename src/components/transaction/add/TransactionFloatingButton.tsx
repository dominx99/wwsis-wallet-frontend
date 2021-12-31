import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { clearTransactionForm, openAddTransactionModal } from "../transactionSlice";

interface Props {};

const AddTransactionFloatingButton: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const handleOpenTransactionFormModal = () => {
    dispatch(clearTransactionForm());
    dispatch(openAddTransactionModal());
  }

  return (
    <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        onClick={handleOpenTransactionFormModal}
      >
        <Add sx={{ mr: 1 }} />
        Add expense
      </Fab>
    </div>
  )
}

export default AddTransactionFloatingButton;
