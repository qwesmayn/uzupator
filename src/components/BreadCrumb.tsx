import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import { Link } from "react-router-dom";

type BreadCrumbProps = {
    name : string
}


const BreadCrumb : FC<BreadCrumbProps> = ({name}) => {
    return (
        <div>
        <nav className="bg-white mb-4">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:underline">
                Дашборд
              </Link>
              <ChevronRightIcon className="h-5 w-5 mx-2 " aria-hidden="true" />
            </li>
            <li className="flex items-center">
              <span className="text-blue-500">{name}</span>
            </li>
          </ol>
        </nav>
      </div>
    );
}

export default BreadCrumb;