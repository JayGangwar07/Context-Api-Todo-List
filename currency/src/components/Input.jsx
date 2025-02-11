import {
  useState,
  useEffect
} from 'react'

function InputBox( {
  label = "From",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = ""
}) {
  return(
    <>
      <label htmlFor="currency" className="">{label}</label><br />
    <input
    id="currency"
    className="w-[60%] h-10 bg-white rounded-xl text-black px-1"
    type="number"
    label="from"
    placeholder="0"
    disabled={amountDisabled}
    value={amount}
    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    />
  <label htmlFor="currency"></label>
  <select
    value={selectedCurrency}
    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
    disabled={currencyDisabled}
    >
    {currencyOptions.map((currency) =>(
      <option
        key={currency}
        value={currency}
        >{currency}</option>
    ))}
  </select>
</>
)
}

export default InputBox