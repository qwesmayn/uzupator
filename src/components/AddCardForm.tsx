import React, { FC } from "react";

const AddCardForm: FC = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4">
          <label className="mb-1 lg:mb-0 lg:mr-4 text-lg lg:text-xl font-medium">Укажите номер карты</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="9112 3880 6530 9590"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="flex flex-wrap items-center mb-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full pr-0 lg:pr-6 sm:w-1/2 lg:w-1/3">
            <label className="block mb-1 lg:mb-0 lg:mr-4 text-lg lg:text-xl font-medium w-full">Укажите держателя карты</label>
            <input
              type="text"
              name="cardHolder"
              placeholder="DENIS ARSEEVICH"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center w-full pr-0 lg:pr-6 sm:w-1/2 lg:w-1/3">
            <label className="block mb-1 lg:mb-0 lg:mr-4 text-lg lg:text-xl font-medium">Укажите срок действия карты</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="05/31"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center w-full sm:w-1/2 lg:w-1/3">
            <label className="block mb-1 lg:mb-0 lg:mr-4 text-lg lg:text-xl font-medium">Укажите CVC/ CVV код</label>
            <input
              type="text"
              name="cvv"
              placeholder="928"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
          >
            Сохранить
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCardForm;
