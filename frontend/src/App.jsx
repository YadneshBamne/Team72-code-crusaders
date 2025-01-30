import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/Home";
import ProtectedRoute from "./components/protected-route";
import Result from "./pages/Result";
import ContractorPage from "./pages/Contractorpage";
import LandingPage from "./pages/landing";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children: [
        {
          path:'/',
          element:<LandingPage/>,
        },
        {
            path:'/contractor/:id',
            element:<ContractorPage/>,
          },
        {
          path:'/upload',
          element:
          <ProtectedRoute>
          <Home/>
          </ProtectedRoute>,
        },
      ],
    },
  ]);
  
  function App() {
    return (
        <RouterProvider router={router}/>
    );
  }
  
  export default App
  
