import React from "react";
import CurrencyInput from "react-currency-input-field";

interface Props {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string,
  prefix: string,
};

const CurrencyField = React.forwardRef<typeof CurrencyInput, Props>(
  function CurrencyField(props) {
    const { onChange, ...other } = props;

    return (
      <CurrencyInput
        {...other}
        intlConfig={{ locale: 'pl-PL', currency: 'PLN' }}
        onValueChange={(value: string | undefined) => {
          onChange({
            target: {
              name: props.name,
              value: value ? value : '0',
            },
          });
        }}
      />
    );
  },
);

export default CurrencyField;
