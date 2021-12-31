import { FC } from "react";

interface Props {
  value: string,
};

const Money: FC<Props> = ({value}) => (
  <>
    {parseInt(value) / 100} zł
  </>
);

export default Money;
