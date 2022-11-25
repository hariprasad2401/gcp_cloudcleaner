import "../App.css";
import "../Style.scss"
import "../Content.css";
import Header from '../Components/Header/Header';
import SideBar from "../Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Instance from "./ComputeEngine/Instance";
import Disks from "./ComputeEngine/Disks";
import Snapshot from "./ComputeEngine/Snapshot";
import Image from "./ComputeEngine/Image";
import Firewall from "./VPCnetworks/Firewall";
import Subnets from "./VPCnetworks/Subnets";
import VPC from "./VPCnetworks/VPC";
import Table from "./BigQuery/Table";
import Datasets from "./BigQuery/Datasets";
import CloudRun from "./CloudRun";
import ArtifactRepositry from "./ArtifactRepositry";
import BigTableInstance from "./BigTableInstance";
import FileStore from "./FileStore";
import SqlInstance from "./SqlInstance";
import CloudDNS from "./CloudDNS";
import Kubernates from "./Kubernates";
import Bucket from "./Storage/Bucket";
import IamRole from "./IAM&Admin/IamRole"; 
import Topic from "./PubSub/Topic";
import Subscription from "./PubSub/Subscription";
import Settings from "./Settings";
import CloudFuncton from "./CloudFunction";
import AppEngine from "./AppEngine/AppEngine";
import ServiceAccounts from "./IAM&Admin/ServiceAccounts";
import BillingSettings from "./BillingSettings"
function AllFielsHandler() {
  return (
  <>
      <Header/>
      <SideBar>
        <Routes>
          <Route  path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/IAM&Admin/IamRole" element={<IamRole />} />
          <Route path="/IAM&Admin/ServiceAccounts" element={<ServiceAccounts />} />
          <Route path="/PubSub/Topic" element={<Topic />} />
          <Route path="/PubSub/Subscription" element={<Subscription />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/CloudFunction" element={<CloudFuncton />} />
          <Route path="/ComputeEngine/Instance" element={<Instance />} />
          <Route path="/ComputeEngine/Disks" element={<Disks />} />
          <Route path="/ComputeEngine/Snapshot" element={<Snapshot />} />
          <Route path="/ComputeEngine/Image" element={<Image />} />
          <Route path="/VPCnetworks/VPC" element={<VPC />} />
          <Route path="/VPCnetworks/Subnets" element={<Subnets />} />
          <Route path="/VPCnetworks/Firewall" element={<Firewall />} />
          <Route path="/BigQuery/Table" element={<Table />} />
          <Route path="/BigQuery/Datasets" element={<Datasets />} />
          <Route path="/CloudRun" element={<CloudRun />} />
          <Route path="/ArtifactRepositry" element={<ArtifactRepositry />} />
          <Route path="/BigTableInstance" element={<BigTableInstance />} />
          <Route path="/FileStore" element={<FileStore />} />
          <Route path="/SqlInstance" element={<SqlInstance />} />
          <Route path="/CloudDNS" element={<CloudDNS />} />
          <Route path="/Kubernates" element={<Kubernates />} />
          <Route path="/Storage/Bucket" element={<Bucket />} />
          <Route path="/AppEngine/AppEngine" element={<AppEngine />} />
          <Route path="/Billing" element={<BillingSettings />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
    </SideBar>
    
    </>
  );
}

export default AllFielsHandler;