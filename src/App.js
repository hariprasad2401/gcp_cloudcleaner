import "./App.css";
import "./Style.scss"
import "./Content.css";
import Header from './Components/Header/Header';
import SideBar from "./Components/Sidebar/Sidebar";
 import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Instance from "./pages/ComputeEngine/Instance";
import Disks from "./pages/ComputeEngine/Disks";
import Snapshot from "./pages/ComputeEngine/Snapshot";
import Image from "./pages/ComputeEngine/Image";
import Bucket from "./pages/Storage/Bucket";
import IamRole from "./pages/IAM&Admin/IamRole"; 
import Topic from "./pages/PubSub/Topic";
import Subscription from "./pages/PubSub/Subscription";
import Settings from "./pages/Settings";
import CloudFuncton from "./pages/CloudFunction";
import AppEngine from "./pages/AppEngine/AppEngine";
import ServiceAccounts from "./pages/IAM&Admin/ServiceAccounts";
import Login from "./pages/Authentication/Login"
import Signup from "./pages/Authentication/Signup"
import AllFilesHandler from "./pages/AllFilesHandler"

function App() { 
  return (
  <>
        <Router>
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/AllFilesHandler/*" element={<AllFilesHandler />} /> 
       </Routes>
       </Router>
      
    </>
  );
}

export default App;



