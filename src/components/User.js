import React from "react";

const User = ({ user, onView, onUpdate, onDelete }) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={user.image}
            alt={user.username}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.username}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {user.role}
        </div>
        <div className="inline-flex items-center space-x-2">
          <button
            className="text-blue-600 dark:text-blue-500 hover:underline"
            onClick={() => onView(user)}
          >
            View
          </button>
          <button
            className="text-yellow-600 dark:text-yellow-500 hover:underline"
            onClick={() => onUpdate(user)}
          >
            Update
          </button>
          <button
            className="text-red-600 dark:text-red-500 hover:underline"
            onClick={() => onDelete(user)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default User;
