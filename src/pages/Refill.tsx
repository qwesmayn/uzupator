import React, { FC, useState } from "react";
import { Card } from "../models/ICard";
import visa from "../static/img/visa.png"
import master from "../static/img/master.png"
import american from "../static/img/american.png"
import BreadCrumb from "../components/BreadCrumb";
import CardList from "../components/CardList";
import AmountInput from "../components/AmountInput";
import PaymentButton from "../components/PaymentButton";

const cards: Card[] = [
  {
      id: 1,
      type: 'Visa',
      img: visa,
      number: '**** 1234',
      expiry: '10/25'
  },
  {
      id: 2,
      type: 'MasterCard',
      img: master,
      number: '**** 5678',
      expiry: '12/23'
  },
  {
      id: 3,
      type: 'American Express',
      img: american,
      number: '**** 9012',
      expiry: '08/24'
  }
];

export const Refill: FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [amount, setAmount] = useState<number | undefined>();

  const handleSelectCard = (card: Card) => {
    setSelectedCard(card);
  };

  const handleRecharge = () => {
    if (selectedCard) {
      console.log("Пополнить карту:", selectedCard, "на сумму:", amount);
    }
  };

  return (
    <div className="px-8 py-9">
      <BreadCrumb name = "Пополнение"/>
      <div>
        <strong className="text-4xl font-medium">Пополнение средств</strong>
      </div>
      <div className="pt-14 pl-0 md:pl-7 md:pt-20">
      <CardList
        cards={cards}
        selectedCard={selectedCard}
        handleSelectCard={handleSelectCard}
      />
      <AmountInput amount={amount} setAmount={setAmount} />
      {selectedCard && <PaymentButton text = "Перейти к оплате" handleRecharge={handleRecharge} />}
      </div>
    </div>
  );
};
