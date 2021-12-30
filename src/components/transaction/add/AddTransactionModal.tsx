import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CurrencyField from "../../money/CurrencyField";
import { TransactionFormType } from "../TransactionRow";
import { addTransactionAsync, closeAddTransactionModal, isAddTranscationModalOpened } from "../transactionSlice";

const AddTransactionModal: FC = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(isAddTranscationModalOpened);

  const [form, setForm] = useState<TransactionFormType>({
    type: "income",
    name: '',
    value: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const clearForm = () => {
    setForm(form => ({
      ...form,
      name: '',
      type: 'income',
      value: 0,
    }));
  }

  const removeCommaFromValue = (value: number) => {
    return parseInt(value.toString().replace(',', ''));
  }

  const handleAddTransaction = async () => {
    let transformedForm = form;
    transformedForm.value = removeCommaFromValue(form.value);

    await dispatch(addTransactionAsync(transformedForm));

    clearForm();
    dispatch(closeAddTransactionModal());
  }

  return (
    <Dialog
      fullScreen
      open={isOpened}
      color="red"
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Typography>
          Add transaction
        </Typography>
        <IconButton
          aria-label="close"
          onClick={() => dispatch(closeAddTransactionModal())}
          sx={{
            color: (theme) => theme.palette.grey[500],
            marginLeft: 'auto',
            marginRight: '-10px',
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <FormGroup>
          <FormControl margin={'dense'}>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={form.type}
              label="Type"
              name="type"
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
            autoComplete={"off"}
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            margin={'dense'}
            value={form.value}
            onChange={handleChange}
            name="value"
            id="value-field"
            InputProps={{
              inputComponent: CurrencyField as any,
            }}
            variant="outlined"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleAddTransaction}
          variant="outlined"
        >Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddTransactionModal;
