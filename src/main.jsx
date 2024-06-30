import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from "./contexts/auth.jsx";

import Pricing from "./components/Pricing.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Servicesland from "./components/Servicesland.jsx";
import OneTervices from "./components/OneTservices.jsx";
import MonthlyServices from "./components/MonthlyServices.jsx";
import Areas from "./components/Areas/Areas.jsx";
import Lahore from "./components/Areas/Cities/Lahore.jsx";
import Islamabad from "./components/Areas/Cities/Islamabad.jsx";
import Karachi from "./components/Areas/Cities/Karachi.jsx";
import Rawalpindi from "./components/Areas/Cities/Rawalpindi.jsx";
import Multan from "./components/Areas/Cities/Multan.jsx";
import Peshawar from "./components/Areas/Cities/Peshawar.jsx";
import UserDashboard from "./components/UserDash/UserDashboard.jsx";
import Standard from "./components/Plans/Standard.jsx";
import Premium from "./components/Plans/Premium.jsx";
import Stnmonth from "./components/Plans/Stnmonth.jsx";
import Stnyear from "./components/Plans/Stnyear.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AdminDashboard from "./components/Admin/Admin.jsx";
import GdiggingForm from "./components/GdiggingForm.jsx";
import Foodcatering from "./components/Foodcatering.jsx";
import Footer from "./components/Footer.jsx";
import Kafn from "./components/Kafn.jsx"
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatPage from "./components/ChatPage.jsx";
import AdminChats from "./components/Admin/AdminChats.jsx";
import AdminChatsSingle from "./components/Admin/AdminChatsSingle.jsx";
import Usersubscription from "./components/UserDash/Usersubscription.jsx";
import Forgotpassword from "./components/password/Forgotpassword.jsx";
import ResetPass from "./components/password/ResetPass.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* chat */}
   {/* chat functionality route */}
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/chat/:userId" element={<AdminChatsSingle/>} />
      <Route path="services" element={<Servicesland />}></Route>
      <Route path="pricing" element={<Pricing />} />
      <Route path="plans" element={<Plans />} />
      <Route path="onetime" element={<OneTervices />} />
      <Route path="monthly" element={<MonthlyServices />} />
      <Route path="areas" element={<Areas />} />
      <Route path="lahore" element={<Lahore />} />
      <Route path="islamabad" element={<Islamabad />} />
      <Route path="karachi" element={<Karachi />} />
      <Route path="rawalpindi" element={<Rawalpindi />} />
      <Route path="multan" element={<Multan />} />
      <Route path="peshawar" element={<Peshawar />} />
      <Route path="myaccount" element={<UserDashboard />} />
      <Route path="standard" element={<Standard />} />
      <Route path="premium" element={<Premium />} />
      <Route path="stnmonth" element={<Stnmonth />} />
      <Route path="stnyear" element={<Stnyear />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="admin-chats" element={<AdminChats/>} />
      <Route path="diggingform" element={<GdiggingForm />} />
      <Route path="foodcatering" element={<Foodcatering />} />
      <Route path="footer" element={<Footer />} />
      <Route path="kafn" element={<Kafn />} />
      <Route path="*" element={<Login />} />
      <Route path="usersubscription" element={<Usersubscription />} />
      <Route path="forgotpass" element={<Forgotpassword />} />
      <Route path="reset" element={<ResetPass />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
    <UserProvider>
      <RouterProvider router={router} />
  <ToastContainer/>
    </UserProvider>
  
  </GoogleOAuthProvider>
 


);
