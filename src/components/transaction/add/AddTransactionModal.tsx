import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CurrencyField from "../../money/CurrencyField";
import { TransactionType } from "../TransactionRow";
import { addTransactionAsync, cleanTransactionForm, clearTransactionForm, closeAddTransactionModal, isAddTranscationModalOpened, transactionForm, updateTransactionAsync } from "../transactionSlice";

const AddTransactionModal: FC = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(isAddTranscationModalOpened);
  const initialForm = useAppSelector(transactionForm);

  const [form, setForm] = useState<TransactionType>({
    id: null,
    type: "income",
    name: '',
    value: "0",
  });

  useEffect(() => {
    if (isOpened) {
      setForm(initialForm);
    }
  }, [isOpened]);

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

  const removeCommaFromValue = (value: string) => {
    let valueSplitted = value.toString().split(',');
    let result = 0;

    if (typeof valueSplitted[1] === "undefined") {
      result = parseInt(valueSplitted[0]) * 100;
    }

    if (typeof valueSplitted[1] !== "undefined") {
      result = parseInt(valueSplitted[0] + valueSplitted[1]);

      if (valueSplitted[1].length === 1) {
        result *= 10;
      }

      if (valueSplitted[1].length === 0) {
        result *= 100;
      }
    }

    return result.toString();
  }

  const handleSubmitTransactionForm = async () => {
    let transformedForm = Object.assign({}, form);
    transformedForm.value = removeCommaFromValue(form.value);

    if (transformedForm.id === null) {
      await dispatch(addTransactionAsync(transformedForm));
    } else {
      await dispatch(updateTransactionAsync(transformedForm));
    }

    dispatch(clearTransactionForm());
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
            value={form.name}
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
          onClick={handleSubmitTransactionForm}
          variant="outlined"
        >Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddTransactionModal;
