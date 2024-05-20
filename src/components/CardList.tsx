import React, { FC, useState } from "react";
import { Card } from "../models/ICard";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import AddCardForm from "./AddCardForm";

type CardListProps = {
  cards: Card[];
  selectedCard: Card | null;
  handleSelectCard: (card: Card) => void,
};

const CardList: FC<CardListProps> = ({
  cards,
  selectedCard,
  handleSelectCard,
}) => {
  const [showAddCardForm, setShowAddCardForm] = useState<boolean>(false);

  const toggleAddCardForm = () => {
    setShowAddCardForm(!showAddCardForm);
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flex items-center p-4 rounded-2xl shadow cursor-pointer ${
            selectedCard?.id === card.id
              ? "border border-blue-500 bg-blue-100"
              : ""
          }`}
          onClick={() => handleSelectCard(card)}
        >
          <div
            className={`flex items-center justify-center w-5 h-5 mr-3 border border-gray-300 rounded-full ${
              selectedCard?.id === card.id ? "bg-blue-300" : ""
            }`}
          >
            {selectedCard?.id === card.id ? (
              <div className="w-2 h-2 bg-white rounded-full" />
            ) : null}
          </div>
          <div className="flex items-center">
            <img src={card.img} alt={card.type} className="w-9 h-7 mr-2" />
            <div className="text-gray-600">
              <div>
                <strong
                  className={`text-black text-xl ${
                    selectedCard?.id === card.id ? "font-bold" : "font-medium"
                  }`}
                >
                  {card.type}
                </strong>
                <strong
                  className={`text-black text-xl ${
                    selectedCard?.id === card.id ? "font-bold" : "font-medium"
                  }`}
                >
                  {card.number}
                </strong>
              </div>
              <span className="text-gray-400">
                Действителен по: {card.expiry}
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center mt-4 mb-12">
        <PlusCircleIcon className="text-gray-500 w-6 mr-1" />
        <p
          className="text-gray-500 font-medium cursor-pointer text-xl"
          onClick={toggleAddCardForm}
        >
          Добавить новую карту
        </p>
      </div>
      {showAddCardForm && <AddCardForm />}
    </div>
  );
};

export default CardList;
