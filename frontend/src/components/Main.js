import React, { useState } from 'react';
import CreateClient from '../../src/components/CreateClient'; 

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center space-x-4 gap-4 text-lg justify-between">
          <h1 className="text-3xl font-bold">Welcome to the MTs Dashboard</h1>
        </div>
        <p className="text-lg mt-2">
          Manage your clients and business efficiently.
        </p>
      </header>

      <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Recent Activities Widget */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
          <p className="text-gray-600">No recent activities to display.</p>
        </div>
        {/* Quick Actions Widget */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={toggleModal}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-accent"
              >
                Create New Client
              </button>
            </li>
            <li>
              
            </li>
            {/* Add other quick actions here */}
          </ul>
        </div>
      </section>

      {/* Modal for Create New Client */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full"> {/* Increased modal width */}
            <h2 className="text-2xl font-semibold mb-4">Create a New Client</h2>
            {/* Pass the toggleModal function as a prop to close the modal */}
            <CreateClient toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
