import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { useLocation } from "react-router-dom";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {location.pathname === "/login" ? (
        <AppRouter />
      ) : (
        <>
          <SideBar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}  />
          <div className="flex flex-col w-full">
            <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-grow">
              <AppRouter />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
