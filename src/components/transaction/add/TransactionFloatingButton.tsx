import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { openAddTransactionModal } from "../transactionSlice";

interface Props {};

const AddTransactionFloatingButton: FC<Props> = () => {
  const dispatch = useAppDispatch();

  return (
    <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        onClick={() => dispatch(openAddTransactionModal())}
      >
        <Add sx={{ mr: 1 }} />
        Add expense
      </Fab>
    </div>
  )
}

export default AddTransactionFloatingButton;
