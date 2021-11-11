import { Close } from "@mui/icons-material";
import { AppBar, Dialog, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Toolbar, Typography } from "@mui/material";
import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CurrencyField from "../../money/CurrencyField";
import { TransactionType } from "../TransactionRow";
import { closeAddTransactionModal, isAddTranscationModalOpened } from "../transactionSlice";

interface State extends Omit<TransactionType, "id"> {}

const AddTransactionModal: FC = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(isAddTranscationModalOpened);

  const [form, setForm] = useState<State>({
    type: "income",
    name: '',
    value: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event: SelectChangeEvent) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Dialog
      fullScreen
      open={isOpened}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => dispatch(closeAddTransactionModal())}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography>
            Add transaction
          </Typography>
        </Toolbar>
        <FormGroup sx={{ width: '100%', height: '100%', margin: 'auto' }}>
          <FormControl margin={'dense'}>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={form.type}
              label="Type"
              onChange={handleSelect}
            >
              <MenuItem value={"income"}>Income</MenuItem>
              <MenuItem value={"expense"}>Expense</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin={'dense'}
            id="name-field"
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            margin={'dense'}
            label="Value"
            value={form.value / 100}
            onChange={handleChange}
            name="value"
            id="value-field"
            InputProps={{
              inputComponent: CurrencyField as any,
              inputProps: {
                prefix: 'PLN ',
              }
            }}
            variant="outlined"
          />
        </FormGroup>
      </AppBar>
    </Dialog>
  );
}

export default AddTransactionModal;
