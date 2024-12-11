import React, { useState } from "react";
import User from "./User";
import Modal from "./Modal";

const UserList = () => {
  const [users, setUsers] = useState([
    {
      "id": 1,
      "username": "Neil Sims",
      "email": "neil.sims@example.com",
      "mobileNumber": "8804851174",
      "status": "ACTIVE",
      "role": "ADMIN",
      "branchCode": "48670",
      "pinCode": "843108",
      "village": "Kerla",
      "wardNo": "094765"
    },
    {
      "id": 2,
      "username": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "mobileNumber": "9923456789",
      "status": "ACTIVE",
      "role": "USER",
      "branchCode": "12345",
      "pinCode": "567890",
      "village": "Springfield",
      "wardNo": "012345"
    },
    {
      "id": 3,
      "username": "Bob Smith",
      "email": "bob.smith@example.com",
      "mobileNumber": "9876543210",
      "status": "INACTIVE",
      "role": "MODERATOR",
      "branchCode": "67890",
      "pinCode": "123456",
      "village": "Rivertown",
      "wardNo": "098765"
    },
    {
      "id": 4,
      "username": "Clara Brown",
      "email": "clara.brown@example.com",
      "mobileNumber": "8855226633",
      "status": "ACTIVE",
      "role": "USER",
      "branchCode": "33456",
      "pinCode": "654321",
      "village": "Hillview",
      "wardNo": "067890"
    },
    {
      "id": 5,
      "username": "David Lee",
      "email": "david.lee@example.com",
      "mobileNumber": "7788991122",
      "status": "ACTIVE",
      "role": "ADMIN",
      "branchCode": "99876",
      "pinCode": "776655",
      "village": "Oakridge",
      "wardNo": "045612"
    }
  ]
  );
  const [user, setUser] = useState(users[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState('')

  const deleteUser = (id) => {};

  const updateUser = (id) => {
    console.log(id)
    setWhichModal('update');
    const user = users[id-1];
    setUser(user)
    setIsOpen(true);
  };

  const userUpdate = (data)=>{
    console.log(data)
  }

  const viewUser = (id) => {
    setWhichModal('view');
    console.log(id);
    const user = users[id-1];
    setUser(user)
    setIsOpen(true);
    
  };

  const handleAddUser = ()=>{
    setWhichModal('add')
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-col w-full h-full bg-slate-800">
        <button className="px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={handleAddUser}>Add</button>
        {users.map((item) => (
          <User
            id={item.id}
            username={item.username}
            role={item.role}
            email={item.email}
            viewUser={viewUser}
            updateUser={updateUser}
            deleteUser={deleteUser}
          />
        ))}
      </div>
      <Modal onClose={setIsOpen} isOpen={isOpen}>
        {whichModal === 'view' && <UserInfo user={user}></UserInfo>}
        {whichModal === 'update' && <UserInfoForm user={user} onUpdate={userUpdate}></UserInfoForm>}
        {whichModal === 'add' && <UserRegistrationForm/>}
      </Modal>
    </>
  );
};

export default UserList;

const UserInfo = ({user} ) => {
  console.log(user)
  return (
    <>
      <div className="flex flex-col w-full max-w-md items-center justify-center bg-white border border-gray-300 shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 bg-gray-100 text-xl font-bold text-gray-700">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <div className="mt-4 text-xl font-extrabold text-gray-800">{user.username}</div>
        <div className="mt-6 w-full space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">User:</span>
            <span className="text-gray-800">{user.username}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">Mobile:</span>
            <span className="text-gray-800">{user.mobileNumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">Status:</span>
            <span className="text-green-600 font-semibold">{user.status}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">Role:</span>
            <span className="text-gray-800">{user.role}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">Branch Code:</span>
            <span className="text-gray-800">{user.branchCode}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">PIN:</span>
            <span className="text-gray-800">{user.pinCode}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">Village:</span>
            <span className="text-gray-800">{user.village}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-500">Ward No:</span>
            <span className="text-gray-800">{user.wardNo}</span>
          </div>
        </div>
      </div>
    </>
  );
};


const UserInfoForm = ({ user, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    mobileNumber: user.mobileNumber,
    status: user.status,
    role: user.role,
    branchCode: user.branchCode,
    pinCode: user.pinCode,
    village: user.village,
    wardNo: user.wardNo,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdate) onUpdate(formData);
  };

  return (
   
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-6"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 bg-gray-100 text-xl font-bold text-gray-700">
            {formData.username.charAt(0).toUpperCase()}
          </div>
          <div className="mt-4 text-xl font-extrabold text-gray-300">
            Edit User Info
          </div>
          {/* Scrollable Wrapper */}
          <div className="mt-6 w-full max-h-[50vh] overflow-y-auto space-y-4">
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-300">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              />
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              />
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">Mobile:</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              />
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">Status:</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              >
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">Role:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="MODERATOR">Moderator</option>
              </select>
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">Branch Code:</label>
              <input
                type="text"
                name="branchCode"
                value={formData.branchCode}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              />
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">PIN:</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              />
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">Village:</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              />
            </div>
            <div className="flex flex-col text-sm">
              <label className="font-medium text-gray-500">Ward No:</label>
              <input
                type="text"
                name="wardNo"
                value={formData.wardNo}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 bg-slate-800"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Update Info
          </button>
        </form>
  );
};


const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    status: 'active', // Default status
    role: 'user', // Default role
    branchCode: '',
    pinCode: '',
    village: '',
    wardNo: '',
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send it to an API)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-slate-800 shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-semibold  mb-4">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-screen">
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            required
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label htmlFor="status" className="block">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Role */}
        <div className="mb-4">
          <label htmlFor="role" className="block">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        {/* Branch Code & Pin Code (Horizontal Layout) */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="branchCode" className="block">Branch Code</label>
            <input
              type="text"
              id="branchCode"
              name="branchCode"
              value={formData.branchCode}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
              required
            />
          </div>

          <div>
            <label htmlFor="pinCode" className="block">Pin Code</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
              required
            />
          </div>
        </div>

        {/* Village & Ward No (Horizontal Layout) */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="village" className="block">Village</label>
            <input
              type="text"
              id="village"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
              required
            />
          </div>

          <div>
            <label htmlFor="wardNo" className="block">Ward No</label>
            <input
              type="text"
              id="wardNo"
              name="wardNo"
              value={formData.wardNo}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-700"
          >
            Register User
          </button>
        </div>
      </form>
    </div>
  );
};



