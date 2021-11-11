import React from "react";
import NumberFormat from "react-number-format";

interface Props {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string,
  prefix: string,
};

const CurrencyField = React.forwardRef<NumberFormat, Props>(
  function CurrencyField(props, ref) {
    const { onChange, ...other } = props;

    const toCurrency = (value: string) => {
      return value.replace('.', '');
    };

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          console.log(values);

          onChange({
            target: {
              name: props.name,
              value: toCurrency(values.value),
            },
          });
        }}
        prefix={props.prefix}
        decimalScale={2}
        fixedDecimalScale
      />
    );
  },
);

export default CurrencyField;
