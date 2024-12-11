import React from 'react';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render modal if isOpen is false

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-slate-800 p-6 rounded-lg w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <button
          className="absolute top-2 right-2 text-white font-bold text-2xl hover:bg-slate-600 p-2 rounded-sm"
          onClick={()=>onClose(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
