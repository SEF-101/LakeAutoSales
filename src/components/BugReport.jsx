// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-black rounded-lg p-4 w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-500"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
