import React from "react";

const User = ({ id, username, role, email, viewUser, updateUser, deleteUser }) => {

  return (
    <>
      <div className="flex h-12 w-full items-center justify-between border border-gray-500 bg-slate-900 text-white">
        <div className="flex p-2">
          <div className="flex w-8 justify-center rounded-full border border-gray-300 p-1" title={email}>{username.charAt(0).toUpperCase()}</div>
          <div className="p-1 ml-5 font-extrabold flex justify-center">{username}</div>
        </div>
        <div className="p-2">{role}</div>
        <div className="flex p-2">
          <button className="p-1 text-blue-600 hover:underline dark:text-blue-500" id={id} onClick={()=>viewUser(id)}>view</button>
          <button className="p-1 text-yellow-600 hover:underline dark:text-yellow-500" id={id} onClick={()=>updateUser(id)}>Update</button>
          <button className="p-1 text-red-600 hover:underline dark:text-red-500" id={id} onClick={()=>deleteUser(id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default User;