import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div>

      <main className="min-h-screen p-2 bg-black">
      
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
