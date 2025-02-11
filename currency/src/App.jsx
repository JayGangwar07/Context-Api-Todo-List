import {
  useState,
  useEffect
} from 'react'
import InputBox from './components/Input.jsx'
import './App.css'
import useInfo from './hooks/useInfo.mjs'

function App() {

  const [from,
    setFrom] = useState('usd')
  const [to,
    setTo] = useState('inr')
  const [convertedAmount,
    setConvertedAmount] = useState(0)
  const [amount,
    setAmount] = useState(0)

  const info = useInfo(from)
  const options = Object.keys(info)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(ConvertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*info[to])
  }

  /*useEffect(()=> {
  setConvertedAmount(amount*info[to])}, [amount])*/
  return(
    <div className="w-screen h-screen bg-gray-900 py-45 text-white">
      <div className="h-80 bg-gray-500 w-[80%] mx-7 rounded-lg px-5 py-12">
        <form onSubmit={(e)=>
          {
            e.preventDefault()
            convert()
          }}>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setFrom(currency)}
            onAmountChange={(amount)=> setAmount(amount)}
            selectedCurrency={from}
            /><br />

        <button
          onClick={swap}
          className="mx-24 my-4 bg-blue-600 w-16 h-8 rounded-lg"
          >Swap</button><br />
      <InputBox
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        amountDisabled
        onCurrencyChange={(currency)=> setTo(currency)}
        selectedCurrency={to}
        />
      <button
        type="submit"
        className="my-3 mx-5 bg-blue-600
        w-50 h-12 rounded-lg"
        >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
    </form>
  </div>
</div>
)
}

export default App