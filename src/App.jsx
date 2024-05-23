import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");

	const currencyInfo = useCurrencyInfo(from);

	const options = Object.keys(currencyInfo);

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};

	const swap = () => {
		setTo(from);
		setFrom(to);
		setAmount(convertedAmount);
		setConvertedAmount(amount);
	};

	return (
		<>
			<div className="bg-green-300 flex flex-row justify-center">
				<h1 className=" text-3xl font-extralight text-green-700 mt-2">Currency Converter</h1>
			</div>
			<div className="w-full h-screen flex flex-wrap justify-center items-center bg-green-300">
				<div className="w-full">
					<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<div className="w-full mb-1">
								<InputBox
									label={"From"}
									amount={amount}
									selectedCurrency={from}
									CurrencyOptions={options}
									onAmountChange={(amount) => {
										setAmount(amount);
									}}
									onCurrencyChange={(currency) => {
										setFrom(currency);
									}}
								/>
							</div>
							<div className="relative w-full h-0.5">
								<button
									onClick={swap}
									className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
								>
									Swap
								</button>
							</div>
							<div className="w-full mt-1 mb-4">
								<InputBox
									label={"To"}
									amount={convertedAmount}
									amountDisabled
									selectedCurrency={to}
									CurrencyOptions={options}
									onAmountChange={(amount) => {
										setConvertedAmount(amount);
									}}
									onCurrencyChange={(currency) => {
										setTo(currency);
									}}
								/>
							</div>
							<button type="submit" className="w-full bg-green-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
								Convert {from.toUpperCase()} to {to.toUpperCase()}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

