import { useId } from "react";

function InputBox({
	label,
	amount,
	amountDisabled = false,
	currencyDisabled = false,
	selectedCurrency,
	CurrencyOptions = [],
	onAmountChange,
	onCurrencyChange,
}) {
	const amountInputId = useId();
	return (
		<>
			<div className="bg-white p-3 flex flex-row rounded-lg justify-between">
				<div className="flex flex-col">
					<label htmlFor={amountInputId} className="text-gray-400 p-2">
						{label}
					</label>
					<input
						id={amountInputId}
						type="text"
						className="p-2 my-2"
						placeholder="Amount"
						value={amount}
						disabled={amountDisabled}
						onChange={(e) => {
							onAmountChange && onAmountChange(Number(e.target.value)); //check if onAmountChange exists or passed then run it
						}}
					/>
				</div>
				<div className="flex flex-col justify-between">
					<p className="text-gray-400 p-2">Currency type</p>
					<select
						className="my-2 text-gray-400 p-2"
						disabled={currencyDisabled}
						value={selectedCurrency}
						onChange={(e) => {
							onCurrencyChange && onCurrencyChange(e.target.value);
						}}
					>
						{CurrencyOptions.map((currency) => {
							return (
								<option key={currency} value={currency}>
									{currency}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		</>
	);
}

export default InputBox;
