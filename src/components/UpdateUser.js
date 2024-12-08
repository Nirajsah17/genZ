import React, { useState, useEffect } from "react";

const UpdateUser = ({ user, onUpdateUser, onCancel }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [image, setImage] = useState(user.image);

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setRole(user.role);
    setImage(user.image);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { username, email, role, image };
    onUpdateUser(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Role
        </label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Image URL
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="text-gray-600 dark:text-gray-400 hover:underline"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateUser;
