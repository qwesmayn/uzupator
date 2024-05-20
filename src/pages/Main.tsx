import React, { FC } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import LineChart from "../components/LineChart";  // Импортируйте компонент графика

const Main: FC = () => {
  return (
    <div>
      <div className="pl-8 pt-8">
        <BreadCrumb name="Служба поддержки" />
        <strong className="text-4xl font-medium">
          Добро пожаловать, Elizaveta2
        </strong>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <span className="text-lg mb-4 font-medium">Всего средств</span>
              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">8,652$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-green-500 flex items-center font-bold mr-1 text-xs">
                  2.9%↑
                </span>
                За последние 7 дней
              </span>
            </div>
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <span className="text-lg mb-4 font-medium">Реферальные средства</span>
              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">1,991$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-red-500 flex items-center font-bold mr-1 text-xs">
                  6%↓
                </span>
                За последние 7 дней
              </span>
            </div>
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <span className="text-lg mb-4 font-medium">Средства в работе</span>
              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">5,000$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-red-500 flex items-center font-bold mr-1 text-xs">
                  2.4%↓
                </span>
                За последние 7 дней
              </span>
            </div>
            <div className="py-7 pr-7 rounded-lg md:p-7">
              <span className="text-lg mb-4 font-medium">
                Средства, готовые для выплаты
              </span>
              <div className="flex items-center mb-3">
                <BanknotesIcon className="h-5 text-blue-500 mr-2" />
                <span className="block text-3xl font-bold">1,634$</span>
              </div>
              <span className="flex items-center text-gray-500">
                <span className="text-green-500 flex items-center font-bold mr-1 text-xs">
                  3.9%↑
                </span>
                За последние 7 дней
              </span>
            </div>
          </div>
          <div className="py-7 pr-7 md:p-7">
            <div className="mb-4">
              <span className="text-3xl font-medium">Отчет за последние 7 дней</span>
            </div>
            <div>
              <span className="text-lg">
                По <span className="text-blue-400">Всего средств</span>
              </span>
            </div>
            <div>
              <LineChart/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
