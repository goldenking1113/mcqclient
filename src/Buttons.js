import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Buttons() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    fetch('https://mcqbackend-suar.onrender.com/data', {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          toast.success('Data deleted successfully');
          window.location.reload();
        } else {
          toast.error('Error deleting data');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Error deleting data');
      });
  };

  const handleConfirm = () => {
    setShowConfirm(true);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div className="flex justify-end p-4 relative">
      <button
        onClick={handleConfirm}
        className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </span>
        <span className="hidden md:inline-block">Delete</span>
      </button>
      {showConfirm && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="p-4">
            <p className="text-sm text-gray-700">Are you sure you want to delete?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="text-gray-700 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="text-white bg-red-600 hover:bg-red-700 rounded-md px-3 py-1 text-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}