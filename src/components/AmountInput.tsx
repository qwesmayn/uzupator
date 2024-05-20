import React, { FC } from "react";

type AmountInputProps = {
    amount: number | undefined;
    setAmount: (value: number | undefined) => void; 
};

const AmountInput: FC<AmountInputProps> = ({ amount, setAmount }) => {
  return (  
    <div className="flex items-center mt-4">
      <strong className="w-full font-medium text-xl">Введите сумму</strong>
      <input
        type="number"
        value={amount || ''}
        onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : undefined)} // Обрабатываем undefined в onChange
        className="w-full border-gray-300 rounded-md p-2 text-right"
        placeholder="100$"
      />
    </div>
  );
};

export default AmountInput;
