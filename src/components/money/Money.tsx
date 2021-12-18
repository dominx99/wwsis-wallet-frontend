import { FC } from "react";

interface Props {
  value: number,
};

const Money: FC<Props> = ({value}) => (
  <>
    {value / 100} zł
  </>
);

export default Money;
