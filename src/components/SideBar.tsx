import React, { FC, useState } from "react";
import { Disclosure } from "@headlessui/react";
import logo from "../static/img/logo.png"
import {
  ChevronDownIcon,
  HomeIcon,
  WalletIcon,
  BanknotesIcon,
  UserPlusIcon,
  UserGroupIcon,
  MapIcon,
  TrophyIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import {
  CHAT_ROUTE,
  MAIN_ROUTE,
  REFERALS_ROUTE,
  REFILL_ROUTE,
  SUPPORT_ROUTE,
  WITHDRAW_ROUTE,
} from "../utils/const";

type Props = {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: FC<Props> = ({ isSidebarOpen, setSidebarOpen }) => {
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const url = useLocation();

  return (
    <div
      className={`w-72 bg-white text-gray-500 p-6 min-h-screen ${
        isSidebarOpen ? "block fixed top-0 left-0 z-50 bottom-0 w-72" : "hidden"
      } sm:block`}
    >
      {isSidebarOpen && (
        <div className="flex justify-end mb-4">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      )}

      <h1 className="text-2xl font-medium text-black w-max mb-8">
        <NavLink to={MAIN_ROUTE}>
          <img src={logo} className="h-8"/>
        </NavLink>
      </h1>
      <Disclosure as="div" className="mb-6">
        <Disclosure.Button
          onClick={() => setDashboardOpen(!isDashboardOpen)}
          className="w-full flex justify-between items-center"
        >
          <h4 className="text-xs">ДАШБОРД</h4>
          <ChevronDownIcon
            className={`h-5 w-5 transition-transform duration-200 ${
              isDashboardOpen ? "transform rotate-180" : ""
            }`}
          />
        </Disclosure.Button>
        <Disclosure.Panel
          className={`transition-height duration-200 overflow-hidden ${
            isDashboardOpen ? "h-auto" : "h-0"
          }`}
        >
          <ul>
            <li
              className={`mb-5 mt-5 ${
                url.pathname === MAIN_ROUTE ? "text-blue-400" : ""
              }`}
            >
              <HomeIcon className="h-5 w-5 inline-block mr-2" />
              <NavLink to={MAIN_ROUTE}>Главная</NavLink>
            </li>
            <li
              className={`mb-5 ${
                url.pathname === REFILL_ROUTE ? "text-blue-400" : ""
              }`}
            >
              <WalletIcon className="h-5 w-5 inline-block mr-2" />
              <NavLink to={REFILL_ROUTE}>Пополнение</NavLink>
            </li>
            <li
              className={`mb-5 ${
                url.pathname === WITHDRAW_ROUTE ? "text-blue-400" : ""
              }`}
            >
              <BanknotesIcon className="h-5 w-5 inline-block mr-2" />
              <NavLink to={WITHDRAW_ROUTE}>Вывод</NavLink>
            </li>
            <li
              className={`mb-5 ${
                url.pathname === REFERALS_ROUTE ? "text-blue-400" : ""
              }`}
            >
              <UserPlusIcon className="h-5 w-5 inline-block mr-2" />
              <NavLink to={REFERALS_ROUTE}>Реферальная система</NavLink>
            </li>
            <li
              className={`mb-5 ${
                url.pathname === SUPPORT_ROUTE ? "text-blue-400" : ""
              }`}
            >
              <UserGroupIcon className="h-5 w-5 inline-block mr-2" />
              <NavLink to={SUPPORT_ROUTE}>Служба поддержки</NavLink>
            </li>
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button
          onClick={() => setAboutOpen(!isAboutOpen)}
          className="w-full flex justify-between items-center"
        >
          <h2 className="text-xs">О НАС</h2>
          <ChevronDownIcon
            className={`h-5 w-5 transition-transform duration-200 ${
              isAboutOpen ? "transform rotate-180" : ""
            }`}
          />
        </Disclosure.Button>
        <Disclosure.Panel
          className={`transition-height duration-200 overflow-hidden ${
            isAboutOpen ? "h-auto" : "h-0"
          }`}
        >
          <ul>
            <li className="mb-5 mt-5">
              <MapIcon className="h-5 w-5 inline-block mr-2" />
              Карта проекта
            </li>
            <li className="mb-5">
              <TrophyIcon className="h-5 w-5 inline-block mr-2" />
              Наши достижения
            </li>
            <li className="mb-5">
              <NavLink to={CHAT_ROUTE}>
                {" "}
                <ChatBubbleLeftRightIcon className="h-5 w-5 inline-block mr-2" />
                Чат
              </NavLink>
            </li>
            <li className="mb-5">
              <QuestionMarkCircleIcon className="h-5 w-5 inline-block mr-2" />
              Контакты
            </li>
            <li className="mb-5">
              <PhotoIcon className="h-5 w-5 inline-block mr-2" />
              Медиа галерея
            </li>
          </ul>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default Sidebar;
