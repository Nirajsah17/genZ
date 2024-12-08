import React, { useState } from "react";
import User from "./User";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";

const UserList = () => {
  const [users, setUsers] = useState([
    {
      username: "Neil Sims",
      email: "email@flowbite.com",
      role: "Admin",
      image: "/docs/images/people/profile-picture-1.jpg",
    },
    {
      username: "Bonnie Green",
      email: "email@flowbite.com",
      role: "User",
      image: "/docs/images/people/profile-picture-3.jpg",
    },
    {
      username: "Michael Gough",
      email: "email@flowbite.com",
      role: "User",
      image: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      username: "Thomas Lean",
      email: "email@flowbite.com",
      role: "Admin",
      image: "/docs/images/people/profile-picture-5.jpg",
    },
    {
      username: "Lana Byrd",
      email: "email@flowbite.com",
      role: "User",
      image: "/docs/images/people/profile-picture-4.jpg",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsUpdating(true);
  };

  const handleDelete = (user) => {
    setUsers(users.filter((u) => u !== user));
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
    setIsAdding(false);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map((u) => (u.username === updatedUser.username ? updatedUser : u))
    );
    setIsUpdating(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <button
        className="mb-4 text-blue-600 dark:text-blue-500 hover:underline"
        onClick={() => setIsAdding(true)}
      >
        Add User
      </button>
      {isAdding && (
        <AddUser
          onAddUser={handleAddUser}
          onCancel={() => setIsAdding(false)}
        />
      )}
      {isUpdating && selectedUser && (
        <UpdateUser
          user={selectedUser}
          onUpdateUser={handleUpdateUser}
          onCancel={() => setIsUpdating(false)}
        />
      )}
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {users.map((user, index) => (
          <User
            key={index}
            user={user}
            onView={handleView}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
