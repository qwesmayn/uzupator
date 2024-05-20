import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type PaymentButtonProps = {
    text : string,
    handleRecharge: () => void;
  };
const PaymentButton : FC<PaymentButtonProps> = ({ text, handleRecharge }) => {
  return (
    <div className="flex justify-end mt-4">
      <button
        className="flex items-center bg-salad text-white px-5 py-4 hover:bg-green-600 rounded-2xl font-medium text-lg"
        onClick={handleRecharge}
      >
        {text} <ArrowRightIcon className="ml-2 w-5" />
      </button>
    </div>
  );
};

export default PaymentButton;
