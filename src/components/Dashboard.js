import React, { useState, useEffect } from "react";
import UserList from "./UserList"
import Products from "./Products"

import NavBar from "./Nav";

export default function DashBoard() {

  const [activeTab, setActiveTab] = useState('User');

  const tabs = {
    'User': <UserList/>,
    'Products': <Products/>,
    'Profile': <h1>Profile Page</h1>
  }

  const handleTabSwitch = (tabName)=>{
    setActiveTab(tabName)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-between item-center bg-slate-900 text-white">
    <NavBar/>
    <div className="w-full h-full flex mt-16">
      <div className="flex flex-col w-48 border-r-2 border-gray-400">
        <button className="p-2 hover:bg-slate-600" onClick={()=>handleTabSwitch('User')}>User</button>
        <button className="p-2 hover:bg-slate-600" onClick={()=>handleTabSwitch('Products')}>Products</button>
        <button className="p-2 hover:bg-slate-600" onClick={()=>handleTabSwitch('Profile')}>Profile</button>
      </div>
      <div className="w-full">
        {tabs[activeTab]}
      </div>
    </div>
    </div>

  );
}

