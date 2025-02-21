import React, { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { AdjustmentsHorizontalIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

type HeaderProps = {
    isSidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

const Header : FC<HeaderProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <Disclosure as="nav" className="bg-white border w-full h-16">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <AdjustmentsHorizontalIcon className="h-6 w-6" />
            </div>
          </div>
          {/* Иконка бургер-меню в левом краю */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="block sm:hidden text-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          {/* Содержимое заголовка */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Показывать только для устройств типа sm */}
            <div className="hidden sm:block">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <Cog6ToothIcon className="h-6 w-6" />
              </button>

              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <BellIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Профиль */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active ? "bg-gray-100" : "") +
                          " block px-4 py-2 text-sm text-gray-700"
                        }
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active ? "bg-gray-100" : "") +
                          " block px-4 py-2 text-sm text-gray-700"
                        }
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active ? "bg-gray-100" : "") +
                          " block px-4 py-2 text-sm text-gray-700"
                        }
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Header;
