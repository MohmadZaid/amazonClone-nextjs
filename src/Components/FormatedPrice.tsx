interface Props {
  amount: number;
}

const FormatedPrice = ({ amount }: Props) => {
  const FormatedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span>{FormatedAmount}</span>;
};

export default FormatedPrice;
