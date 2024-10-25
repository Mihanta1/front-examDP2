import React from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col bg-white rounded-3xl p-6 w-full max-w-md">
        <button onClick={onClose} className="absolute right-4 top-4">
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
