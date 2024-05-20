import { FC } from "react";
import { authRoutes, publicRoutes } from "../routes";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/const";
import {useAppSelector } from "../hooks/hooks";

const AppRouter : FC = () => {
  const {isAuth} = useAppSelector((state) => state.userReducer)
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
