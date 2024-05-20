import React, { FC, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CardList from "../components/CardList";
import AmountInput from "../components/AmountInput";
import PaymentButton from "../components/PaymentButton";
import visa from "../static/img/visa.png";
import master from "../static/img/master.png";
import american from "../static/img/american.png";
import { Card } from "../models/ICard";

const cards: Card[] = [
  {
    id: 1,
    type: "Visa",
    img: visa,
    number: "**** 1234",
    expiry: "10/25",
  },
  {
    id: 2,
    type: "MasterCard",
    img: master,
    number: "**** 5678",
    expiry: "12/23",
  },
  {
    id: 3,
    type: "American Express",
    img: american,
    number: "**** 9012",
    expiry: "08/24",
  },
];

const Withdraw: FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [amount, setAmount] = useState<number | undefined>();

  const handleSelectCard = (card: Card) => {
    setSelectedCard(card);
  };

  const handleRecharge = () => {
    if (selectedCard) {
      console.log("Вывод на карту:", selectedCard, "сумма:", amount);
    }
  };

  return (
    <div className="px-8 py-9">
      <BreadCrumb name="Вывод" />
      <div>
        <strong className="text-3xl font-medium sm:text-4xl ">Вывод средств</strong>
      </div>
      <div className="pt-14 pl-0 md:pl-7 md:pt-20">
        <div className="mb-9">
          <span className="text-2xl sm:text-3xl ">
            Доступно для вывода - <strong>1,634$</strong>
          </span>
        </div>
        <AmountInput amount={amount} setAmount={setAmount} />
        <div className="mb-9 mt-14 font-medium text-3xl"><span>Выберите карту</span></div>
        <CardList
          cards={cards}
          selectedCard={selectedCard}
          handleSelectCard={handleSelectCard}
        />
        {selectedCard && <PaymentButton text = "Вывести средства" handleRecharge={handleRecharge} />}
      </div>
    </div>
  );
};

export default Withdraw;
