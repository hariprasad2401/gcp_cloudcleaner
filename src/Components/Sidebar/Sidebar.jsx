
import { NavLink } from "react-router-dom";
import { FaBars,FaVectorSquare} from "react-icons/fa";
import { BiSearch,BiTargetLock,BiShapeSquare} from "react-icons/bi";
import { MdStorage,MdDashboard,MdOutlineVpnKey,MdMessage} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { SiKubernetes,SiFiles } from "react-icons/si";
import { AiOutlineSlack,AiOutlineBars,AiOutlineSubnode} from "react-icons/ai";
import { FiCpu} from "react-icons/fi";
import {BsBank2} from "react-icons/bs";
import { FcDownRight} from "react-icons/fc";
import {MdOutlineDoubleArrow} from "react-icons/md";
import {GiBrickWall,GiGlowingArtifact,GiCubeforce} from "react-icons/gi";
import { TbFolders} from "react-icons/tb";
import { ImFloppyDisk} from "react-icons/im";
import { BsBucketFill,BsFillPersonPlusFill,BsDiagram3Fill,BsStack} from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { SiLibrariesdotio } from "react-icons/si";
import { TbCodeMinus,TbDice6,TbBarcode,TbMapSearch,TbLanguage,TbBrandAirtable } from "react-icons/tb";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import logo from "./logo.png"
const routes = [
  
  {
    path: "/AllFilesHandler/Dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
 
  {
    path: "/AllFilesHandler/ComputeEngine",
    name: "Compute Engine",
    icon: <FiCpu />,
    subRoutes: [
      {
        path: "/AllFilesHandler/ComputeEngine/Instance",
        name: "Instance",
        icon: <TbDice6 />,
      },

      {
        path: "/AllFilesHandler/ComputeEngine/disks",
        name: "Disk",
        icon: <ImFloppyDisk/>,
      },

      {
        path: "/AllFilesHandler/ComputeEngine/Snapshot",
        name: "Snapshot",
        icon: <TbFolders/>,
      },
      
      {
        path: "/AllFilesHandler/ComputeEngine/Image",
        name: "Image",
        icon: <TbBarcode/>,
      },
      
      
      
    ]
  },
  
  {
    path: "/AllFilesHandler/Kubernates",
    name: "Kubernetes",
    icon: <SiKubernetes />,
  },
  {
    path: "/AllFilesHandler/CloudDNS",
    name: "Cloud DNS",
    icon: <BsDiagram3Fill/>,
  },
  {
    path: "/AllFilesHandler/SqlInstance",
    name: "SQL Instance",
    icon: <BsStack/>,
  },
 
  {
    path: "/AllFilesHandler/VPCnetworks",
    name: "VPC Networks",
    icon: <FaVectorSquare />,
    subRoutes: [
      {
        path: "/AllFilesHandler/VPCnetworks/Firewall",
        name: "FireWall",
        icon: <GiBrickWall />,
      },
      {
        path: "/AllFilesHandler/VPCnetworks/Subnets",
        name: "Subnents",
        icon: <AiOutlineSubnode />,
      },
      {
        path: "/AllFilesHandler/VPCnetworks/VPC",
        name: "VPC networks",
        icon: <BiShapeSquare />,
      },
     
      ]},


      {
        path: "/AllFilesHandler/BigQuery",
        name: "BigQuery",
        icon: <TbMapSearch />,
        subRoutes: [
          {
            path: "/AllFilesHandler/BigQuery/Table",
            name: "Table",
            icon: <TbBrandAirtable />,
          },
          {
            path: "/AllFilesHandler/BigQuery/Datasets",
            name: "Datasets",
            icon: <TbLanguage />,
          },
         
         
          ]},
  {
    path: "/AllFilesHandler/CloudFunction",
    name: "Cloud Function",
    icon: <TbCodeMinus />,
  },
  // {
  //   path: "/AllFilesHandler/IAM&Admin",
  //   name: "IAM&Admin",
  //   icon: <HiUserGroup  />,
  //   subRoutes: [
  //     {
  //       path: "/AllFilesHandler/IAM&Admin/IamRole",
  //       name: "IamRole",
  //       icon: <BsFillPersonPlusFill />,
  //     },
  //     {
  //       path: "/AllFilesHandler/IAM&Admin/ServiceAccounts",
  //       name: "Service Accounts",
  //       icon: <MdOutlineVpnKey />,
  //     },
  //   ]
  // },
 
  {
    path: "/AllFilesHandler/PubSub",
    name: "Pub/Sub",
    icon: <AiOutlineSlack />,
    exact:true,
    subRoutes:[
      {
        path: "/AllFilesHandler/PubSub/Topic",
        name: "Topic",
        icon: <MdMessage />,

      },
      {
        path: "/AllFilesHandler/PubSub/Subscription",
        name: "Subscription",
        icon: <AiOutlineBars />,

      }
    ]
  },
  {
    path: "/AllFilesHandler/Storage",
    name: "Cloud Storage",
    icon: <MdStorage />,
    exact: true,
    subRoutes: [
      {
        path: "/AllFilesHandler/Storage/Bucket",
        name: "Bucket ",
        icon: <BsBucketFill />,
      }
    
    ],
  },

  {
    path: "/AllFilesHandler/CloudRun",
    name: "Cloud Run",
    icon: <MdOutlineDoubleArrow/>,
  },
  {
    path: "/AllFilesHandler/ArtifactRepositry",
    name: "Artifact Registry",
    icon: <GiGlowingArtifact/>,
  },
  {
    path: "/AllFilesHandler/BigTableInstance",
    name: "Big Table",
    icon: <GiCubeforce/>,
  },
  {
    path: "/AllFilesHandler/FileStore",
    name: "FileStore",
    icon: <SiFiles/>,
  },
  {
    path: "/AllFilesHandler/Settings",
    name: "Project Settings",
    icon: <FiSettings/>,
  },
  {
    path: "/AllFilesHandler/Billing",
    name: "Billing Settings",
    icon: <MdDashboard />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "120px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "220px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  CloudCleaner
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
          {/* <img src={logo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top  "/>  */}
        <div className="search_icon sidebarmainicon">
              <BsBank2/>
            </div> 
              <div className="Gservices">
             <span>Services</span>
            </div> 
    

            {/* <div className="search_icon">
              <BiSearch />
            </div> */}
             {/* <AnimatePresence>
              {isOpen && (
               
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
             
            </AnimatePresence>  */}
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;